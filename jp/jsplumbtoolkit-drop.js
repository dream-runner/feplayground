(function() {

var root = this;
var DEFAULT_DRAG_ACTIVE_CLASS = "jtk-drag-drop-active";
var DEFAULT_DRAG_HOVER_CLASS = "jtk-drag-drop-hover";
var jsPlumbToolkitDropManager = /** @class */ (function () {
    function jsPlumbToolkitDropManager(params) {
        var _this = this;
        this.viewportPosition = null;
        this.surface = params.surface;
        this._jsPlumb = this.surface.getJsPlumb();
        this.toolkit = this.surface.getToolkit();
        this.surfaceCanvas = this.surface.getContainer();
        this.enabled = params.enabled !== false;
        this.source = params.source;
        this.selector = params.selector;
        this.scope = params.scope || jsPlumbUtil.uuid();
        this.dropFilter = params.dropFilter || function (data, target) { return true; };
        this.canvasDropFilter = params.canvasDropFilter || function (data) { return true; };
        this.edgeDropFilter = params.edgeDropFilter || function (data, target) { return true; };
        this.onDrag = params.onDrag;
        this.onDrop = params.onDrop; // || function() { };
        this.onEdgeDrop = params.onEdgeDrop; // || function() { };
        this.onCanvasDrop = params.onCanvasDrop; // || function() { };
        this.dragActiveClass = params.dragActiveClass || DEFAULT_DRAG_ACTIVE_CLASS;
        this.dragHoverClass = params.dragHoverClass || DEFAULT_DRAG_HOVER_CLASS;
        this.currentNodeList = [];
        this.dataGenerator = params.dataGenerator || function () { return {}; };
        this.canvasMoveListener = function (e) {
            _this.isCurrentlyOnCanvasElement = ((e.srcElement || e.target) === _this.surfaceCanvas);
        };
        this.canvasMouseOutListener = function (e) {
            _this.isCurrentlyOnCanvasElement = false;
        };
        this.katavorio = new Katavorio({
            bind: function () { this._jsPlumb.on.apply(this._jsPlumb, arguments); }.bind(this),
            unbind: function () { this._jsPlumb.off.apply(this._jsPlumb, arguments); }.bind(this),
            getSize: function (elId) {
                return _this._jsPlumb.getSize(elId);
            },
            getConstrainingRectangle: function (el) {
                return [el.parentNode.scrollWidth, el.parentNode.scrollHeight];
            },
            getPosition: function (el) {
                return [parseInt(el.style.left, 10), parseInt(el.style.top, 10)];
            },
            setPosition: function (el, xy) {
                el.style.left = xy[0] + "px";
                el.style.top = xy[1] + "px";
            },
            addClass: function () { this._jsPlumb.addClass.apply(this._jsPlumb, arguments); }.bind(this),
            removeClass: function () { this._jsPlumb.removeClass.apply(this._jsPlumb, arguments); }.bind(this),
            intersects: Biltong.intersects,
            indexOf: function (l, i) { return l.indexOf(i); },
            scope: this.scope,
            css: {
                draggable: "jtk-draggable",
                drag: "jtk-drag",
                selected: "jtk-drag-selected",
                active: "jtk-drag-active",
                hover: "jtk-drag-hover",
                ghostProxy: "jtk-ghost-proxy"
            }
        });
        this.katavorio.draggable(this.source, {
            scope: this.scope,
            clone: true,
            start: function (p) {
                if (!_this.enabled) {
                    return false;
                }
                var el = p.drag.getDragElement();
                el.style.pointerEvents = "none"; // suppress pointer events on the drag object itself. this helps us figure out
                // when its over a valid target. its a clone anyway and is thrown away the end of the drag so we're not leaving a lasting
                // impression on the UI by doing this.
                _this.candidateData = _this.dataGenerator(el);
                _this.currentNodeList.length = 0;
                _this.candidate = null;
                if (_this.onDrop) {
                    var nodes = _this.getAllNodesAndGroups();
                    nodes.forEach(function (e) {
                        var renderedEl = _this.surface.getRenderedElement(e);
                        if (renderedEl) {
                            if (_this.dropFilter(_this.candidateData, e)) {
                                _this.currentNodeList.push([e, renderedEl]);
                                _this._jsPlumb.addClass(renderedEl, _this.dragActiveClass);
                            }
                            else {
                                _this._jsPlumb.removeClass(renderedEl, _this.dragActiveClass);
                            }
                        }
                    });
                }
                _this.currentEdgeList = _this.onEdgeDrop ? _this.getAllConnectors(_this.candidateData) : [];
                if (_this.onCanvasDrop && _this.canvasDropFilter(_this.candidateData)) {
                    _this.canDropOnCanvas = true;
                    _this.isCurrentlyOnCanvasElement = false;
                    _this._jsPlumb.on(_this.surfaceCanvas, "mousemove", _this.canvasMoveListener);
                    _this._jsPlumb.on(_this.surfaceCanvas, "mouseout", _this.canvasMouseOutListener);
                }
            },
            stop: function (p) {
                _this._jsPlumb.off(_this.surfaceCanvas, "mousemove", _this.canvasMoveListener);
                _this._jsPlumb.off(_this.surfaceCanvas, "mouseout", _this.canvasMouseOutListener);
                _this._cleanupClasses();
                if (_this.candidate) {
                    if (_this.candidate.edge && _this.onEdgeDrop) {
                        _this.onEdgeDrop(_this.candidateData, _this.candidate.edge, p.el, p.e, p.pos);
                    }
                    else if (_this.onDrop) {
                        _this.onDrop(_this.candidateData, _this.candidate.el.jtk.group || _this.candidate.el.jtk.node, p.el, p.e, p.pos);
                    }
                }
                else if (_this.canDropOnCanvas && _this.isCurrentlyOnCanvasElement && _this.viewportPosition != null && _this.onCanvasDrop) {
                    var canvasPosition = _this.surface.mapLocation(_this.viewportPosition[0], _this.viewportPosition[1]);
                    _this.onCanvasDrop(_this.candidateData, canvasPosition, p.el, p.e, p.pos);
                }
                _this.isCurrentlyOnCanvasElement = false;
            },
            drag: function (p) {
                _this._cleanupClasses(true);
                _this.viewportPosition = null;
                _this.candidate = null;
                var mappedLoc = _this.surface.mapLocation.apply(_this.surface, p.pos);
                if (_this.onDrop) {
                    var intersectingNodes = _this.surface.findIntersectingNodes(p.pos, p.drag.size, false);
                    _this.candidate = intersectingNodes.filter(function (n) {
                        return jsPlumbUtil.findWithFunction(_this.currentNodeList, function (cn) {
                            return cn[1] === n.el;
                        }) > -1;
                    })[0];
                }
                if (!_this.candidate && _this.onEdgeDrop) {
                    var zoom = _this.surface.getZoom();
                    var baseRect = {
                        x: mappedLoc.left,
                        y: mappedLoc.top,
                        w: p.drag.size[0] / zoom,
                        h: p.drag.size[1] / zoom
                    };
                    for (var i = 0; i < _this.currentEdgeList.length; i++) {
                        var deets = _this.currentEdgeList[i], cBounds = deets.r, connector = deets.connector;
                        if (Biltong.intersects(baseRect, cBounds)) {
                            // the drag object is over the canvas, but is it over the connector?
                            var intersections = connector.boundingBoxIntersection({
                                x: baseRect.x - cBounds.x,
                                y: baseRect.y - cBounds.y,
                                w: baseRect.w,
                                h: baseRect.h
                            });
                            if (intersections.length > 0) {
                                _this.candidate = deets;
                                break;
                            }
                        }
                    }
                }
                if (_this.candidate) {
                    _this._jsPlumb.addClass(_this.candidate.el, _this.dragHoverClass);
                }
                else {
                    if (_this.canDropOnCanvas) {
                        if (_this.isCurrentlyOnCanvasElement && _this.surface.isInViewport(p.pos[0], p.pos[1])) {
                            _this.viewportPosition = p.pos;
                            _this._jsPlumb.addClass(_this.surfaceCanvas, _this.dragHoverClass);
                        }
                        else {
                            _this._jsPlumb.addClass(_this.surface.getContainer(), _this.dragActiveClass);
                        }
                    }
                }
                _this.onDrag && _this.onDrag(_this.candidateData, p.e, p.pos, mappedLoc);
            },
            selector: this.selector
        });
    }
    /**
     * sets whether or not dragging is currently enabled.
     * @param e
     */
    jsPlumbToolkitDropManager.prototype.setEnabled = function (e) {
        this.enabled = e;
    };
    jsPlumbToolkitDropManager.prototype.getAllNodesAndGroups = function () {
        var nodes = this.toolkit.getNodes();
        Array.prototype.push.apply(nodes, this.toolkit.getGroups());
        return nodes;
    };
    /**
     * find all the connectors in the canvas, computing their position in page coords (taking into account the viewport
     * position of the surface and its current zoom). We return [ connection, connector, bounding rect ] for each connector.
     * @returns {Array<EdgeSpec>}
     */
    jsPlumbToolkitDropManager.prototype.getAllConnectors = function (data) {
        var _this = this;
        var edges = [];
        var jp = this.surface.getJsPlumb();
        jp.select().each(function (connection) {
            if (connection.edge && _this.edgeDropFilter(data, connection.edge)) {
                var connector = connection.getConnector();
                var element = connection.getConnector().canvas;
                var bounds = {
                    x: parseInt(element.style.left, 10),
                    y: parseInt(element.style.top, 10),
                    w: parseInt(element.getAttribute("width"), 10),
                    h: parseInt(element.getAttribute("height"), 10)
                };
                edges.push({
                    connection: connection,
                    connector: connector,
                    el: element,
                    r: bounds,
                    id: connection.edge.id,
                    edge: connection.edge
                });
                _this._jsPlumb.addClass(element, _this.dragActiveClass);
            }
        });
        return edges;
    };
    jsPlumbToolkitDropManager.prototype._cleanupClasses = function (onlyHover) {
        var _this = this;
        this.currentNodeList.forEach(function (e) {
            if (!onlyHover) {
                _this._jsPlumb.removeClass(e[1], _this.dragActiveClass);
            }
            _this._jsPlumb.removeClass(e[1], _this.dragHoverClass);
        });
        this.currentEdgeList.forEach(function (e) {
            if (!onlyHover) {
                _this._jsPlumb.removeClass(e.el, _this.dragActiveClass);
            }
            _this._jsPlumb.removeClass(e.el, _this.dragHoverClass);
        });
        this._jsPlumb.removeClass(this.surfaceCanvas, this.dragActiveClass);
        this._jsPlumb.removeClass(this.surfaceCanvas, this.dragHoverClass);
    };
    return jsPlumbToolkitDropManager;
}());


root.jsPlumbToolkitDropManager = jsPlumbToolkitDropManager;
if (typeof exports !== "undefined") {
    exports.jsPlumbToolkitDropManager = jsPlumbToolkitDropManager;
}


}).call(typeof window !== 'undefined' ? window : this);