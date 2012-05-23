Joshua Project Customizer for People of the Day Widget
======================================================

This tool helps customize the [Joshua Project's](http://www.joshuaproject.net/) People of the Widget.  It creates the CSS necessary for the widget based on passed parameters.

Usage
-----

When embedding the Joshua Project People of the Day Widget,  use the following code:

`<script language="javascript" src="upgotd_customizer.php" type="text/javascript"></script>`

Once this is live on the [Joshua Project Website](http://joshuaproject.net), you will need to change the code to:

`<script language="javascript" src="http://joshuaproject.net/upgotd_customizer.php" type="text/javascript"></script>`

To customize the widget,  just set any of the permitted query parameters in the url.  If you need help with query url parameters,  please check out this article on [Wikipedia](http://en.wikipedia.org/wiki/Query_string).  All colors are [hexadecimal](http://en.wikipedia.org/wiki/Hexadecimal) codes without the hash tag (#).

Permitted Query Parameters
--------------------------

* cbg - The hexadecimal center background color. (default: 000000)
* cfc - The hexadecimal center font color. (default: 000000)
* clc - The hexadecimal center link font color. (default: 0000FF)
* chc - The hexadecimal center link hover font color. (default: 0000FF)
* bbg - The hexadecimal banner background color. (default: BBDDFF)
* blc - The hexadecimal banner link font color. (default: 0000FF)
* bhc - The hexadecimal banner link hover font color. (default: 0000FF)
* fbg - The hexadecimal footer background color. (default: BBDDFF)
* ffc - The hexadecimal footer font color. (default: 000000)
* flc - The hexadecimal footer link font color. (default: 0000FF)
* fhc - The hexadecimal footer link hover font color. (default: 0000FF)
* nb - Set to true of you do not want a border. (default: false)
* bdt - The CSS border style.  Options: dotted, dashed, solid, double, groove, ridge, inset, or outset. (default: dashed)
* bdc - The hexadecimal border color. (default: CCCCCC)
* bdw - The CSS border width.  You need to include the metric system you want to use. (default: 1px)
* narrow - Set true if you want a widget that is 185px, else it is 215px. (default: false)

Requirements
------------

* PHP

Development
-----------

Questions or problems? Please post them on the [issue tracker](https://github.com/codemis/jp_widget_customizer/issues). You can contribute changes by forking the project and submitting a pull request.

This script is created by Johnathan Pulos and is under the [GNU General Public License v3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).