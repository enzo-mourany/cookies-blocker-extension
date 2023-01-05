function toggleCookieBlocking(shouldBlock) {
  chrome.storage.local.set({ blockCookies: shouldBlock });
  if (shouldBlock) {
    window.addEventListener("beforeunload", blockCookies);
  } else {
    window.removeEventListener("beforeunload", blockCookies);
  }
}

function blockCookies(event) {
  event.preventDefault();
  event.returnValue = "";
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
