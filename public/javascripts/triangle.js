
/* Switch to btn-success class when horizontal scale radio button checked */
function better_button_group(group_name, active_class) {
  $("input[name="+group_name+"]").change(function() {
    $("input[name="+group_name+"]").parents("label").removeClass(active_class);
    $(this).parents("label").addClass(active_class);
  });
}

/* Copy xs select field value to >= sm radio  */
function select_value_to_radio(select_field, radio_field) {
  $("select[name="+select_field+"]").change(function() {
    $("input[name="+radio_field+"]").filter('[value='+$("select[name="+select_field+"]").val()+']').prop("checked", true);
  });
}

/* update correct sample radios with chosen identiifer */
function update_sample_identifiers(select_field, radio_field) {
  $("select[name="+select_field+"]").change(function() {
    var new_values = $(this).val().split("");
      $("input[name="+radio_field+"]").each(function(index, value) {
        var label = $(this).parents("label");
        var radio = $.parseHTML(label.html())[0];
        label.html("");
        label.append(radio).append(new_values[index]);
      });
  });
}


/* init all tooltips on a page */
function start_all_tooltips() {
  $('[data-toggle="tooltip"]').tooltip();
}
