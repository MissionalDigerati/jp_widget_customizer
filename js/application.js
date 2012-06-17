//created by Joshua Shuster
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
var key = '';
var selectColor = '';
// url = widget.php?cfc=FFFFFF&chc=898989&clc=999999&cbg=454545&bbg=098686&blc=444444&bhc=FFFFFF&fbg=767676&ffc=232323&flc=656565&fhc=898989&bdt=double&bdw=5px&bdc=FFFFFF
$(document).ready(function() {
	hide_border_options();
	get_widget();
	initiate_color_picker();
	border_options();
	reset_all_settings();
	added_select_boxes();
	settings_options();
});
/**
	This appends the widget to the div with a class with widget, and has it fade in.
	This function is also called upon when any of the variables are upated, this updates
	the URL variable, and changes the widget accoding to the users specifications. 
 */
function get_widget() {
	var iframe = $('<iframe/>').attr({src: url, id: 'widget_iframe', frameborder: '0'});
	$('#widget').fadeOut('slow', function() {
		$(this).html('').append(iframe);
		$(this).fadeIn('slow');
		$('#textarea').click(function(){
			$(this).select();
		});
		$('#textarea').text("<script src='"+url+"' type='text/javascript' charset='utf-8'></script><noscript><a href='http://www.joshuaproject.net/upgotdfeed.php'>View Unreached People of the Day</a></noscript>");
	});
	;
};
/**
	This function simply cleans up the code a bit, without it I would have to call the url variable
	then the get_widget function after each and ever color changing function. 
 */
function update_Widget(){
	url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
	get_widget();
};
/**
	This adds the color picker to all of the input forums wiht a class of backgroud-color
	the color swatches are technically input forums in readonly mode, with an image on top 
	to signify that you can select colors from it. 
 */
function initiate_color_picker(){
	$('.background_color').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			//$(el).val(hex);
			$(el).ColorPickerHide();
		 	key = $(el).attr('id');
			if($.inArray(key, safety_vars) != -1) {
				var color = hex.toUpperCase();
				//bbg = "445566";
				eval(''+key+' = "'+color+'"');
			 	url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
				get_widget();
				$('#'+key).css('background-color', '#'+hex);
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
/**
	This listens for changes in the border opton divs. As they are controlled by drop down menus instead of swatches. 
 */
function border_options(){
	$('#select').click(function(){
	 	bdt = $('#select').val();
		update_Widget();
	});
	$('#border_width').click(function(){
		bdw = $('#border_width').val();
		update_Widget();
	});
};
/**
	When this button is clicked, it changes all of the global variables back to their original state
	then calls on the get_widget metod, and updates the widget itself. 
 */
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
        update_Widget();
	});
};
/**
	This shows and hides the div where you can select border options
	on clicking no, the variables are updated back to standard config,
	where there is no border. 
 */
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
			update_Widget();
	});
};
/**
	This function listens in on each selector box, and changes then to them selected color.  
 */
function added_select_boxes(){
	$('select.cbg').change(function(){
		getCbgValue();
		update_Widget();
	});
 	function getCbgValue(){
	  	cbg = $('select.cbg').val();
	};
	$('select.bbg').change(function(){
		getBbgValue();
		update_Widget();
	});
 	function getBbgValue(){
		bbg = $('select.bbg').val();
	};
	$('select.blc').change(function(){
		getBlcValue();
		update_Widget();
	});
 	function getBlcValue(){
		blc = $('select.blc').val();
	};
	$('select.bhc').change(function(){
		getBhcValue();
		update_Widget();
	});
 	function getBhcValue(){
		bhc = $('select.bhc').val();
	};
	$('select.cfc').change(function(){
		getCfcValue();
		update_Widget();
	});
 	function getCfcValue(){
		cfc = $('select.cfc').val();
	};
	$('select.clc').change(function(){
		getClcValue();
		update_Widget();
	});
 	function getClcValue(){
		clc = $('select.clc').val();
	};
	$('select.chc').change(function(){
		getChcValue();
		update_Widget();
	});
 	function getChcValue(){
		chc = $('select.chc').val();
	};
	$('select.fbg').change(function(){
		getFbgValue();
		update_Widget();
	});
 	function getFbgValue(){
		fbg = $('select.fbg').val();
	};
	$('select.ffc').change(function(){
		getFfcValue();
		update_Widget();
	});
 	function getFfcValue(){
		ffc = $('select.ffc').val();
	};
	$('select.flc').change(function(){
		getFlcValue();
		update_Widget();
	});
 	function getFlcValue(){
		flc = $('select.flc').val();
	};
	$('select.fhc').change(function(){
		getFhcValue();
		update_Widget();
	});
 	function getFhcValue(){
		fhc = $('select.fhc').val();
	};
};
/**
	On dom ready, this function hides the color picking swatches,
	and listens for the appropriate buttons are clicked, the
	advanced color swatches fade in, and fade out accordingly.  
 */
function settings_options(){
	$('.background_color').hide();
	$('.advanced_on').click(function(){
		$('.background_color').fadeIn('slow');
	});
	$('.advanced_off').click(function(){
		$('.background_color').fadeOut('slow');
	});
};



// function added_select_boxes(){
// 	
// 	$('select').change(function(){
// 		getSelectValue();
// 	 	key = $(this).attr('class');
// 		console.log(key);
// 		console.log(selectColor);
// 		eval(''+key+' = "'+selectColor+'"');
// 		url = 'widget.php?cfc='+ cfc +'&chc='+ chc +'&clc='+ clc +'&cbg='+ cbg +'&bbg='+ bbg +'&blc='+ blc +'&bhc='+ bhc +'&fbg='+ fbg +'&ffc='+ ffc +'&flc='+ flc +'&fhc='+ fhc +'&bdt='+ bdt +'&bdw='+ bdw +'&bdc='+ bdc +'';
// 		get_widget();
// 	});
// 	
// 	
//  	function getSelectValue(){
// 	  	cbg = $('select.cbg').val();
// 		bbg = $('select.bbg').val();
// 		
// 		//console.log(selectColor);	
// 	};
// 	
// };


