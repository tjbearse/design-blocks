// https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
// Function to download data to a file
function download(data, filename, type="") {
	var file = new Blob([data], {type: type});
	if (window.navigator.msSaveOrOpenBlob) // IE10+
		window.navigator.msSaveOrOpenBlob(file, filename);
	else { // Others
		var a = document.createElement("a"),
			url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function() {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);  
		}, 0); 
	}
}

// https://stackoverflow.com/questions/3582671/how-to-open-a-local-disk-file-with-javascript
function wrapWithFileReader(callback) {
	return readSingleFile;
	
	function readSingleFile(e) {
		var file = e.target.files[0];
		if (!file) {
			return;
		}
		var reader = new FileReader();
		reader.onload = function(e) {
			var contents = e.target.result;
			callback(contents);
		};
		reader.readAsText(file);
	}
}

export { download, wrapWithFileReader };
