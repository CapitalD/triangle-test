
/* Switch to btn-success class when horizontal scale radio button checked */
function better_button_group(group_name, active_class) {
  $("input[name="+group_name+"]").change(function() {
    $("input[name="+group_name+"]").parents("label").removeClass(active_class);
    $(this).parents("label").addClass(active_class);
  });
}
