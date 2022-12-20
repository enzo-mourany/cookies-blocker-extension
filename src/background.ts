import { browser } from 'webextension-polyfill-ts';

// This function is called when the extension is installed or updated
function onInstalled(details: browser.runtime.InstalledDetails) {
  console.log('Extension installed or updated');
}

// This function is called when the extension is activated
function onActivated(activeInfo: browser.tabs.TabActiveInfo) {
  console.log('Extension activated');
}

// This function is called when a new tab is created
function onTabCreated(tab: browser.tabs.Tab) {
  console.log('New tab created');
}

// Listen for extension installation/update events
browser.runtime.onInstalled.addListener(onInstalled);

// Listen for extension activation events
browser.runtime.onActivated.addListener(onActivated);

// Listen for tab creation events
browser.tabs.onCreated.addListener(onTabCreated);

