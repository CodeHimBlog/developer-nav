$(document).ready(function() {
function genCode() {
  var code = $(".developer-navi").html();
  var str = $(".source").innerHTML = code;
  var res = str.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");

  $(".source").html(PR.prettyPrintOne(res));
 }
   var topBar = $(".dev-head");
 $(".set-sticky").click(function() {
  $(this).toggleClass("to-active");
  $(topBar).toggleClass("sticky");
  respNav();
  genCode();
 });

 $(".set-glass").click(function() {
  $(this).toggleClass("to-active");
  $(topBar).toggleClass("glass-effect");
   respNav(); genCode();
 });

 /* Change the color */
 $(".theme-tray span").click(function() {
  var skin = $(this).attr("class");
  $(topBar).attr('class', skin).addClass("dev-head sticky");
  $(".set-glass").removeClass("to-active");
  $(".set-sticky").addClass("to-active");
   respNav(); genCode();

});
genCode();
});