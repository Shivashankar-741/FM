
let modulatingFrequency = document.querySelector("#modulatingFrequency")
let modulatingAmplitute = document.querySelector("#modulatingAmplitute")
let modulatingSubmit = document.querySelector("#modulatingSubmit")
let carrierFrequency = document.querySelector("#carrierFrequency")
let frequencySensistivitySubmit = document.querySelector("#frequencySensistivitySubmit")
let carrierAmplitute = document.querySelector("#carrierAmplitute")
let carrierSubmit = document.querySelector("#carrierSubmit")
let simulationArea = document.querySelector(".simulation-area")
let frequencySensistivityInput = document.querySelector('#frequencySensitivityInput')

let integrator = document.querySelector('#integrator');
let multiplier = document.querySelector('#multiplier');
let modulator = document.querySelector('#modulator');
let differentiator = document.querySelector('#differentiator');
let envelopeDetector = document.querySelector('#envelopeDetector');
let dcLimitedCircuit = document.querySelector('#dcLimitedCircuit');
let parameterExtraction = document.querySelector('#parameterExtraction');

let modulatingSignalRight = document.querySelector('.modulatingSignal--block__right')
let carrierSignalRight = document.querySelector('.carrierSignal--block__right')
let frequencySensistivityRight = document.querySelector('.frequencySensistivity--block__right')
let integratorBlockLeft = document.querySelector('.integrator--block__left')
let integratorBlockBottom = document.querySelector('.integrator--block__bottom')
let multiplierBlockTop = document.querySelector('.multiplier--block__top')
let multiplierBlockLeft = document.querySelector('.multiplier--block__left')
let multiplierBlockBottom = document.querySelector('.multiplier--block__bottom')
let modulatorBlockTop = document.querySelector('.modulator--block__top')
let modulatorBlockLeft = document.querySelector('.modulator--block__left')
let modulatorBlockRight = document.querySelector('.modulator--block__right')
let differentiatorBlockLeft = document.querySelector('.differentiator--block__left')
let differentiatorBlockRight = document.querySelector('.differentiator--block__right')
let dcLimitedCircuitBlockLeft = document.querySelector('.dcLimitedCircuit--block__left')
let dcLimitedCircuitBlockRight = document.querySelector('.dcLimitedCircuit--block__right')
let envelopeDetectorBlockLeft = document.querySelector('.envelopeDetector--block__left')
let envelopeDetectorBlockRight = document.querySelector('.envelopeDetector--block__right')
let parameterExtractionBlockLeft = document.querySelector('.parameterExtraction--block__left')

let model = document.querySelector('#selectMode')

// Wires
let connectionWireBwModsigToIntegrator = document.querySelector('.connectionWireBwModsigToIntegrator')
let connectionWireBwFreqSenToMultiplier = document.querySelector('.connectionWireBwFreqSenToMultiplier')
let connectionWireBwCarsigToModulator = document.querySelector('.connectionWireBwCarsigToModulator')
let connectionWireBwIntegratorToMultiplier = document.querySelector('.connectionWireBwIntegratorToMultiplier')
let connectionWireBwMultiplierToModulator = document.querySelector('.connectionWireBwMultiplierToModulator')
let connectionWireBwModulatorToDifferentiator = document.querySelector('.connectionWireBwModulatorToDifferentiator')
let connectionWireBwDifferentiatorTodcLimiter = document.querySelector('.connectionWireBwDifferentiatorTodcLimiter')
let connectionWireBwdcLimiterToEnvelopeDetector = document.querySelector('.connectionWireBwdcLimiterToEnvelopeDetector')
let check = document.querySelector('.check')
let check2 = document.querySelector('.check2')
let connectionWireBwenvelopeDetToParamExtract = document.querySelector('.connectionWireBwenvelopeDetToParamExtract')

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
let modSig_WireBwModulatingtoIntegrator = false;
let modSig_isModulatingSignalMoving = false;
let modSig_isIntegratorMoving = false;


