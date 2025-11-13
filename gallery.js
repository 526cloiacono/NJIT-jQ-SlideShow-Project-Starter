let mCurrentIndex = 0;
let mImages = [];

// Fetch JSON data and store it in mImages
function fetchJSON() {
  $.ajax({
    url: 'images.json',      // your local JSON file
    dataType: 'json',
    success: function (data) {
      // store the images array from JSON
      mImages = data.images;
      console.log('JSON loaded:', mImages);

      // display the first image after loading
      showImage(0);
    },
    error: function (xhr, status, error) {
      console.error('Error loading JSON:', error);
    }
  });
}

// Display one image and its metadata
function showImage(index) {
  if (!mImages.length) return; // stop if nothing loaded

  const img = mImages[index]; // get the current image info

  // Update image and text on the page
  $('#photo').attr('src', img.imgPath);
  $('.location').text('Location: ' + img.imgLocation);
  $('.description').text('Description: ' + img.description);
  $('.date').text('Date: ' + img.date);
}

// Run when page is ready
$(document).ready(() => {
  $('.details').hide(); // optional: hide details until later
  fetchJSON(); // load JSON and show first image
});
