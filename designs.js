// Select color input
// Select size input
var height, width, color;

// When height and width are selected it determines the size of the grid

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})
//when this function is called a grid appears ready for color selection
function makeGrid(x, y) {
  $('tr').remove();

  for (var i = 1; i <= x; i++) {
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var j = 1; j <= y; j++) {
          $('#table' + i).append('<td></td>'); 
       }
  }

  // When the user picks a color it is captured from the color picker and painted to square

  $('td').click(function addColor() {
      color = $('#colorPicker').val();
      if ($(this).attr('style')) {
      } else {
          $(this).attr('style', 'background-color:' + color);
      }
  })
}
