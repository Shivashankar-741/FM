
let modulatingFrequency = document.querySelector("#modulatingFrequency")
let modulatingAmplitute = document.querySelector("#modulatingAmplitute")
let modulatingSubmit = document.querySelector("#modulatingSubmit")
let carrierFrequency = document.querySelector("#carrierFrequency")
let carrierAmplitute = document.querySelector("#carrierAmplitute")
let carrierSubmit = document.querySelector("#carrierSubmit")

const obj = {
  modulating: {
    frequency: 0,
    amplitude: 0
  },
  carrier: {
    frequency: 0,
    amplitude: 0
  }
}

modulatingSubmit.addEventListener('click', () => {
  obj.modulating.frequency = parseInt(modulatingFrequency.value);
  obj.modulating.amplitude = parseInt(modulatingAmplitute.value);
  console.log(obj);
})

carrierSubmit.addEventListener('click', () => {
  if (carrierFrequency.value > obj.modulating.frequency && carrierAmplitute.value > obj.modulating.amplitude) {
    obj.carrier.frequency = parseInt(carrierFrequency.value);
    obj.carrier.amplitude = parseInt(carrierAmplitute.value);
  }
  else {
    alert("carrier frequency and amplitude should be greater than modulating frequency and amplitude")
  }
  console.log(obj);
})

console.log(obj);