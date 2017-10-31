(function() {
  var html = document.getElementsByTagName("html")[0];

  var windowResize = function() {
    html.style.fontSize = (parseFloat(window.innerWidth) / 10.0).toString() + 'px';
  };

  window.onresize = windowResize;
  windowResize();
})();