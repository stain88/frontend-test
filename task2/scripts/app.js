$(document).ready(start);

function start() {
  $("#datepicker").datepicker({
    onSelect: function() {
      console.log($('#datepicker').datepicker('getDate'));
    }
  });
}