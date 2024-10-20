function convertCurrency() {
  const usDollars = Number(document.getElementById("usDollars").value);
  const saudiRiyals = Number(document.getElementById("saudiRiyals").value);

  const usdToPkr = 277;
  const sarToPkr = 74;

  const UStoPKR = usDollars * usdToPkr;
  const SRtoPKR = saudiRiyals * sarToPkr;

  let result = document.getElementById("result");
  result.innerText = `US in PKR: ${UStoPKR.toFixed(2)} \n SR to PKR :  ${SRtoPKR.toFixed(2)}`;
}
