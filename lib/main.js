var Modeler = require('bpmn-js/lib/Modeler');
var propertiesPanelModule = require('bpmn-js-properties-panel');
var propertiesProviderModule = require('../bpmn-js-properties-panel/lib/provider/camunda');
var camundaModdleDescriptor = require('camunda-bpmn-moddle/resources/camunda');

var CustomModeler = require('./custom-modeler');
var fs = require('fs');


var modeler = new CustomModeler({
  container: '#canvas',
  additionalModules: [
    propertiesPanelModule,
    propertiesProviderModule
  ],
  propertiesPanel: {
    parent: '#properties'
  },
  moddleExtensions: {
    custom: require('./custom-modeler/custom/ModelSpec'),
    camunda: camundaModdleDescriptor
  }
});

var newDiagramXML = fs.readFileSync(__dirname + '/../hska.bpmn', 'utf-8');

modeler.importXML(newDiagramXML, function(err) {
  console.log(err);
});
window.modeler = modeler;