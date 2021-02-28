const Blockly = require('blockly');

Blockly.Blocks['color_test'] = {
  init: function() {
    this.appendValueInput("RED")
        .setCheck("String")
        .appendField("while");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
