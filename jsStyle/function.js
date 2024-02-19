function setHiddenClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function hideHiddenClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setInnerText(id, Value) {
    const element = document.getElementById(id);
    element.innerText = Value;
}
