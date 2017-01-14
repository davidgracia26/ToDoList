var myArray = [];

window.onload = function() {


    var unparsedToDoArray = sessionStorage.getItem("toDoArray");

    var parsedToDoArray = JSON.parse(unparsedToDoArray);

    if (parsedToDoArray != null) {


        for (var i = 0; i < parsedToDoArray.length; i++) {

            //Creates the list row on the page with entry
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var input = document.createElement("input");
            input.setAttribute("type", "checkbox");

            var tn1 = document.createTextNode(parsedToDoArray[i].id);
            var tn2 = document.createTextNode(parsedToDoArray[i].listItem);
            var tn3 = document.createTextNode(parsedToDoArray[i].dateCreated);


            row.appendChild(td1).appendChild(tn1);
            row.appendChild(td2).appendChild(tn2);
            row.appendChild(td3).appendChild(tn3);
            row.appendChild(td4).appendChild(input);

            //Adds list row to page
            document.getElementById("movingTable").appendChild(row);
        }
    }
}

//Function for Submit button at bottom of page
function createRow() {

    var unparsedToDoArray = sessionStorage.getItem("toDoArray");

    var parsedToDoArray = JSON.parse(unparsedToDoArray);

    if (parsedToDoArray == null) {

        parsedToDoArray = [];
    }
    myArray = parsedToDoArray;

    myArray[myArray.length] = {
        id: myArray.length,
        listItem: document.getElementById("newToDo").value,
        dateCreated: new Date(),
        isCompleted: false
    }

    //Creates the list row on the page with entry
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    var tn1 = document.createTextNode(myArray[myArray.length - 1].id);
    var tn2 = document.createTextNode(myArray[myArray.length - 1].listItem);
    var tn3 = document.createTextNode(myArray[myArray.length - 1].dateCreated);

    row.appendChild(td1).appendChild(tn1);
    row.appendChild(td2).appendChild(tn2);
    row.appendChild(td3).appendChild(tn3);
    row.appendChild(td4).appendChild(input);

    //Adds list row to page
    document.getElementById("movingTable").appendChild(row);

    var stringifiedArray = JSON.stringify(myArray);

    var myStorage = sessionStorage.setItem("toDoArray", stringifiedArray);

}
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    createRow();
}, false)
