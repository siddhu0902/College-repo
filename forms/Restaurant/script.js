function calculate()
{
let price = document.getElementById("item").value;
let qty = document.getElementById("qty").value;

let total = price * qty;

document.getElementById("total").innerHTML = total;
}