/**
 * 瀑布布局
 * @param {Object} - item : 要控制的元素
 * @param {Int} column : 分栏个数
 * @param {Int} horizontal : 元素水平间距(px)
 * @param {Int} vertical : 元素垂直间距(px)
 * @param {Int} animateDuringTime : 动画持续时间
 * 
 * Author : yukaPriL
 * Version :v1.0-20140125 
 */
(function(jQuery) {
	jQuery.fn.waterfall = function(options) {
		//默认配置
		var defaults = {
			//瀑布布局元素
			item : '.item',
			//瀑布布局栏数
			column : 3,
			//瀑布布局水平间距
			horizontal : 10,
			//瀑布布局垂直间距
			vertical : 10,
			//动画时间
			animateDuringTime : 600
		}

		//初始化默认参数
		var opts = $.extend({}, defaults, options);

		//传入参数类型转换
		var OPTS = {
			item : opts.item.toString(),
			column : parseInt(opts.column),
			horizontal : parseInt(opts.horizontal),
			vertical : parseInt(opts.vertical),
			animateDuringTime : parseInt(opts.animateDuringTime)
		}

		//每个元素宽度
		OPTS.width = $(opts.item).outerWidth();

		//定义每列最后控制的高度位置
		var heightPos = new Array(OPTS.column);
		//初始状态：每列高度默认值为0
		for (var i = 0; i < OPTS.column; i++) {
			heightPos[i] = 0;
		}

		//父元素加入position属性
		$(this).css('position', 'relative');

		//每一个元素控制宽度和位置
		$(OPTS.item).each(function(index, val) {
			//当前最小的栏位高度
			var min = heightPos[0];
			//当前最小的栏位高度的索引
			var minIndex = 0;
			//当前最小的栏位高度是第几栏
			var minColumn = 0;
			//判断当前最小的高度是多少，是哪一个
			for (var i = 1; i < OPTS.column; i++) {
				if (heightPos[i] < min) {
					min = heightPos[i];
					minIndex = i;
					minColumn = i % OPTS.column;
				}
			}
			//修改元素位置
			$(val).css({
				position : 'absolute',
				//display : 'inline-block';
			});

			$(val).animate({
				left : minColumn * (OPTS.width + OPTS.horizontal),
				top : heightPos[minIndex]
			}, OPTS.animateDuringTime, 'swing');

			heightPos[minIndex] += $(val).outerHeight() + OPTS.vertical;
		});

		//jQuery要求返回对象，这样可以保持着链式操作
		return $(this);
	}
})(jQuery);