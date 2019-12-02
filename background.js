function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'Open Request #%s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("https://umd.innovationcenter.makerbot.com/requests/" + text);
});