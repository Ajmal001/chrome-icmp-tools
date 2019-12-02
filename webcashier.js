
// First get rid of that extension warning right away. Super annoying that warning is.

document.getElementById('chrome-extension-warning').style = "display: none;";

// Show that purchase button again

document.getElementById('purchase').style = "display: inline;";

// Now let's do this ish

$.get(chrome.extension.getURL('/webcashier.html'), function(data) {
    $(data).appendTo('#web-cashier-purchase');

    document.getElementsByName("$TextField")[0].readOnly =  true;
    document.getElementsByName("$TextField")[0].required = true;
    document.getElementsByName("$TextField")[0].style  = "cursor: not-allowed;";

    if (document.getElementsByName("$TextField")[0].value === '') {
        document.getElementById('purchase').disabled = true;
        document.getElementById('purchase').title = "You need to add the appropriate order comment first via the buttons below.";
    }

    document.getElementById('repPlusButton').addEventListener('click',function(){
        if (document.getElementById('jobText').value !== '') {
            document.getElementsByName("$TextField")[0].value = "Terrapin Works - R" + getRequestNumber() + " - [FDM] - MakerBot Replicator Plus";
            document.getElementById('purchase').disabled = false;
            document.getElementById('purchase').title = "Complete Purchase";
            document.getElementById('noPurchaseAlert').style = "display:none;";
            console.log('Populated comment with MakerBot Replicator Plus information.');
        } else {
            alert('Request number required.');
        }
    });

    document.getElementById('rep5thButton').addEventListener('click',function(){
        if (document.getElementById('jobText').value !== '') {
            document.getElementsByName("$TextField")[0].value = "Terrapin Works - R" + getRequestNumber() + " - [FDM] - MakerBot Replicator 5th Generation";
            document.getElementById('purchase').disabled = false;
            document.getElementById('purchase').title = "Complete Purchase";
            document.getElementById('noPurchaseAlert').style = "display:none;";
            console.log('Populated comment with MakerBot Replicator 5th Gen information.');
        } else {
            alert('Request number required.');
        }
    });

    document.getElementById('designButton').addEventListener('click',function(){
        if (document.getElementById('serviceText').value !== '') {
            document.getElementsByName("$TextField")[0].value = "Terrapin Works - " + getProjectName() + " - [SERVICE] - Professional Design Service";
            document.getElementById('purchase').disabled = false;
            document.getElementById('purchase').title = "Complete Purchase";
            document.getElementById('noPurchaseAlert').style = "display:none;";
            console.log('Populated comment with design service information.');
        } else {
            alert('Project name required.');
        }
    });
    
    document.getElementById('scanButton').addEventListener('click',function(){
        if (document.getElementById('serviceText').value !== '') {
            document.getElementsByName("$TextField")[0].value = "Terrapin Works - " + getProjectName() + " - [SERVICE] - Professional Scanning Service";
            document.getElementById('purchase').disabled = false;
            document.getElementById('purchase').title = "Complete Purchase";
            document.getElementById('noPurchaseAlert').style = "display:none;";
            console.log('Populated comment with scanning service information.');
        } else {
            alert('Project name required.');
        }
    });

    document.getElementById('nanoscribeButton').addEventListener('click',function(){
        if (document.getElementById('serviceText').value !== '') {
            document.getElementsByName("$TextField")[0].value = "Terrapin Works - " + getProjectName() + " - [SERVICE] - Nanoscribe Photonic Professional GT";
            document.getElementById('purchase').disabled = false;
            document.getElementById('purchase').title = "Complete Purchase";
            document.getElementById('noPurchaseAlert').style = "display:none;";
            console.log('Populated comment with Nanoscribe information.');
        } else {
            alert('PI required.');
        }
    });

    document.getElementById('customButton').addEventListener('click',function(){
        document.getElementsByName("$TextField")[0].disabled = false;
        document.getElementsByName("$TextField")[0].style = "cursor: text;";
        document.getElementById('purchase').disabled = false;
        document.getElementById('purchase').title = "Complete Purchase";
        document.getElementById('noPurchaseAlert').style = "display: none;";
        console.log('Allowed custom comment.');
    });

    if (/[?&]customcomment=show/.test(location.search)) {
        document.getElementById('customCommentDiv').style = "display: block;"
    }

    function getRequestNumber() {
        var micRequestNumber = document.getElementById('jobText').value;
        return micRequestNumber;
    }

    function getProjectName() {
        var designProjectName = document.getElementById('serviceText').value;
        return designProjectName;
    }
    
});