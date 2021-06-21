/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.custom_sass = {
    attach: function(context, settings) {

      // Custom code here
      $(".video").once('open').click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "";
        $(theModal + ' source').attr('src', videoSRCauto);
        $(theModal + ' video')[0].load();
        // console.log($(theModal + ' video'));
        $(theModal + ' button.close').once('close').click(function () {
          $(theModal + ' source').attr('src', videoSRC);
        });
      });
      $('#introvideoModal .close').once('close').click(function(){
        $('#introvideoModal video')[0].pause();
        setTimeout(function(){
          $('#profcompModal').modal('show');
        },1000)
      })

      $('#user-register-form #edit-mail').attr("placeholder", "E-mailadres");
      $('#user-register-form #edit-pass--2').attr("placeholder", "Wachtwoord");

      $('#user-login-form #edit-name').attr("placeholder", "E-mailadres");
      $('#user-login-form #edit-pass').attr("placeholder", "Wachtwoord");
    }
  };

})(jQuery, Drupal);