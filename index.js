function readTextFile(callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", "data.json", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function init() {
  console.log("init");
  readTextFile(function(text) {
    var data = JSON.parse(text);
    console.log(data);
  });
}
