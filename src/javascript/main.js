const { invoke } = window.__TAURI__.tauri;

let plusKey;
let minusKey;
let divKey;
let multKey;
let enterKey;
let clearKey;
let dotKey

let keyOne;
let keyTwo;
let keyThree;
let keyFour;
let keyFive;
let keySix;
let keySeven;
let keyEight;
let keyNign;
let keyZero;

let output;

async function calculate() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  // greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
  await invoke("calculate", {query: output.textContent})
    .then((message) => output.textContent = message)
    .catch((message) => output.textContent = message)
}

window.addEventListener("DOMContentLoaded", () => {
  plusKey = document.getElementById('plus-key')
  minusKey = document.getElementById('minus-key')
  divKey = document.getElementById('div-key')
  multKey = document.getElementById('mult-key')
  enterKey = document.getElementById('enter-key')
  clearKey = document.getElementById('clear-key')
  dotKey = document.getElementById('dot-key')

  keyOne = document.getElementById('one-key')
  keyTwo = document.getElementById('two-key')
  keyThree = document.getElementById('three-key')
  keyFour = document.getElementById('four-key')
  keyFive = document.getElementById('five-key')
  keySix = document.getElementById('six-key')
  keySeven = document.getElementById('seven-key')
  keyEight = document.getElementById('eight-key')
  keyNign = document.getElementById('nign-key')
  keyZero = document.getElementById('zero-key')

  output = document.getElementById('output')

  plusKey.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "+"
    } else {
      output.textContent = output.textContent + "+"
    }
  })

  minusKey.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "-"
    } else {
      output.textContent = output.textContent + "-"
    }
  })

  divKey.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "/"
    } else {
      output.textContent = output.textContent + "/"
    }
    
  })

  multKey.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "*"
    } else {
      output.textContent = output.textContent + "*"
    }
    
  })

  enterKey.addEventListener('click', function() {
    // TODO
    calculate()
  })

  clearKey.addEventListener('click', function() {
    output.textContent = "0"
  })

  dotKey.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "."
    } else {
      output.textContent = output.textContent + "."
    }
    
  })

  keyOne.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "1"
    } else {
      output.textContent = output.textContent + "1"
    }
    
  })

  keyTwo.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "2"
    } else {
      output.textContent = output.textContent + "2"
    }
    
  })

  keyThree.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "3"
    } else {
      output.textContent = output.textContent + "3"
    }
    
  })

  keyFour.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "4"
    } else {
      output.textContent = output.textContent + "4"
    }
    
  })

  keyFive.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "5"
    } else {
      output.textContent = output.textContent + "5"
    }
    
  })

  keySix.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "6"
    } else {
      output.textContent = output.textContent + "6"
    }
    
  })

  keySeven.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "7"
    } else {
      output.textContent = output.textContent + "7"
    }
    
  })

  keyEight.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "8"
    } else {
      output.textContent = output.textContent + "8"
    }
    
  })

  keyNign.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "9"
    } else {
      output.textContent = output.textContent + "9"
    }
    
  })

  keyZero.addEventListener('click', function() {
    if (output.textContent === "0") {
      output.textContent = "0"
    } else {
      output.textContent = output.textContent + "0"
    }
    
  })

  
});












