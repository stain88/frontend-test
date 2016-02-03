$(document).ready(start);

function start() {
  $("#datepicker").datepicker({
    onSelect: function() {
      var selectedDate = $('#datepicker').datepicker('getDate');
      selectedDate.setDate(selectedDate.getDate()+5);
      $('#laterdate').text("setDate", selectedDate);
      console.log("selected: " + selectedDate);
    }
  });
}