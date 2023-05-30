


const form = document.getElementById("bookform")

function loadAllEvent() {
    // submit 
    form.addEventListener("submit", addAll)

}

loadAllEvent();


// submit all
function addAll(e){
    e.preventDefault();

    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let amount = document.querySelector("#amount").value;

    let table = document.querySelector("#bookTable");
    let newRow = table.insertRow(-1);

    let authorCell = newRow.insertCell(0);
    let titleCell = newRow.insertCell(1);
    let isbnCell = newRow.insertCell(2);
    let amountCell = newRow.insertCell(3);
    let deleteCell = newRow.insertCell(4);

    authorCell.innerHTML = author;
    titleCell.innerHTML = title;
    isbnCell.innerHTML = isbn;
    amountCell.innerHTML = amount;

    // delete an input
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn btn btn-outline-danger float-end";

    deleteButton.addEventListener("click", function() {
      let row = this.parentNode.parentNode;
      row.parentNode.removeChild(row);
    });

    deleteCell.appendChild(deleteButton);

    clearForm();
}
// delete all
    function clearForm() {
        document.querySelector("#author").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#isbn").value = "";
        document.querySelector("#amount").value = "";
    }