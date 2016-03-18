function meretal14Marker_class(label,origSlice,xySvg) {
  sbaMarker_class.apply(this,[label,origSlice,xySvg]);
}
meretal14Marker_class.prototype = new sbaMarker_class();

meretal14Marker_class.prototype.onclick = function(ev,dim) {
  var state = sbaViewer.getState();
  state.acr = this.label;
  state.origSlice = this.origSlice;
  sbaViewer.applyStateChange(state);
}

function meretal14Plugin_class(name,sbaViewer) {
  sbaPlugin_class.apply(this,[name]);
  this.acr = null;
  this.brainMap = 'MERetal14';
  this.outgoingProjections = true;
}
meretal14Plugin_class.prototype = new sbaPlugin_class();

meretal14Plugin_class.prototype.activate = function(sbaViewer,divElem) {
  var sbaAcr = sbaViewer.currentAcr;
  if (sbaAcr != undefined) {
    this.acr = sbaAcr;
    // progress message
    divElem.innerHTML = '<b>Ipsilateral <select onchange="sbaPluginManager.getPlugin(\'meretal14\').setDirection(this)"><option value="in">Incoming</option><option value="out" selected="1">Outgoing</option></select> projections for region '+this.acr+'</b><br/><a href="#metetal14_cite">terms of use</a>&#160;|&#160;<a href="#metetal14_about">about</a>&#160;|&#160;<a href="#metetal14_download">download</a><br/><br/><div id="SBA_CONNECTIVITY">...</div><p><a name="metetal14_about"/><b>About: </b>Connectivity data based on retrograde tracing studies described in the reference below. FLNe is the fraction of labelled neurons, excluding the injected region itself.</p><p><a name="metetal14_cite"/><b>Terms of use: </b>When using this data, cite: Markov NT, Ercsey-Ravasz MM, Ribeiro Gomes AR, et al. (2014) Cereb Cortex. 24(1):17-36, doi: <a href="http://dx.doi.org/10.1093/cercor/bhs270">10.1093/cercor/bhs270</a>.</p><p><a name="metetal14_download"></a><b>Downloads: </b>FLNe data as a <a href="../templates/MERetal14_on_F99/flne_matrix_annotated.csv">comma separated matrix</a>. Check for updates at <a href="http://www.core-nets.org/">core-nets.org</a>.</p>';
    this.retrieveConnectivity(this.acr);
  }
}

meretal14Plugin_class.prototype.setDirection = function(callerElem) {
  this.outgoingProjections = (callerElem.options[callerElem.selectedIndex].value == 'out');
  this.retrieveConnectivity(this.acr);
}

