window.onload = () => {
  var loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;

  let server =
    performance.getEntriesByType('navigation')[0].serverTiming[0].duration;

  document.getElementById('load-time').textContent =
    'load time(client) ' +
    loadTime +
    ' ms, load time(server) ' +
    server +
    ' ms';
};
