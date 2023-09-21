
function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    
    let bill =  Math.round((amount.value/persons.value));
    document.getElementById('bill').innerText = bill;
}