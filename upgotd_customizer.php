<?php
/**
 * This file is part of Joshua Project Customizer for People of the Day Widget.
 * 
 * Joshua Project Customizer for People of the Day Widget is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Joshua Project Customizer for People of the Day Widget is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see 
 * <http://www.gnu.org/licenses/>.
 *
 * @author Johnathan Pulos <johnathan@missionaldigerati.org>
 * @copyright Copyright 2012 Missional Digerati
 */
/**
 * Set the Center Background, Font, Link, & Link Hover Color
 *
 * @author Johnathan Pulos
 */
$center_bg_color = (isset($_GET['cbg'])) ? '#'.$_GET['cbg'] : '#000000';
$center_font_color = (isset($_GET['cfc'])) ? '#'.$_GET['cfc'] : '#000000';
$center_link_color = (isset($_GET['clc'])) ? '#'.$_GET['clc'] : '#0000FF';
$center_hover_color = (isset($_GET['chc'])) ? '#'.$_GET['chc'] : '#0000FF';
/**
 * Set the Banner Background, Link, & Link Hover Color
 *
 * @author Johnathan Pulos
 */
$banner_bg_color = (isset($_GET['bbg'])) ? '#'.$_GET['bbg'] : '#BBDDFF';
$banner_link_color = (isset($_GET['blc'])) ? '#'.$_GET['blc'] : '#0000FF';
$banner_hover_color = (isset($_GET['bhc'])) ? '#'.$_GET['bhc'] : '#0000FF';
/**
 * Set the Footer Background, Font, Link, & Link Hover Color
 *
 * @author Johnathan Pulos
 */
$footer_bg_color = (isset($_GET['fbg'])) ? '#'.$_GET['fbg'] : '#BBDDFF';
$footer_font_color = (isset($_GET['ffc'])) ? '#'.$_GET['ffc'] : '#000000';
$footer_link_color = (isset($_GET['flc'])) ? '#'.$_GET['flc'] : '#0000FF';
$footer_hover_color = (isset($_GET['fhc'])) ? '#'.$_GET['fhc'] : '#0000FF';
/**
 * Set the widget border details
 *
 * @author Johnathan Pulos
 */
$border = '';
$has_border = (isset($_GET['nb'])) ? $_GET['nb'] : 'false';
if($has_border == 'false') {
	$border_type = (isset($_GET['bdt'])) ? $_GET['bdt'] : 'dashed';
	$border_color = (isset($_GET['bdc'])) ? '#'.$_GET['bdc'] : '#CCCCCC';
	$border_width = (isset($_GET['bdw'])) ? $_GET['bdw'] : '1px';
	$border = 'border: ' . $border_color . ' ' . $border_width . ' ' . $border_type. ';';
}
/**
 * Set the final language
 *
 * @todo We need to fix international upgotd_custom.php before using lang
 * @author Johnathan Pulos
 */
$lang = (isset($_GET['lang'])) ? $_GET['lang'] : '';
$custom_js = ($lang == '') ? 'http://www.joshuaproject.net/upgotd_custom.php' : 'http://www.joshuaproject.net/international/'.$lang.'/upgotd_custom.php';
/**
 * Handle narrow widget
 *
 * @author Johnathan Pulos
 */
$is_narrow = (isset($_GET['narrow'])) ? $_GET['narrow'] : 'false';
$width = ($is_narrow == 'true') ? '185px' : '215px';
$center_font_size = ($is_narrow == 'true') ? '11px' : '12px';
$banner_font_size = ($is_narrow == 'true') ? '11px' : '14px';
$footer_font_size = ($is_narrow == 'true') ? '10px' : '11px';
$more_font_size = ($is_narrow == 'true') ? '9px' : '10px';
$table_font_size = ($is_narrow == 'true') ? '10px' : '11px';

header("Content-type: application/x-javascript");
?>
document.write('<style type="text/css">\n');
document.write('.upgotd { color: <?php echo $center_font_color ?>; font-family: Arial, Helvetica, Verdana, sans-serif; }\n');
document.write('.upgotd-box { background-color: <?php echo $center_bg_color; ?>; <?php echo $border; ?> text-align: center; width:<?php echo $width; ?>; font-size:12px;}\n');
document.write('.upgotd-box a { color: <?php echo $center_link_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-box a:hover { color: <?php echo $center_hover_color; ?>; text-decoration: none; }\n');
document.write('.upgotd-title { font-weight: bold; font-size:<?php echo $banner_font_size; ?> !important; margin-bottom: 5px; padding: 3px; background-color: <?php echo $banner_bg_color; ?>;}\n');
document.write('.upgotd-box .upgotd-title a { font-weight: bold; font-size:<?php echo $banner_font_size; ?> !important; margin-bottom: 5px; color: <?php echo $banner_link_color; ?>;}\n');
document.write('.upgotd-box .upgotd-title a:hover { color: <?php echo $banner_hover_color; ?>;}\n');
document.write('.upgotd-footer { font-weight: normal ;font-size: 11px;  margin-top: 3px; padding: 3px; background-color: <?php echo $footer_bg_color; ?>; color: <?php echo $footer_font_color; ?>;}\n');
document.write('.upgotd-box .upgotd-footer a {font-weight: normal ;font-size: <?php echo $footer_font_size; ?>;  margin-top: 3px; color: <?php echo $footer_link_color; ?>;}\n');
document.write('.upgotd-box .upgotd-footer a:hover { color: <?php echo $footer_hover_color; ?>;}\n');
document.write('.upgotd-image { text-align: center; }\n');
document.write('.upgotd-pray { font-style: italic; font-weight: normal; padding: 3px 0px; font-size: <?php echo $center_font_size; ?>;}\n');
document.write('.upgotd-people { font-weight: normal; font-size:<?php echo $center_font_size; ?> !important; padding-bottom:4px; }\n');
document.write('.upgotd-people a { font-weight: bold; }\n');
document.write('.upgotd-table td { font-family: Tahoma, Verdana, Arial, Helvetica, sans-serif; font-size:<?php echo $table_font_size; ?>; font-weight: normal; color: <?php echo $center_font_color ?>; line-height: 14px; text-align: left; border: 0px; background-color: <?php echo $center_bg_color; ?>; margin: 0px; padding: 0px 0px 0px 3px; }\n');
document.write('.upgotd-more, .upgotd-more a { font-size: <?php echo $more_font_size; ?>; }\n');
document.write('</style>\n');

document.write('<script language="javascript" src="<?php echo $custom_js; ?>" type="text/javascript" charset="UTF-8"></script>\n');