/*
var iframe = document.createElement("iframe");
iframe.src = chrome.extension.getURL("requestSearch.html");
iframe.frameBorder = 0;
var requestTables = document.getElementById('content');
requestTables.insertAdjacentElement('afterbegin', iframe);
*/
// document.getElementsByClassName('search')[0].innerHTML='<strong>test</strong>';

// Issues with persistence due to DOM changes. Looking at Mutation Observers to fix this.
/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var div = document.createElement('div');
        div.innerHTML = this.responseText;
        var node = document.getElementById('content');
        node.insertBefore(div, node.childNodes[0]);
    } else {
        console.log('files not found');
    }
};
xhttp.open("GET", chrome.extension.getURL("requestSearch.html"), true);
xhttp.send();
*/
/*
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      	  var div = document.createElement('div');
     	  div.innerHTML = this.responseText;
      	  var node = document.getElementById('content');
      	  node.insertBefore(div, node.childNodes[0]);
    	} else {
        	console.log('files not found');
    	}
	};
	xhttp.open("GET", chrome.extension.getURL("requestSearch.html"), true);
	xhttp.send();
    
    console.log(mutations, observer);
    // ...
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});
*/