/*
 * @Author: your name
 * @Date: 2021-11-04 15:03:16
 * @LastEditTime: 2021-11-04 15:11:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /handwritingboard/Users/yangjz0/workspace/phpweb/sortablejs/index.js
 */
// Nested demo
var nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));

for (var i = 0; i < nestedSortables.length; i++) {
	new Sortable(nestedSortables[i], {
		group: 'nested',
		animation: 150,
    onEnd: function () {
      return false
    },
    onMove () {
      return false
    },
    onAdd: function () {
      return false
    },
	});
}