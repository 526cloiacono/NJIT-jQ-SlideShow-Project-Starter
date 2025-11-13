let mCurrentIndex = 0;
let mImages = [];

// Fetch JSON data and store it in mImages
function fetchJSON() {
  $.ajax({
    url: 'images.json',      // Local JSON file
    dataType: 'json',
    success: function (data) {
      mImages = data.images; // Store image array
      console.log('JSON loaded:', mImages);
    },
    error: function (xhr, status, error) {
      console.error('Error loading JSON:', error);
    }
  });
}

// Run when page is ready
$(document).ready(() => {
  fetchJSON();
});

function showImage(index) {
  if (!mImages.length) return; // stop if nothing loaded

  const img = mImages[index];

  // Update the main image and metadata
  $('#photo').attr('src', img.imgPath);
  $('.location').text('Location: ' + img.imgLocation);
  $('.description').text('Description: ' + img.description);
  $('.date').text('Date: ' + img.date);
}

$(document).ready(() => {
  $('.details').hide();
  fetchJSON();

  // show first image after JSON loads
  setTimeout(() => showImage(0), 500);
});
