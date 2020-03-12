var setupBool = false;
var jsonData = null;

// Get JSON File
function readJSONFile(callback) {
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
  readJSONFile(function(text) {
    var data = JSON.parse(text);
    jsonData = data
    createPost(data);
  });
}

// functions
function createPost(data) {
  for(let i = 0; i < data.posts.length; i++) {
    console.log(data.posts[i].text);

    var p = document.createElement('p');
    p.id = 'post';
    p.innerHTML = data.posts[i].text;
    document.getElementById("posts").appendChild(p);
  }
}

function savePost(text) {
  console.log("jsonData");
  jsonData["posts"].push({"text": `${text}`});
  console.log(jsonData);
  $.post( "/data.json", function( jsonData ) {
    $( ".result" ).html( jsonData );
  });

}

// initial setup
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM Loaded')
  if (!setupBool) {
    init();
    setupBool = true;
  }
});
