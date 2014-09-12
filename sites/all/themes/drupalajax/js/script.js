/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.load_article = {
  attach: function(context, settings) {
    $( "a[data-interaction]" ).once( "nodeajax", function() {
      $( "a[data-interaction]" ).unbind().bind( "click", function() {
        $( this ).removeAttr( "data-interaction" ).ajaxInclude();
        $( this ).on( "ajaxInclude", function () {
          console.log('done');
        });
        return false;
      });
      
    });
  }
};


})(jQuery, Drupal, this, this.document);
