const seatButton = document.getElementsByClassName('seat-button');
const seat = document.getElementsByClassName('seat');
const totalPrice =  document.getElementById('totalPrice');
let seatTotal = 40;
let count = 0;
for(const btn of seatButton){
    btn.addEventListener('click',function (e){
        btn.classList.add('bg-lime-500');
        count = count + 1;
        seatTotal = seatTotal -1;
        setInnerText('totalSeat',seatTotal);
        setInnerText('seat-count',count);
        priceTotal = count * 550;
        setInnerText('totalPrice',priceTotal);
        const seatButtonText = btn.innerText;
        const selectUl = document.getElementById('seatName');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatButtonText;
        const div = document.createElement('div');
        const p2 = document.createElement('p2');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p3');
        p3.innerText = '500';
        li.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        li.appendChild(div)
        selectUl.appendChild(li);
    });
}
const applyButton = document.getElementById('applyButton');
const grandTotal = document.getElementById('grandTotal');
const cuponField = document.getElementById('copun-field');
const inputApply = document.getElementById('inputApply');
applyButton.addEventListener('click',function(e){
    if(cuponField.value === 'NEW15'){
        inputApply.classList.add('hidden');
        count = count + 1;
        priceTotal = (count * 550)-550;
        const totalGrandPrice  = (priceTotal * 0.15);
        const mainPrice  = priceTotal - totalGrandPrice;
        grandTotal.innerText = mainPrice;
    }else if(cuponField.value === 'Couple 20'){
        inputApply.classList.add('hidden');
        const totalGrandPrice  = (priceTotal * 0.20);
        const mainPrice  = priceTotal - totalGrandPrice;
        grandTotal.innerText = mainPrice;
    }
})

function setInnerText(id,Value){
    const element = document.getElementById(id);
    element.innerText = Value;
}
