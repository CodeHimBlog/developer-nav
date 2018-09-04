/*  Project: Developer Nav. (a responsive multifunction dropdown menu that converts into off canvas menu on mobile devices.)
 *   Author: Asif Mughal
 *   URL: www.codehim.com
 *   License: MIT
 *   Copyright (c) 2018 - Asif Mughal
 */

/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

$(document).ready(function() {
 var topBar = $(".dev-head");
 var bfe = $(".dim-overlay");
 $(".about").click(function() {
  var showP = $(".dev-profile");
  $(showP).toggleClass("active");
  $(".dev-nav").find(".active").not($(showP)).removeClass("active");

 });

 $(".work").click(function() {
  $(".dev-work").toggleClass("active");
  $(".dev-nav").find(".active").not($(".dev-work")).removeClass("active");

 });
 $(".contact").click(function() {

  $(".dev-contact-form").toggleClass("active");
  $(".dev-nav").find(".active").not($(".dev-contact-form")).removeClass("active");
 });

 $(".address").click(function() {
  $(".dev-address").toggleClass("active");
  $(".dev-nav").find(".active").not($(".dev-address")).removeClass("active");
 });

 $(".nav-icon").click(function() {
  $(".dev-nav").toggleClass("show-nav");
  $(this).toggleClass("open");
  /* check if menu is open*/
  if ($(".dev-nav").hasClass("show-nav")) {
   //add fading layer to background 
   $(bfe).show(500);
   $(".logo").fadeOut("fast");
  }
  //otherwise remove background layer
  else {
   $(bfe).hide(500);
   $(".logo").fadeIn(1500);
  }

 });


 /* Store the window width */
 var windowWidth = $(window).width();

 /* Resize Event */
 $(window).resize(function() {
  if ($(window).width() != windowWidth) {
   //update the window width
   windowWidth = $(window).width();
   respNav();
  } else {

   // Otherwise do nothing
  }

 });

 function respNav() {
  var width = $(window).width();
  if (width > 940) {
   $(".phone").hide();
   $("nav").insertAfter(".logo");

  } else {
   $("nav").insertAfter(".dev-address");
   $(".phone").show();
  }
  if (width > 400) {
   $(".logo").fadeIn();
  }
  if ($(topBar).hasClass("sticky")) {
   $("main").css({
    'marginTop': '48px'
   });
  } else {
   $("main").css({
    'marginTop': '0px'
   });
  }
 }

 setInterval(function() {
  var ckh = $(".slideshow-container").is(":hover");
  if (ckh == false) {
   plusSlides(1);
  }
 }, 3000);

 $(".next").click(function() {
  plusSlides(1);

 });

 $(".prev").click(function() {
  plusSlides(-1).devSlider();

 });
//DropDown 
 $(".dropdown-heading").click(function() {
  $(this).toggleClass("down");
  var n = $(".has-sub").find("span:hover + ul li").length;
  var slider = $(".has-sub").find("span:hover + ul li .slideshow-container").height();
  var dropdown = 38 * n;
  var _todrop = $(".has-sub").find("span:hover + ul");
  var nodrop = $(".has-sub ul");
  if ($(_todrop).hasClass("mega")) {
   var dropdown = 38 * n + slider;
   $(bfe).show(500);
  }


  $(_todrop).animate({
   "height": dropdown
  }, 100);
  if ($(_todrop).height() == dropdown) {
   $(_todrop).animate({
    "height": 0
   }, 100);
  }

  if ($(_todrop).height() == dropdown & !$(".dev-nav").hasClass("show-nav")) {
   $(bfe).hide(500);
  }

  /* check if drop down menu open*/
  if ($(nodrop).height(dropdown)) {
   $(nodrop).not(_todrop).height(0);
   $(".dropdown-heading").not(this).removeClass("down");


   //close drop down if user click outside of it
   $(window).click(function(e) {
    if (e.target.id == "has-sub")
     return;
    if ($(e.target).closest('.has-sub').length)
     return;
    // Do not close dropdown if user click on side triggers
    if ($(e.target).closest('.trigger-board').length)
     return;
    //Do processing of click event here for every element except with id menu_content
    $(_todrop).height(0);
    $(".dropdown-heading").removeClass("down");
    if (!$(".dev-nav").hasClass("show-nav")) {
     $(bfe).hide(500);
    }
   });
  }
 });




 //Features for Contact Form 
 var devForm = $(".dev-contact-form form");

 var devFormName = $(".dev-contact-form input[name='name']");

 var devFormMail = $(".dev-contact-form input[name='email']");

 var SubmitBtn = $(".dev-contact-form button[type='submit']");
 var validMail = /@/g;

 $(devForm).submit(function() {

  if ($(devFormName).val() == '') {
   alert("Please enter your name");
  }

  if ($(devFormMail).val() == '') {
   alert("Please enter a valid email address");
  }

 });


 // SHOW/HIDE SIDE NAV ICON
 // Hide side nav on on scroll down
 var didScroll;
 var lastScrollTop = 0;
 var delta = 5;
 var navbarHeight = $('header').outerHeight();

 $(window).scroll(function(event) {
  didScroll = true;
 });
 setInterval(function() {
  if (didScroll) {
   hasScrolled();
   didScroll = false;
  }
 }, 250);

 function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta)
   return;
  if (st > lastScrollTop && st > navbarHeight) {
   $('.dev-nav').addClass('hide-nav');

  } else {
   //Show immediately when user scroll up
   if (st + $(window).height() < $(document).height()) {
    $('.dev-nav').removeClass('hide-nav');
   }
  }

  lastScrollTop = st;
 }

  respNav();
  showSlides(slideIndex);

});

function showSlides(n) {

 var i;

 var slides = $(".mySlides");
 if (n > $(slides).length) {
  slideIndex = 1
 }
 if (n < 1) {
  slideIndex = $(slides).length
 }
 for (i = 0; i < $(slides).length; i++) {
  $(slides[i]).hide();
 }
 $(slides[slideIndex - 1]).show(0);
}

var slideIndex = 1;


function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}
