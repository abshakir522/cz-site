(function ($) {
  'use strict';
  Drupal.behaviors.popup_after_login_valid = {
    attach: function (context, settings) {
      var base_url = drupalSettings.siteBaseUrl;
      $.ajax({
        url: base_url + '/popup_after_login_get_results.json',
        success: function (result) {
          if(result['title']){
            if (result['title'] != 'Maak je profiel compleet') {
              $('#introvideoModal').modal('show');
            }
            else{
              $('#profcompModal').modal('show');
            }
          }
        }
      });
    }
  };
}(jQuery));
