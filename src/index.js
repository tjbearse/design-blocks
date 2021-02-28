const Blockly = require('blockly');
import './blocks';
import './generator';
import BlocklyStorage from './storage';
import {download, wrapWithFileReader} from './files';

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, {
	toolbox: document.getElementById('toolbox'),
	grid: {
		spacing: 20,
		length: 3,
		colour: '#ccc',
		snap: true
	},
	zoom: {
		controls: true,
		wheel: true,
		startScale: 1.0,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2,
		pinch: true
	},
});

// save / restore to local storage
setTimeout(BlocklyStorage.restoreBlocks, 0);
BlocklyStorage.backupOnUnload();

function myUpdateFunction(event) {
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	document.getElementById('codeText').value = code;
}
workspace.addChangeListener(myUpdateFunction);

// upload
function processFile(contents) {
	var xml = Blockly.Xml.textToDom(contents);
	Blockly.Xml.domToWorkspace(xml, workspace);
}
document.getElementById('fileInput')
		.addEventListener('change', wrapWithFileReader(processFile), false);

// download
function downloadWorkspace(workspace) {
	let name = window.prompt('enter file name (no extension)');
	if (name == null) {
		return;
	} else {
		name += '.xml';
	}
    let xml = Blockly.Xml.workspaceToDom(workspace);
    let text = Blockly.Xml.domToText(xml);
	download(text, name);
}
document.getElementById('fileOutput')
	.addEventListener('click', () => downloadWorkspace(workspace), false);

// auto resize
var onresize = function(e) {
	// Compute the absolute coordinates and dimensions of blocklyArea.
	var element = blocklyArea;
	var x = 0;
	var y = 0;
	do {
		x += element.offsetLeft;
		y += element.offsetTop;
		element = element.offsetParent;
	} while (element);
	// Position blocklyDiv over blocklyArea.
	blocklyDiv.style.left = x + 'px';
	blocklyDiv.style.top = y + 'px';
	blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
	blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
	Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);
