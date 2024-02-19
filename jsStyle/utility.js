const seatButton = document.getElementsByClassName('seat-button');
const seat = document.getElementsByClassName('seat');
const totalPrice = document.getElementById('totalPrice');
let seatTotal = 40;
let count = 0;
let a = [];
let a2 = [];
for (const btn of seatButton) {
    btn.addEventListener('click', function (e) {
        if (a.includes(e.target.innerText)) {
            alert('allready choose');
        } else {
            if (a.length === 4) {
                alert('maximum');
            } else {
                const string = e.target.innerText;
                const div = document.createElement('div');
                const span = document.createElement('span');
                span.style.marginRight = '90px'
                const span1 = document.createElement('span1');
                span1.style.marginRight = '50px'
                const span2 = document.createElement('span2');
                span.innerText = string;
                span1.innerText = 'Economoy';
                span2.innerText = '550';
                const purchaseSeat = document.getElementById('purchase-history');
                div.appendChild(span);
                div.appendChild(span1);
                div.appendChild(span2);
                purchaseSeat.appendChild(div);
                a.push(e.target.innerText)
                btn.classList.add('bg-lime-500');
                count = count + 1;
                seatTotal = seatTotal - 1;
                setInnerText('totalSeat', seatTotal);
                setInnerText('seat-count', count);
                priceTotal = count * 550;
                setInnerText('totalPrice', priceTotal);
            }

        }

    });
}
const applyButton = document.getElementById('applyButton');
const grandTotal = document.getElementById('grandTotal');
const cuponField = document.getElementById('copun-field');
const inputApply = document.getElementById('inputApply');
applyButton.addEventListener('click', function (e) {
    if (cuponField.value === 'NEW15') {
        inputApply.classList.add('hidden');
        count = count + 1;
        priceTotal = (count * 550) - 550;
        const totalGrandPrice = (priceTotal * 0.15);
        const mainPrice = priceTotal - totalGrandPrice;
        grandTotal.innerText = mainPrice;
    } else if (cuponField.value === 'Couple 20') {
        inputApply.classList.add('hidden');
        const totalGrandPrice = (priceTotal * 0.20);
        const mainPrice = priceTotal - totalGrandPrice;
        grandTotal.innerText = mainPrice;
    }
});

const phoneNumber = document.getElementById('phone-Number');
const Succes = document.getElementById('success');
Succes.addEventListener('click', function (e) {
    if(phoneNumber.value){
        Succes.removeAttribute('disabled')
    }
    setHiddenClass('hiddenClass');
    hideHiddenClass('request-succes');
});
