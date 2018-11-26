var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.onclick = buttonClick(button);
}

function buttonClick(button) {
    if (button.innerText == "Space") {
        insertAtCursor(" ");
    }
    else if (this.innerText == "←") {
        var str = document.getElementById("window").value;
        document.getElementById("window").value = str.substring(0, str.length - 1);
    }
    else {
        insertAtCursor(this.innerText);
    }
}

function insertAtCursor(myValue) {
    //IE support
    //if (document.selection) {
    //    document.getElementById("window").focus();
    //    sel = document.selection.createRange();
    //    sel.text = myValue;
    //}
    if (document.getElementById("window").selectionStart || document.getElementById("window").selectionStart == '0') {
        console.log(document.getElementById("window").selectionStart);
        var startPos = document.getElementById("window").selectionStart;
        var endPos = document.getElementById("window").selectionEnd;
        document.getElementById("window").value = document.getElementById("window").value.substring(0, startPos)
            + myValue
            + document.getElementById("window").value.substring(endPos, document.getElementById("window").value.length);
        console.log(document.getElementById("window").selectionStart);
    } else {
        console.log(document.getElementById("window").selectionStart);
        document.getElementById("window").value += myValue;
        console.log(document.getElementById("window").selectionStart);
    }
}

function removeAtCursor(myValue) {
    //IE support?
    if (document.getElementById("window").selectionStart || document.getElementById("window").selectionStart == '0') {
        var startPos = document.getElementById("window").selectionStart;
        var endPos = document.getElementById("window").selectionEnd;
        document.getElementById("window").value = document.getElementById("window").value.substring(0, startPos)
            + myValue
            + document.getElementById("window").value.substring(endPos, document.getElementById("window").value.length);
    } else {
        document.getElementById("window").value += myValue;
    }
}