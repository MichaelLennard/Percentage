var my = (function() {
  var publicMethods = {};

  function init() {
    intIndicators();
  }
  function intIndicators() {
    console.log("Indicators loaded:");
    console.log($(".indicator").length);
  }

  $(init);
  return publicMethods;
})();
