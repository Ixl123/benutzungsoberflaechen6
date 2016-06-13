# bpmn-js-hska

This is a small bpmn-extension which adds a dancing-cat element to the bpmn-modeler.

## Development

To start the extension, you have to complete the following steps:
* install all necessary dependencies:
`npm install`
* compile the sources using browserify:
`npm run build`
* compile the styles using lessc:
`npm run styles`

Now just open the `index.html` in a web-browser.

Changed files:
* `bpmn-js-/properties-panel/lib/factory/AutoCompleteEntryFactory.js`
* `bpmn-js-/properties-panel/lib/factory/EntryFactory.js`
* `bpmn-js-/properties-panel/lib/provider/camunda/parts/UserTaskProps.js`