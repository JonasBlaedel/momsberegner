momsberegner(24, 47);

function momsberegner(beloeb, moms = 25) {
  console.log(beloeb * (1 + moms / 100));
}

// document.querySelector("button").addEventListener("click", tax);

// function tax(amount, tax = 1.25) {
//   amount = document.getElementById("amount").value;
//   tax = document.getElementById("tax").value;

//   let samlet = amount * (1 + tax / 100);

//   document.querySelector("h2").textContent = `Beløbet er ${samlet}`;
// }
