//document.querySelector('button').onclick = addLi();

/*function addLi(){
    var textVal= document.getElementsById('textVal').value, 
    listNode = document.getElementById('list'),
                    liNode = document.createElement('LI'),
                    txtNode = document.createTextNode(textVal);
            
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
            
}*/


function addLi()
            {

                var txtVal = document.getElementById('txtVal').value,
                    listNode = document.getElementById('list'),
                    liNode = document.createElement("LI"),
                    txtNode = document.createTextNode(txtVal);
            
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
            
            }

function deleteLi(){
                let txtVal=document.getElementById('txtVal'),
                items = document.querySelectorAll("#list li"),
            
                tab = [], index;
               






}