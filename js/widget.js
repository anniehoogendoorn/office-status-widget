// This variable name can be anything
var xhr = new XMLHttpRequest();
// This is the callback function
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
      // console.log(xhr.responseText);
      //typeof operator looks at the item that is listed next and returns a word to describe the javascript element
      // console.log(typeof xhr.responseText);

      //Parses the ajax response into a javascript object  
      var employees = JSON.parse(xhr.responseText);

    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();
