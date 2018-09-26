var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	button.onclick = function() {
		if (this.innerText == "Space") {
			document.getElementById("window").value += " ";
		}
		else if (this.innerText == "←") {
			var str = document.getElementById("window").value;
			document.getElementById("window").value = str.substring(0, str.length - 1);
		}
		else {
			document.getElementById("window").value += this.innerText;
		}
	}
}
//window.onload = function() {
