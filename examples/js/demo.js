var conditions, actions, nameField, ageField, occupationField, submit, allData;
(function($) {
  var occupationOptions = [ "Software Engineer", "Biz Dev", "Marketing" ];

  function getInitialData() {
       return {'variables': [{'name': 'acute_confusion', 'label': 'Acute Confusion', 'field_type': 'boolean', 'options': []}, {'name': 'acute_confusion_period', 'label': 'Acute Confusion Period', 'field_type': 'numeric', 'options': []}, {'name': 'call_type', 'label': 'Call Type', 'field_type': 'string', 'options': []}, {'name': 'call_without_reason', 'label': 'Call Without Reason', 'field_type': 'boolean', 'options': []}, {'name': 'call_without_reason_period', 'label': 'Call Without Reason Period', 'field_type': 'numeric', 'options': []}, {'name': 'diarrhea', 'label': 'Diarrhea', 'field_type': 'boolean', 'options': []}, {'name': 'diarrhea_period', 'label': 'Diarrhea Period', 'field_type': 'numeric', 'options': []}, {'name': 'dnr_code', 'label': 'Dnr Code', 'field_type': 'numeric', 'options': []}, {'name': 'fall', 'label': 'Fall', 'field_type': 'boolean', 'options': []}, {'name': 'fall_incident_place', 'label': 'Fall Incident Place', 'field_type': 'string', 'options': []}, {'name': 'fall_period', 'label': 'Fall Period', 'field_type': 'numeric', 'options': []}, {'name': 'feel_unwell', 'label': 'Feel Unwell', 'field_type': 'boolean', 'options': []}, {'name': 'feel_unwell_period', 'label': 'Feel Unwell Period', 'field_type': 'numeric', 'options': []}, {'name': 'fixation', 'label': 'Fixation', 'field_type': 'string', 'options': []}, {'name': 'frequent_glycemie', 'label': 'Frequent Glycemie', 'field_type': 'boolean', 'options': []}, {'name': 'glycemie_value', 'label': 'Glycemie Value', 'field_type': 'numeric', 'options': []}, {'name': 'incontinence', 'label': 'Incontinence', 'field_type': 'boolean', 'options': []}, {'name': 'incontinence_period', 'label': 'Incontinence Period', 'field_type': 'numeric', 'options': []}, {'name': 'incontinence_urine', 'label': 'Incontinence Urine', 'field_type': 'string', 'options': []}, {'name': 'insomnia', 'label': 'Insomnia', 'field_type': 'boolean', 'options': []}, {'name': 'insomnia_period', 'label': 'Insomnia Period', 'field_type': 'numeric', 'options': []}, {'name': 'katz_continence', 'label': 'Katz Continence', 'field_type': 'numeric', 'options': []}, {'name': 'katz_toilet_visit', 'label': 'Katz Toilet Visit', 'field_type': 'numeric', 'options': []}, {'name': 'leakage', 'label': 'Leakage', 'field_type': 'boolean', 'options': []}, {'name': 'medication', 'label': 'Medication', 'field_type': 'boolean', 'options': []}, {'name': 'medication_period', 'label': 'Medication Period', 'field_type': 'numeric', 'options': []}, {'name': 'move', 'label': 'Move', 'field_type': 'boolean', 'options': []}, {'name': 'move_period', 'label': 'Move Period', 'field_type': 'numeric', 'options': []}, {'name': 'new_resident', 'label': 'New Resident', 'field_type': 'boolean', 'options': []}, {'name': 'not_call_frequently', 'label': 'Not Call Frequently', 'field_type': 'boolean', 'options': []}, {'name': 'out_of_bed', 'label': 'Out Of Bed', 'field_type': 'boolean', 'options': []}, {'name': 'pain', 'label': 'Pain', 'field_type': 'boolean', 'options': []}, {'name': 'pain_period', 'label': 'Pain Period', 'field_type': 'numeric', 'options': []}, {'name': 'performance', 'label': 'Performance', 'field_type': 'string', 'options': []}, {'name': 'saturation', 'label': 'Saturation', 'field_type': 'numeric', 'options': []}, {'name': 'thirst', 'label': 'Thirst', 'field_type': 'boolean', 'options': []}, {'name': 'thirst_period', 'label': 'Thirst Period', 'field_type': 'numeric', 'options': []}, {'name': 'time_frame', 'label': 'Time Frame', 'field_type': 'string', 'options': []}, {'name': 'transfer', 'label': 'Transfer', 'field_type': 'string', 'options': []}, {'name': 'uncomfortable_lying', 'label': 'Uncomfortable Lying', 'field_type': 'boolean', 'options': []}, {'name': 'unrest', 'label': 'Unrest', 'field_type': 'boolean', 'options': []}, {'name': 'wrist_alarm', 'label': 'Wrist Alarm', 'field_type': 'boolean', 'options': []}], 'actions': [{'name': 'set_priority', 'label': 'Set Priority', 'params': [{'label': 'Priority', 'name': 'priority', 'fieldType': 'numeric'}]}], 'variable_type_operators': {'boolean': [{'name': 'is_false', 'label': 'Is False', 'input_type': 'none'}, {'name': 'is_true', 'label': 'Is True', 'input_type': 'none'}], 'numeric': [{'name': 'equal_to', 'label': 'Equal To', 'input_type': 'numeric'}, {'name': 'greater_than', 'label': 'Greater Than', 'input_type': 'numeric'}, {'name': 'greater_than_or_equal_to', 'label': 'Greater Than Or Equal To', 'input_type': 'numeric'}, {'name': 'less_than', 'label': 'Less Than', 'input_type': 'numeric'}, {'name': 'less_than_or_equal_to', 'label': 'Less Than Or Equal To', 'input_type': 'numeric'}], 'select_multiple': [{'name': 'contains_all', 'label': 'Contains All', 'input_type': 'select_multiple'}, {'name': 'is_contained_by', 'label': 'Is Contained By', 'input_type': 'select_multiple'}, {'name': 'shares_at_least_one_element_with', 'label': 'Shares At Least One Element With', 'input_type': 'select_multiple'}, {'name': 'shares_exactly_one_element_with', 'label': 'Shares Exactly One Element With', 'input_type': 'select_multiple'}, {'name': 'shares_no_elements_with', 'label': 'Shares No Elements With', 'input_type': 'select_multiple'}], 'select': [{'name': 'contains', 'label': 'Contains', 'input_type': 'select'}, {'name': 'does_not_contain', 'label': 'Does Not Contain', 'input_type': 'select'}], 'string': [{'name': 'contains', 'label': 'Contains', 'input_type': 'text'}, {'name': 'ends_with', 'label': 'Ends With', 'input_type': 'text'}, {'name': 'equal_to', 'label': 'Equal To', 'input_type': 'text'}, {'name': 'equal_to_case_insensitive', 'label': 'Equal To (case insensitive)', 'input_type': 'text'}, {'name': 'matches_regex', 'label': 'Matches Regex', 'input_type': 'text'}, {'name': 'non_empty', 'label': 'Non Empty', 'input_type': 'none'}, {'name': 'starts_with', 'label': 'Starts With', 'input_type': 'text'}]}};
       
    // return {"variables": [
    //         { "name": "expiration_days",
    //           "label": "Days until expiration",
    //           "field_type": "numeric",
    //           "options": []},
    //         { "name": "current_month",
    //           "label": "Current Month",
    //           "field_type": "string",
    //           "options": []},
    //         { "name": "goes_well_with",
    //           "label": "Goes Well With",
    //           "field_type": "select",
    //           "options": ["Eggnog", "Cookies", "Beef Jerkey"]}
    //                     ],
    //       "actions": [
    //         { "name": "put_on_sale",
    //           "label": "Put On Sale",
    //           "params": [{name: "sale_percentage", label: "Sale Percentage", fieldType : "numeric"}]},
    //         { "name": "order_more",
    //           "label": "Order More",
    //           "params": [{name: "number_to_order", label: "Number To Order", fieldType : "numeric"}]}
    //       ],
    //       "variable_type_operators": {
    //         "numeric": [ {"name": "equal_to",
    //                       "label": "Equal To",
    //                       "input_type": "numeric"},
    //                      {"name": "less_than",
    //                       "label": "Less Than",
    //                       "input_type": "numeric"},
    //                      {"name": "greater_than",
    //                       "label": "Greater Than",
    //                       "input_type": "numeric"}],
    //         "string": [ { "name": "equal_to",
    //                       "label": "Equal To",
    //                       "input_type": "text"},
    //                     { "name": "non_empty",
    //                       "label": "Non Empty",
    //                       "input_type": "none"}],
    //         "select": [ { "name": "contains",
    //                       "label": "Contains",
    //                       "input_type": "select"},
    //                     { "name": "does_not_contain",
    //                       "label": "Does Not Contain",
    //                       "input_type": "select"}]
    //       }
    // };
  };

  function onReady() {
    conditions = $("#conditions");
    actions = $("#actions");
    nameField = $("#nameField");
    occupationField = $("#occupationField");
    ageField = $("#ageField");
    submit = $("#submit");
    allData = getInitialData();

    initializeConditions(allData);
    initializeActions(allData);
    initializeForm();
  }

  function initializeConditions(data) {
    conditions.conditionsBuilder(data)
  }

  function initializeActions(data) {
    actions.actionsBuilder(data);
  }

  function initializeForm() {
    for(var i=0; i < occupationOptions.length; i++) {
      var o = occupationOptions[i];
      occupationField.append($("<option>", {value: o.name, text: o.label}));
    }

    submit.click(function(e) {
      e.preventDefault();
      console.log("CONDITIONS");
      console.log(JSON.stringify(conditions.conditionsBuilder("data")));
      console.log("ACTIONS");
      console.log(JSON.stringify(actions.actionsBuilder("data")));
    });
  }
  $(onReady);
})(jQuery);
