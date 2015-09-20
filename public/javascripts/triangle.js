
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
    if ($(this).val()) {
      var new_values = $(this).val().split("");
    } else {
      var new_values = ["&nbsp;&nbsp;","&nbsp;&nbsp;","&nbsp;&nbsp;"];
    }
    $("input[name="+radio_field+"]").each(function(index, value) {
      $(this).parents("label").find("span.label").html(new_values[index]);
    });
  });
}

/* update correct sample radios with chosen colour */
function update_sample_colours(select_field, radio_field) {
  $("select[name="+select_field+"]").change(function() {
    var selected = $(this).children().filter(":selected");
    if (selected.attr("data-colours")) {
      var colours = selected.attr("data-colours").split(",");
    } else {
      var colours = false;
    }

    $("input[name="+radio_field+"]").each(function(index, value) {
      if (colours) {
        $(this).parents("label").find("span.label").removeClass("label-no-colour").addClass("label-default").css("background-color",colours[index]);
      } else {
        $(this).parents("label").find("span.label").removeClass("label-default").addClass("label-no-colour").css("background","none");
      }
    });
  });
}

function display_sample_colours(colour1,colour2,colour3) {
  var colours = [colour1,colour2,colour3];
  $("span.label").each(function(index) {
    if (colours[index]) {
      $(this).removeClass("label-no-colour").addClass("label-default").css("background-color",colours[index]);
    } else {
      $("span.label").removeClass("label-default").addClass("label-no-colour").css("background","none");
    }
  });
  console.log();
}
