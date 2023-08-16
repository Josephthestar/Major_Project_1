// Before anything, credit is given to w3-schools website for helping me build this website
// https://www.w3schools.com/js/default.asp
// I had big issues as to start defining a function and then implementing the function

$().ready(function() {
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

$(function() {
  $('body').addClass('still-wallpaper').css('display', '');

  const imgArray = [
    'https://as2.ftcdn.net/v2/jpg/04/43/48/37/1000_F_443483797_5ispQQU0zMzoJuv1zEiaKn5l75c2wklV.jpg',
    'https://4kwallpapers.com/images/wallpapers/astronaut-galaxy-space-suit-dream-triangle-butterflies-3840x2160-8085.jpg',
    'https://a-static.besthdwallpaper.com/astronaut-watching-the-world-on-the-rock-he-sits-on-wallpaper-1366x768-91713_46.jpg',
    'https://free4kwallpapers.com/uploads/originals/2023/03/04/our-little-beautiful-home-wallpaper.jpg',
    'https://wallpaperaccess.com/full/1414168.jpg'
  ];

  function changeWallpaper() {
    const newImage = imgArray[Math.floor(Math.random() * imgArray.length)];
    $('body').css('background-image', 'url(' + newImage + ')');
  }

  const $div = $('<div>').addClass('').css({
    position: '',
    backgroundColor: '',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });

  const $icon = $('<i>').addClass('').css({
    color: 'white',
    fontSize: '40px',
    marginRight: '5px'
  });

  const $text = $('<span>').text('Add Random Image or whatever you want it to be ').css({
    color: 'white'
  });

  const $button = $('<button>').addClass('add-button').text('Click to Change Wallpaper').on('click', changeWallpaper);

  $div.append($icon, $text, $button);
  $div.appendTo('body');
  
  // Set background image properties
  $('body').css({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  });

  // Rest of the code...
});