modulatingSignalRight.onclick = function (e) {
  modSig_initial_mousex = parseInt(e.pageX - modSig_canvasx);
  modSig_initial_mousey = parseInt(e.pageY - modSig_canvasy);
  modSig_WireBwModulatingtoIntegrator = true;
  modSig_isWireConnected = true
};

integratorBlockLeft.onclick = function (e) {
  modSig_last_mousex = parseInt(e.pageX - modSig_canvasx)
  modSig_last_mousey = parseInt(e.pageY - modSig_canvasy)
  modSig_WireBwModulatingtoIntegrator = false;
  if (modSig_isWireConnected) {
    modSig_isWireConnected = true
  }
};


connectionWireBwModsigToIntegrator.onmousemove = function (e) {
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


frequencySensistivityRight.onclick = function (e) {
  freqSen_initial_mousex = parseInt(e.pageX - freqSen_canvasx);
  freqSen_initial_mousey = parseInt(e.pageY - freqSen_canvasy);
  freqSen_WireBwFreqSensistivityToMultiplier = true;
  freqSen_isWireConnected = true
};

multiplierBlockLeft.onclick = function (e) {
  freqSen_last_mousex = parseInt(e.pageX - freqSen_canvasx)
  freqSen_last_mousey = parseInt(e.pageY - freqSen_canvasy)
  freqSen_WireBwFreqSensistivityToMultiplier = false;
  if (freqSen_isWireConnected) {
    freqSen_isWireConnected = true
  }
};

connectionWireBwFreqSenToMultiplier.onmousemove = function (e) {
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


carrierSignalRight.onclick = function (e) {
  carrierSig_initial_mousex = parseInt(e.pageX - carrierSig_canvasx);
  carrierSig_initial_mousey = parseInt(e.pageY - carrierSig_canvasy);
  carrierSig_WireBwCarSignaltoMultiplier = true;
  carrierSig_isWireConnected = true
};

modulatorBlockLeft.onclick = function (e) {
  carrierSig_last_mousex = parseInt(e.pageX - carrierSig_canvasx)
  carrierSig_last_mousey = parseInt(e.pageY - carrierSig_canvasy)
  carrierSig_WireBwCarSignaltoMultiplier = false;
  if (carrierSig_isWireConnected) {
    carrierSig_isWireConnected = true
  }
};

connectionWireBwCarsigToModulator.onmousemove = function (e) {
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


integratorBlockBottom.onclick = function (e) {
  integrator_initial_mousex = parseInt(e.pageX - integrator_canvasx);
  integrator_initial_mousey = parseInt(e.pageY - integrator_canvasy);
  integrator_WireBwIntegratorToMultiplier = true;
  integrator_isWireConnected = true
};

multiplierBlockTop.onclick = function (e) {
  integrator_last_mousex = parseInt(e.pageX - integrator_canvasx)
  integrator_last_mousey = parseInt(e.pageY - integrator_canvasy)
  integrator_WireBwIntegratorToMultiplier = false;
  if (integrator_isWireConnected) {
    integrator_isWireConnected = true
  }
};

connectionWireBwIntegratorToMultiplier.onmousemove = function (e) {
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


multiplierBlockBottom.onclick = function (e) {
  multiplier_initial_mousex = parseInt(e.pageX - multiplier_canvasx);
  multiplier_initial_mousey = parseInt(e.pageY - multiplier_canvasy);
  multiplier_WireBwMultiplierToModulator = true;
  multiplier_isWireConnected = true
};

modulatorBlockTop.onclick = function (e) {
  multiplier_last_mousex = parseInt(e.pageX - multiplier_canvasx)
  multiplier_last_mousey = parseInt(e.pageY - multiplier_canvasy)
  multiplier_WireBwMultiplierToModulator = false;
  if (multiplier_isWireConnected) {
    multiplier_isWireConnected = true
  }
};

connectionWireBwMultiplierToModulator.onmousemove = function (e) {
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


modulatorBlockRight.onclick = function (e) {
  modulator_initial_mousex = parseInt(e.pageX - modulator_canvasx);
  modulator_initial_mousey = parseInt(e.pageY - modulator_canvasy);
  modulator_WireBwModulatorToDifferentiator = true;
  modulator_isWireConnected = true
};

differentiatorBlockLeft.onclick = function (e) {
  modulator_last_mousex = parseInt(e.pageX - modulator_canvasx)
  modulator_last_mousey = parseInt(e.pageY - modulator_canvasy)
  modulator_WireBwModulatorToDifferentiator = false;
  if (modulator_isWireConnected) {
    modulator_isWireConnected = true
  }
};

connectionWireBwModulatorToDifferentiator.onmousemove = function (e) {
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


differentiatorBlockRight.onclick = function (e) {
  console.log('clickasdf');
  differentiator_initial_mousex = parseInt(e.pageX - differentiator_canvasx);
  differentiator_initial_mousey = parseInt(e.pageY - differentiator_canvasy);
  differentiator_WireBwDifferentiatorTodcLimiter = true;
  differentiator_isWireConnected = true
};

dcLimitedCircuitBlockLeft.onclick = function (e) {
  differentiator_last_mousex = parseInt(e.pageX - differentiator_canvasx)
  differentiator_last_mousey = parseInt(e.pageY - differentiator_canvasy)
  differentiator_WireBwDifferentiatorTodcLimiter = false;
  if (differentiator_isWireConnected) {
    differentiator_isWireConnected = true
  }
};


check.onmousemove = function (e) {
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

dcLimitedCircuitBlockRight.onclick = function (e) {
  dcLimiter_initial_mousex = parseInt(e.pageX - dcLimiter_canvasx);
  dcLimiter_initial_mousey = parseInt(e.pageY - dcLimiter_canvasy);
  dcLimiter_WireBwdcLimiterToEnvelopeDetector = true;
  dcLimiter_isWireConnected = true
};

envelopeDetectorBlockLeft.onclick = function (e) {
  dcLimiter_last_mousex = parseInt(e.pageX - dcLimiter_canvasx)
  dcLimiter_last_mousey = parseInt(e.pageY - dcLimiter_canvasy)
  dcLimiter_WireBwdcLimiterToEnvelopeDetector = false;
  if (dcLimiter_isWireConnected) {
    dcLimiter_isWireConnected = true
  }
};

check2.onmousemove = function (e) {
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

envelopeDetectorBlockRight.onclick = function (e) {
  envelope_initial_mousex = parseInt(e.pageX - envelope_canvasx);
  envelope_initial_mousey = parseInt(e.pageY - envelope_canvasy);
  envelope_WireBwEnvelopeToParameterExtraction = true;
  envelope_isWireConnected = true
};

parameterExtractionBlockLeft.onclick = function (e) {
  envelope_last_mousex = parseInt(e.pageX - envelope_canvasx)
  envelope_last_mousey = parseInt(e.pageY - envelope_canvasy)
  envelope_WireBwEnvelopeToParameterExtraction = false;
  if (envelope_isWireConnected) {
    envelope_isWireConnected = true
  }
};

connectionWireBwDifferentiatorTodcLimiter.onmousemove = function (e) {
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

modulatingSubmit.onmousedown = () => {
  obj.modulating.frequency = parseInt(modulatingFrequency.value);
  obj.modulating.amplitude = parseInt(modulatingAmplitute.value);

  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/modulatingSignal.png');
  imgBlock.setAttribute('class', 'modulating__signal--block');
  simulationArea.appendChild(imgBlock);
}

modulatingSubmit.onmouseup = () => {
  let modulatingSignal = document.querySelector('.modulating__signal--block')

  modulatingSignal.style.position = 'absolute';
  modulatingSignal.style.zIndex = 1000;


  modulatingSignalRight.style.position = 'absolute';
  modulatingSignalRight.style.zIndex = 1000;
  modulatingSignalRight.style.display = 'block';

  function onMouseMove(event) {
    modulatingSignal.style.left = event.pageX - modulatingSignal.offsetWidth / 2 + 'px';
    modulatingSignal.style.top = event.pageY - modulatingSignal.offsetHeight / 2 + 'px';

    modulatingSignalRight.style.left = event.pageX + 53 - modulatingSignalRight.offsetWidth / 2 + 'px';
    modulatingSignalRight.style.top = event.pageY + 1 - modulatingSignalRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  modulatingSignal.ondblclick = () => {
    modSig_isModulatingSignalMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  modulatingSignal.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.modulating__signal--block'))
      modulatingSignalRight.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      alert("output of modulating signal")
      model.value = "mode"
    }
    modSig_isModulatingSignalMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}


carrierSubmit.onmousedown = () => {
  if (carrierFrequency.value > obj.modulating.frequency && carrierAmplitute.value > obj.modulating.amplitude) {
    obj.carrier.frequency = parseInt(carrierFrequency.value);
    obj.carrier.amplitude = parseInt(carrierAmplitute.value);

    let imgBlock = document.createElement("img");
    imgBlock.setAttribute('src', '../blockImages/carrierSignal.png');
    imgBlock.setAttribute('class', 'carrier__signal--block');
    simulationArea.appendChild(imgBlock);
  }
  else {
    alert("carrier frequency and amplitude should be greater than modulating frequency and amplitude")
  }
}

carrierSubmit.onmouseup = () => {
  let carrierSignal = document.querySelector('.carrier__signal--block')

  carrierSignal.style.position = 'absolute';
  carrierSignal.style.zIndex = 1000;


  carrierSignalRight.style.position = 'absolute';
  carrierSignalRight.style.zIndex = 1000;
  carrierSignalRight.style.display = 'block';

  function onMouseMove(event) {
    carrierSignal.style.left = event.pageX - carrierSignal.offsetWidth / 2 + 'px';
    carrierSignal.style.top = event.pageY - carrierSignal.offsetHeight / 2 + 'px';

    carrierSignalRight.style.left = event.pageX + 53 - carrierSignalRight.offsetWidth / 2 + 'px';
    carrierSignalRight.style.top = event.pageY + 1 - carrierSignalRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  carrierSignal.ondblclick = () => {
    carrierSig_isCarrierSignalMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  carrierSignal.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.carrier__signal--block'));
      carrierSignalRight.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      alert('output of carrier signal')
      model.value = "mode"
    }
    carrierSig_isCarrierSignalMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

frequencySensistivitySubmit.onmousedown = () => {
  obj.frequencySensistivity = parseInt(frequencySensistivityInput.value)
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/frequencySensistivity.png');
  imgBlock.setAttribute('class', 'frequencySensistivity__signal--block');
  simulationArea.appendChild(imgBlock);
}

frequencySensistivitySubmit.onmouseup = () => {
  let frequencySensistivity = document.querySelector('.frequencySensistivity__signal--block')

  frequencySensistivity.style.position = 'absolute';
  frequencySensistivity.style.zIndex = 1000;


  frequencySensistivityRight.style.position = 'absolute';
  frequencySensistivityRight.style.zIndex = 1000;
  frequencySensistivityRight.style.display = 'block';

  function onMouseMove(event) {
    frequencySensistivity.style.left = event.pageX - frequencySensistivity.offsetWidth / 2 + 'px';
    frequencySensistivity.style.top = event.pageY - frequencySensistivity.offsetHeight / 2 + 'px';

    frequencySensistivityRight.style.left = event.pageX + 53 - frequencySensistivityRight.offsetWidth / 2 + 'px';
    frequencySensistivityRight.style.top = event.pageY + 1 - frequencySensistivityRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  frequencySensistivity.ondblclick = () => {
    freqSen_isFreqSensistivityMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  frequencySensistivity.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.frequencySensistivity__signal--block'));
      frequencySensistivityRight.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      model.value = "mode"
    }
    freqSen_isFreqSensistivityMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}


// INTEGRATOR
integrator.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/integrator.png');
  imgBlock.setAttribute('class', 'integrator--block');
  simulationArea.appendChild(imgBlock);
}

integrator.onmouseup = () => {
  let integrator = document.querySelector('.integrator--block')

  integrator.style.position = 'absolute';
  integrator.style.zIndex = 1000;

  integratorBlockLeft.style.position = 'absolute';
  integratorBlockLeft.style.zIndex = '1000';
  integratorBlockLeft.style.display = 'block';

  integratorBlockBottom.style.position = 'absolute';
  integratorBlockBottom.style.zIndex = '1000';
  integratorBlockBottom.style.display = 'block';

  function onMouseMove(event) {
    integrator.style.left = event.pageX - integrator.offsetWidth / 2 + 'px';
    integrator.style.top = event.pageY - integrator.offsetHeight / 2 + 'px';
    integratorBlockLeft.style.left = event.pageX - 53 - integratorBlockLeft.offsetWidth / 2 + 'px';
    integratorBlockLeft.style.top = event.pageY + 1 - integratorBlockLeft.offsetHeight / 2 + 'px';
    integratorBlockBottom.style.left = event.pageX + 0 - integratorBlockBottom.offsetWidth / 2 + 'px';
    integratorBlockBottom.style.top = event.pageY + 38 - integratorBlockBottom.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  integrator.ondblclick = () => {
    modSig_isIntegratorMoving = true;
    integrator_isIntegratorMoving = true;
    document.addEventListener('mousemove', onMouseMove);
  }

  integrator.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.integrator--block'));
      integratorBlockLeft.style.display = 'none';
      integratorBlockBottom.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      if (modSig_isWireConnected) {
        alert('output of integrator')
      } else {
        alert('Please connnect the wires')
      }
      model.value = "mode"
    }
    modSig_isIntegratorMoving = false;
    integrator_isIntegratorMoving = false;
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// MULTIPLIER
multiplier.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/multiplier.png');
  imgBlock.setAttribute('class', 'multiplier--block');
  simulationArea.appendChild(imgBlock);
}

multiplier.onmouseup = () => {
  let multiplier = document.querySelector('.multiplier--block')

  multiplier.style.position = 'absolute';
  multiplier.style.zIndex = 1000;


  multiplierBlockLeft.style.position = 'absolute';
  multiplierBlockLeft.style.zIndex = 1000;
  multiplierBlockLeft.style.display = 'block';


  multiplierBlockTop.style.position = 'absolute';
  multiplierBlockTop.style.zIndex = 1000;
  multiplierBlockTop.style.display = 'block';

  multiplierBlockBottom.style.position = 'absolute';
  multiplierBlockBottom.style.zIndex = 1000;
  multiplierBlockBottom.style.display = 'block';

  function onMouseMove(event) {
    multiplier.style.left = event.pageX - multiplier.offsetWidth / 2 + 'px';
    multiplier.style.top = event.pageY - multiplier.offsetHeight / 2 + 'px';

    multiplierBlockLeft.style.left = event.pageX - 53 - multiplierBlockLeft.offsetWidth / 2 + 'px';
    multiplierBlockLeft.style.top = event.pageY + 1 - multiplierBlockLeft.offsetHeight / 2 + 'px';
    multiplierBlockTop.style.left = event.pageX + 0 - multiplierBlockTop.offsetWidth / 2 + 'px';
    multiplierBlockTop.style.top = event.pageY - 38 - multiplierBlockTop.offsetHeight / 2 + 'px';
    multiplierBlockBottom.style.left = event.pageX + 0 - multiplierBlockBottom.offsetWidth / 2 + 'px';
    multiplierBlockBottom.style.top = event.pageY + 38 - multiplierBlockBottom.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  multiplier.ondblclick = () => {
    freqSen_isMultiplierMoving = true
    integrator_isMulitplierMoving = true
    multiplier_isMultiplierMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  multiplier.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.multiplier--block'));
      multiplierBlockLeft.style.display = 'none';
      multiplierBlockTop.style.display = 'none';
      multiplierBlockBottom.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      if (freqSen_isWireConnected && integrator_isWireConnected) {
        alert('output of multiplier')
      } else {
        alert('Please connect the wires')
      }
      model.value = "mode"
    }
    freqSen_isMultiplierMoving = false
    integrator_isMulitplierMoving = false
    multiplier_isMultiplierMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// MODULATOR
modulator.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/modulator.png');
  imgBlock.setAttribute('class', 'modulator--block');
  simulationArea.appendChild(imgBlock);
}

modulator.onmouseup = () => {
  let modulator = document.querySelector('.modulator--block')

  modulator.style.position = 'absolute';
  modulator.style.zIndex = 1000;

  modulatorBlockTop.style.position = 'absolute';
  modulatorBlockTop.style.zIndex = 1000;
  modulatorBlockTop.style.display = 'block';

  modulatorBlockRight.style.position = 'absolute';
  modulatorBlockRight.style.zIndex = 1000;
  modulatorBlockRight.style.display = 'block';

  modulatorBlockLeft.style.position = 'absolute';
  modulatorBlockLeft.style.zIndex = 1000;
  modulatorBlockLeft.style.display = 'block';


  function onMouseMove(event) {
    modulator.style.left = event.pageX - modulator.offsetWidth / 2 + 'px';
    modulator.style.top = event.pageY - modulator.offsetHeight / 2 + 'px';

    modulatorBlockTop.style.left = event.pageX + 0 - modulatorBlockTop.offsetWidth / 2 + 'px';
    modulatorBlockTop.style.top = event.pageY - 38 - modulatorBlockTop.offsetHeight / 2 + 'px';

    modulatorBlockLeft.style.left = event.pageX - 53 - modulatorBlockLeft.offsetWidth / 2 + 'px';
    modulatorBlockLeft.style.top = event.pageY + 1 - modulatorBlockLeft.offsetHeight / 2 + 'px';
    modulatorBlockRight.style.left = event.pageX + 53 - modulatorBlockRight.offsetWidth / 2 + 'px';
    modulatorBlockRight.style.top = event.pageY + 1 - modulatorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  modulator.ondblclick = () => {
    carrierSig_isModulatorMoving = true
    multiplier_isModulatorMoving = true
    modulator_isModulatorMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  modulator.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.modulator--block'));
      modulatorBlockLeft.style.display = 'none';
      modulatorBlockRight.style.display = 'none';
      modulatorBlockTop.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      // if (freqSen_isWireConnected && integrator_isWireConnected) {
      if (carrierSig_isWireConnected && multiplier_isWireConnected) {
        alert('output of multiplier')
      } else {
        alert('Please connect the wires')
      }
      model.value = "mode"
    }
    carrierSig_isModulatorMoving = false
    multiplier_isModulatorMoving = false
    modulator_isModulatorMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// DIFFERENTIATOR
differentiator.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/differentiator.png');
  imgBlock.setAttribute('class', 'differentiator--block');
  simulationArea.appendChild(imgBlock);
}

differentiator.onmouseup = () => {
  let differentiator = document.querySelector('.differentiator--block')

  differentiator.style.position = 'absolute';
  differentiator.style.zIndex = 1000;


  differentiatorBlockLeft.style.position = 'absolute';
  differentiatorBlockLeft.style.zIndex = '1000';
  differentiatorBlockLeft.style.display = 'block';

  differentiatorBlockRight.style.position = 'absolute';
  differentiatorBlockRight.style.zIndex = '1000';
  differentiatorBlockRight.style.display = 'block';


  function onMouseMove(event) {
    differentiator.style.left = event.pageX - differentiator.offsetWidth / 2 + 'px';
    differentiator.style.top = event.pageY - differentiator.offsetHeight / 2 + 'px';

    differentiatorBlockLeft.style.left = event.pageX - 53 - differentiatorBlockLeft.offsetWidth / 2 + 'px';
    differentiatorBlockLeft.style.top = event.pageY + 1 - differentiatorBlockLeft.offsetHeight / 2 + 'px';
    differentiatorBlockRight.style.left = event.pageX + 53 - differentiatorBlockRight.offsetWidth / 2 + 'px';
    differentiatorBlockRight.style.top = event.pageY + 1 - differentiatorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  differentiator.ondblclick = () => {
    modulator_isDifferentiatorMoving = true
    differentiator_isDifferentiatorMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  differentiator.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.differentiator--block'));
      differentiatorBlockLeft.style.display = 'none';
      differentiatorBlockRight.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      if (modulator_isWireConnected) {
        alert('outpu of differentiator')
      }
      else {
        alert('please connect the wires')
      }
      model.value = "mode"
    }
    modulator_isDifferentiatorMoving = false
    differentiator_isDifferentiatorMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// ENVELOPEDETECTOR
envelopeDetector.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/envelopeDetector.png');
  imgBlock.setAttribute('class', 'envelopeDetector--block');
  simulationArea.appendChild(imgBlock);
}

envelopeDetector.onmouseup = () => {
  let envelopeDetector = document.querySelector('.envelopeDetector--block')

  envelopeDetector.style.position = 'absolute';
  envelopeDetector.style.zIndex = 1000;

  envelopeDetectorBlockLeft.style.position = 'absolute';
  envelopeDetectorBlockLeft.style.zIndex = '1000';
  envelopeDetectorBlockLeft.style.display = 'block';

  envelopeDetectorBlockRight.style.position = 'absolute';
  envelopeDetectorBlockRight.style.zIndex = '1000';
  envelopeDetectorBlockRight.style.display = 'block';

  function onMouseMove(event) {
    envelopeDetector.style.left = event.pageX - envelopeDetector.offsetWidth / 2 + 'px';
    envelopeDetector.style.top = event.pageY - envelopeDetector.offsetHeight / 2 + 'px';

    envelopeDetectorBlockLeft.style.left = event.pageX - 53 - envelopeDetectorBlockLeft.offsetWidth / 2 + 'px';
    envelopeDetectorBlockLeft.style.top = event.pageY + 1 - envelopeDetectorBlockLeft.offsetHeight / 2 + 'px';
    envelopeDetectorBlockRight.style.left = event.pageX + 53 - envelopeDetectorBlockRight.offsetWidth / 2 + 'px';
    envelopeDetectorBlockRight.style.top = event.pageY + 1 - envelopeDetectorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  envelopeDetector.ondblclick = () => {
    dcLimiter_envelopeDetectorMoving = true;
    envelope_isEnvelopeDetectorMoving = true;
    document.addEventListener('mousemove', onMouseMove);
  }

  envelopeDetector.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.envelopeDetector--block'));
      envelopeDetectorBlockLeft.style.display = 'none';
      envelopeDetectorBlockRight.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      if (dcLimiter_isWireConnected) {
        alert('output of the dc limiter')
      } else {
        alert('please connect the wires')
      }
      model.value = "mode"
    }
    dcLimiter_envelopeDetectorMoving = false;
    envelope_isEnvelopeDetectorMoving = false;
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// DCLIMITEDCIRCUIT
dcLimitedCircuit.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/d.png');
  imgBlock.setAttribute('class', 'dcLimitedCircuit--block');
  simulationArea.appendChild(imgBlock);
}

dcLimitedCircuit.onmouseup = () => {
  let dcLimitedCircuit = document.querySelector('.dcLimitedCircuit--block')

  dcLimitedCircuit.style.position = 'absolute';
  dcLimitedCircuit.style.zIndex = 1000;

  dcLimitedCircuitBlockLeft.style.position = 'absolute';
  dcLimitedCircuitBlockLeft.style.zIndex = '1000';
  dcLimitedCircuitBlockLeft.style.display = 'block';

  dcLimitedCircuitBlockRight.style.position = 'absolute';
  dcLimitedCircuitBlockRight.style.zIndex = '1000';
  dcLimitedCircuitBlockRight.style.display = 'block';


  function onMouseMove(event) {
    dcLimitedCircuit.style.left = event.pageX - dcLimitedCircuit.offsetWidth / 2 + 'px';
    dcLimitedCircuit.style.top = event.pageY - dcLimitedCircuit.offsetHeight / 2 + 'px';

    dcLimitedCircuitBlockLeft.style.left = event.pageX - 53 - dcLimitedCircuitBlockLeft.offsetWidth / 2 + 'px';
    dcLimitedCircuitBlockLeft.style.top = event.pageY + 1 - dcLimitedCircuitBlockLeft.offsetHeight / 2 + 'px';
    dcLimitedCircuitBlockRight.style.left = event.pageX + 53 - dcLimitedCircuitBlockRight.offsetWidth / 2 + 'px';
    dcLimitedCircuitBlockRight.style.top = event.pageY + 1 - dcLimitedCircuitBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  dcLimitedCircuit.ondblclick = () => {
    differentiator_isDcLimiterMoving = true
    dcLimiter_isdcLimiterMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  dcLimitedCircuit.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.dcLimitedCircuit--block'));
      dcLimitedCircuitBlockLeft.style.display = 'none';
      dcLimitedCircuitBlockRight.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      if (differentiator_isWireConnected) {
        alert('output of dc limiter')
      } else {
        alert('Please connect the wires')
      }
      model.value = "mode"
    }
    differentiator_isDcLimiterMoving = false
    dcLimiter_isdcLimiterMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}

// PARAMETEREXTRACTION
parameterExtraction.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/parameterExtraction.png');
  imgBlock.setAttribute('class', 'parameterExtraction--block');
  simulationArea.appendChild(imgBlock);
}

parameterExtraction.onmouseup = () => {
  let parameterExtraction = document.querySelector('.parameterExtraction--block')

  parameterExtraction.style.position = 'absolute';
  parameterExtraction.style.zIndex = 1000;

  parameterExtractionBlockLeft.style.position = 'absolute';
  parameterExtractionBlockLeft.style.zIndex = '1000';
  parameterExtractionBlockLeft.style.display = 'block';



  function onMouseMove(event) {
    parameterExtraction.style.left = event.pageX - parameterExtraction.offsetWidth / 2 + 'px';
    parameterExtraction.style.top = event.pageY - parameterExtraction.offsetHeight / 2 + 'px';

    parameterExtractionBlockLeft.style.left = event.pageX - 53 - parameterExtractionBlockLeft.offsetWidth / 2 + 'px';
    parameterExtractionBlockLeft.style.top = event.pageY + 1 - parameterExtractionBlockLeft.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  parameterExtraction.ondblclick = () => {
    envelope_ParameterExtractionMoving = true
    document.addEventListener('mousemove', onMouseMove);
  }

  parameterExtraction.onclick = () => {
    if (model.value === "Delete") {
      document.getElementsByClassName('simulation-area')[0].removeChild(
        document.querySelector('.parameterExtraction--block'));
      parameterExtractionBlockLeft.style.display = 'none';
      model.value = "mode"
    }
    // else if (model.value === "Edit") {
    //   model.value = "mode"
    // }
    else if (model.value === "output") {
      if (envelope_isWireConnected) {
        alert('output of the parameterExtraction')
      } else {
        alert('please connect the wires')
      }
      model.value = "mode"
    }
    envelope_ParameterExtractionMoving = false
    document.removeEventListener('mousemove', onMouseMove)
  }
}



