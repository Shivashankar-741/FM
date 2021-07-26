let modulatingFrequency = document.querySelector("#modulatingFrequency")
let modulatingAmplitute = document.querySelector("#modulatingAmplitute")
let modulatingSubmit = document.querySelector("#modulatingSubmit")
let carrierFrequency = document.querySelector("#carrierFrequency")
let carrierAmplitute = document.querySelector("#carrierAmplitute")
let carrierSubmit = document.querySelector("#carrierSubmit")
let simulationArea = document.querySelector(".simulation-area")

let integrator = document.querySelector('#integrator');
let multiplier = document.querySelector('#multiplier');
let modulator = document.querySelector('#modulator');
let differentiator = document.querySelector('#differentiator');
let envelopeDetector = document.querySelector('#envelopeDetector');
let dcLimitedCircuit = document.querySelector('#dcLimitedCircuit');
let parameterExtraction = document.querySelector('#parameterExtraction');

let modulatingSignalRight = document.querySelector('.modulatingSignal--block__right')
let carrierSignalRight = document.querySelector('.carrierSignal--block__right')
let integratorBlockLeft = document.querySelector('.integrator--block__left')
let integratorBlockBottom = document.querySelector('.integrator--block__bottom')
let multiplierBlockTop = document.querySelector('.multiplier--block__top')
let multiplierBlockLeft = document.querySelector('.multiplier--block__left')
let multiplierBlockBottom = document.querySelector('.multiplier--block__bottom')
let modulatorBlockTop = document.querySelector('.modulator--block__top')
let modulatorBlockRight = document.querySelector('.modulator--block__right')
let differentiatorBlockLeft = document.querySelector('.differentiator--block__left')
let differentiatorBlockRight = document.querySelector('.differentiator--block__right')
let dcLimitedCircuitBlockLeft = document.querySelector('.dcLimitedCircuit--block__left')
let dcLimitedCircuitBlockRight = document.querySelector('.dcLimitedCircuit--block__right')
let envelopeDetectorBlockLeft = document.querySelector('.envelopeDetector--block__left')
let envelopeDetectorBlockRight = document.querySelector('.envelopeDetector--block__right')
let parameterExtractionBlockLeft = document.querySelector('.parameterExtraction--block__left')

// INTEGRATOR
integrator.onmousedown = () => {
  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/integrator.png');
  imgBlock.setAttribute('class', 'integrator--block');
  simulationArea.appendChild(imgBlock);
}

