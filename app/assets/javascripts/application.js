// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree . 
//= require bootstrap

$(document).ready(function() {


$('.dropdown-toggle').dropdown()
  // a latlng object containing the coordinates for the center of the map
  var latlng = new google.maps.LatLng(33.4500, 112.0667);

  //map properties
  var options = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  //initialize map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  //marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  //listener for pin click
  google.maps.even.addListener(marker1, 'click', function(){   
  });

 
});
