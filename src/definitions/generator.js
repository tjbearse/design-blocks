Blockly.JavaScript['moves_move'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_moveeffects = Blockly.JavaScript.statementToCode(block, 'MoveEffects');
  var statements_abilities = Blockly.JavaScript.statementToCode(block, 'Abilities');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['moves_effects_damage'] = function(block) {
  var value_damage = Blockly.JavaScript.valueToCode(block, 'DAMAGE', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_target = block.getFieldValue('TARGET');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['moves_effects_heal'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['moves_game_pieces_dice'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var number_type = block.getFieldValue('TYPE');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moves_game_pieces_die'] = function(block) {
  var number_type = block.getFieldValue('TYPE');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['function_filter'] = function(block) {
  var value_collection = Blockly.JavaScript.valueToCode(block, 'COLLECTION', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_itemvar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ITEMVAR'), Blockly.Variables.NAME_TYPE);
  var value_predicate = Blockly.JavaScript.valueToCode(block, 'PREDICATE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['function_choose_playerchoice'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var value_collection = Blockly.JavaScript.valueToCode(block, 'COLLECTION', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['function_map'] = function(block) {
  var value_collection = Blockly.JavaScript.valueToCode(block, 'COLLECTION', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_itemvar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ITEMVAR'), Blockly.Variables.NAME_TYPE);
  var value_predicate = Blockly.JavaScript.valueToCode(block, 'PREDICATE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moves_ability'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_triggers = Blockly.JavaScript.statementToCode(block, 'TRIGGERS');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['moves_ability_damage'] = function(block) {
  var dropdown_timing = block.getFieldValue('TIMING');
  var dropdown_event = block.getFieldValue('EVENT');
  var variable_damagevar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DAMAGEVAR'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['moves_game_pieces_card'] = function(block) {
  var dropdown_rank = block.getFieldValue('RANK');
  var dropdown_suit = block.getFieldValue('SUIT');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moves_game_pieces_deck_create'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moves_game_pieces_deck_draw'] = function(block) {
  var value_deck = Blockly.JavaScript.valueToCode(block, 'DECK', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moves_game_pieces_deck_draw_input_multiple'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
  var value_deck = Blockly.JavaScript.valueToCode(block, 'DECK', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moves_combatants'] = function(block) {
  var dropdown_side = block.getFieldValue('SIDE');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['moves_ability_restrict'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  var text_restriction = block.getFieldValue('RESTRICTION');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
