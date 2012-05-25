var cfc = 'FFFFFF';//center font color
var chc = '898989'; //center link hover font color
var clc = '999999'; //center link font color
var cbg = '454545'; //The hexadecimal center background color
var bbg = '098686'; //banner background color. (default: BBDDFF)
var blc = '444444'; //The hexadecimal banner link font color. (default: 0000FF)
var bhc = 'FFFFFF'; //banner highlight color
var fbg = '767676'; // footer background color. (default: BBDDFF)
var ffc = '232323'; // footer font color
var flc = 'FFFFFF'; // footer link font color. (default: 0000FF)
var fhc = '898989'; // footer link hover font color. (default: 0000FF)
var bdt = 'double';//The CSS border style.  Options: dotted, dashed, solid, double, groove, ridge, inset, or outset. (default: dashed)
var bdw = '0px'; //The CSS border width.  You need to include the metric system you want to use. (default: 1px)
var bdc = 'FFFFFF'; //border color
var url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
var safety_vars = ['bbg','cbg', 'cfc', 'chc', 'clc', 'blc', 'bhc', 'fbg', 'ffc', 'flc', 'fhc', 'bdt', 'bdw', 'bdc'];
// url = widget.php?cfc=FFFFFF&chc=898989&clc=999999&cbg=454545&bbg=098686&blc=444444&bhc=FFFFFF&fbg=767676&ffc=232323&flc=656565&fhc=898989&bdt=double&bdw=5px&bdc=FFFFFF
$(document).ready(function() {
	hide_border_options();
	get_widget();
	initiate_color_picker();
	border_options();
	reset_all_settings();
});
function get_widget() {
	var iframe = $('<iframe/>').attr({src: url, id: 'widget_iframe', frameborder: '0'});
	$('#widget').fadeOut('slow', function() {
		$(this).html('').append(iframe);
		$(this).fadeIn('slow')
	});
	;
};
function initiate_color_picker(){
	$('.background_color').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			//$(el).val(hex);
			$(el).ColorPickerHide();
			var key = $(el).attr('id');
			if($.inArray(key, safety_vars) != -1) {
				var color = hex.toUpperCase();
				//bbg = "445566";
				eval(''+key+' = "'+color+'"');
			 	url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
				get_widget();
				$('#'+key).css('background-color', hex);
			}	
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		}
	})
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	});
};
function border_options(){
	$('#select').click(function(){
	 	bdt = $('#select').val();
		url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
		get_widget();
	});
	$('#border_width').click(function(){
		bdw = $('#border_width').val();
		url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
		get_widget();
	});
};
function reset_all_settings(){
	$('button.reset').click(function(){
		cfc = 'FFFFFF';//center font color
		chc = '898989'; //center link hover font color
		clc = '999999'; //center link font color
		cbg = '454545'; //The hexadecimal center background color
		bbg = '098686'; //banner background color. (default: BBDDFF)
		blc = '444444'; //The hexadecimal banner link font color. (default: 0000FF)
		bhc = 'FFFFFF'; //banner highlight color
		fbg = '767676'; // footer background color. (default: BBDDFF)
		ffc = '232323'; // footer font color
	 	flc = 'FFFFFF'; // footer link font color. (default: 0000FF)
        fhc = '898989'; // footer link hover font color. (default: 0000FF)
        bdt = 'double';//The CSS border style.  Options: dotted, dashed, solid, double, groove, ridge, inset, or outset. (default: dashed)
        bdw = '0px'; //The CSS border width.  You need to include the metric system you want to use. (default: 1px)
        bdc = 'FFFFFF'; //border color
        url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
		get_widget();
	});
};
function hide_border_options(){
	$('button#button_yes').click(function(){
		$('#border_options').slideDown('slow');
			bdw = '1px'; 
	 		url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
			get_widget();
	});
	$('button#button_no').click(function(){
		$('#border_options').slideUp('slow');
			bdt = 'double';//The CSS border style.  Options: dotted, dashed, solid, double, groove, ridge, inset, or outset. (default: dashed)
			bdw = '0px'; //The CSS border width.  You need to include the metric system you want to use. (default: 1px)
			bdc = 'FFFFFF'; //border color
			url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
		get_widget();
	});
};


