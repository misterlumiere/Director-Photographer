  $(document).ready(function() {
      $(".mobile-menu a").click(function() {
        $("nav#menu .navi").slideToggle();
      var status = $(this).attr('data-status');
        if (status=='plus') {
        $(this).attr('data-status', 'minus');
        $(this).html('<i class="icon-minus"></i> Menu');
      } else if (status == 'minus') {
        $(this).attr('data-status', 'plus');
        $(this).html('<i class="icon-plus"></i> Menu');
      }
    });
  });
 
  $(window).resize(function() {
    var vwptWidth = $(window).width();
    if (vwptWidth > 498) {
      $("ul.navi").removeAttr("style");
    }
  });


//Fit-Text Adjustments





// Sticky Menu




/*-------------------------------------------------------------------- 
 * jQuery pixel/em conversion plugins: toEm() and toPx()
 * by Scott Jehl (scott@filamentgroup.com), http://www.filamentgroup.com
 * Copyright (c) Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) or GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * Article: http://www.filamentgroup.com/lab/update_jquery_plugin_for_retaining_scalable_interfaces_with_pixel_to_em_con/
 * Options:                   
    scope: string or jQuery selector for font-size scoping      
 * Usage Example: $(myPixelValue).toEm(); or $(myEmValue).toPx();
--------------------------------------------------------------------*/


$.fn.toEm = function(settings){
  settings = jQuery.extend({
    scope: 'body'
  }, settings);
  var that = parseInt(this[0],10),
    scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
    scopeVal = scopeTest.height();
  scopeTest.remove();
  return (that / scopeVal).toFixed(8) + 'em';
};


$.fn.toPx = function(settings){
  settings = jQuery.extend({
    scope: 'body'
  }, settings);
  var that = parseFloat(this[0]),
    scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
    scopeVal = scopeTest.height();
  scopeTest.remove();
  return Math.round(that * scopeVal) + 'px';
};

//Column Height Adjustments

/*-------------------------------------------------------------------- 
 * JQuery Plugin: "EqualHeights" & "EqualWidths"
 * by:  Scott Jehl, Todd Parker, Maggie Costello Wachs (http://www.filamentgroup.com)
 *
 * Copyright (c) 2007 Filament Group
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights or widths of the top-level children of a provided element 
    and sets their min-height to the tallest height (or width to widest width). Sets in em units 
    by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method  (article: http://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/)                
 * Usage Example: $(element).equalHeights();
                    Optional: to set min-height in px, pass a true argument: $(element).equalHeights(true);
 * Version: 2.0, 07.24.2008
 * Changelog:
 *  08.02.2007 initial Version 1.0
 *  07.24.2008 v 2.0 - added support for widths
--------------------------------------------------------------------*/

$.fn.equalHeights = function(px) {
  $(this).each(function(){
    var currentTallest = 0;
    $(this).children().each(function(i){
      if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
    });
    if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
    // for ie6, set height since min-height isn't supported
    if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
    $(this).children().css({'min-height': currentTallest}); 
  });
  return this;
};


var minWidth = 710 // minimum width of screen
if ($(window).width() <= minWidth) {
     // do nothing
}
else {
     $('#wrapper').equalHeights();
}     



// Pre-Load Images

function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
            //document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
            imageObj.src=imageArray[i];
        }
    }
}



