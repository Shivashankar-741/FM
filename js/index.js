import * as selectors from "./domSelector/domSelector.js"

let isModulatingSignalPlaced = false
let isCarrierSignalPlaced = false
let isFreqSensistivityPlaced = false
let isIntegratorPlaced = false
let isMultiplierPlaced = false
let isModulatorPlaced = false
let isDifferentiatorPlaced = false
let isEnvelopeDetectorPlaced = false
let isDcLimiterPlaced = false
let isParamExtractionPlaced = false

document.getElementById('removeGraph').onclick = () => {
  document.getElementById('calculator').removeChild(
    document.querySelector('.dcg-wrapper'))
}

const obj = {
  modulating: {
    frequency: 0,
    amplitude: 0
  },
  carrier: {
    frequency: 0,
    amplitude: 0
  },
  frequencySensistivity: 0
}

//wire between modulating signal and integrator

let canvasWireBwModsigToIntegrator = document.getElementById('canvasWireBwModsigToIntegrator');
let modSig_ctx = canvasWireBwModsigToIntegrator.getContext('2d');

let modSig_canvasx = canvasWireBwModsigToIntegrator.offsetLeft;
let modSig_canvasy = canvasWireBwModsigToIntegrator.offsetTop;
let modSig_initial_mousex = 0;
let modSig_initial_mousey = 0;
let modSig_last_mousex = 0;
let modSig_last_mousey = 0;
let modSig_mousex = 0;
let modSig_mousey = 0;
let modSig_isWireConnected = false;
var modSig_WireBwModulatingtoIntegrator = false;
let modSig_isModulatingSignalMoving = false;
let modSig_isIntegratorMoving = false;


selectors.modulatingSignalRight.onclick = function (e) {
  modSig_initial_mousex = parseInt(e.pageX - modSig_canvasx);
  modSig_initial_mousey = parseInt(e.pageY - modSig_canvasy);
  modSig_WireBwModulatingtoIntegrator = true;
  modSig_isWireConnected = true
};

selectors.integratorBlockLeft.onclick = function (e) {
  modSig_last_mousex = parseInt(e.pageX - modSig_canvasx)
  modSig_last_mousey = parseInt(e.pageY - modSig_canvasy)
  modSig_WireBwModulatingtoIntegrator = false;
  if (modSig_isWireConnected) {
    modSig_isWireConnected = true
  }
};

selectors.connectionWireBwModsigToIntegrator.onmousemove = function (e) {
  if (modSig_WireBwModulatingtoIntegrator) {
    modSig_mousex = parseInt(e.pageX - modSig_canvasx);
    modSig_mousey = parseInt(e.pageY - modSig_canvasy);
    modSig_ctx.clearRect(0, 0, canvasWireBwModsigToIntegrator.width, canvasWireBwModsigToIntegrator.height); //clear canvas
    modSig_ctx.beginPath();
    modSig_ctx.moveTo(modSig_initial_mousex, modSig_initial_mousey);
    modSig_ctx.lineTo(modSig_mousex, modSig_mousey);
    modSig_ctx.strokeStyle = 'black';
    modSig_ctx.lineWidth = 5;
    modSig_ctx.lineJoin = modSig_ctx.lineCap = 'round';
    modSig_ctx.stroke();
  } else if (modSig_isIntegratorMoving && modSig_isWireConnected) {
    modSig_mousex = parseInt((e.pageX - 53) - modSig_canvasx);
    modSig_mousey = parseInt(e.pageY - modSig_canvasy);
    modSig_last_mousex = parseInt((e.pageX - 53) - modSig_canvasx);
    modSig_last_mousey = parseInt(e.pageY - modSig_canvasy);
    modSig_ctx.clearRect(0, 0, canvasWireBwModsigToIntegrator.width, canvasWireBwModsigToIntegrator.height); //clear canvas
    modSig_ctx.beginPath();
    modSig_ctx.moveTo(modSig_initial_mousex, modSig_initial_mousey);
    modSig_ctx.lineTo(modSig_mousex, modSig_mousey);
    modSig_ctx.strokeStyle = 'black';
    modSig_ctx.lineWidth = 5;
    modSig_ctx.lineJoin = modSig_ctx.lineCap = 'round';
    modSig_ctx.stroke();
  }
  else if (modSig_isModulatingSignalMoving && modSig_isWireConnected) {
    modSig_mousex = parseInt((e.pageX + 53) - modSig_canvasx);
    modSig_mousey = parseInt(e.pageY - modSig_canvasy);
    modSig_initial_mousex = parseInt((e.pageX + 53) - modSig_canvasx);
    modSig_initial_mousey = parseInt(e.pageY - modSig_canvasy);
    modSig_ctx.clearRect(0, 0, canvasWireBwModsigToIntegrator.width, canvasWireBwModsigToIntegrator.height); //clear canvas
    modSig_ctx.beginPath();
    modSig_ctx.moveTo(modSig_mousex, modSig_mousey);
    modSig_ctx.lineTo(modSig_last_mousex, modSig_last_mousey);
    modSig_ctx.strokeStyle = 'black';
    modSig_ctx.lineWidth = 5;
    modSig_ctx.lineJoin = modSig_ctx.lineCap = 'round';
    modSig_ctx.stroke();
  }
};


// wire between frequencySensistivity to multiplier
let canvasWireBwModsigToMultiplier = document.getElementById('canvasWireBwModsigToMultiplier');
let freqSen_ctx = canvasWireBwModsigToMultiplier.getContext('2d');

let freqSen_canvasx = canvasWireBwModsigToMultiplier.offsetLeft;
let freqSen_canvasy = canvasWireBwModsigToMultiplier.offsetTop;
let freqSen_initial_mousex = 0;
let freqSen_initial_mousey = 0;
let freqSen_last_mousex = 0;
let freqSen_last_mousey = 0;
let freqSen_mousex = 0;
let freqSen_mousey = 0;
let freqSen_isWireConnected = false;
let freqSen_WireBwFreqSensistivityToMultiplier = false;
let freqSen_isFreqSensistivityMoving = false;
let freqSen_isMultiplierMoving = false;


selectors.frequencySensistivityRight.onclick = function (e) {
  freqSen_initial_mousex = parseInt(e.pageX - freqSen_canvasx);
  freqSen_initial_mousey = parseInt(e.pageY - freqSen_canvasy);
  freqSen_WireBwFreqSensistivityToMultiplier = true;
  freqSen_isWireConnected = true
};

selectors.multiplierBlockLeft.onclick = function (e) {
  freqSen_last_mousex = parseInt(e.pageX - freqSen_canvasx)
  freqSen_last_mousey = parseInt(e.pageY - freqSen_canvasy)
  freqSen_WireBwFreqSensistivityToMultiplier = false;
  if (freqSen_isWireConnected) {
    freqSen_isWireConnected = true
  }
};

selectors.connectionWireBwFreqSenToMultiplier.onmousemove = function (e) {
  if (freqSen_WireBwFreqSensistivityToMultiplier) {
    freqSen_mousex = parseInt(e.pageX - freqSen_canvasx);
    freqSen_mousey = parseInt(e.pageY - freqSen_canvasy);
    freqSen_ctx.clearRect(0, 0, canvasWireBwModsigToMultiplier.width, canvasWireBwModsigToMultiplier.height); //clear canvas
    freqSen_ctx.beginPath();
    freqSen_ctx.moveTo(freqSen_initial_mousex, freqSen_initial_mousey);
    freqSen_ctx.lineTo(freqSen_mousex, freqSen_mousey);
    freqSen_ctx.strokeStyle = 'black';
    freqSen_ctx.lineWidth = 5;
    freqSen_ctx.lineJoin = freqSen_ctx.lineCap = 'round';
    freqSen_ctx.stroke();
  } else if (freqSen_isMultiplierMoving && freqSen_isWireConnected) {
    freqSen_mousex = parseInt((e.pageX - 53) - freqSen_canvasx);
    freqSen_mousey = parseInt(e.pageY - freqSen_canvasy);
    freqSen_last_mousex = parseInt((e.pageX - 53) - freqSen_canvasx);
    freqSen_last_mousey = parseInt(e.pageY - freqSen_canvasy);
    freqSen_ctx.clearRect(0, 0, canvasWireBwModsigToMultiplier.width, canvasWireBwModsigToMultiplier.height); //clear canvas
    freqSen_ctx.beginPath();
    freqSen_ctx.moveTo(freqSen_initial_mousex, freqSen_initial_mousey);
    freqSen_ctx.lineTo(freqSen_mousex, freqSen_mousey);
    freqSen_ctx.strokeStyle = 'black';
    freqSen_ctx.lineWidth = 5;
    freqSen_ctx.lineJoin = freqSen_ctx.lineCap = 'round';
    freqSen_ctx.stroke();
  }
  else if (freqSen_isFreqSensistivityMoving && freqSen_isWireConnected) {
    freqSen_mousex = parseInt((e.pageX + 53) - freqSen_canvasx);
    freqSen_mousey = parseInt(e.pageY - freqSen_canvasy);
    freqSen_initial_mousex = parseInt((e.pageX + 53) - freqSen_canvasx);
    freqSen_initial_mousey = parseInt(e.pageY - freqSen_canvasy);
    freqSen_ctx.clearRect(0, 0, canvasWireBwModsigToMultiplier.width, canvasWireBwModsigToMultiplier.height); //clear canvas
    freqSen_ctx.beginPath();
    freqSen_ctx.moveTo(freqSen_mousex, freqSen_mousey);
    freqSen_ctx.lineTo(freqSen_last_mousex, freqSen_last_mousey);
    freqSen_ctx.strokeStyle = 'black';
    freqSen_ctx.lineWidth = 5;
    freqSen_ctx.lineJoin = freqSen_ctx.lineCap = 'round';
    freqSen_ctx.stroke();
  }
};

