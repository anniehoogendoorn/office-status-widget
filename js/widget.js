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

var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function () {
    if(roomRequest.readyState === 4) {
      var rooms = JSON.parse(roomRequest.responseText);
      var statusHTML = '<ul class="rooms">';
      for (var i=0; i<rooms.length; i+= 1) {
        if (rooms[i].available === true) {
          statusHTML += '<li class="empty">';
        } else {
          statusHTML += '<li class="full">';
        }
        statusHTML += rooms[i].room;
        statusHTML += '</li>';
      }
      statusHTML += '</ul>';
      document.getElementById('roomList').innerHTML = statusHTML;
    }
};
roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();
