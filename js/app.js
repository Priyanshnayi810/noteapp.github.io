console.log('welcome to notes app. this is app.js');

// If user adds a note, add it to the localstorage



// let addBtn = document.getElementById('addBtn');
// addBtn.addEventListner("click",function(e) {

//     let addTxt = document.getElementById("addTxt");
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     }
//     else {
//         notesObj = JSON.parse(notes);
//     }
//     notesObj.push(addTxt.value);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addTxt.value = "";
//     console.log(notesObj);
//     showNotes();
// })

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function(element,index){
        html +=`
        <div class="my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}"onclick="deletNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });
    let notesElm = document.getElementById('notes');
    if(notes.length !=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use "Add a note" section above to add notes.`
    }
}
function deletNote(index){
    console.log("i am deleting");
}