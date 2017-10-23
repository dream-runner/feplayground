x.directive("infiniteScroll", ["$window",
	function(i) {
		return {
			scope: {
				infiniteScrollTop: "&infiniteScrollTop",
				infiniteScrollThreshold: "=infiniteScrollThreshold",
				infiniteDisabled: "=infiniteDisabled",
				infiniteScrollBottom: "&infiniteScrollBottom"
			},
			link: function(i, l, o) {
				var n = parseInt(i.infiniteScrollThreshold) || 0,
					e = l[0];
				l.bind("scroll", function() {console.log(">>>>>"+)
					var l = e.scrollTop + e.offsetHeight >= e.scrollHeight - n,
						o = e.scrollTop <= n;
					l && i.infiniteScrollBottom(), o && i.infiniteScrollTop()
				})
			}
		}
	}
]), module.exports = moduleName;