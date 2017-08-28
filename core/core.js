"use strict";

(function(win, doc, pc){

  function emacheck() {
      try { eval("var foo = (x)=>x+1"); }
      catch (e) { return false; }
      return true;
  }
  
  if(!emacheck()) return alert("Sigh.. Please update your browser please!. I'm begging you.");

  var canvas = doc.getElementsByClassName('game')[0];
  if(!canvas) return console.log("Failed to find canvas");
  
  var gz = new pc.Application(canvas, {});
  
  // gz.start();
  
  gz.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
  gz.setCanvasResolution(pc.RESOLUTION_AUTO);
  
  win.onresize = () => gz.resizeCanvas();

})(window, document, pc);
