$(document).ready(start);

function start() {
  $('#laterdate').datepicker({dateFormat: 'dd/mm/yy'}).datepicker("option", "disabled", true);
  $("#datepicker").datepicker({
    onSelect: function() {
      var selectedDate = $('#datepicker').datepicker('getDate');
      selectedDate.setDate(selectedDate.getDate()+5);
      updateDate(selectedDate);
    }
  });
}

function updateDate(date) {
  $('#laterdate').datepicker("setDate", date);
}