meretal14Plugin_class.prototype.retrieveConnectivity = function(originSite) {
  var divElem = document.getElementById('SBA_CONNECTIVITY');
  if (!divElem) return;
  var flnData = [[0,"7.75e-01","1.79e-02",0,0,"5.37e-05",0,"1.81e-05","1.19e-05",0,0,0,0,0,0,0,0,0,0,0,0,0,"1.43e-04",0,0,0,0,"1.90e-02","2.68e-05"],["6.83e-01",0,"4.36e-01","2.43e-02","1.78e-03","3.41e-05","1.23e-04","3.61e-05","7.94e-02",0,0,"3.98e-05","5.28e-06",0,"3.88e-04","1.12e-05","1.75e-04",0,0,0,"9.04e-05",0,"3.49e-03",0,"2.24e-03",0,"1.87e-05","1.19e-01","1.45e-03"],["2.04e-01","1.70e-01",0,"2.56e-01","8.55e-05",0,"1.10e-04","3.01e-03","3.38e-01",0,0,0,"2.64e-06",0,"1.36e-03","2.24e-05","2.74e-02",0,0,0,0,0,"1.21e-02",0,0,"7.73e-06",0,"3.81e-01","3.66e-04"],["2.48e-02","1.09e-03","2.39e-01",0,"7.77e-06",0,0,"2.30e-03","3.38e-04",0,0,0,"5.28e-06",0,"1.66e-04",0,"1.38e-01",0,0,0,"4.52e-05",0,"1.47e-03",0,"1.66e-05",0,0,"3.82e-02",0],[0,0,"7.24e-06","2.57e-05",0,"3.41e-05","3.78e-02","2.27e-03","7.83e-04",0,0,"2.52e-04","9.91e-05","2.04e-04","2.24e-03","4.07e-03",0,"5.11e-03",0,"1.66e-04","2.51e-02",0,"1.03e-02","1.46e-02","6.04e-01","8.70e-02","3.76e-03","5.96e-06","2.16e-02"],[0,0,0,"3.85e-05","6.37e-04",0,"7.03e-03","1.31e-03","1.59e-05","1.42e-01","6.84e-03","3.66e-02",0,0,"1.01e-03",0,"7.52e-06","2.21e-02","9.00e-03","4.19e-02","2.14e-03","3.17e-01","1.27e-02","1.80e-02","4.98e-05","7.73e-06","1.37e-05","2.98e-06","2.98e-05"],[0,"5.73e-05",0,0,"2.22e-01","4.39e-05",0,"1.94e-02","1.90e-03",0,0,"1.86e-04","3.43e-04","4.30e-05","6.88e-03","4.36e-04","2.51e-05","2.77e-05","4.50e-05","2.54e-04","3.86e-02",0,"4.15e-01","3.47e-02","3.16e-02","4.91e-02","2.80e-03","6.28e-04","1.86e-02"],[0,0,"4.28e-05","4.62e-04","7.31e-04","7.32e-05","1.64e-03",0,"1.18e-01","5.69e-06","1.51e-01","3.97e-01","1.88e-04",0,"1.41e-03","2.24e-05","2.02e-03","7.96e-03","3.60e-04","8.33e-03","2.12e-03","1.69e-05","1.51e-03","2.23e-02","5.15e-04","8.88e-04","1.48e-05","4.53e-04","7.85e-02"],["1.85e-04","2.67e-05","4.28e-05","1.17e-03","4.66e-05",0,"2.08e-04","2.05e-02",0,0,0,0,"3.70e-05",0,"1.94e-04","5.59e-05","8.02e-05",0,0,0,0,0,"5.21e-04",0,"2.57e-04","1.04e-04","7.39e-06","1.46e-02","1.34e-02"],[0,0,0,"3.85e-05","4.66e-05","2.03e-01","4.91e-05","1.81e-05",0,0,"3.63e-02","3.08e-03",0,0,"6.92e-05",0,0,"2.24e-03","1.25e-01",0,0,"2.79e-02","2.35e-04","1.81e-03","1.66e-05",0,0,"2.38e-05","1.19e-05"],[0,0,0,"2.57e-05","9.72e-04","9.76e-05","8.58e-05","1.02e-02",0,0,0,"2.18e-02",0,0,"2.77e-05",0,0,"2.56e-02","1.09e-01","1.88e-02","2.26e-05",0,"6.13e-05","7.02e-05",0,0,0,0,"7.11e-03"],[0,0,0,"2.57e-05","1.11e-03","7.72e-02","7.85e-04","5.51e-04",0,"2.03e-03","1.14e-02",0,0,0,"2.21e-04",0,0,"4.32e-03",0,"5.25e-05","5.65e-05","1.06e-03","3.06e-05","1.95e-02",0,0,0,0,"5.96e-06"],["2.00e-05","2.67e-05","2.89e-04","1.31e-03","1.52e-04","3.90e-05","1.47e-03","2.79e-03","7.95e-06",0,0,"1.59e-04",0,"2.21e-02","1.47e-02","6.96e-02","4.29e-04","2.77e-05",0,"4.38e-05","6.58e-03",0,"1.40e-03","2.90e-04","6.14e-04","1.91e-02","4.73e-02","2.43e-04","5.96e-05"],["1.34e-04","1.01e-04","3.85e-04","1.28e-04","6.50e-03","1.95e-05","1.44e-02","4.13e-02","4.77e-05",0,"2.01e-03","7.95e-05","2.33e-01",0,"4.19e-01","2.89e-01","2.51e-05","4.15e-05",0,"4.47e-04","1.17e-02",0,"5.75e-03","7.37e-04","1.32e-02","1.44e-02","1.30e-02","2.17e-04","8.93e-05"],["1.56e-03","8.54e-05","8.55e-05","1.92e-05","2.56e-02","4.88e-06","3.40e-02","1.31e-02","3.62e-04",0,0,"9.89e-03","2.93e-02","2.39e-01",0,"6.18e-02","5.01e-06","1.52e-04","9.00e-05","3.77e-04","1.84e-03",0,"1.21e-02","9.83e-04","4.44e-03","5.41e-05","6.70e-04","1.78e-03","1.17e-02"],[0,0,0,"5.13e-05","5.36e-04","3.90e-05","1.19e-03",0,0,0,0,0,"1.94e-01","3.15e-01","1.99e-02",0,"6.01e-05",0,0,"6.13e-05","2.55e-03",0,"9.81e-04","1.17e-05","4.65e-04","3.52e-04","1.30e-02","1.79e-05","5.96e-06"],["1.29e-03","1.76e-03","7.55e-02","2.31e-01",0,"3.90e-05","4.91e-05","2.72e-03","1.22e-03",0,0,0,"9.27e-04","1.50e-04","7.89e-04",0,0,0,0,0,0,0,"1.43e-04","1.05e-04","6.64e-05",0,"1.37e-05","1.36e-02","5.96e-06"],[0,0,0,0,"3.04e-03","8.51e-03","2.39e-03",0,"2.78e-05","2.39e-04",0,"3.98e-05","2.64e-04","1.40e-04","1.38e-05","1.09e-04",0,0,"4.32e-03","3.12e-02","9.32e-02","2.51e-03","2.42e-03","6.88e-03","3.04e-03","9.37e-02","1.68e-02",0,"1.65e-03"],[0,0,0,0,"5.44e-05","4.30e-03","8.58e-04","1.63e-04",0,"4.32e-04","3.37e-01","9.41e-04","1.06e-05",0,0,0,0,"1.12e-02",0,"1.63e-01","2.94e-04","6.76e-05","1.85e-03","5.85e-05","6.64e-05","7.73e-06","6.23e-06","2.98e-06","3.07e-04"],[0,0,0,"6.41e-06","2.23e-02","1.20e-03","2.16e-02","7.49e-03","1.54e-03",0,"1.18e-01","2.93e-03","1.58e-05",0,0,0,0,"4.91e-02","4.02e-01",0,"9.72e-02","1.13e-05","1.90e-02","5.17e-03","1.33e-04","8.50e-05","6.18e-05","5.96e-06","3.17e-02"],[0,0,0,"4.49e-05","5.54e-02","3.90e-05","1.08e-01","9.03e-05","5.68e-04",0,"3.14e-04",0,"5.02e-05","8.60e-05","7.47e-04","1.31e-04",0,"8.05e-02","3.34e-03","2.43e-02",0,0,"2.61e-02","8.75e-03","7.37e-03","1.51e-01","3.27e-03",0,"1.34e-02"],[0,0,0,"1.28e-05","3.30e-04","4.55e-02","5.76e-04",0,0,"4.24e-02",0,"6.63e-04",0,0,0,"8.39e-06",0,"2.20e-03","3.60e-04","7.88e-05","1.81e-04",0,"1.75e-03","9.21e-03",0,0,0,"2.98e-06",0],["3.19e-04","1.23e-04","1.99e-03","6.08e-03","1.47e-02","8.83e-04","1.85e-01","3.61e-04",0,0,0,0,"4.75e-05",0,"4.84e-04","2.80e-06","4.59e-03","8.31e-05",0,"1.75e-05","3.19e-03",0,0,"3.08e-03","6.64e-05","9.35e-04","5.49e-05","2.28e-03","5.78e-04"],[0,0,"3.21e-05","3.91e-04","1.68e-02","2.84e-03","9.25e-02","3.80e-03",0,"1.04e-02",0,"1.27e-02","5.22e-04",0,0,0,"1.42e-03","7.48e-04",0,"2.54e-04","3.83e-03","2.01e-02","2.49e-02",0,"1.16e-04","1.47e-04","2.40e-05","3.87e-05","1.24e-03"],[0,0,0,"1.28e-05","1.96e-01","9.76e-05","1.12e-01","1.46e-02","7.55e-04","1.14e-05","1.88e-04",0,"9.75e-03","3.62e-03","6.87e-03","4.12e-03","1.50e-05","4.85e-04",0,0,"9.04e-04","1.13e-05","3.91e-02","3.85e-02",0,"3.99e-02","2.41e-01",0,"4.29e-03"],[0,0,0,"1.28e-05","7.10e-02","4.39e-05","1.71e-02","7.52e-03","1.12e-03",0,0,0,"5.81e-04","2.15e-04","8.03e-04","8.98e-04",0,"4.29e-02","3.60e-04","1.31e-04","1.03e-01",0,"2.06e-02","1.65e-02","3.92e-02",0,"1.96e-02",0,"3.84e-02"],[0,0,0,0,"7.89e-03","9.27e-05","2.11e-03",0,0,0,0,0,"3.23e-02","2.40e-02","1.43e-03","8.73e-03",0,"1.52e-04",0,0,"1.49e-03",0,"5.31e-04","2.40e-04","7.51e-02","1.32e-01",0,0,0],["5.20e-02","2.99e-02","1.02e-01","2.44e-02","2.25e-04",0,"6.87e-04","5.42e-05","1.62e-01",0,0,"1.70e-03","1.32e-05","4.30e-05","7.20e-04",0,"1.50e-05",0,0,"8.76e-06",0,0,"2.03e-02",0,"1.66e-05",0,0,0,"9.14e-04"],[0,0,0,"5.13e-05","3.45e-02","4.88e-06","5.15e-04","2.11e-02","2.35e-04",0,"1.82e-03","1.86e-02",0,0,"4.15e-05","2.13e-04",0,"1.95e-02",0,"7.47e-03","5.63e-03",0,"1.02e-04","7.78e-04","7.47e-04","2.65e-03",0,0,0],["9.48e-03","1.04e-02","1.49e-02","1.23e-01","4.66e-05","4.88e-06","4.91e-05",0,"5.04e-03",0,0,0,0,0,0,0,"1.90e-04",0,0,0,0,0,"5.42e-03","1.17e-05","1.16e-04",0,0,"5.10e-02","1.79e-05"],["1.34e-03","9.24e-04","1.50e-04","4.94e-04",0,0,"1.23e-05","3.61e-05","3.20e-02",0,0,0,0,0,"2.77e-05",0,"3.51e-04",0,0,0,0,0,"4.29e-04",0,0,0,0,"3.35e-02","1.73e-04"],["6.99e-04","1.86e-03","4.02e-03","5.87e-03",0,0,"1.47e-04",0,"7.91e-03",0,0,0,0,"3.22e-05",0,0,"5.76e-05",0,0,0,0,0,"3.06e-04",0,0,0,0,"7.71e-02",0],["1.91e-03","4.97e-04","1.63e-03","7.90e-03","2.43e-03","5.66e-03","6.28e-03","1.29e-01","2.02e-02","1.57e-03","2.95e-03","5.78e-02","1.20e-04","4.30e-05","2.79e-02","8.39e-06","2.83e-03","2.22e-04",0,"7.01e-05","4.41e-04","6.08e-04","2.92e-02","1.61e-02","3.32e-05","5.72e-04","3.43e-06","2.29e-02","3.11e-02"],["2.26e-03","4.43e-04","8.55e-04","1.71e-03","1.55e-05",0,"3.68e-05","3.16e-04","3.71e-02",0,0,0,0,0,"4.79e-03",0,"1.10e-04",0,0,0,0,0,"3.15e-03",0,0,0,"8.17e-05","9.32e-03","4.77e-03"],["3.29e-04","3.10e-04","7.70e-04","4.55e-03","4.59e-04",0,"4.16e-03","1.07e-02","8.98e-04",0,0,"5.44e-04","3.33e-02","4.30e-03","1.17e-02","2.42e-03","4.44e-04",0,0,"1.23e-04","2.86e-03","2.25e-05","4.89e-03","5.33e-03","2.97e-03","3.97e-03","1.27e-03","6.07e-03","6.25e-04"],["1.44e-04","1.07e-04","1.92e-03","5.59e-03",0,0,"9.81e-05","2.35e-03","7.79e-04",0,0,0,"2.09e-02","1.16e-03","6.04e-03","6.43e-05","6.35e-03","2.77e-05",0,"5.25e-05","2.98e-03",0,"2.02e-03","8.97e-03",0,"7.11e-04","4.12e-05","1.33e-03","1.37e-04"],["6.74e-03","1.58e-03","1.46e-02","6.98e-02","2.88e-04",0,"2.78e-03","8.66e-03","1.04e-02",0,0,0,"2.26e-03",0,"6.09e-03","1.01e-04","1.05e-03",0,0,0,"7.91e-05",0,"3.31e-03","2.34e-05",0,"2.20e-04","2.16e-04","6.19e-02","5.36e-05"],["1.91e-03","2.46e-04","8.55e-05","5.84e-04","1.96e-03",0,"2.10e-03","1.26e-01","5.18e-02",0,"3.14e-04","1.30e-02","1.83e-02","7.11e-02","1.81e-01","1.09e-04","1.00e-05","1.66e-04","1.91e-04","4.03e-04","6.33e-04",0,"5.40e-03","5.73e-04","1.66e-05",0,"2.06e-05","5.74e-03","7.99e-02"],["3.60e-04","8.54e-04","1.04e-02","4.03e-02",0,"1.46e-05","2.45e-05","2.29e-03","7.87e-03",0,0,0,"2.06e-04",0,"3.05e-04",0,"1.74e-02",0,0,0,0,0,"2.63e-03","2.34e-05","1.66e-05",0,0,"8.84e-02",0],["6.17e-04","4.27e-04","6.62e-03","1.75e-02","7.77e-06","7.32e-05","2.45e-05","3.88e-03","5.56e-05","8.07e-04","1.26e-04","7.95e-05","9.93e-03","8.60e-05","6.51e-04","1.18e-03","3.51e-02",0,0,"3.50e-05","5.65e-05","1.25e-03","1.33e-04","2.19e-03","3.32e-05","3.48e-05","1.79e-04","8.87e-04","1.79e-04"],["5.14e-05","4.27e-04","3.75e-03","8.81e-03","1.55e-05",0,0,0,"3.18e-05",0,0,0,"6.44e-04",0,"7.47e-04",0,"2.69e-01",0,0,0,0,0,"3.06e-05","2.34e-04",0,"1.55e-05","1.37e-05","1.06e-03",0],["4.52e-04","6.25e-04","2.74e-03","1.56e-02","7.77e-06","1.17e-04",0,"9.03e-05","4.77e-05","1.42e-04",0,0,"1.37e-02","1.72e-04","3.88e-04",0,"1.15e-01",0,0,0,"6.78e-05","3.83e-04","1.33e-04","4.33e-04",0,0,"4.81e-05","1.16e-03",0],["2.20e-03","1.16e-03","3.74e-02","9.08e-02",0,"9.76e-05","1.23e-05","7.74e-02","2.70e-02",0,0,"5.30e-05","1.61e-03",0,"1.40e-03",0,"3.90e-02","2.77e-05",0,0,0,0,"1.28e-03","7.02e-04","3.74e-05",0,"2.06e-05","1.89e-02","5.81e-04"],["2.26e-04","1.55e-04","3.81e-03","1.57e-02","1.17e-05","6.83e-05","3.68e-05","3.88e-04","3.70e-04","6.82e-05","2.51e-04","3.05e-04","4.48e-02","8.60e-05","5.12e-04",0,"6.52e-02",0,0,"5.25e-05","9.15e-04","1.15e-03","1.33e-04","1.14e-02",0,"9.27e-05","4.94e-04","2.27e-03",0],["2.48e-03","1.01e-04","9.58e-03","2.95e-02","7.77e-06","3.90e-05","1.35e-04","4.39e-03","2.15e-04",0,0,0,"3.94e-03","4.08e-04","3.74e-04",0,"2.44e-01",0,0,0,"2.26e-05",0,"9.19e-05","2.03e-02",0,"3.09e-05","4.12e-05","1.51e-02","1.79e-05"],["1.37e-03","1.15e-03","1.34e-02","1.46e-02",0,"9.76e-06","1.23e-05","8.31e-04","1.80e-02",0,0,"1.59e-04","1.50e-02","6.45e-04","9.14e-03","2.49e-02","1.62e-02",0,0,0,0,0,"1.27e-03","6.14e-05","8.30e-05","2.97e-04","3.30e-04","9.41e-03","5.84e-04"],["5.49e-05","1.60e-05",0,"3.85e-05","2.25e-04","3.90e-05","1.74e-03","4.52e-05",0,"9.10e-05","3.77e-04","5.04e-04","1.63e-02","1.16e-02","2.38e-02","9.18e-02","5.01e-06",0,"3.15e-04","3.07e-04","1.58e-03","2.25e-05","2.02e-03","3.51e-05",0,"3.86e-05","2.61e-04","8.04e-05","3.10e-04"],["1.10e-04",0,"2.14e-05","1.28e-05","7.00e-05","4.88e-05","1.17e-03","1.81e-05",0,"1.71e-05",0,"1.44e-03","7.07e-03","7.28e-02","5.58e-02","4.88e-02","1.50e-05","2.77e-05",0,0,0,0,"4.49e-04",0,0,"2.70e-05","4.60e-04","2.98e-06","3.33e-04"],["2.06e-05","5.34e-06",0,"7.70e-05","2.02e-03",0,"5.19e-03",0,"1.43e-04",0,0,"5.30e-05","8.54e-03","5.44e-02","9.00e-02","9.70e-02",0,0,0,0,"2.26e-05",0,"2.00e-03","2.05e-05","1.83e-04",0,"5.77e-04",0,"9.71e-04"],["8.89e-06",0,"1.38e-04","5.39e-04","5.87e-02","2.59e-04","7.09e-02",0,"4.41e-04",0,0,0,"5.81e-05",0,"6.78e-04","5.59e-06","1.92e-03","2.77e-05",0,"2.63e-05","2.30e-03",0,"1.23e-01","1.93e-03","4.24e-03","5.83e-04","1.06e-03","8.04e-05","3.68e-03"],["5.49e-05",0,0,0,"1.55e-05","5.37e-05","7.11e-04",0,0,0,0,0,"9.61e-04","1.90e-02","1.30e-02","8.21e-02","7.52e-06","2.77e-05",0,0,0,0,"6.95e-04",0,0,"1.55e-05","3.43e-05",0,0],["3.30e-04",0,0,0,"8.32e-04","3.41e-05","5.76e-04",0,0,"2.06e-03","1.02e-01","1.52e-01",0,0,"8.03e-04",0,0,"3.49e-03","6.60e-03","1.24e-02","3.84e-04","5.07e-05","1.12e-04","4.27e-04","1.66e-05",0,"4.08e-05",0,"5.42e-04"],["1.10e-04","2.79e-06",0,0,"8.39e-04",0,"8.58e-05","1.64e-01","9.54e-05",0,"6.21e-03","1.28e-02","1.32e-05","8.60e-05","4.48e-02","7.38e-04",0,0,0,"1.35e-02","1.74e-03",0,"4.29e-04","2.19e-03",0,0,0,"2.68e-05","3.70e-03"],[0,"5.87e-05",0,0,"7.62e-04",0,"7.48e-04","8.13e-05","9.14e-04","5.69e-06","1.68e-02","6.06e-02",0,0,"5.54e-05",0,0,"1.38e-04",0,"7.88e-05","1.13e-05",0,"1.63e-03","3.51e-05","1.66e-05",0,0,"1.49e-03","8.38e-03"],[0,"2.14e-05",0,0,"1.93e-02","1.46e-05","5.89e-04","7.83e-02","3.88e-02",0,0,"1.38e-03",0,0,"1.38e-05",0,0,"8.06e-03",0,0,0,0,"2.15e-04","8.19e-05","7.47e-05",0,0,"2.98e-06","4.34e-01"],[0,"1.60e-05",0,0,"9.64e-04","9.76e-06",0,"1.26e-04","2.02e-02",0,0,0,0,0,0,0,0,"1.38e-04",0,0,0,0,0,0,0,0,0,0,"2.32e-03"],[0,0,"6.42e-05","2.57e-05",0,"1.17e-04","6.13e-05","4.45e-03","4.61e-04","1.44e-03","3.77e-04",0,"3.86e-03",0,"5.81e-04","7.84e-03","3.43e-04",0,0,0,0,"2.25e-03","2.86e-04","2.34e-05","1.66e-05","1.55e-04","1.37e-04",0,"4.17e-05"],[0,0,"5.35e-05","1.28e-04","1.97e-03","6.56e-03","3.00e-03","1.27e-03","3.97e-06","3.00e-02","9.23e-03","1.46e-02","9.51e-04","6.23e-04","1.96e-02","1.31e-03","7.77e-05","1.75e-02","2.66e-03","6.48e-03","2.46e-03","2.50e-02","9.21e-03","1.01e-02","1.66e-05","1.00e-04","4.74e-04","4.47e-05","1.55e-04"],[0,0,"4.28e-05","4.17e-04","4.24e-03","1.37e-04","1.24e-01","1.35e-04","6.76e-04",0,0,"3.45e-04","7.82e-04",0,"7.47e-04","5.03e-05","6.49e-03","8.31e-05",0,"4.38e-05","6.39e-03",0,"6.82e-02","7.63e-03",0,"4.79e-04","1.32e-03","5.00e-04","1.13e-04"],[0,0,0,"1.92e-05","1.63e-04","4.88e-06","1.23e-05","3.61e-05","6.49e-03",0,"1.63e-03","7.14e-02",0,0,0,0,0,"8.24e-03",0,"2.21e-03",0,0,"8.17e-05",0,"1.66e-05",0,"1.02e-05","1.19e-05","2.74e-02"],[0,0,0,"2.89e-04","1.17e-04","4.88e-05","1.47e-04","3.79e-04",0,"4.83e-04","2.51e-04",0,"2.22e-01","1.30e-01","3.77e-03","1.40e-01","1.17e-03",0,0,"2.63e-05","5.99e-04","2.16e-03","5.01e-04","7.26e-04","1.66e-05","8.99e-03","3.04e-02","2.38e-05",0],[0,0,0,"4.49e-05","1.32e-04","2.44e-05","1.47e-04",0,0,0,0,0,"5.27e-03","8.81e-04","2.15e-04","7.58e-03","5.01e-06",0,0,"9.63e-05","5.65e-04",0,"3.27e-04","2.34e-05","3.32e-05","6.18e-05","3.43e-04",0,0],[0,0,0,"2.57e-05",0,"2.48e-03",0,0,0,"9.26e-03","2.51e-03",0,0,0,0,0,0,"2.77e-05","1.22e-03",0,"1.13e-05","2.25e-05",0,0,0,0,0,"2.98e-06","1.55e-04"],[0,0,0,"1.22e-04",0,"1.05e-02","2.45e-05",0,0,"2.40e-01","3.21e-02",0,0,0,0,0,"5.01e-06","5.26e-04","9.93e-03","5.80e-03","1.13e-04","1.13e-04","2.45e-04","3.51e-05","2.91e-05",0,0,0,"2.98e-05"],[0,0,0,"1.28e-05","8.22e-03","1.46e-04","2.58e-04","9.21e-02","2.02e-03",0,"8.86e-02","5.46e-03","5.48e-04","4.62e-04","3.09e-03","1.26e-02","7.52e-06","2.40e-02","3.21e-02","8.35e-02","3.04e-02",0,"7.56e-04","1.18e-02","1.38e-02","6.53e-03","2.77e-03","1.13e-04","9.12e-02"],[0,0,0,"7.70e-05","6.30e-04","7.56e-04","7.11e-04","9.03e-05",0,0,"6.28e-05",0,"8.45e-04",0,0,"1.23e-03","2.71e-04","4.36e-03",0,"3.15e-04","1.08e-02","2.13e-03","4.17e-03","1.63e-02","1.83e-04","2.54e-03","4.33e-04","1.04e-05","1.10e-03"],[0,0,0,"3.85e-05","5.17e-04","1.32e-04","1.02e-03","5.87e-03","9.06e-04","5.69e-05","1.26e-02","1.91e-03","1.29e-03",0,"4.57e-04","1.03e-03","3.51e-05","1.18e-01","4.24e-03","2.13e-02","6.48e-02","3.94e-05","2.32e-03","2.77e-03","3.32e-05","8.14e-03","4.41e-03","4.47e-06","1.01e-02"],[0,0,0,"1.92e-05","5.52e-04","5.02e-04","3.68e-04",0,0,"7.96e-05","6.03e-03","1.67e-03",0,"4.30e-05",0,"2.24e-05",0,"1.02e-01","2.08e-02","1.35e-01","1.78e-02","1.18e-04","1.05e-03","1.14e-03","1.66e-05","1.39e-04","1.37e-05",0,"9.13e-03"],[0,0,0,"3.85e-05","9.69e-02","1.12e-04","3.37e-02","1.45e-04","8.35e-05",0,0,"6.76e-04","8.70e-03","2.47e-03","2.99e-03","8.53e-04","4.09e-04","2.31e-03",0,"4.55e-04","1.48e-02","3.15e-04","1.11e-02","3.01e-01","5.84e-02","3.92e-02","2.95e-02",0,"5.78e-03"],[0,0,0,"1.92e-05","2.01e-02","2.93e-05","2.63e-02","1.35e-03","1.59e-05",0,0,0,"2.11e-03","3.87e-04","1.38e-05","3.69e-04","9.42e-04",0,0,0,"3.47e-02",0,"1.25e-02","5.70e-02","1.44e-03","2.78e-04","3.24e-03","2.98e-06",0],[0,0,0,"1.28e-05","9.49e-03","2.86e-03","1.58e-02",0,0,"5.69e-04",0,"2.72e-03","1.11e-04",0,0,0,"2.76e-05","1.60e-02","4.05e-04","6.83e-04","1.03e-02","1.13e-02","1.93e-02","8.16e-02","8.30e-05","5.41e-05","5.49e-05",0,"1.67e-04"],[0,0,0,"1.28e-05","2.57e-04","1.51e-04","1.84e-04",0,0,0,0,0,"4.53e-03","3.22e-04",0,"6.82e-04","3.51e-05","4.15e-05",0,0,"2.71e-04","5.63e-05","5.41e-04","6.02e-02","2.63e-03","1.27e-02","5.91e-03",0,"2.98e-05"],[0,0,0,"2.37e-04","7.20e-03","1.22e-02","7.14e-03","6.32e-05","3.97e-06","6.17e-03","1.26e-04","1.01e-03","1.70e-02","6.07e-03","4.08e-03","7.80e-03","1.82e-03","2.08e-02",0,"1.23e-04","1.24e-02","1.33e-01","2.12e-02","9.71e-02","3.54e-03","2.24e-02","6.11e-02",0,"4.17e-05"],[0,0,0,0,"2.10e-04",0,0,0,"2.31e-04",0,0,0,"9.64e-05","7.52e-05","1.94e-04","6.21e-03","5.01e-05",0,0,0,0,0,0,0,0,0,"4.67e-04","8.93e-06","1.61e-04"],[0,0,0,0,"2.33e-05","1.04e-02","9.81e-05",0,0,"7.76e-03",0,0,"5.28e-06","4.30e-05",0,0,0,0,0,0,0,"1.61e-01","1.32e-03","1.52e-04",0,0,0,0,0],[0,0,0,0,"1.05e-04","5.88e-02","8.95e-04",0,0,"3.80e-01",0,"5.32e-02",0,0,0,0,"4.94e-04","2.80e-03",0,"5.25e-05","2.26e-05","2.47e-01","1.31e-03","2.26e-02",0,"7.73e-06",0,"2.98e-06",0],[0,0,0,0,"5.44e-03","1.46e-05","1.23e-04","3.64e-02","3.97e-04",0,"2.95e-03",0,"1.91e-04","4.30e-05","3.32e-04","7.86e-03",0,"4.15e-05","4.50e-05",0,0,0,"2.45e-04","6.85e-03","2.47e-03","5.37e-04","1.35e-03","1.79e-05","5.65e-03"],[0,0,0,0,"2.73e-02",0,"3.68e-05","7.33e-02","2.15e-03","2.84e-05","2.01e-03",0,0,0,"1.74e-03","1.79e-03",0,"3.18e-04",0,"1.05e-04","4.84e-03",0,"7.15e-05","3.51e-05","1.01e-03","7.07e-04","2.06e-04",0,"2.68e-02"],[0,0,0,0,"3.11e-05","3.90e-05","2.94e-04",0,0,0,0,0,"1.56e-03","3.44e-04",0,"2.60e-03",0,"1.94e-03",0,0,"2.49e-04",0,"1.02e-04","9.07e-05","1.59e-03","3.40e-02","8.12e-02","2.98e-06","3.57e-05"],[0,0,0,0,"3.58e-04","3.14e-02","2.33e-04","4.97e-04",0,"5.74e-04","4.46e-02","1.17e-03",0,0,0,0,0,"1.15e-01","2.30e-01","3.40e-01","1.01e-02","1.57e-03","2.25e-04","1.24e-03","1.66e-05",0,"6.87e-06",0,"1.67e-03"],[0,0,0,0,"9.66e-03","3.41e-05","1.28e-03",0,0,0,"3.52e-03",0,0,"8.60e-05","1.38e-05","2.24e-05","1.50e-05","2.62e-01","7.80e-03","7.54e-02","2.42e-01",0,"2.33e-03","9.18e-03","3.32e-03","6.55e-02","8.93e-05",0,"1.90e-03"],[0,0,0,0,"8.89e-03","5.00e-01","3.86e-02",0,"1.59e-05","1.11e-01",0,"1.19e-02","5.28e-06",0,0,0,0,"3.07e-03","2.94e-02","4.23e-03","2.72e-03","3.26e-03","5.42e-03","1.47e-02","3.32e-05","3.09e-05","6.87e-06","2.08e-05",0],[0,0,0,0,"2.44e-02","4.88e-05","2.16e-03","5.42e-05","1.59e-05",0,0,0,"1.66e-03","4.73e-04","2.77e-05","1.23e-03",0,"1.33e-02","4.50e-05",0,"1.16e-01","2.25e-05","2.57e-03","5.47e-04","1.17e-01","1.76e-01","1.55e-01",0,"4.82e-04"],[0,0,0,0,"1.30e-03","7.96e-03","2.21e-04",0,0,"7.63e-03",0,0,"6.40e-03","4.30e-04",0,"3.83e-03","8.02e-05","6.37e-04",0,"2.45e-04","1.21e-03","2.82e-02","4.41e-03","6.66e-03","4.82e-04","5.41e-03","2.79e-02","2.98e-06",0],[0,0,0,0,"3.11e-05","2.93e-04","6.13e-05",0,0,"2.10e-04",0,0,"2.98e-04",0,0,"2.50e-03","1.00e-05",0,0,0,0,"4.07e-03","5.82e-04","2.93e-04",0,"2.63e-04","4.94e-04",0,0],[0,0,0,0,"5.44e-05","1.46e-05","9.81e-05",0,0,0,0,0,"1.26e-02","1.36e-02",0,"1.34e-04",0,0,0,0,"2.26e-05",0,"6.13e-05","4.68e-04","2.23e-03","5.54e-03","1.97e-01",0,"2.08e-05"],[0,0,0,0,"7.00e-04","1.17e-04","3.13e-03","1.81e-05",0,"1.76e-04",0,0,"1.61e-03","2.15e-04","2.22e-03","2.98e-03","3.41e-04",0,0,"7.01e-05","2.67e-03","1.66e-03","3.64e-03","1.48e-02","5.65e-04","1.12e-02","1.09e-02",0,"2.38e-05"],[0,0,0,0,0,"3.37e-03","9.20e-04",0,0,"2.44e-03","1.00e-03","2.68e-02",0,0,0,0,0,0,0,"5.25e-05",0,"4.34e-03","1.02e-04","2.07e-03",0,0,0,0,"3.13e-04"],[0,0,0,0,0,"2.93e-05",0,0,"7.95e-06",0,0,0,"9.83e-04",0,"3.53e-04","2.80e-05",0,0,0,0,0,0,"2.04e-05",0,0,0,"7.55e-05","2.98e-06",0],[0,0,0,0,0,"4.88e-06",0,0,0,0,0,0,"6.88e-03","2.71e-03",0,"1.09e-03",0,0,0,0,0,0,"5.11e-05",0,0,"1.55e-04","1.89e-02",0,"2.38e-05"],[0,0,0,0,0,0,0,0,0,"2.27e-05",0,0,"7.40e-05",0,0,"2.85e-04","8.02e-05",0,0,0,0,0,"9.19e-05",0,0,"4.02e-04",0,0,0]];
  var slnData = [{"0":0,"1":"73.60","2":"98.17","3":0,"6":0,"7":"0.00","8":"0.00","14":0,"16":0,"22":"75.00","27":"89.05"},{"0":"42.08","1":0,"2":"92.60","3":"93.70","6":"20.00","7":"50.00","8":"91.50","14":"21.43","16":"97.14","22":"92.86","27":"94.17"},{"0":"29.65","1":"25.45","2":0,"3":"66.41","6":"100.00","7":"80.18","8":"50.14","14":"52.04","16":"95.30","22":"95.69","27":"61.53"},{"0":"9.60","1":"9.10","2":"43.04","3":0,"6":0,"7":"62.39","8":"15.29","14":"50.00","16":"67.97","22":"83.33","27":"33.27"},{"0":0,"1":0,"2":"0.00","3":"100.00","6":"36.96","7":"44.27","8":"36.55","14":"31.48","16":0,"22":"21.13","27":"100.00"},{"0":0,"1":0,"2":0,"3":"83.33","6":"35.37","7":"96.55","8":"0.00","14":"60.27","16":"0.00","22":"31.85","27":"0.00"},{"0":0,"1":"0.00","2":0,"3":0,"6":0,"7":"30.51","8":"51.65","14":"55.38","16":"20.00","22":"49.87","27":"40.76"},{"0":0,"1":0,"2":"4.35","3":"0.00","6":"30.30","7":0,"8":"34.46","14":"44.12","16":"50.37","22":"25.58","27":"66.12"},{"0":"0.40","1":"7.46","2":"0.00","3":"26.37","6":"70.59","7":"23.15","8":0,"14":"78.57","16":"68.75","22":"77.97","27":"83.77"},{"0":0,"1":0,"2":0,"3":"0.00","6":"0.00","7":"0.00","8":0,"14":"20.00","16":0,"22":"45.00","27":"0.00"},{"0":0,"1":0,"2":0,"3":"100.00","6":"57.14","7":"38.74","8":0,"14":"100.00","16":0,"22":"16.67","27":0},{"0":0,"1":0,"2":0,"3":"100.00","6":"66.67","7":"5.77","8":0,"14":"37.50","16":0,"22":"66.67","27":0},{"0":"4.76","1":"40.00","2":"7.41","3":"7.32","6":"5.08","7":"64.13","8":"100.00","14":"15.60","16":"20.47","22":"10.91","27":"1.23"},{"0":"8.17","1":"7.41","2":"0.00","3":"0.00","6":"20.90","7":"52.35","8":"0.00","14":"61.14","16":"20.00","22":"15.13","27":"2.74"},{"0":"3.62","1":"0.00","2":"0.00","3":"0.00","6":"26.96","7":"65.88","8":"0.00","14":0,"16":"0.00","22":"32.48","27":"5.02"},{"0":0,"1":0,"2":0,"3":"25.00","6":"18.56","7":0,"8":0,"14":"21.09","16":"0.00","22":"14.63","27":"0.00"},{"0":"2.05","1":"3.24","2":"27.47","3":"34.97","6":"33.33","7":"6.54","8":"16.67","14":"28.07","16":0,"22":"53.33","27":"20.79"},{"0":0,"1":0,"2":0,"3":0,"6":"20.51","7":0,"8":"0.00","14":"0.00","16":0,"22":"39.08","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"29.41","7":"100.00","8":0,"14":0,"16":0,"22":"19.57","27":"0.00"},{"0":0,"1":0,"2":0,"3":"100.00","6":"20.30","7":"72.59","8":"33.07","14":0,"16":0,"22":"19.57","27":"50.00"},{"0":0,"1":0,"2":0,"3":"85.71","6":"28.24","7":"23.53","8":"8.59","14":"27.45","16":0,"22":"25.80","27":0},{"0":0,"1":0,"2":0,"3":"100.00","6":"39.58","7":0,"8":0,"14":0,"16":0,"22":"7.02","27":"0.00"},{"0":"10.42","1":"24.25","2":"60.42","3":"74.92","6":"57.70","7":"49.02","8":0,"14":"80.56","16":"72.50","22":0,"27":"67.28"},{"0":0,"1":0,"2":"0.00","3":"67.21","6":"47.34","7":"47.37","8":0,"14":0,"16":"48.59","22":"29.66","27":"84.62"},{"0":0,"1":0,"2":0,"3":"50.00","6":"30.56","7":"67.67","8":"48.95","14":"63.96","16":"0.00","22":"27.27","27":0},{"0":0,"1":0,"2":0,"3":"0.00","6":"15.73","7":"44.05","8":"36.04","14":"50.00","16":0,"22":"25.16","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"1.16","7":0,"8":0,"14":"41.18","16":0,"22":"7.69","27":0},{"0":"17.32","1":"26.86","2":"46.08","3":"42.42","6":"59.65","7":"100.00","8":"48.12","14":"42.31","16":"33.33","22":"48.78","27":0},{"0":0,"1":0,"2":0,"3":"37.50","6":"51.11","7":"42.07","8":"0.00","14":"0.00","16":0,"22":"8.33","27":0},{"0":"6.70","1":"32.14","2":"65.94","3":"84.25","6":"25.00","7":0,"8":"92.43","14":0,"16":"92.11","22":"92.52","27":"89.64"},{"0":"0.44","1":"2.75","2":"0.00","3":"33.77","6":"0.00","7":"50.00","8":"71.90","14":"100.00","16":"91.43","22":"81.25","27":"86.33"},{"0":"2.26","1":"23.76","2":"43.93","3":"52.02","6":"58.33","7":0,"8":"21.92","14":0,"16":"91.30","22":"68.97","27":"47.07"},{"0":"0.91","1":"4.92","2":"21.54","3":"30.84","6":"24.61","7":"58.11","8":"36.81","14":"67.10","16":"72.16","22":"50.44","27":"52.91"},{"0":"0.00","1":"0.63","2":"14.88","3":"48.31","6":"0.00","7":"40.00","8":"43.73","14":"70.52","16":"86.36","22":"75.60","27":"61.48"},{"0":"0.38","1":"2.33","2":"2.50","3":"3.95","6":"29.71","7":"32.44","8":"9.29","14":"46.61","16":"11.30","22":"40.67","27":"3.93"},{"0":"1.75","1":"37.04","2":"6.21","3":"11.71","6":"12.50","7":"12.50","8":"23.47","14":"33.83","16":"17.89","22":"30.77","27":"5.59"},{"0":"2.09","1":"7.05","2":"16.59","3":"37.19","6":"27.00","7":"45.55","8":"26.64","14":"46.82","16":"22.54","22":"56.39","27":"28.59"},{"0":"0.88","1":"1.88","2":"4.35","3":"0.00","6":"44.38","7":"61.21","8":"30.21","14":"58.22","16":"100.00","22":"42.29","27":"18.69"},{"0":"0.99","1":"5.14","2":"24.84","3":"48.28","6":"50.00","7":"78.17","8":"34.95","14":"15.91","16":"70.97","22":"88.33","27":"36.21"},{"0":"0.72","1":"3.50","2":"0.04","3":"3.77","6":"0.00","7":"20.98","8":"20.00","14":"4.26","16":"7.55","22":"80.00","27":"0.34"},{"0":"0.59","1":"1.67","2":"1.30","3":"23.38","6":0,"7":0,"8":"0.00","14":"1.85","16":"51.65","22":"100.00","27":"1.69"},{"0":"0.00","1":"1.42","2":"2.44","3":"30.68","6":0,"7":"0.00","8":"0.00","14":"3.57","16":"44.90","22":"38.46","27":"0.51"},{"0":"0.19","1":"1.92","2":"3.90","3":"30.44","6":"0.00","7":"36.24","8":"43.50","14":"10.89","16":"28.04","22":"61.29","27":"23.47"},{"0":"2.92","1":"0.00","2":"3.56","3":"47.40","6":"66.67","7":"0.00","8":"8.60","14":"13.51","16":"36.32","22":"9.09","27":"5.78"},{"0":"2.13","1":"5.26","2":"15.52","3":"30.77","6":"15.38","7":"46.28","8":"3.70","14":"29.63","16":"46.51","22":"80.00","27":"32.44"},{"0":"0.59","1":"1.00","2":"1.21","3":"2.37","6":"0.00","7":"22.34","8":"20.49","14":"4.55","16":"3.59","22":"54.84","27":"16.51"},{"0":"0.00","1":"0.00","2":0,"3":"0.00","6":"16.31","7":"71.43","8":0,"14":"64.32","16":"0.00","22":"10.64","27":"7.41"},{"0":"6.25","1":0,"2":"100.00","3":"100.00","6":"33.68","7":"0.00","8":0,"14":"66.04","16":"0.00","22":"31.58","27":"100.00"},{"0":"27.76","1":"0.00","2":0,"3":"100.00","6":"25.06","7":0,"8":"0.00","14":"53.22","16":0,"22":"42.86","27":0},{"0":"0.00","1":0,"2":"47.37","3":"79.76","6":"48.79","7":0,"8":"42.34","14":"51.43","16":"59.66","22":"59.99","27":"70.37"},{"0":"0.00","1":0,"2":0,"3":0,"6":"22.81","7":0,"8":0,"14":"77.91","16":"0.00","22":"10.94","27":0},{"0":"33.33","1":0,"2":0,"3":0,"6":"46.81","7":0,"8":0,"14":"68.97","16":0,"22":"54.55","27":0},{"0":"50.00","1":"0.00","2":0,"3":0,"6":"14.29","7":"54.31","8":"8.33","14":"60.74","16":0,"22":"40.48","27":"44.44"},{"0":0,"1":"0.76","2":0,"3":0,"6":"34.48","7":"66.67","8":"6.09","14":"0.00","16":0,"22":"30.54","27":"51.39"},{"0":0,"1":"38.10","2":0,"3":0,"6":"43.75","7":"44.20","8":"58.22","14":"0.00","16":0,"22":"4.76","27":"100.00"},{"0":0,"1":"0.00","2":0,"3":0,"6":0,"7":"14.29","8":"67.91","14":0,"16":0,"22":0,"27":0},{"0":0,"1":0,"2":"0.00","3":"100.00","6":"0.00","7":"1.88","8":"5.17","14":"0.00","16":"10.22","22":"25.00","27":0},{"0":0,"1":0,"2":"48.33","3":"30.00","6":"28.39","7":"37.59","8":"100.00","14":"66.62","16":"0.00","22":"10.20","27":"6.67"},{"0":0,"1":0,"2":"25.00","3":"50.77","6":"55.55","7":"40.00","8":"78.82","14":"46.30","16":"67.54","22":"38.15","27":"45.24"},{"0":0,"1":0,"2":0,"3":"0.00","6":"100.00","7":"0.00","8":"25.18","14":0,"16":0,"22":"37.50","27":"0.00"},{"0":0,"1":0,"2":0,"3":"18.37","6":"18.18","7":"0.00","8":0,"14":"3.31","16":"0.86","22":"20.00","27":"0.00"},{"0":0,"1":0,"2":0,"3":"71.43","6":"10.00","7":0,"8":0,"14":"12.90","16":"0.00","22":"15.63","27":0},{"0":0,"1":0,"2":0,"3":"0.00","6":0,"7":0,"8":0,"14":0,"16":0,"22":0,"27":"100.00"},{"0":0,"1":0,"2":0,"3":"21.05","6":"50.00","7":0,"8":0,"14":0,"16":"100.00","22":"58.33","27":0},{"0":0,"1":0,"2":0,"3":"100.00","6":"27.27","7":"41.29","8":"18.98","14":"19.37","16":"0.00","22":"54.55","27":"2.63"},{"0":0,"1":0,"2":0,"3":"0.00","6":"20.69","7":"23.33","8":0,"14":0,"16":"20.37","22":"56.23","27":"0.00"},{"0":0,"1":0,"2":0,"3":"0.00","6":"12.05","7":"34.55","8":"34.21","14":"42.42","16":"14.29","22":"33.19","27":"0.00"},{"0":0,"1":0,"2":0,"3":"33.33","6":"36.67","7":0,"8":0,"14":0,"16":0,"22":"43.69","27":0},{"0":0,"1":0,"2":0,"3":"50.00","6":"40.15","7":"0.00","8":"9.09","14":"58.33","16":"42.94","22":"16.71","27":0},{"0":0,"1":0,"2":0,"3":"66.67","6":"53.60","7":"71.81","8":"75.00","14":"0.00","16":"71.28","22":"30.00","27":"0.00"},{"0":0,"1":0,"2":0,"3":"50.00","6":"39.37","7":0,"8":0,"14":0,"16":"27.27","22":"36.59","27":0},{"0":0,"1":0,"2":0,"3":"0.00","6":"13.33","7":0,"8":0,"14":0,"16":"14.29","22":"26.42","27":0},{"0":0,"1":0,"2":0,"3":"37.84","6":"28.79","7":"0.00","8":"0.00","14":"32.99","16":"50.48","22":"29.18","27":0},{"0":0,"1":0,"2":0,"3":0,"6":0,"7":0,"8":"20.90","14":"0.00","16":"10.00","22":0,"27":"33.33"},{"0":0,"1":0,"2":0,"3":0,"6":"36.36","7":0,"8":0,"14":0,"16":0,"22":"4.65","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"37.10","7":0,"8":0,"14":0,"16":"22.34","22":"17.80","27":"0.00"},{"0":0,"1":0,"2":0,"3":0,"6":"0.00","7":"54.86","8":"63.00","14":"0.00","16":0,"22":"50.00","27":"16.67"},{"0":0,"1":0,"2":0,"3":0,"6":"33.33","7":"41.30","8":"32.73","14":"10.32","16":0,"22":"28.57","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"8.33","7":0,"8":0,"14":0,"16":0,"22":"50.00","27":"0.00"},{"0":0,"1":0,"2":0,"3":0,"6":"26.32","7":"56.36","8":0,"14":0,"16":0,"22":"9.09","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"12.50","7":0,"8":0,"14":"100.00","16":"66.67","22":"35.09","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"30.50","7":0,"8":"0.00","14":0,"16":0,"22":"22.41","27":"14.29"},{"0":0,"1":0,"2":0,"3":0,"6":"22.02","7":"22.22","8":"100.00","14":"50.00","16":0,"22":"17.46","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"14.29","7":0,"8":0,"14":0,"16":"12.50","22":"8.58","27":"100.00"},{"0":0,"1":0,"2":0,"3":0,"6":"0.00","7":0,"8":0,"14":0,"16":"100.00","22":"15.79","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"37.50","7":0,"8":0,"14":0,"16":0,"22":"66.67","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"21.33","7":"0.00","8":0,"14":"18.57","16":"56.62","22":"7.80","27":0},{"0":0,"1":0,"2":0,"3":0,"6":"41.33","7":0,"8":0,"14":0,"16":0,"22":"40.00","27":0},{"0":0,"1":0,"2":0,"3":0,"6":0,"7":0,"8":"NA","14":"NA","16":0,"22":"0.00","27":"NA"},{"0":0,"1":0,"2":0,"3":0,"6":0,"7":0,"8":0,"14":0,"16":0,"22":"40.00","27":0},{"0":0,"1":0,"2":0,"3":0,"6":0,"7":0,"8":0,"14":0,"16":"37.50","22":"88.89","27":0}];
  var region2id = {"V1":0,"V2":1,"V4":2,"TEO":3,"9-46d":4,"F5":5,"8m":6,"7A":7,"DP":8,"2":9,"5":10,"7B":11,"STPr":12,"STPi":13,"STPc":14,"PBr":15,"TEpd":16,"24c":17,"F1":18,"F2":19,"F7":20,"ProM":21,"8l":22,"9-46v":23,"46d":24,"8B":25,"10":26,"MT":27,"7m":28,"V3":29,"V3A":30,"V4t":31,"LIP":32,"PIP":33,"PGa":34,"IPa":35,"FST":36,"MST":37,"TEOm":38,"PERI":39,"TEad":40,"TEav":41,"TEpv":42,"TEam-a":43,"TEam-p":44,"TH-TF":45,"MB":46,"LB":47,"PBc":48,"8r":49,"Core":50,"7op":51,"TPt":52,"VIP":53,"V6A":54,"V6":55,"ENTO":56,"INS":57,"45B":58,"MIP":59,"POLE":60,"Pi":61,"1":62,"3":63,"23":64,"24a":65,"24b":66,"24d":67,"46v":68,"45A":69,"44":70,"11":71,"12":72,"ProSt":73,"Gu":74,"SII":75,"29-30":76,"31":77,"32":78,"F3":79,"F6":80,"F4":81,"9":82,"OPRO":83,"OPAI":84,"14":85,"13":86,"AIP":87,"SUB":88,"25":89,"PIR":90};
  var id0 = region2id[originSite];
  var A = [];
  if (id0 != undefined) {
    var markers = [];
    var nObserved = 0;
    var ctr_vol = sbaViewer.regionCenterAndVolume(originSite);
    var ctr = ctr_vol[0];
    if (ctr != undefined) {
      var origSlice = sbaViewer.nearestOrigSlice(ctr[1]);
      var xz = sbaViewer.mm2svg([ctr[0],ctr[2]]);
      var mk = new sbaMarker_class(originSite,origSlice,xz);
      mk.rgb = "#FFF";
      markers.push(mk);
    }
    var colorMap = ['#555','#5A5','#0F0','#5F0','#AF0','#FF0'];
    for (var acr in region2id) {
      id = region2id[acr];
      var fln = (this.outgoingProjections ? flnData[id0][id] : flnData[id][id0]);
      if (fln != undefined) { 
        //a.push('<tr><td>'+acr+'</td><td>'+fln+'</td></tr>');
        A.push([acr,fln]);
        if (fln>0) {
          // marker
          var ctr_vol = sbaViewer.regionCenterAndVolume(acr);
          var ctr = ctr_vol[0];
          if (ctr != undefined) {
            var origSlice = sbaViewer.nearestOrigSlice(ctr[1]);
            var xz = sbaViewer.mm2svg([ctr[0],ctr[2]]);
            var mk = new meretal14Marker_class(acr,origSlice,xz);
            mk.rgb = colorMap[Math.round(Math.log(fln)/Math.log(10)+6)];
            mk.tooltip = ACR_TO_FULL[acr];
            markers.push(mk);
          } else {
            globalErrorConsole.addError('No center coordinates found for region "'+acr+'"');
          }
        }
        nObserved++;
      }
    }
    sbaViewer.addMarkers(markers,1);
  }
  A.sort(function(a,b) { var ans = Number(b[1])-Number(a[1]); return ans ? ans : a[0].localeCompare(b[0]); });
  for (k in A) A[k] = '<tr><td>'+A[k][0]+'</td><td>'+A[k][1]+'</td></tr>';

  var notice = (nObserved<flnData.length ?
    '<span style="color:#B00">Notice: '+nObserved+' out of '+flnData.length+' possible connections are measured.</span><br/>' : ''
  );
  divElem.innerHTML = notice+'Select a region or click a marker to retrieve its connectivity.<table class="fancy"><tr><th>Region</th><th>FLNe</th></tr>'+A.join('')+'</table>';
}