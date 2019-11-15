// @prepros-prepend  "0-jquery/_jquery.min.js";
// @prepros-prepend  "1-bootstrap/_bootstrap.bundle.min.js";
// @prepros-prepend  "1-bootstrap/_bootstrap.min.js";
// @prepros-prepend  "2-aos/_aos.js";

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});