integrator.onmouseup = () => {
  let integrator = document.querySelector('.integrator--block')
  console.log('mouse up');
  console.log(integrator);

  integrator.style.position = 'absolute';
  integrator.style.zIndex = 1000;

  integratorBlockLeft.style.position = 'absolute';
  integratorBlockLeft.style.zIndex = '1000';
  integratorBlockLeft.style.display = 'block';

  integratorBlockBottom.style.position = 'absolute';
  integratorBlockBottom.style.zIndex = '1000';
  integratorBlockBottom.style.display = 'block';

  function onMouseMove(event) {
    console.log(event);
    integrator.style.left = event.pageX - integrator.offsetWidth / 2 + 'px';
    integrator.style.top = event.pageY - integrator.offsetHeight / 2 + 'px';
    integratorBlockLeft.style.left = event.pageX - 53 - integratorBlockLeft.offsetWidth / 2 + 'px';
    integratorBlockLeft.style.top = event.pageY + 1 - integratorBlockLeft.offsetHeight / 2 + 'px';
    integratorBlockBottom.style.left = event.pageX + 0 - integratorBlockBottom.offsetWidth / 2 + 'px';
    integratorBlockBottom.style.top = event.pageY + 38 - integratorBlockBottom.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  integrator.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  integrator.onclick = () => {
    console.log('text click');
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
  console.log('mouse up');
  console.log(multiplier);

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
    console.log(event);
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
    document.addEventListener('mousemove', onMouseMove);
  }

  multiplier.onclick = () => {
    console.log('text click');
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
  console.log('mouse up');
  console.log(modulator);

  modulator.style.position = 'absolute';
  modulator.style.zIndex = 1000;

  modulatorBlockTop.style.position = 'absolute';
  modulatorBlockTop.style.zIndex = 1000;
  modulatorBlockTop.style.display = 'block';

  modulatorBlockRight.style.position = 'absolute';
  modulatorBlockRight.style.zIndex = 1000;
  modulatorBlockRight.style.display = 'block';

  multiplierBlockLeft.style.position = 'absolute';
  multiplierBlockLeft.style.zIndex = 1000;
  multiplierBlockLeft.style.display = 'block';


  function onMouseMove(event) {
    console.log(event);
    modulator.style.left = event.pageX - modulator.offsetWidth / 2 + 'px';
    modulator.style.top = event.pageY - modulator.offsetHeight / 2 + 'px';

    modulatorBlockTop.style.left = event.pageX + 0 - modulatorBlockTop.offsetWidth / 2 + 'px';
    modulatorBlockTop.style.top = event.pageY - 38 - modulatorBlockTop.offsetHeight / 2 + 'px';

    multiplierBlockLeft.style.left = event.pageX - 53 - multiplierBlockLeft.offsetWidth / 2 + 'px';
    multiplierBlockLeft.style.top = event.pageY + 1 - multiplierBlockLeft.offsetHeight / 2 + 'px';
    modulatorBlockRight.style.left = event.pageX + 53 - modulatorBlockRight.offsetWidth / 2 + 'px';
    modulatorBlockRight.style.top = event.pageY + 1 - modulatorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  modulator.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  modulator.onclick = () => {
    console.log('text click');
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
  console.log('mouse up');
  console.log(differentiator);

  differentiator.style.position = 'absolute';
  differentiator.style.zIndex = 1000;

  console.log('first');

  differentiatorBlockLeft.style.position = 'absolute';
  differentiatorBlockLeft.style.zIndex = '1000';
  differentiatorBlockLeft.style.display = 'block';

  differentiatorBlockRight.style.position = 'absolute';
  differentiatorBlockRight.style.zIndex = '1000';
  differentiatorBlockRight.style.display = 'block';

  console.log('second');

  function onMouseMove(event) {
    console.log(event);
    differentiator.style.left = event.pageX - differentiator.offsetWidth / 2 + 'px';
    differentiator.style.top = event.pageY - differentiator.offsetHeight / 2 + 'px';

    differentiatorBlockLeft.style.left = event.pageX - 53 - differentiatorBlockLeft.offsetWidth / 2 + 'px';
    differentiatorBlockLeft.style.top = event.pageY + 1 - differentiatorBlockLeft.offsetHeight / 2 + 'px';
    differentiatorBlockRight.style.left = event.pageX + 53 - differentiatorBlockRight.offsetWidth / 2 + 'px';
    differentiatorBlockRight.style.top = event.pageY + 1 - differentiatorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  differentiator.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  differentiator.onclick = () => {
    console.log('text click');
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
  console.log('mouse up');
  console.log(envelopeDetector);

  envelopeDetector.style.position = 'absolute';
  envelopeDetector.style.zIndex = 1000;

  envelopeDetectorBlockLeft.style.position = 'absolute';
  envelopeDetectorBlockLeft.style.zIndex = '1000';
  envelopeDetectorBlockLeft.style.display = 'block';

  envelopeDetectorBlockRight.style.position = 'absolute';
  envelopeDetectorBlockRight.style.zIndex = '1000';
  envelopeDetectorBlockRight.style.display = 'block';

  function onMouseMove(event) {
    console.log(event);
    envelopeDetector.style.left = event.pageX - envelopeDetector.offsetWidth / 2 + 'px';
    envelopeDetector.style.top = event.pageY - envelopeDetector.offsetHeight / 2 + 'px';

    envelopeDetectorBlockLeft.style.left = event.pageX - 53 - envelopeDetectorBlockLeft.offsetWidth / 2 + 'px';
    envelopeDetectorBlockLeft.style.top = event.pageY + 1 - envelopeDetectorBlockLeft.offsetHeight / 2 + 'px';
    envelopeDetectorBlockRight.style.left = event.pageX + 53 - envelopeDetectorBlockRight.offsetWidth / 2 + 'px';
    envelopeDetectorBlockRight.style.top = event.pageY + 1 - envelopeDetectorBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  envelopeDetector.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  envelopeDetector.onclick = () => {
    console.log('text click');
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
  console.log('mouse up');
  console.log(dcLimitedCircuit);

  dcLimitedCircuit.style.position = 'absolute';
  dcLimitedCircuit.style.zIndex = 1000;

  dcLimitedCircuitBlockLeft.style.position = 'absolute';
  dcLimitedCircuitBlockLeft.style.zIndex = '1000';
  dcLimitedCircuitBlockLeft.style.display = 'block';

  dcLimitedCircuitBlockRight.style.position = 'absolute';
  dcLimitedCircuitBlockRight.style.zIndex = '1000';
  dcLimitedCircuitBlockRight.style.display = 'block';


  function onMouseMove(event) {
    console.log(event);
    dcLimitedCircuit.style.left = event.pageX - dcLimitedCircuit.offsetWidth / 2 + 'px';
    dcLimitedCircuit.style.top = event.pageY - dcLimitedCircuit.offsetHeight / 2 + 'px';

    dcLimitedCircuitBlockLeft.style.left = event.pageX - 53 - dcLimitedCircuitBlockLeft.offsetWidth / 2 + 'px';
    dcLimitedCircuitBlockLeft.style.top = event.pageY + 1 - dcLimitedCircuitBlockLeft.offsetHeight / 2 + 'px';
    dcLimitedCircuitBlockRight.style.left = event.pageX + 53 - dcLimitedCircuitBlockRight.offsetWidth / 2 + 'px';
    dcLimitedCircuitBlockRight.style.top = event.pageY + 1 - dcLimitedCircuitBlockRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  dcLimitedCircuit.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  dcLimitedCircuit.onclick = () => {
    console.log('text click');
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
  console.log('mouse up');
  console.log(parameterExtraction);

  parameterExtraction.style.position = 'absolute';
  parameterExtraction.style.zIndex = 1000;



  parameterExtractionBlockLeft.style.position = 'absolute';
  parameterExtractionBlockLeft.style.zIndex = '1000';
  parameterExtractionBlockLeft.style.display = 'block';



  function onMouseMove(event) {
    console.log(event);
    parameterExtraction.style.left = event.pageX - parameterExtraction.offsetWidth / 2 + 'px';
    parameterExtraction.style.top = event.pageY - parameterExtraction.offsetHeight / 2 + 'px';

    parameterExtractionBlockLeft.style.left = event.pageX - 53 - parameterExtractionBlockLeft.offsetWidth / 2 + 'px';
    parameterExtractionBlockLeft.style.top = event.pageY + 1 - parameterExtractionBlockLeft.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  parameterExtraction.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  parameterExtraction.onclick = () => {
    console.log('text click');
    document.removeEventListener('mousemove', onMouseMove)
  }
}


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

modulatingSubmit.onmousedown = () => {
  console.log('mouse down');
  obj.modulating.frequency = parseInt(modulatingFrequency.value);
  obj.modulating.amplitude = parseInt(modulatingAmplitute.value);

  let imgBlock = document.createElement("img");
  imgBlock.setAttribute('src', '../blockImages/modulatingSignal.png');
  imgBlock.setAttribute('class', 'modulating__signal--block');
  simulationArea.appendChild(imgBlock);
}

modulatingSubmit.onmouseup = () => {
  let modulatingSignal = document.querySelector('.modulating__signal--block')
  console.log('mouse up');
  console.log(modulatingSignal);

  modulatingSignal.style.position = 'absolute';
  modulatingSignal.style.zIndex = 1000;


  modulatingSignalRight.style.position = 'absolute';
  modulatingSignalRight.style.zIndex = 1000;
  modulatingSignalRight.style.display = 'block';

  function onMouseMove(event) {
    console.log(event);
    modulatingSignal.style.left = event.pageX - modulatingSignal.offsetWidth / 2 + 'px';
    modulatingSignal.style.top = event.pageY - modulatingSignal.offsetHeight / 2 + 'px';

    modulatingSignalRight.style.left = event.pageX + 53 - modulatingSignalRight.offsetWidth / 2 + 'px';
    modulatingSignalRight.style.top = event.pageY + 1 - modulatingSignalRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  modulatingSignal.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  modulatingSignal.onclick = () => {
    console.log('text click');
    document.removeEventListener('mousemove', onMouseMove)
  }
}


// carrierSubmit.addEventListener('click', () => {
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
  console.log('mouse up');
  console.log(carrierSignal);

  carrierSignal.style.position = 'absolute';
  carrierSignal.style.zIndex = 1000;


  carrierSignalRight.style.position = 'absolute';
  carrierSignalRight.style.zIndex = 1000;
  carrierSignalRight.style.display = 'block';

  function onMouseMove(event) {
    console.log(event);
    carrierSignal.style.left = event.pageX - carrierSignal.offsetWidth / 2 + 'px';
    carrierSignal.style.top = event.pageY - carrierSignal.offsetHeight / 2 + 'px';

    carrierSignalRight.style.left = event.pageX + 53 - carrierSignalRight.offsetWidth / 2 + 'px';
    carrierSignalRight.style.top = event.pageY + 1 - carrierSignalRight.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  carrierSignal.ondblclick = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  carrierSignal.onclick = () => {
    console.log('text click');
    document.removeEventListener('mousemove', onMouseMove)
  }
}

console.log(obj);

const canvasEle = document.getElementById('drawContainer');
const context = canvasEle.getContext('2d');
let startPosition = { x: 0, y: 0 };
let lineCoordinates = { x: 0, y: 0 };
let isDrawStart = false;

const getClientOffset = (event) => {
  const { pageX, pageY } = event.touches ? event.touches[0] : event;
  const x = pageX - canvasEle.offsetLeft;
  const y = pageY - canvasEle.offsetTop;

  return {
    x,
    y
  }
}

const drawLine = () => {
  context.beginPath();
  context.moveTo(startPosition.x, startPosition.y);
  context.lineTo(lineCoordinates.x, lineCoordinates.y);
  context.stroke();
}

const mouseDownListener = (event) => {
  startPosition = getClientOffset(event);
  isDrawStart = true;
}

const mouseMoveListener = (event) => {
  if (!isDrawStart) return;

  lineCoordinates = getClientOffset(event);
  clearCanvas();
  drawLine();
}

const mouseupListener = (event) => {
  isDrawStart = false;
}

const clearCanvas = () => {
  context.clearRect(0, 0, canvasEle.width, canvasEle.height);
}

canvasEle.addEventListener('mousedown', mouseDownListener);
canvasEle.addEventListener('mousemove', mouseMoveListener);
canvasEle.addEventListener('mouseup', mouseupListener);

canvasEle.addEventListener('touchstart', mouseDownListener);
canvasEle.addEventListener('touchmove', mouseMoveListener);
canvasEle.addEventListener('touchend', mouseupListener);