
function add(){
var myDiv=document.getElementById("myDiv");
var inputValue=document.getElementById("myInput").value;

var checkbox=document.createElement('input');
if (inputValue === '') {
    alert("Inget input");
    return;
 } else {
    document.getElementById("myUl").appendChild(checkbox);
 }


checkbox.type="checkbox";
checkbox.name="name";
checkbox.value="value";
checkbox.classList.add("checkbox");

let label=document.createElement('label');
label.appendChild(checkbox);
label.appendChild(document.createTextNode(inputValue));
myDiv.appendChild(label);
}


function remove() {
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    Array.prototype.forEach.call(checkboxes, function(checkbox) {
     checkbox.closest('label').remove();
    });
 }
