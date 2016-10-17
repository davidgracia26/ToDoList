//Establishes object



var toDoItem = {
id: "0",
listItem: "Get Started With a List Item",
dateCreated: new Date,
isCompleted: false,
}

//Places object in the array
var myArray = []
myArray[0] = toDoItem
console.log(myArray)




  //Function for Submit button at bottom of page
function toss() {
  //Creates new array item with toDoItem in new index
  var vist = String(myArray.length)
  var visty = parseInt(vist)

  myArray[visty] = {
    id: "0",
    listItem: "Get Started With a List Item",
    dateCreated: new Date,
    isCompleted: false
  }
  myArray[visty].id = vist


  //Creates date property
  var d = new Date()
  myArray[visty].dateCreated = d

  //Takes the entry and puts it in the listItem property
  var yar = document.getElementById("newToDo").value
  myArray[visty].listItem = yar

  //Creates the list row on the page with entry
  var ban = document.createElement("tr")
  var bana = document.createElement("td")
  var banb = document.createElement("td")
  var banc = document.createElement("td")
  var band = document.createElement("td")
  var banj = document.createElement("input")
  banj.setAttribute("type", "checkbox")

  var bane = document.createTextNode(vist)
  var banf = document.createTextNode(yar)
  var bang = document.createTextNode(d)
  var banh = document.createTextNode(banj)

  ban.appendChild(bana).appendChild(bane)
  ban.appendChild(banb).appendChild(banf)
  ban.appendChild(banc).appendChild(bang)
  ban.appendChild(band).appendChild(banj)

  //Adds list row to page
  document.getElementById("movingTable").appendChild(ban)

  console.log(myArray)

  //Store session until tab closes

  var change = JSON.stringify(myArray);

  var myStorage = sessionStorage.setItem("idee",change)

  var message = sessionStorage.getItem("idee")

  var products = JSON.parse(message)

  console.log(products)
  //console.log(sessionStorage.getItem("idee"))


  function ross() {

    //if checkbox checked, removes that row
    console.log(myArray)

    console.log(myArray[visty])

    myArray[visty].isCompleted = true

    ban.removeChild(bana)
    ban.removeChild(banb)
    ban.removeChild(banc)
    ban.removeChild(band)

    console.log(myArray)
    console.log(myArray[visty])

  }

  banj.addEventListener("click",ross,false)


}
//Function for Checkbox button in list items


var house = document.getElementById("gru")


//id: toDoItem[toDoItem.length - 1].id + 1

house.addEventListener("click",function(e) {
  e.preventDefault();
  toss()
},false)
