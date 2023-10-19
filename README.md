# YT-ad-popup-script

A simple, yet effective script for blocking the new annoying popup on youtube.

## Installation:

1. Download tampermonkey from the <a href="https://www.tampermonkey.net" target="_blank">official website</a>
2. Open the menu:

![image](https://github.com/paranoidPhantom/YT-ad-popup-script/assets/46633092/cc462eb6-65d1-4ef0-9b90-5544670a8526)

3. Click "Create a new script..."

![image](https://github.com/paranoidPhantom/YT-ad-popup-script/assets/46633092/92c413ef-0108-441a-a0ee-1258b1cb6ea3)

4. Remove this default script:
```js
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/paranoidPhantom/YT-ad-popup-script/new/main?readme=1
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
```
5. Paste the script:
```js
   // ==UserScript==
// @name         YouTube ad popup script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       paranoidPhantom
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

const debug = true;

const selectors = {
    popup: "body > ytd-app > ytd-popup-container > tp-yt-paper-dialog",
    container: "body > ytd-app > ytd-popup-container",
    pauseButton:
        "#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button",
};

function log(message) {
    if (debug) console.log(message);
}

function removeAdsPopup() {
    const popup = document.querySelector(selectors.popup);

    if (!popup || !popup.innerHTML.toLowerCase().includes("ads")) {
        return;
    }

    log("Removing popup");
    popup.remove();

    const pauseButton = document.querySelector(selectors.pauseButton);
    if (pauseButton) {
        log("Resuming video");
        pauseButton.click();
    }

    log("Done");
}

const observer = new MutationObserver(removeAdsPopup);
observer.observe(document.querySelector(selectors.container), {
    childList: true,
    subtree: true,
});

log("Script started");

```

6. Save the script:

![image](https://github.com/paranoidPhantom/YT-ad-popup-script/assets/46633092/5d5512e2-1f4c-4c84-802d-81e6d6660263)

7. Done! You can now close the tab.