// wire between carrierSignal to modulator

let canvasWireBwCarsigToModulator = document.getElementById('canvasWireBwCarsigToModulator');
let carrierSig_ctx = canvasWireBwCarsigToModulator.getContext('2d');

let carrierSig_canvasx = canvasWireBwCarsigToModulator.offsetLeft;
let carrierSig_canvasy = canvasWireBwCarsigToModulator.offsetTop;
let carrierSig_initial_mousex = 0;
let carrierSig_initial_mousey = 0;
let carrierSig_last_mousex = 0;
let carrierSig_last_mousey = 0;
let carrierSig_mousex = 0;
let carrierSig_mousey = 0;
let carrierSig_isWireConnected = false;
let carrierSig_WireBwCarSignaltoMultiplier = false;
let carrierSig_isCarrierSignalMoving = false;
let carrierSig_isModulatorMoving = false;


selectors.carrierSignalRight.onclick = function (e) {
  carrierSig_initial_mousex = parseInt(e.pageX - carrierSig_canvasx);
  carrierSig_initial_mousey = parseInt(e.pageY - carrierSig_canvasy);
  carrierSig_WireBwCarSignaltoMultiplier = true;
  carrierSig_isWireConnected = true
};

selectors.modulatorBlockLeft.onclick = function (e) {
  carrierSig_last_mousex = parseInt(e.pageX - carrierSig_canvasx)
  carrierSig_last_mousey = parseInt(e.pageY - carrierSig_canvasy)
  carrierSig_WireBwCarSignaltoMultiplier = false;
  if (carrierSig_isWireConnected) {
    carrierSig_isWireConnected = true
  }
};

selectors.connectionWireBwCarsigToModulator.onmousemove = function (e) {
  if (carrierSig_WireBwCarSignaltoMultiplier) {
    carrierSig_mousex = parseInt(e.pageX - carrierSig_canvasx);
    carrierSig_mousey = parseInt(e.pageY - carrierSig_canvasy);
    carrierSig_ctx.clearRect(0, 0, canvasWireBwCarsigToModulator.width, canvasWireBwCarsigToModulator.height); //clear canvas
    carrierSig_ctx.beginPath();
    carrierSig_ctx.moveTo(carrierSig_initial_mousex, carrierSig_initial_mousey);
    carrierSig_ctx.lineTo(carrierSig_mousex, carrierSig_mousey);
    carrierSig_ctx.strokeStyle = 'black';
    carrierSig_ctx.lineWidth = 5;
    carrierSig_ctx.lineJoin = carrierSig_ctx.lineCap = 'round';
    carrierSig_ctx.stroke();
  } else if (carrierSig_isModulatorMoving && carrierSig_isWireConnected) {
    carrierSig_mousex = parseInt((e.pageX - 53) - carrierSig_canvasx);
    carrierSig_mousey = parseInt(e.pageY - carrierSig_canvasy);
    carrierSig_last_mousex = parseInt((e.pageX - 53) - carrierSig_canvasx);
    carrierSig_last_mousey = parseInt(e.pageY - carrierSig_canvasy);
    carrierSig_ctx.clearRect(0, 0, canvasWireBwCarsigToModulator.width, canvasWireBwCarsigToModulator.height); //clear canvas
    carrierSig_ctx.beginPath();
    carrierSig_ctx.moveTo(carrierSig_initial_mousex, carrierSig_initial_mousey);
    carrierSig_ctx.lineTo(carrierSig_mousex, carrierSig_mousey);
    carrierSig_ctx.strokeStyle = 'black';
    carrierSig_ctx.lineWidth = 5;
    carrierSig_ctx.lineJoin = carrierSig_ctx.lineCap = 'round';
    carrierSig_ctx.stroke();
  }
  else if (carrierSig_isCarrierSignalMoving && carrierSig_isWireConnected) {
    carrierSig_mousex = parseInt((e.pageX + 53) - carrierSig_canvasx);
    carrierSig_mousey = parseInt(e.pageY - carrierSig_canvasy);
    carrierSig_initial_mousex = parseInt((e.pageX + 53) - carrierSig_canvasx);
    carrierSig_initial_mousey = parseInt(e.pageY - carrierSig_canvasy);
    carrierSig_ctx.clearRect(0, 0, canvasWireBwCarsigToModulator.width, canvasWireBwCarsigToModulator.height); //clear canvas
    carrierSig_ctx.beginPath();
    carrierSig_ctx.moveTo(carrierSig_mousex, carrierSig_mousey);
    carrierSig_ctx.lineTo(carrierSig_last_mousex, carrierSig_last_mousey);
    carrierSig_ctx.strokeStyle = 'black';
    carrierSig_ctx.lineWidth = 5;
    carrierSig_ctx.lineJoin = carrierSig_ctx.lineCap = 'round';
    carrierSig_ctx.stroke();
  }
};

// wire between integrator to multiplier

let canvasWireBwIntegratorToMultiplier = document.getElementById('canvasWireBwIntegratorToMultiplier');
let integrator_ctx = canvasWireBwIntegratorToMultiplier.getContext('2d');

let integrator_canvasx = canvasWireBwIntegratorToMultiplier.offsetLeft;
let integrator_canvasy = canvasWireBwIntegratorToMultiplier.offsetTop;
let integrator_initial_mousex = 0;
let integrator_initial_mousey = 0;
let integrator_last_mousex = 0;
let integrator_last_mousey = 0;
let integrator_mousex = 0;
let integrator_mousey = 0;
let integrator_isWireConnected = false;
let integrator_WireBwIntegratorToMultiplier = false;
let integrator_isIntegratorMoving = false;
let integrator_isMulitplierMoving = false;


selectors.integratorBlockBottom.onclick = function (e) {
  integrator_initial_mousex = parseInt(e.pageX - integrator_canvasx);
  integrator_initial_mousey = parseInt(e.pageY - integrator_canvasy);
  integrator_WireBwIntegratorToMultiplier = true;
  integrator_isWireConnected = true
};

selectors.multiplierBlockTop.onclick = function (e) {
  integrator_last_mousex = parseInt(e.pageX - integrator_canvasx)
  integrator_last_mousey = parseInt(e.pageY - integrator_canvasy)
  integrator_WireBwIntegratorToMultiplier = false;
  if (integrator_isWireConnected) {
    integrator_isWireConnected = true
  }
};

