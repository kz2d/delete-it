window.onload = () => {
  var loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;

  console.log("loaded");

  document.getElementById("load-time").textContent =
    "load time " + loadTime + " ms";
};
