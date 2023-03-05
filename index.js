
  let btnEl = document.getElementById("btn-el")
  let inputEl = document.getElementById("input-el")
  let lengthEl = document.getElementById("length-el1")
  let lengthEl2 = document.getElementById("length-el2")
  let lengthEl3 = document.getElementById("length-el3")

  const meterToFeet = 3.281;
  const literToGallon = 0.264;
  const kiloToPound = 2.204;


  btnEl.addEventListener("click", function() {
      let baseValue = inputEl.value

      lengthEl.innerHTML = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`

      lengthEl2.innerHTML = `${baseValue} meters = ${(baseValue * literToGallon).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / literToGallon).toFixed(3)} meters`

      lengthEl3.innerHTML = `${baseValue} meters = ${(baseValue * kiloToPound).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / kiloToPound).toFixed(3)} meters`
  })

  
  

