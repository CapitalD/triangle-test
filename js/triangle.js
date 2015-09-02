
/* Switch to btn-success class when 5 point scale radio button checked */
$("input[name=five-point-scale]").change(function() {
  $("input[name=five-point-scale]").parents("label").removeClass("btn-success");
  $(this).parents("label").addClass("btn-success");
});
