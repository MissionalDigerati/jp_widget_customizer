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
 * Set the Center Font, Link, & Link Hover Color
 *
 * @author Johnathan Pulos
 */
$center_font_color = (isset($_GET['cfc'])) ? '#'.$_GET['cfc'] : '#000000';
$center_link_color = (isset($_GET['clc'])) ? '#'.$_GET['clc'] : '#0000FF';
$center_hover_color = (isset($_GET['chc'])) ? '#'.$_GET['chc'] : '#0000FF';
header("Content-type: application/x-javascript");
?>
document.write('<style type="text/css">\n');
document.write('.upgotd { color: <?php echo $center_font_color ?>; font-family: Arial, Helvetica, Verdana, sans-serif; }\n');
document.write('.upgotd-box { background-color: #EEE; border: #CCCCCC 1px dashed; text-align: center; width: 215px; font-size:12px;}\n');
document.write('.upgotd-box a { color: <?php echo $center_link_color; ?> !important; text-decoration: none; }\n');
document.write('.upgotd-box a:hover { color: <?php echo $center_hover_color; ?> !important; text-decoration: none; }\n');
document.write('.upgotd-title, .upgotd-footer { padding: 3px; background-color: #BBDDFF;}\n');
document.write('.upgotd-title, .upgotd-title a { font-weight: bold; font-size:13px !important; margin-bottom: 5px;}\n');
document.write('.upgotd-image { text-align: center; }\n');
document.write('.upgotd-pray { font-style: italic; font-weight: normal; padding: 3px 0px; font-size: 12px;}\n');
document.write('.upgotd-people { font-weight: normal; font-size:12px !important; padding-bottom:4px; }\n');
document.write('.upgotd-people a { font-weight: bold; }\n');
document.write('.upgotd-table td { font-family: Tahoma, Verdana, Arial, Helvetica, sans-serif; font-size:11px; font-weight: normal; color: <?php echo $center_font_color ?>; line-height: 14px; text-align: left; border: 0px; background-color: #EEE; margin: 0px; padding: 0px 0px 0px 3px; }\n');
document.write('.upgotd-more, .upgotd-more a { font-size: 10px; }\n');
document.write('.upgotd-footer, .upgotd-footer a { font-weight: normal ;font-size: 11px;  margin-top: 3px; }\n');
document.write('</style>\n');

document.write('<script language="javascript" src="http://www.joshuaproject.net/upgotd_custom.php" type="text/javascript"></script>\n');
document.write('<!-- alternative for no javascript --><noscript>\n');
document.write('<a href="http://www.joshuaproject.net/upgotdfeed.php">View Unreached People of the Day</a></noscript>\n');