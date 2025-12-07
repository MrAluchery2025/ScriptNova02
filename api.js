// Small helper to centralize API base URL and fetch calls for the static frontend.
// Usage:
// 1) Optionally set window.API_BASE before including this script to override the default.
// 2) Call window.apiFetch('/path') which will request `${API_BASE}/path`.

(function () {
  // default backend URL for local dev — change as needed before loading this file
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.API_BASE = window.API_BASE || 'http://localhost:8000';
  } else {
    // REPLACE THIS WITH YOUR RENDER BACKEND URL AFTER DEPLOYING
    window.API_BASE = window.API_BASE || 'https://scriptnova-backend.onrender.com';
  }

  window.apiFetch = function (path, options) {
    if (!path) throw new Error('apiFetch: path is required');
    var url = (path[0] === '/') ? (window.API_BASE + path) : (window.API_BASE + '/' + path);
    return fetch(url, options);
  };
})();
