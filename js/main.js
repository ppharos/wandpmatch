/**
 * Restricts the height of the wine box to the height of the painting.
 */
function matchHeights() {
  // Get the height of the painting box
  var height = document.querySelector('.painting').clientHeight;
  console.log(height);
  //  Set the height of the wine image
  document.querySelector('.wine .label img').style.maxHeight = height + 'px';
}

//  Match box heights
matchHeights();
