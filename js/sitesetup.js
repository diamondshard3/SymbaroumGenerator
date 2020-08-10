$(function() {
	
	
	var selectDropdown = document.getElementById("race-select");
	
	// Get JSON list of races and display it
	var xmlhttp = new XMLHttpRequest();
	// Need to change the url for each of the files I'll be using
	var url = "json/races.json";
	
	// Note that the 4 is for "Complete" and the 200 is for "No errors"
	// Basically you're checking to see when the page is completely loaded and had no errors
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
				var myArr = JSON.parse(this.responseText);
				myFunction(myArr);
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	
	function myFunction(arr) {
    var i;
    for(i = 0; i < arr.length; i++) {
        // Gets the dropdown list from the HTML and adds new options to it
		selectDropdown[selectDropdown.options.length] = new Option(arr[i].name, arr[i].value);
		}
	};	
	
});