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