selectors.connectionWireBwIntegratorToMultiplier.onmousemove = function (e) {
  if (integrator_WireBwIntegratorToMultiplier) {
    integrator_mousex = parseInt(e.pageX - integrator_canvasx);
    integrator_mousey = parseInt(e.pageY - integrator_canvasy);
    integrator_ctx.clearRect(0, 0, canvasWireBwIntegratorToMultiplier.width, canvasWireBwIntegratorToMultiplier.height); //clear canvas
    integrator_ctx.beginPath();
    integrator_ctx.moveTo(integrator_initial_mousex, integrator_initial_mousey);
    integrator_ctx.lineTo(integrator_mousex, integrator_mousey);
    integrator_ctx.strokeStyle = 'black';
    integrator_ctx.lineWidth = 5;
    integrator_ctx.lineJoin = integrator_ctx.lineCap = 'round';
    integrator_ctx.stroke();
  } else if (integrator_isMulitplierMoving && integrator_isWireConnected) {
    integrator_mousex = parseInt((e.pageX + 0) - integrator_canvasx);
    integrator_mousey = parseInt((e.pageY - 38) - integrator_canvasy);
    integrator_last_mousex = parseInt((e.pageX + 0) - integrator_canvasx);
    integrator_last_mousey = parseInt((e.pageY - 38) - integrator_canvasy);
    integrator_ctx.clearRect(0, 0, canvasWireBwIntegratorToMultiplier.width, canvasWireBwIntegratorToMultiplier.height); //clear canvas
    integrator_ctx.beginPath();
    integrator_ctx.moveTo(integrator_initial_mousex, integrator_initial_mousey);
    integrator_ctx.lineTo(integrator_mousex, integrator_mousey);
    integrator_ctx.strokeStyle = 'black';
    integrator_ctx.lineWidth = 5;
    integrator_ctx.lineJoin = integrator_ctx.lineCap = 'round';
    integrator_ctx.stroke();
  }
  else if (integrator_isIntegratorMoving && integrator_isWireConnected) {
    integrator_mousex = parseInt((e.pageX + 0) - integrator_canvasx);
    integrator_mousey = parseInt((e.pageY + 38) - integrator_canvasy);
    integrator_initial_mousex = parseInt((e.pageX + 0) - integrator_canvasx);
    integrator_initial_mousey = parseInt((e.pageY + 38) - integrator_canvasy);
    integrator_ctx.clearRect(0, 0, canvasWireBwIntegratorToMultiplier.width, canvasWireBwIntegratorToMultiplier.height); //clear canvas
    integrator_ctx.beginPath();
    integrator_ctx.moveTo(integrator_mousex, integrator_mousey);
    integrator_ctx.lineTo(integrator_last_mousex, integrator_last_mousey);
    integrator_ctx.strokeStyle = 'black';
    integrator_ctx.lineWidth = 5;
    integrator_ctx.lineJoin = integrator_ctx.lineCap = 'round';
    integrator_ctx.stroke();
  }
};

// Wire between multiplier to modulator

let canvasWireBwMultiplierToModulator
  = document.getElementById('canvasWireBwMultiplierToModulator');
let multiplier_ctx = canvasWireBwMultiplierToModulator
  .getContext('2d');

let multiplier_canvasx = canvasWireBwMultiplierToModulator
  .offsetLeft;
let multiplier_canvasy = canvasWireBwMultiplierToModulator
  .offsetTop;
let multiplier_initial_mousex = 0;
let multiplier_initial_mousey = 0;
let multiplier_last_mousex = 0;
let multiplier_last_mousey = 0;
let multiplier_mousex = 0;
let multiplier_mousey = 0;
let multiplier_isWireConnected = false;
let multiplier_WireBwMultiplierToModulator = false;
let multiplier_isMultiplierMoving = false;
let multiplier_isModulatorMoving = false;


selectors.multiplierBlockBottom.onclick = function (e) {
  multiplier_initial_mousex = parseInt(e.pageX - multiplier_canvasx);
  multiplier_initial_mousey = parseInt(e.pageY - multiplier_canvasy);
  multiplier_WireBwMultiplierToModulator = true;
  multiplier_isWireConnected = true
};

selectors.modulatorBlockTop.onclick = function (e) {
  multiplier_last_mousex = parseInt(e.pageX - multiplier_canvasx)
  multiplier_last_mousey = parseInt(e.pageY - multiplier_canvasy)
  multiplier_WireBwMultiplierToModulator = false;
  if (multiplier_isWireConnected) {
    multiplier_isWireConnected = true
  }
};

selectors.connectionWireBwMultiplierToModulator.onmousemove = function (e) {
  if (multiplier_WireBwMultiplierToModulator) {
    multiplier_mousex = parseInt(e.pageX - multiplier_canvasx);
    multiplier_mousey = parseInt(e.pageY - multiplier_canvasy);
    multiplier_ctx.clearRect(0, 0, canvasWireBwMultiplierToModulator
      .width, canvasWireBwMultiplierToModulator
      .height); //clear canvas
    multiplier_ctx.beginPath();
    multiplier_ctx.moveTo(multiplier_initial_mousex, multiplier_initial_mousey);
    multiplier_ctx.lineTo(multiplier_mousex, multiplier_mousey);
    multiplier_ctx.strokeStyle = 'black';
    multiplier_ctx.lineWidth = 5;
    multiplier_ctx.lineJoin = multiplier_ctx.lineCap = 'round';
    multiplier_ctx.stroke();
  } else if (multiplier_isModulatorMoving && multiplier_isWireConnected) {
    multiplier_mousex = parseInt((e.pageX + 0) - multiplier_canvasx);
    multiplier_mousey = parseInt((e.pageY - 38) - multiplier_canvasy);
    multiplier_last_mousex = parseInt((e.pageX + 0) - multiplier_canvasx);
    multiplier_last_mousey = parseInt((e.pageY - 38) - multiplier_canvasy);
    multiplier_ctx.clearRect(0, 0, canvasWireBwMultiplierToModulator
      .width, canvasWireBwMultiplierToModulator
      .height); //clear canvas
    multiplier_ctx.beginPath();
    multiplier_ctx.moveTo(multiplier_initial_mousex, multiplier_initial_mousey);
    multiplier_ctx.lineTo(multiplier_mousex, multiplier_mousey);
    multiplier_ctx.strokeStyle = 'black';
    multiplier_ctx.lineWidth = 5;
    multiplier_ctx.lineJoin = multiplier_ctx.lineCap = 'round';
    multiplier_ctx.stroke();
  }
  else if (multiplier_isMultiplierMoving && multiplier_isWireConnected) {
    multiplier_mousex = parseInt((e.pageX + 0) - multiplier_canvasx);
    multiplier_mousey = parseInt((e.pageY + 38) - multiplier_canvasy);
    multiplier_initial_mousex = parseInt((e.pageX + 0) - multiplier_canvasx);
    multiplier_initial_mousey = parseInt((e.pageY + 38) - multiplier_canvasy);
    multiplier_ctx.clearRect(0, 0, canvasWireBwMultiplierToModulator
      .width, canvasWireBwMultiplierToModulator
      .height); //clear canvas
    multiplier_ctx.beginPath();
    multiplier_ctx.moveTo(multiplier_mousex, multiplier_mousey);
    multiplier_ctx.lineTo(multiplier_last_mousex, multiplier_last_mousey);
    multiplier_ctx.strokeStyle = 'black';
    multiplier_ctx.lineWidth = 5;
    multiplier_ctx.lineJoin = multiplier_ctx.lineCap = 'round';
    multiplier_ctx.stroke();
  }
};

// wire between modulator to differentiator
let canvasWireBwModulatorToDifferentiator
  = document.getElementById('canvasWireBwModulatorToDifferentiator');
let modulator_ctx = canvasWireBwModulatorToDifferentiator
  .getContext('2d');

let modulator_canvasx = canvasWireBwModulatorToDifferentiator
  .offsetLeft;
let modulator_canvasy = canvasWireBwModulatorToDifferentiator
  .offsetTop;
let modulator_initial_mousex = 0;
let modulator_initial_mousey = 0;
let modulator_last_mousex = 0;
let modulator_last_mousey = 0;
let modulator_mousex = 0;
let modulator_mousey = 0;
let modulator_isWireConnected = false;
let modulator_WireBwModulatorToDifferentiator = false;
let modulator_isModulatorMoving = false;
let modulator_isDifferentiatorMoving = false;


selectors.modulatorBlockRight.onclick = function (e) {
  modulator_initial_mousex = parseInt(e.pageX - modulator_canvasx);
  modulator_initial_mousey = parseInt(e.pageY - modulator_canvasy);
  modulator_WireBwModulatorToDifferentiator = true;
  modulator_isWireConnected = true
};

selectors.differentiatorBlockLeft.onclick = function (e) {
  modulator_last_mousex = parseInt(e.pageX - modulator_canvasx)
  modulator_last_mousey = parseInt(e.pageY - modulator_canvasy)
  modulator_WireBwModulatorToDifferentiator = false;
  if (modulator_isWireConnected) {
    modulator_isWireConnected = true
  }
};

