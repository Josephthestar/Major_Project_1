$(document).ready(function() {
    const $hamburger = $(".hamburger");
    const $navMenu = $(".nav-menu");
    const $navLinks = $(".nav-link");
  
    $hamburger.on("click", function() {
      $hamburger.toggleClass("active");
      $navMenu.toggleClass("active");
    });
  
    $navLinks.on("click", function() {
      $hamburger.removeClass("active");
      $navMenu.removeClass("active");
    });
  });