let arrayPlayer = [];
let count = 0;

var li = document.createElement("li");

function getName(arrayPlayer) {
    const getObject = document.getElementById('show-name');
    getObject.innerHTML = "";
    for (let i = 0; i < arrayPlayer.length; i++) {
        if(arrayPlayer.length === 6){
            return;
        }
        else{
            li = document.createElement("li");
            li.innerHTML = ` <li class="text-white ms-2 " style='list-style-type: none;
            '}>${i + 1}. ${arrayPlayer[i]}</li>`
            getObject.appendChild(li);
        }
    }
}
function addCart(element) {
    let playerName = element.parentNode.children[0].innerText;
    arrayPlayer.push(playerName);
    getName(arrayPlayer);
}
let totalN =0;
function playerBudget(){
    const budt = document.getElementById('per-player');
    const dudtNumber = parseFloat(budt.value) ;
     totalN = (dudtNumber * arrayPlayer.length );
   const playerExpenses = document.getElementById('playerExpenses');
   
   playerExpenses.innerText = totalN;

}
function totalV (){
    const managerT = document.getElementById('manager');
    const managerTotal = parseFloat(managerT.value) ;

    const coachT = document.getElementById('coach');
    const coachTotal = parseFloat(coachT.value) ;
    
    const finalTotal = document.getElementById('total')
     finalTotal.innerText = managerTotal + coachTotal + totalN ;

    // console.log(managerTotal , coachTotal );


} 


