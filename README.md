# Cookie Blocker

Cookie Blocker is a Firefox extension that automatically blocks cookies on websites. This extension adds an icon to the Firefox toolbar, and when clicked, a pop-up appears with buttons to allow or block cookies.

## Features

- Automatically blocks cookies on websites
- Provides an easy-to-use interface for allowing or blocking cookies

## How it works

When a user navigates to a website, Cookie Blocker checks the current cookie blocking state. If the state is set to "block", the extension uses the "beforeunload" event in JavaScript to prevent cookies from being set. If the state is set to "allow", the extension does not interfere with cookies.

The blocking state can be changed by clicking the "Allow" or "Block" buttons in the pop-up window. This updates the state in the extension's storage, which determines how the extension behaves on future page loads.

## Installation

1. Download the extension from GitHub.
2. Open Firefox and navigate to "about:debugging".
3. Click the "Load Temporary Add-on" button and select the folder containing the extension.


The extension should now be installed and functional. To make the extension permanent, you can publish it to the Firefox Add-ons store by creating a developer account on the Mozilla website and following the publishing steps.

## Author

👤 **Enzo Mourany**

* Website: enzomourany.com
* Github: [@enzo-mourany](https://github.com/enzo-mourany)
* Linkedin: [Enzo Mourany](https://www.linkedin.com/in/enzo-mourany-9b4a37228/)

## Show your support

Give a ⭐️ if this project helped you!