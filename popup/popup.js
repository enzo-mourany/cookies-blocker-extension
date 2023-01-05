function toggleCookieBlocking(shouldBlock) {
  chrome.storage.local.set({ blockCookies: shouldBlock });
  chrome.cookies.getAll({}, function(cookies) {
    for (let i = 0; i < cookies.length; i++) {
      chrome.cookies.remove({ url: "https://" + cookies[i].domain + cookies[i].path, name: cookies[i].name });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  let allowButton = document.getElementById("allow-button");
  let blockButton = document.getElementById("block-button");
  allowButton.addEventListener("click", function() {
    toggleCookieBlocking(false);
  });
  blockButton.addEventListener("click", function() {
    toggleCookieBlocking(true);
  });
});

