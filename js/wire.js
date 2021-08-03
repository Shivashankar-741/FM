export function wire(pageX, pageY, modSig_canvasx, modSig_canvasy, modSig_initial_mousex,
  modSig_initial_mousey, modSig_WireBwModulatingtoIntegrator,
  modSig_isWireConnected) {
  modSig_initial_mousex = parseInt(pageX - modSig_canvasx);
  modSig_initial_mousey = parseInt(pageY - modSig_canvasy);
  modSig_WireBwModulatingtoIntegrator = true;
  modSig_isWireConnected = true

  return modSig_initial_mousex,
    modSig_initial_mousey,
    modSig_WireBwModulatingtoIntegrator,
    modSig_isWireConnected;
}