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
      var statusHTML = '<ul class="bulleted">';
      for (var i=0; i<employees.length; i+= 1) {
        if (employees[i].inoffice === true) {
          statusHTML += '<li class="in">';
        } else {
          statusHTML += '<li class="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
      }
      statusHTML += '</ul>';
      document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();
