const Blockly = require('blockly');

Blockly.JavaScript['color_test'] = function(block) {
  var value_red = Blockly.JavaScript.valueToCode(block, 'RED', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
