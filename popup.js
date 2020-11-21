document.getElementById('submit').onclick = function () {
    callInject(document.getElementById('imgLink').value);
}

function callInject(injectLink) {
    chrome.labs.query({ active: true, currentWindow: true }, function (activeTabs) {
        chrome.tabs.executeScript(null, {
            code: "var linkImage = '" + injectLink + "';"
        }, function () {
            chrome.tabs.executeScript(null, {
                file: './foreground.js'
            });
        });
    });
}