// gallery.js

// Milestone 1: Initial setup
let mCurrentIndex = 0; // Tracks the current image index
let mImages = []; // Array to hold gallery image objects
const mUrl = 'images.json'; // Replace with your actual JSON file or URL
const mWaitTime = 5000; // Timer interval (milliseconds)
let mTimer = null; // Store the timer reference

$(document).ready(() => {
  console.log("Gallery initialized.");
});

// 3
function fetchJSON() {
  $.ajax({
    url: mUrl,
    dataType: 'json',
    success: function (data) {
      if (data.images) {
        mImages = data.images;
      } else {
        mImages = data;
      }
      console.log('JSON data loaded:', mImages);
    },
    error: function (xhr, status, error) {
      console.error('Error loading JSON:', error);
    }
  });
}

$(document).ready(() => {
  fetchJSON();
});
// 4
function swapPhoto() {
  if (!mImages.length) return;

  const current = mImages[mCurrentIndex];

  $('#photo').attr('src', current.imgPath);
  $('.location').text('Location: ' + current.imgLocation);
  $('.description').text('Description: ' + current.description);
  $('.date').text('Date: ' + current.date);
}

$(document).ready(() => {
  fetchJSON();
  setTimeout(() => swapPhoto(), 500); // Show first image after JSON loads
});
//5
function showNextPhoto() {
  mCurrentIndex++;
  if (mCurrentIndex >= mImages.length) mCurrentIndex = 0;
  swapPhoto();
}

function showPrevPhoto() {
  mCurrentIndex--;
  if (mCurrentIndex < 0) mCurrentIndex = mImages.length - 1;
  swapPhoto();
}

$(document).ready(() => {
  $('#nextPhoto').click(showNextPhoto);
  $('#prevPhoto').click(showPrevPhoto);
});
//6
function startTimer() {
  if (mTimer) clearInterval(mTimer);
  mTimer = setInterval(showNextPhoto, mWaitTime);
}

$(document).ready(() => {
  startTimer();
});

// Milestone 7 – Toggle details panel
$(document).ready(() => {
  $('.details').hide(); // hide details at start

  $('.moreIndicator').click(function () {
    $(this).toggleClass('rot90 rot270');
    $('.details').slideToggle();
  });
});
