function toggleCookieBlocking(shouldBlock) {
  chrome.storage.local.set({ blockCookies: shouldBlock });
  chrome.cookies.getAll({}, function(cookies) {
    for (var i = 0; i < cookies.length; i++) {
      chrome.cookies.remove({ url: "https://" + cookies[i].domain + cookies[i].path, name: cookies[i].name });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var allowButton = document.getElementById("allow-button");
  var blockButton = document.getElementById("block-button");
  allowButton.addEventListener("click", function() {
    toggleCookieBlocking(false);
  });
  blockButton.addEventListener("click", function() {
    toggleCookieBlocking(true);
  });
});

