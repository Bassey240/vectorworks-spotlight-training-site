window.plausible =
  window.plausible ||
  function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };

window.plausible.init =
  window.plausible.init ||
  function (options) {
    window.plausible.o = options || {};
  };

const endpoint = document.currentScript?.dataset.endpoint;
window.plausible.init(endpoint ? { endpoint } : {});
