// /**
//  * Restricts the height of the wine box to the height of the painting.
//  */
// function matchHeights() {
//   // Get the height of the painting box
//   var height = document.querySelector('.painting').clientHeight;
//   //  Set the height of the wine image
//   document.querySelector('.wine img').style.maxHeight = 0.4 * height + 'px';
// }

// //  Match box heights
// matchHeights();

function getMain() {
  $.get('main.html', function(data) {
    $(this)
      .children('.container')
      .html(data);
  });
}

getMain();
