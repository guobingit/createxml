$.fn.datagrid.defaults.timeFormatter=function(value,row,index){
	if(!value) return '';
	var re = /^[1-9]+[0-9]*]*$/;
	if (re.test(value)){
		return new Date(value).pattern("yyyy-MM-dd HH:mm:ss");
	}else{
		return value;
	}
};

$.fn.datagrid.defaults.timeSimpleFormatter=function(value,row,index){
	return value ? new Date(value).pattern("yyyy-MM-dd") : '';
};