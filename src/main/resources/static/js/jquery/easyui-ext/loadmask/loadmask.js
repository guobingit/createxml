/**
 * easyui页面加载时,在还未parse完成的情况下,页面显示错乱.
 */
(function ($) {
	var loadMask = '<div class="loadmask" style="position: absolute; z-index: 1000; top: 0; left: 0; width: 100%; height: 100%; background-color: #fafafa; text-align: center;">' +
		'<span style="top: 48%; position: relative; width: 165px; height: 66px; display: inline-block; background: url(/js/jquery/easyui-ext/loadmask/ellipsis.gif) no-repeat center center">' +
		//'加载中···' +
		'</span>' +
		'</div>';

	document.write(loadMask);

	var timer;
	$.parser.onComplete = function () {
		if (timer) {
			clearInterval(timer);
		}

		timer = setTimeout(function () {
			$(".loadmask").fadeOut("fast", function () {
				$(this).remove();
			});
		}, 100);
	}
})(jQuery);