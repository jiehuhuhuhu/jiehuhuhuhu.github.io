var setupBool = false;

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
    createPost(data);
  });
}

function createPost(data) {
  for(let i = 0; i < data.posts.length; i++) {
    console.log(data.posts[i].text);

    var p = document.createElement('p');
    p.innerHTML = data.posts[i].text;
    document.getElementById("posts").appendChild(p);
  }
}

// initial setup
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM Loaded')
  if (!setupBool) {
    init();
    setupBool = true;
  }
});
