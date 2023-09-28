document.addEventListener('DOMContentLoaded', (event) => {
  // Get the reviews container
  const reviewsContainer = document.getElementById('reviews-container');

  // Function to add a review
  function addReview(review) {
    // Initialize the stars string
    let stars = '';
    // Loop 5 times to generate the full or empty stars
    for(let i = 1; i <= 5; i++) {
        if(i <= review.rating) {
            // Add a full star if i is less than or equal to the rating
            stars += '<i class="fas fa-star"></i>';
        } else {
            // Add an empty star if i is greater than the rating
            stars += '<i class="far fa-star"></i>';
        }
    }

    // Create a new div for each review
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'testimonial-box';

    // Add the review name, date, rating, and description
    reviewDiv.innerHTML = `
    <div class="box-top">
      <div class="profile">
        <div class="profile-image">
          <img src="../gallery/pp.png" alt="default pic">
        </div>
        <div class="name-user">
          <strong>${review.name}</strong>
          <span>${review.date}</span>
        </div>
      </div>
      <!-- stars -->
      <div class="reviews">
          ${stars}
      </div>
    </div>
    <!-- Bottom (Comments) -->
    <div class="client-comments">
      <p>${review.comments}</p>
    </div>`;

    // Append the reviewDiv to the reviewsContainer
    reviewsContainer.appendChild(reviewDiv);
  }

  // Add initial reviews
  window.reviews.forEach(addReview);

  // Get the form and add a submit event listener
  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Create a new review object from the form input values
    const review = {
      name: reviewForm.name.value,
      rating: reviewForm.rating.value,
      comments: reviewForm.comments.value,
      date: new Date().toLocaleDateString(),
    };

    // Add the new review
    addReview(review);

    // Clear the form input values
    reviewForm.reset();
  });
});