selectors.connectionWireBwModulatorToDifferentiator.onmousemove = function (e) {
  // console.log('dfd');
  if (modulator_WireBwModulatorToDifferentiator) {
    modulator_mousex = parseInt(e.pageX - modulator_canvasx);
    modulator_mousey = parseInt(e.pageY - modulator_canvasy);
    modulator_ctx.clearRect(0, 0, canvasWireBwModulatorToDifferentiator
      .width, canvasWireBwModulatorToDifferentiator
      .height); //clear canvas
    modulator_ctx.beginPath();
    modulator_ctx.moveTo(modulator_initial_mousex, modulator_initial_mousey);
    modulator_ctx.lineTo(modulator_mousex, modulator_mousey);
    modulator_ctx.strokeStyle = 'black';
    modulator_ctx.lineWidth = 5;
    modulator_ctx.lineJoin = modulator_ctx.lineCap = 'round';
    modulator_ctx.stroke();
  } else if (modulator_isDifferentiatorMoving && modulator_isWireConnected) {
    modulator_mousex = parseInt((e.pageX - 53) - modulator_canvasx);
    modulator_mousey = parseInt((e.pageY + 1) - modulator_canvasy);
    modulator_last_mousex = parseInt((e.pageX - 53) - modulator_canvasx);
    modulator_last_mousey = parseInt((e.pageY + 1) - modulator_canvasy);
    modulator_ctx.clearRect(0, 0, canvasWireBwModulatorToDifferentiator
      .width, canvasWireBwModulatorToDifferentiator
      .height); //clear canvas
    modulator_ctx.beginPath();
    modulator_ctx.moveTo(modulator_initial_mousex, modulator_initial_mousey);
    modulator_ctx.lineTo(modulator_mousex, modulator_mousey);
    modulator_ctx.strokeStyle = 'black';
    modulator_ctx.lineWidth = 5;
    modulator_ctx.lineJoin = modulator_ctx.lineCap = 'round';
    modulator_ctx.stroke();
  }
  else if (modulator_isModulatorMoving && modulator_isWireConnected) {
    modulator_mousex = parseInt((e.pageX + 53) - modulator_canvasx);
    modulator_mousey = parseInt((e.pageY + 1) - modulator_canvasy);
    modulator_initial_mousex = parseInt((e.pageX + 53) - modulator_canvasx);
    modulator_initial_mousey = parseInt((e.pageY + 1) - modulator_canvasy);
    modulator_ctx.clearRect(0, 0, canvasWireBwModulatorToDifferentiator
      .width, canvasWireBwModulatorToDifferentiator
      .height); //clear canvas
    modulator_ctx.beginPath();
    modulator_ctx.moveTo(modulator_mousex, modulator_mousey);
    modulator_ctx.lineTo(modulator_last_mousex, modulator_last_mousey);
    modulator_ctx.strokeStyle = 'black';
    modulator_ctx.lineWidth = 5;
    modulator_ctx.lineJoin = modulator_ctx.lineCap = 'round';
    modulator_ctx.stroke();
  }
};

// wire between differentiator to dcLimiterCircuit

let canvasWireBwDifferentiatorTodcLimiter
  = document.getElementById('canvasWireBwDifferentiatorTodcLimiter');
let differentiator_ctx = canvasWireBwDifferentiatorTodcLimiter
  .getContext('2d');

let differentiator_canvasx = canvasWireBwDifferentiatorTodcLimiter
  .offsetLeft;
let differentiator_canvasy = canvasWireBwDifferentiatorTodcLimiter
  .offsetTop;
let differentiator_initial_mousex = 0;
let differentiator_initial_mousey = 0;
let differentiator_last_mousex = 0;
let differentiator_last_mousey = 0;
let differentiator_mousex = 0;
let differentiator_mousey = 0;
let differentiator_isWireConnected = false;
let differentiator_WireBwDifferentiatorTodcLimiter = false;
let differentiator_isDifferentiatorMoving = false;
let differentiator_isDcLimiterMoving = false;


selectors.differentiatorBlockRight.onclick = function (e) {
  console.log('clickasdf');
  differentiator_initial_mousex = parseInt(e.pageX - differentiator_canvasx);
  differentiator_initial_mousey = parseInt(e.pageY - differentiator_canvasy);
  differentiator_WireBwDifferentiatorTodcLimiter = true;
  differentiator_isWireConnected = true
};

selectors.dcLimitedCircuitBlockLeft.onclick = function (e) {
  differentiator_last_mousex = parseInt(e.pageX - differentiator_canvasx)
  differentiator_last_mousey = parseInt(e.pageY - differentiator_canvasy)
  differentiator_WireBwDifferentiatorTodcLimiter = false;
  if (differentiator_isWireConnected) {
    differentiator_isWireConnected = true
  }
};


selectors.check.onmousemove = function (e) {
  if (differentiator_WireBwDifferentiatorTodcLimiter) {
    differentiator_mousex = parseInt(e.pageX - differentiator_canvasx);
    differentiator_mousey = parseInt(e.pageY - differentiator_canvasy);
    differentiator_ctx.clearRect(0, 0, canvasWireBwDifferentiatorTodcLimiter
      .width, canvasWireBwDifferentiatorTodcLimiter
      .height); //clear canvas
    differentiator_ctx.beginPath();
    differentiator_ctx.moveTo(differentiator_initial_mousex, differentiator_initial_mousey);
    differentiator_ctx.lineTo(differentiator_mousex, differentiator_mousey);
    differentiator_ctx.strokeStyle = 'black';
    differentiator_ctx.lineWidth = 5;
    differentiator_ctx.lineJoin = differentiator_ctx.lineCap = 'round';
    differentiator_ctx.stroke();
  } else if (differentiator_isDcLimiterMoving && differentiator_isWireConnected) {
    differentiator_mousex = parseInt((e.pageX - 53) - differentiator_canvasx);
    differentiator_mousey = parseInt((e.pageY + 1) - differentiator_canvasy);
    differentiator_last_mousex = parseInt((e.pageX - 53) - differentiator_canvasx);
    differentiator_last_mousey = parseInt((e.pageY + 1) - differentiator_canvasy);
    differentiator_ctx.clearRect(0, 0, canvasWireBwDifferentiatorTodcLimiter
      .width, canvasWireBwDifferentiatorTodcLimiter
      .height); //clear canvas
    differentiator_ctx.beginPath();
    differentiator_ctx.moveTo(differentiator_initial_mousex, differentiator_initial_mousey);
    differentiator_ctx.lineTo(differentiator_mousex, differentiator_mousey);
    differentiator_ctx.strokeStyle = 'black';
    differentiator_ctx.lineWidth = 5;
    differentiator_ctx.lineJoin = differentiator_ctx.lineCap = 'round';
    differentiator_ctx.stroke();
  }
  else if (differentiator_isDifferentiatorMoving && differentiator_isWireConnected) {
    differentiator_mousex = parseInt((e.pageX + 53) - differentiator_canvasx);
    differentiator_mousey = parseInt((e.pageY + 1) - differentiator_canvasy);
    differentiator_initial_mousex = parseInt((e.pageX + 53) - differentiator_canvasx);
    differentiator_initial_mousey = parseInt((e.pageY + 1) - differentiator_canvasy);
    differentiator_ctx.clearRect(0, 0, canvasWireBwDifferentiatorTodcLimiter
      .width, canvasWireBwDifferentiatorTodcLimiter
      .height); //clear canvas
    differentiator_ctx.beginPath();
    differentiator_ctx.moveTo(differentiator_mousex, differentiator_mousey);
    differentiator_ctx.lineTo(differentiator_last_mousex, differentiator_last_mousey);
    differentiator_ctx.strokeStyle = 'black';
    differentiator_ctx.lineWidth = 5;
    differentiator_ctx.lineJoin = differentiator_ctx.lineCap = 'round';
    differentiator_ctx.stroke();
  }
};

// wire between dcLimiter to envelopeDetector

let canvasWireBwdcLimiterToEnvelopeDetector
  = document.getElementById('canvasWireBwdcLimiterToEnvelopeDetector');
let dcLimiter_ctx = canvasWireBwdcLimiterToEnvelopeDetector
  .getContext('2d');

let dcLimiter_canvasx = canvasWireBwdcLimiterToEnvelopeDetector
  .offsetLeft;
let dcLimiter_canvasy = canvasWireBwdcLimiterToEnvelopeDetector
  .offsetTop;
let dcLimiter_initial_mousex = 0;
let dcLimiter_initial_mousey = 0;
let dcLimiter_last_mousex = 0;
let dcLimiter_last_mousey = 0;
let dcLimiter_mousex = 0;
let dcLimiter_mousey = 0;
let dcLimiter_isWireConnected = false;
let dcLimiter_WireBwdcLimiterToEnvelopeDetector = false;
let dcLimiter_isdcLimiterMoving = false;
let dcLimiter_envelopeDetectorMoving = false;

selectors.dcLimitedCircuitBlockRight.onclick = function (e) {
  dcLimiter_initial_mousex = parseInt(e.pageX - dcLimiter_canvasx);
  dcLimiter_initial_mousey = parseInt(e.pageY - dcLimiter_canvasy);
  dcLimiter_WireBwdcLimiterToEnvelopeDetector = true;
  dcLimiter_isWireConnected = true
};

