$.extend($.fn.validatebox.defaults.rules, {
	number : {
		validator : function(value, param) {
			return !isNaN(parseInt(value,10));
		},
		message : '请输入数字'
	},
	ip : {
		validator : function(value,param){
			return /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/ig.test(value);
		},
		message : 'IP格式不正确'
	}
});