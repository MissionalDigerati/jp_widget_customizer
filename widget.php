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
$url_attr = "?";
$count = 0;
foreach ($_GET as $key => $value) {
	$append = ($count > 0) ? "&" : "";
	$url_attr = $url_attr . $append . $key . "=" . $value;
	$count = $count+1;
}
?>
<script type="text/javascript" charset="utf-8" src="upgotd_customizer.php<?php echo $url_attr; ?>"></script>