selectors.envelopeDetectorBlockLeft.onclick = function (e) {
  dcLimiter_last_mousex = parseInt(e.pageX - dcLimiter_canvasx)
  dcLimiter_last_mousey = parseInt(e.pageY - dcLimiter_canvasy)
  dcLimiter_WireBwdcLimiterToEnvelopeDetector = false;
  if (dcLimiter_isWireConnected) {
    dcLimiter_isWireConnected = true
  }
};

selectors.check2.onmousemove = function (e) {
  if (dcLimiter_WireBwdcLimiterToEnvelopeDetector) {
    dcLimiter_mousex = parseInt(e.pageX - dcLimiter_canvasx);
    dcLimiter_mousey = parseInt(e.pageY - dcLimiter_canvasy);
    dcLimiter_ctx.clearRect(0, 0, canvasWireBwdcLimiterToEnvelopeDetector
      .width, canvasWireBwdcLimiterToEnvelopeDetector
      .height); //clear canvas
    dcLimiter_ctx.beginPath();
    dcLimiter_ctx.moveTo(dcLimiter_initial_mousex, dcLimiter_initial_mousey);
    dcLimiter_ctx.lineTo(dcLimiter_mousex, dcLimiter_mousey);
    dcLimiter_ctx.strokeStyle = 'black';
    dcLimiter_ctx.lineWidth = 5;
    dcLimiter_ctx.lineJoin = dcLimiter_ctx.lineCap = 'round';
    dcLimiter_ctx.stroke();
  } else if (dcLimiter_envelopeDetectorMoving && dcLimiter_isWireConnected) {
    dcLimiter_mousex = parseInt((e.pageX - 53) - dcLimiter_canvasx);
    dcLimiter_mousey = parseInt((e.pageY + 1) - dcLimiter_canvasy);
    dcLimiter_last_mousex = parseInt((e.pageX - 53) - dcLimiter_canvasx);
    dcLimiter_last_mousey = parseInt((e.pageY + 1) - dcLimiter_canvasy);
    dcLimiter_ctx.clearRect(0, 0, canvasWireBwdcLimiterToEnvelopeDetector
      .width, canvasWireBwdcLimiterToEnvelopeDetector
      .height); //clear canvas
    dcLimiter_ctx.beginPath();
    dcLimiter_ctx.moveTo(dcLimiter_initial_mousex, dcLimiter_initial_mousey);
    dcLimiter_ctx.lineTo(dcLimiter_mousex, dcLimiter_mousey);
    dcLimiter_ctx.strokeStyle = 'black';
    dcLimiter_ctx.lineWidth = 5;
    dcLimiter_ctx.lineJoin = dcLimiter_ctx.lineCap = 'round';
    dcLimiter_ctx.stroke();
  }
  else if (dcLimiter_isdcLimiterMoving && dcLimiter_isWireConnected) {
    dcLimiter_mousex = parseInt((e.pageX + 53) - dcLimiter_canvasx);
    dcLimiter_mousey = parseInt((e.pageY + 1) - dcLimiter_canvasy);
    dcLimiter_initial_mousex = parseInt((e.pageX + 53) - dcLimiter_canvasx);
    dcLimiter_initial_mousey = parseInt((e.pageY + 1) - dcLimiter_canvasy);
    dcLimiter_ctx.clearRect(0, 0, canvasWireBwdcLimiterToEnvelopeDetector
      .width, canvasWireBwdcLimiterToEnvelopeDetector
      .height); //clear canvas
    dcLimiter_ctx.beginPath();
    dcLimiter_ctx.moveTo(dcLimiter_mousex, dcLimiter_mousey);
    dcLimiter_ctx.lineTo(dcLimiter_last_mousex, dcLimiter_last_mousey);
    dcLimiter_ctx.strokeStyle = 'black';
    dcLimiter_ctx.lineWidth = 5;
    dcLimiter_ctx.lineJoin = dcLimiter_ctx.lineCap = 'round';
    dcLimiter_ctx.stroke();
  }
};

// wire between envelopeDetector to paramter extraction

let canvasWireBwenvelopeDetToParamExtract
  = document.getElementById('canvasWireBwenvelopeDetToParamExtract');
let envelope_ctx = canvasWireBwenvelopeDetToParamExtract
  .getContext('2d');

let envelope_canvasx = canvasWireBwenvelopeDetToParamExtract
  .offsetLeft;
let envelope_canvasy = canvasWireBwenvelopeDetToParamExtract
  .offsetTop;
let envelope_initial_mousex = 0;
let envelope_initial_mousey = 0;
let envelope_last_mousex = 0;
let envelope_last_mousey = 0;
let envelope_mousex = 0;
let envelope_mousey = 0;
let envelope_isWireConnected = false;
let envelope_WireBwEnvelopeToParameterExtraction = false;
let envelope_isEnvelopeDetectorMoving = false;
let envelope_ParameterExtractionMoving = false;

selectors.envelopeDetectorBlockRight.onclick = function (e) {
  envelope_initial_mousex = parseInt(e.pageX - envelope_canvasx);
  envelope_initial_mousey = parseInt(e.pageY - envelope_canvasy);
  envelope_WireBwEnvelopeToParameterExtraction = true;
  envelope_isWireConnected = true
};

selectors.parameterExtractionBlockLeft.onclick = function (e) {
  envelope_last_mousex = parseInt(e.pageX - envelope_canvasx)
  envelope_last_mousey = parseInt(e.pageY - envelope_canvasy)
  envelope_WireBwEnvelopeToParameterExtraction = false;
  if (envelope_isWireConnected) {
    envelope_isWireConnected = true
  }
};

selectors.connectionWireBwDifferentiatorTodcLimiter.onmousemove = function (e) {
  if (envelope_WireBwEnvelopeToParameterExtraction) {
    envelope_mousex = parseInt(e.pageX - envelope_canvasx);
    envelope_mousey = parseInt(e.pageY - envelope_canvasy);
    envelope_ctx.clearRect(0, 0, canvasWireBwenvelopeDetToParamExtract
      .width, canvasWireBwenvelopeDetToParamExtract
      .height); //clear canvas
    envelope_ctx.beginPath();
    envelope_ctx.moveTo(envelope_initial_mousex, envelope_initial_mousey);
    envelope_ctx.lineTo(envelope_mousex, envelope_mousey);
    envelope_ctx.strokeStyle = 'black';
    envelope_ctx.lineWidth = 5;
    envelope_ctx.lineJoin = envelope_ctx.lineCap = 'round';
    envelope_ctx.stroke();
  } else if (envelope_ParameterExtractionMoving && envelope_isWireConnected) {
    envelope_mousex = parseInt((e.pageX - 53) - envelope_canvasx);
    envelope_mousey = parseInt((e.pageY + 1) - envelope_canvasy);
    envelope_last_mousex = parseInt((e.pageX - 53) - envelope_canvasx);
    envelope_last_mousey = parseInt((e.pageY + 1) - envelope_canvasy);
    envelope_ctx.clearRect(0, 0, canvasWireBwenvelopeDetToParamExtract
      .width, canvasWireBwenvelopeDetToParamExtract
      .height); //clear canvas
    envelope_ctx.beginPath();
    envelope_ctx.moveTo(envelope_initial_mousex, envelope_initial_mousey);
    envelope_ctx.lineTo(envelope_mousex, envelope_mousey);
    envelope_ctx.strokeStyle = 'black';
    envelope_ctx.lineWidth = 5;
    envelope_ctx.lineJoin = envelope_ctx.lineCap = 'round';
    envelope_ctx.stroke();
  }
  else if (envelope_isEnvelopeDetectorMoving && envelope_isWireConnected) {
    envelope_mousex = parseInt((e.pageX + 53) - envelope_canvasx);
    envelope_mousey = parseInt((e.pageY + 1) - envelope_canvasy);
    envelope_initial_mousex = parseInt((e.pageX + 53) - envelope_canvasx);
    envelope_initial_mousey = parseInt((e.pageY + 1) - envelope_canvasy);
    envelope_ctx.clearRect(0, 0, canvasWireBwenvelopeDetToParamExtract
      .width, canvasWireBwenvelopeDetToParamExtract
      .height); //clear canvas
    envelope_ctx.beginPath();
    envelope_ctx.moveTo(envelope_mousex, envelope_mousey);
    envelope_ctx.lineTo(envelope_last_mousex, envelope_last_mousey);
    envelope_ctx.strokeStyle = 'black';
    envelope_ctx.lineWidth = 5;
    envelope_ctx.lineJoin = envelope_ctx.lineCap = 'round';
    envelope_ctx.stroke();
  }
};

// wire end

selectors.modulatingSubmit.onmousedown = () => {
  if (!isModulatingSignalPlaced) {
    obj.modulating.frequency = parseInt(selectors.modulatingFrequency.value);
    obj.modulating.amplitude = parseInt(selectors.modulatingAmplitute.value);

    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/modulatingSignal.png');
    imgBlock.setAttribute('class', 'modulating__signal--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('You already selected modulating signal')
  }
}

selectors.modulatingSubmit.onmouseup = () => {
  isModulatingSignalPlaced = true
  let modulatingSignal = document.querySelector('.modulating__signal--block')

  modulatingSignal.style.position = 'absolute';
  modulatingSignal.style.zIndex = 1000;


  selectors.modulatingSignalRight.style.position = 'absolute';
  selectors.modulatingSignalRight.style.zIndex = 1000;
  selectors.modulatingSignalRight.style.display = 'block';

  function onMouseMove(event) {
    modulatingSignal.style.left = event.pageX - modulatingSignal.offsetWidth / 2 + 'px';
    modulatingSignal.style.top = event.pageY - modulatingSignal.offsetHeight / 2 + 'px';

    selectors.modulatingSignalRight.style.left = event.pageX + 53 - selectors.modulatingSignalRight.offsetWidth / 2 + 'px';
    selectors.modulatingSignalRight.style.top = event.pageY + 1 - selectors.modulatingSignalRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  modulatingSignal.ondblclick = () => {
    modSig_isModulatingSignalMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  modulatingSignal.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.modulating__signal--block'))
      selectors.modulatingSignalRight.style.display = 'none';
      isModulatingSignalPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      // Output graph
      let elt = document.getElementById('calculator');
      let calculator = Desmos.GraphingCalculator(elt);
      let s = 'y(x) = ' + `(${obj.modulating.amplitude} * \\cos( 2 * \\pi * ${obj.modulating.frequency} * x))`;
      calculator.setExpression({ id: 'graph1', latex: s });
      $('#output').modal('show');
      selectors.model.value = "mode"
    }
    modSig_isModulatingSignalMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}


selectors.carrierSubmit.onmousedown = () => {
  if (!isCarrierSignalPlaced) {
    if (selectors.carrierFrequency.value > obj.modulating.frequency && selectors.carrierAmplitute.value > obj.modulating.amplitude) {
      obj.carrier.frequency = parseInt(selectors.carrierFrequency.value);
      obj.carrier.amplitude = parseInt(selectors.carrierAmplitute.value);

      let imgBlock = document.createElement("img");
      imgBlock.setAttribute('src', '../blockImages/carrierSignal.png');
      imgBlock.setAttribute('class', 'carrier__signal--block');
      selectors.simulationArea.appendChild(imgBlock);
    }
    else {
      alert("carrier frequency and amplitude should be greater than modulating frequency and amplitude")
    }
  } else {
    alert('you already selected carrier signal')
  }
}

selectors.carrierSubmit.onmouseup = () => {
  isCarrierSignalPlaced = true
  let carrierSignal = document.querySelector('.carrier__signal--block')

  carrierSignal.style.position = 'absolute';
  carrierSignal.style.zIndex = 1000;


  selectors.carrierSignalRight.style.position = 'absolute';
  selectors.carrierSignalRight.style.zIndex = 1000;
  selectors.carrierSignalRight.style.display = 'block';

  function onMouseMove(event) {
    carrierSignal.style.left = event.pageX - carrierSignal.offsetWidth / 2 + 'px';
    carrierSignal.style.top = event.pageY - carrierSignal.offsetHeight / 2 + 'px';

    selectors.carrierSignalRight.style.left = event.pageX + 53 - selectors.carrierSignalRight.offsetWidth / 2 + 'px';
    selectors.carrierSignalRight.style.top = event.pageY + 1 - selectors.carrierSignalRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  carrierSignal.ondblclick = () => {
    carrierSig_isCarrierSignalMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  carrierSignal.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.carrier__signal--block'));
      selectors.carrierSignalRight.style.display = 'none';
      isCarrierSignalPlaced = false;
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      let elt = document.getElementById('calculator');
      let calculator = Desmos.GraphingCalculator(elt);
      let s = 'y(x) = ' + `(${obj.carrier.amplitude} * \\cos( 2 * \\pi * ${obj.carrier.frequency} * x))`;
      calculator.setExpression({ id: 'graph1', latex: s });
      $('#output').modal('show');
      selectors.model.value = "mode"
    }
    carrierSig_isCarrierSignalMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

selectors.frequencySensistivitySubmit.onmousedown = () => {
  if (!isFreqSensistivityPlaced) {
    obj.frequencySensistivity = parseInt(selectors.frequencySensistivityInput.value)
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/frequencySensistivity.png');
    imgBlock.setAttribute('class', 'frequencySensistivity__signal--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('You already selected frequency sensistivity')
  }
}

selectors.frequencySensistivitySubmit.onmouseup = () => {
  isFreqSensistivityPlaced = true
  let frequencySensistivity = document.querySelector('.frequencySensistivity__signal--block')

  frequencySensistivity.style.position = 'absolute';
  frequencySensistivity.style.zIndex = 1000;


  selectors.frequencySensistivityRight.style.position = 'absolute';
  selectors.frequencySensistivityRight.style.zIndex = 1000;
  selectors.frequencySensistivityRight.style.display = 'block';

  function onMouseMove(event) {
    frequencySensistivity.style.left = event.pageX - frequencySensistivity.offsetWidth / 2 + 'px';
    frequencySensistivity.style.top = event.pageY - frequencySensistivity.offsetHeight / 2 + 'px';

    selectors.frequencySensistivityRight.style.left = event.pageX + 53 - selectors.frequencySensistivityRight.offsetWidth / 2 + 'px';
    selectors.frequencySensistivityRight.style.top = event.pageY + 1 - selectors.frequencySensistivityRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  frequencySensistivity.ondblclick = () => {
    freqSen_isFreqSensistivityMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  frequencySensistivity.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.frequencySensistivity__signal--block'));
      selectors.frequencySensistivityRight.style.display = 'none';
      isFreqSensistivityPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      selectors.model.value = "mode"
    }
    freqSen_isFreqSensistivityMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}


// INTEGRATOR
selectors.integrator.onmousedown = () => {
  if (!isIntegratorPlaced) {
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/integrator.png');
    imgBlock.setAttribute('class', 'integrator--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('You already selected integrator')
  }
}

selectors.integrator.onmouseup = () => {
  isIntegratorPlaced = true
  let integrator = document.querySelector('.integrator--block')

  integrator.style.position = 'absolute';
  integrator.style.zIndex = 1000;

  selectors.integratorBlockLeft.style.position = 'absolute';
  selectors.integratorBlockLeft.style.zIndex = '1000';
  selectors.integratorBlockLeft.style.display = 'block';

  selectors.integratorBlockBottom.style.position = 'absolute';
  selectors.integratorBlockBottom.style.zIndex = '1000';
  selectors.integratorBlockBottom.style.display = 'block';

  function onMouseMove(event) {
    integrator.style.left = event.pageX - integrator.offsetWidth / 2 + 'px';
    integrator.style.top = event.pageY - integrator.offsetHeight / 2 + 'px';
    selectors.integratorBlockLeft.style.left = event.pageX - 53 - selectors.integratorBlockLeft.offsetWidth / 2 + 'px';
    selectors.integratorBlockLeft.style.top = event.pageY + 1 - selectors.integratorBlockLeft.offsetHeight / 2 + 'px';
    selectors.integratorBlockBottom.style.left = event.pageX + 0 - selectors.integratorBlockBottom.offsetWidth / 2 + 'px';
    selectors.integratorBlockBottom.style.top = event.pageY + 38 - selectors.integratorBlockBottom.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  integrator.ondblclick = () => {
    modSig_isIntegratorMoving = true;
    integrator_isIntegratorMoving = true;
    document.addEventListener('mousemove', onMouseMove);
  }

  integrator.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.integrator--block'));
      selectors.integratorBlockLeft.style.display = 'none';
      selectors.integratorBlockBottom.style.display = 'none';
      isIntegratorPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      if (modSig_isWireConnected) {
        // alert('output of integrator')
        let elt = document.getElementById('calculator');
        let calculator = Desmos.GraphingCalculator(elt);
        let numerator = `(${obj.modulating.amplitude} * \\sin( 2 * \\pi * ${obj.modulating.frequency} * x))`;
        let denominator = `( 2 * \\pi * ${obj.modulating.frequency})`
        let s = 'y(x) = ' + `${numerator}/${denominator}`;
        calculator.setExpression({ id: 'graph1', latex: s });
        $('#output').modal('show');
        selectors.model.value = "mode"
      } else {
        alert('Please connnect the wires')
      }
      selectors.model.value = "mode"
    }
    modSig_isIntegratorMoving = false;
    integrator_isIntegratorMoving = false;
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// MULTIPLIER
selectors.multiplier.onmousedown = () => {
  if (!isMultiplierPlaced) {
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/multiplier.png');
    imgBlock.setAttribute('class', 'multiplier--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('you already selected multiplier')
  }
}

selectors.multiplier.onmouseup = () => {
  isMultiplierPlaced = true
  let multiplier = document.querySelector('.multiplier--block')

  multiplier.style.position = 'absolute';
  multiplier.style.zIndex = 1000;


  selectors.multiplierBlockLeft.style.position = 'absolute';
  selectors.multiplierBlockLeft.style.zIndex = 1000;
  selectors.multiplierBlockLeft.style.display = 'block';


  selectors.multiplierBlockTop.style.position = 'absolute';
  selectors.multiplierBlockTop.style.zIndex = 1000;
  selectors.multiplierBlockTop.style.display = 'block';

  selectors.multiplierBlockBottom.style.position = 'absolute';
  selectors.multiplierBlockBottom.style.zIndex = 1000;
  selectors.multiplierBlockBottom.style.display = 'block';

  function onMouseMove(event) {
    multiplier.style.left = event.pageX - multiplier.offsetWidth / 2 + 'px';
    multiplier.style.top = event.pageY - multiplier.offsetHeight / 2 + 'px';

    selectors.multiplierBlockLeft.style.left = event.pageX - 53 - selectors.multiplierBlockLeft.offsetWidth / 2 + 'px';
    selectors.multiplierBlockLeft.style.top = event.pageY + 1 - selectors.multiplierBlockLeft.offsetHeight / 2 + 'px';
    selectors.multiplierBlockTop.style.left = event.pageX + 0 - selectors.multiplierBlockTop.offsetWidth / 2 + 'px';
    selectors.multiplierBlockTop.style.top = event.pageY - 38 - selectors.multiplierBlockTop.offsetHeight / 2 + 'px';
    selectors.multiplierBlockBottom.style.left = event.pageX + 0 - selectors.multiplierBlockBottom.offsetWidth / 2 + 'px';
    selectors.multiplierBlockBottom.style.top = event.pageY + 38 - selectors.multiplierBlockBottom.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  multiplier.ondblclick = () => {
    freqSen_isMultiplierMoving = true
    integrator_isMulitplierMoving = true
    multiplier_isMultiplierMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  multiplier.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.multiplier--block'));
      selectors.multiplierBlockLeft.style.display = 'none';
      selectors.multiplierBlockTop.style.display = 'none';
      selectors.multiplierBlockBottom.style.display = 'none';
      isMultiplierPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      if (freqSen_isWireConnected && integrator_isWireConnected) {
        // alert('output of integrator')
        let elt = document.getElementById('calculator');
        let calculator = Desmos.GraphingCalculator(elt);
        let eqn = `((${obj.frequencySensistivity} * ${obj.modulating.amplitude}/${obj.modulating.frequency}))`;
        let s = 'y(x) = ' + `${eqn}*(\\sin( 2 * \\pi * ${obj.modulating.frequency} * x))`;
        calculator.setExpression({ id: 'graph1', latex: s });
        $('#output').modal('show');
        selectors.model.value = "mode"
      } else {
        alert('Please connect the wires')
      }
      selectors.model.value = "mode"
    }
    freqSen_isMultiplierMoving = false
    integrator_isMulitplierMoving = false
    multiplier_isMultiplierMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// MODULATOR
selectors.modulator.onmousedown = () => {
  if (!isModulatorPlaced) {
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/modulator.png');
    imgBlock.setAttribute('class', 'modulator--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('you already selected modulator')
  }
}

selectors.modulator.onmouseup = () => {
  isModulatorPlaced = true
  let modulator = document.querySelector('.modulator--block')

  modulator.style.position = 'absolute';
  modulator.style.zIndex = 1000;

  selectors.modulatorBlockTop.style.position = 'absolute';
  selectors.modulatorBlockTop.style.zIndex = 1000;
  selectors.modulatorBlockTop.style.display = 'block';

  selectors.modulatorBlockRight.style.position = 'absolute';
  selectors.modulatorBlockRight.style.zIndex = 1000;
  selectors.modulatorBlockRight.style.display = 'block';

  selectors.modulatorBlockLeft.style.position = 'absolute';
  selectors.modulatorBlockLeft.style.zIndex = 1000;
  selectors.modulatorBlockLeft.style.display = 'block';


  function onMouseMove(event) {
    modulator.style.left = event.pageX - modulator.offsetWidth / 2 + 'px';
    modulator.style.top = event.pageY - modulator.offsetHeight / 2 + 'px';

    selectors.modulatorBlockTop.style.left = event.pageX + 0 - selectors.modulatorBlockTop.offsetWidth / 2 + 'px';
    selectors.modulatorBlockTop.style.top = event.pageY - 38 - selectors.modulatorBlockTop.offsetHeight / 2 + 'px';

    selectors.modulatorBlockLeft.style.left = event.pageX - 53 - selectors.modulatorBlockLeft.offsetWidth / 2 + 'px';
    selectors.modulatorBlockLeft.style.top = event.pageY + 1 - selectors.modulatorBlockLeft.offsetHeight / 2 + 'px';
    selectors.modulatorBlockRight.style.left = event.pageX + 53 - selectors.modulatorBlockRight.offsetWidth / 2 + 'px';
    selectors.modulatorBlockRight.style.top = event.pageY + 1 - selectors.modulatorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  modulator.ondblclick = () => {
    carrierSig_isModulatorMoving = true
    multiplier_isModulatorMoving = true
    modulator_isModulatorMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  modulator.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.modulator--block'));
      selectors.modulatorBlockLeft.style.display = 'none';
      selectors.modulatorBlockRight.style.display = 'none';
      selectors.modulatorBlockTop.style.display = 'none';
      isModulatorPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      if (carrierSig_isWireConnected && multiplier_isWireConnected) {
        let elt = document.getElementById('calculator');
        let calculator = Desmos.GraphingCalculator(elt);
        let eqn = `(${obj.carrier.amplitude}* \\cos( 2 * \\pi * ${obj.carrier.frequency} * x+((${obj.frequencySensistivity}*${obj.modulating.amplitude}/${obj.modulating.frequency}))*(\\sin( 2 * \\pi * ${obj.modulating.frequency} * x))))`
        let s = 'y(x) = ' + `${eqn}`;
        calculator.setExpression({ id: 'graph1', latex: s });
        $('#output').modal('show');
        selectors.model.value = "mode"
      } else {
        alert('Please connect the wires')
      }
      selectors.model.value = "mode"
    }
    carrierSig_isModulatorMoving = false
    multiplier_isModulatorMoving = false
    modulator_isModulatorMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// DIFFERENTIATOR
selectors.differentiator.onmousedown = () => {
  if (!isDifferentiatorPlaced) {
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/differentiator.png');
    imgBlock.setAttribute('class', 'differentiator--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('you already selected differentiator')
  }
}

selectors.differentiator.onmouseup = () => {
  isDifferentiatorPlaced = true
  let differentiator = document.querySelector('.differentiator--block')

  differentiator.style.position = 'absolute';
  differentiator.style.zIndex = 1000;


  selectors.differentiatorBlockLeft.style.position = 'absolute';
  selectors.differentiatorBlockLeft.style.zIndex = '1000';
  selectors.differentiatorBlockLeft.style.display = 'block';

  selectors.differentiatorBlockRight.style.position = 'absolute';
  selectors.differentiatorBlockRight.style.zIndex = '1000';
  selectors.differentiatorBlockRight.style.display = 'block';


  function onMouseMove(event) {
    differentiator.style.left = event.pageX - differentiator.offsetWidth / 2 + 'px';
    differentiator.style.top = event.pageY - differentiator.offsetHeight / 2 + 'px';

    selectors.differentiatorBlockLeft.style.left = event.pageX - 53 - selectors.differentiatorBlockLeft.offsetWidth / 2 + 'px';
    selectors.differentiatorBlockLeft.style.top = event.pageY + 1 - selectors.differentiatorBlockLeft.offsetHeight / 2 + 'px';
    selectors.differentiatorBlockRight.style.left = event.pageX + 53 - selectors.differentiatorBlockRight.offsetWidth / 2 + 'px';
    selectors.differentiatorBlockRight.style.top = event.pageY + 1 - selectors.differentiatorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  differentiator.ondblclick = () => {
    modulator_isDifferentiatorMoving = true
    differentiator_isDifferentiatorMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  differentiator.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.differentiator--block'));
      selectors.differentiatorBlockLeft.style.display = 'none';
      selectors.differentiatorBlockRight.style.display = 'none';
      isDifferentiatorPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      if (modulator_isWireConnected) {
        let elt = document.getElementById('calculator');
        let calculator = Desmos.GraphingCalculator(elt);
        let eqn = `${obj.carrier.amplitude}* 2 * \\pi * ${obj.carrier.frequency}(1+(${obj.frequencySensistivity}/${obj.carrier.frequency})*${obj.modulating.amplitude}* \\cos( 2 * \\pi * ${obj.modulating.frequency} * x))*\\sin(2 * \\pi * ${obj.carrier.frequency} * x+((${obj.frequencySensistivity * obj.modulating.amplitude})/${obj.modulating.frequency})* \\sin( 2 * \\pi * ${obj.modulating.frequency} * x)-180)`
        let s = 'y(x) = ' + `${eqn}`;
        calculator.setExpression({ id: 'graph1', latex: s });
        $('#output').modal('show');
        selectors.model.value = "mode"
      }
      else {
        alert('please connect the wires')
      }
      selectors.model.value = "mode"
    }
    modulator_isDifferentiatorMoving = false
    differentiator_isDifferentiatorMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// ENVELOPEDETECTOR
selectors.envelopeDetector.onmousedown = () => {
  if (!isEnvelopeDetectorPlaced) {
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/envelopeDetector.png');
    imgBlock.setAttribute('class', 'envelopeDetector--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('you already selected envelope detector')
  }
}

selectors.envelopeDetector.onmouseup = () => {
  isEnvelopeDetectorPlaced = true
  let envelopeDetector = document.querySelector('.envelopeDetector--block')

  envelopeDetector.style.position = 'absolute';
  envelopeDetector.style.zIndex = 1000;

  selectors.envelopeDetectorBlockLeft.style.position = 'absolute';
  selectors.envelopeDetectorBlockLeft.style.zIndex = '1000';
  selectors.envelopeDetectorBlockLeft.style.display = 'block';

  selectors.envelopeDetectorBlockRight.style.position = 'absolute';
  selectors.envelopeDetectorBlockRight.style.zIndex = '1000';
  selectors.envelopeDetectorBlockRight.style.display = 'block';

  function onMouseMove(event) {
    envelopeDetector.style.left = event.pageX - envelopeDetector.offsetWidth / 2 + 'px';
    envelopeDetector.style.top = event.pageY - envelopeDetector.offsetHeight / 2 + 'px';

    selectors.envelopeDetectorBlockLeft.style.left = event.pageX - 53 - selectors.envelopeDetectorBlockLeft.offsetWidth / 2 + 'px';
    selectors.envelopeDetectorBlockLeft.style.top = event.pageY + 1 - selectors.envelopeDetectorBlockLeft.offsetHeight / 2 + 'px';
    selectors.envelopeDetectorBlockRight.style.left = event.pageX + 53 - selectors.envelopeDetectorBlockRight.offsetWidth / 2 + 'px';
    selectors.envelopeDetectorBlockRight.style.top = event.pageY + 1 - selectors.envelopeDetectorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  envelopeDetector.ondblclick = () => {
    dcLimiter_envelopeDetectorMoving = true;
    envelope_isEnvelopeDetectorMoving = true;
    document.addEventListener('mousemove', onMouseMove);
  }

  envelopeDetector.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.envelopeDetector--block'));
      selectors.envelopeDetectorBlockLeft.style.display = 'none';
      selectors.envelopeDetectorBlockRight.style.display = 'none';
      isEnvelopeDetectorPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      if (dcLimiter_isWireConnected) {
        alert('output of the dc limiter')
      } else {
        alert('please connect the wires')
      }
      selectors.model.value = "mode"
    }
    dcLimiter_envelopeDetectorMoving = false;
    envelope_isEnvelopeDetectorMoving = false;
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// DCLIMITEDCIRCUIT
selectors.dcLimitedCircuit.onmousedown = () => {
  if (!isDcLimiterPlaced) {
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/d.png');
    imgBlock.setAttribute('class', 'dcLimitedCircuit--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('you already selected dc limiter')
  }
}

selectors.dcLimitedCircuit.onmouseup = () => {
  isDcLimiterPlaced = true
  let dcLimitedCircuit = document.querySelector('.dcLimitedCircuit--block')

  dcLimitedCircuit.style.position = 'absolute';
  dcLimitedCircuit.style.zIndex = 1000;

  selectors.dcLimitedCircuitBlockLeft.style.position = 'absolute';
  selectors.dcLimitedCircuitBlockLeft.style.zIndex = '1000';
  selectors.dcLimitedCircuitBlockLeft.style.display = 'block';

  selectors.dcLimitedCircuitBlockRight.style.position = 'absolute';
  selectors.dcLimitedCircuitBlockRight.style.zIndex = '1000';
  selectors.dcLimitedCircuitBlockRight.style.display = 'block';


  function onMouseMove(event) {
    dcLimitedCircuit.style.left = event.pageX - dcLimitedCircuit.offsetWidth / 2 + 'px';
    dcLimitedCircuit.style.top = event.pageY - dcLimitedCircuit.offsetHeight / 2 + 'px';

    selectors.dcLimitedCircuitBlockLeft.style.left = event.pageX - 53 - selectors.dcLimitedCircuitBlockLeft.offsetWidth / 2 + 'px';
    selectors.dcLimitedCircuitBlockLeft.style.top = event.pageY + 1 - selectors.dcLimitedCircuitBlockLeft.offsetHeight / 2 + 'px';
    selectors.dcLimitedCircuitBlockRight.style.left = event.pageX + 53 - selectors.dcLimitedCircuitBlockRight.offsetWidth / 2 + 'px';
    selectors.dcLimitedCircuitBlockRight.style.top = event.pageY + 1 - selectors.dcLimitedCircuitBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  dcLimitedCircuit.ondblclick = () => {
    differentiator_isDcLimiterMoving = true
    dcLimiter_isdcLimiterMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  dcLimitedCircuit.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.dcLimitedCircuit--block'));
      selectors.dcLimitedCircuitBlockLeft.style.display = 'none';
      selectors.dcLimitedCircuitBlockRight.style.display = 'none';
      isDcLimiterPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      if (differentiator_isWireConnected) {
        alert('output of dc limiter')
      } else {
        alert('Please connect the wires')
      }
      selectors.model.value = "mode"
    }
    differentiator_isDcLimiterMoving = false
    dcLimiter_isdcLimiterMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// PARAMETEREXTRACTION
selectors.parameterExtraction.onmousedown = () => {
  if (!isParamExtractionPlaced) {
    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/parameterExtraction.png');
    imgBlock.setAttribute('class', 'parameterExtraction--block');
    selectors.simulationArea.appendChild(imgBlock);
  } else {
    alert('you already selected paramter extraction')
  }
}

selectors.parameterExtraction.onmouseup = () => {
  isParamExtractionPlaced = true
  let parameterExtraction = document.querySelector('.parameterExtraction--block')

  parameterExtraction.style.position = 'absolute';
  parameterExtraction.style.zIndex = 1000;

  selectors.parameterExtractionBlockLeft.style.position = 'absolute';
  selectors.parameterExtractionBlockLeft.style.zIndex = '1000';
  selectors.parameterExtractionBlockLeft.style.display = 'block';



  function onMouseMove(event) {
    parameterExtraction.style.left = event.pageX - parameterExtraction.offsetWidth / 2 + 'px';
    parameterExtraction.style.top = event.pageY - parameterExtraction.offsetHeight / 2 + 'px';

    selectors.parameterExtractionBlockLeft.style.left = event.pageX - 53 - selectors.parameterExtractionBlockLeft.offsetWidth / 2 + 'px';
    selectors.parameterExtractionBlockLeft.style.top = event.pageY + 1 - selectors.parameterExtractionBlockLeft.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  parameterExtraction.ondblclick = () => {
    envelope_ParameterExtractionMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  parameterExtraction.onclick = () => {
    if (selectors.model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.parameterExtraction--block'));
      selectors.parameterExtractionBlockLeft.style.display = 'none';
      isParamExtractionPlaced = false
      selectors.model.value = "mode"
    }
    // else if (selectors.model.value === "Edit") {
    //   selectors.model.value = "mode"
    // }
    else if (selectors.model.value === "output") {
      if (envelope_isWireConnected) {
        alert('output of the parameterExtraction')
      } else {
        alert('please connect the wires')
      }
      selectors.model.value = "mode"
    }
    envelope_ParameterExtractionMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}




