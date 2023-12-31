function toggleAnswer(section) {
    var answer = document.getElementById(section + '-answer');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
    
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar-navigations');
    const faqSection = document.querySelector('.faq-section');
    const toggleButton = document.querySelector('.toggle-button');

    sidebar.classList.toggle('collapsed');
    faqSection.classList.toggle('collapsed');
    toggleButton.innerHTML = sidebar.classList.contains('collapsed') ? '→' : '←';
}
// Function to toggle the sidebar
function toggleSidebar(elementId) {
    const sidebar = document.getElementById(elementId);
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
}


// Function to toggle the sidebar
function toggleSidebar(elementId) {
    const sidebar = document.getElementById(elementId);
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
}

// Sample reviews data (you can replace this with your actual reviews data)
const reviewsData = [
    { product: "Tanjiro Water Breathing Sneakers", stars: 4, text: "Great sneakers! Comfortable and stylish." },
    { product: "One Piece Tumbler", stars: 5, text: "Awesome tumbler! Love the design." },
    { product: "Demon Slayer Hoodie", stars: 3, text: "Good quality, but the sizing is a bit off." },
    { product: "Naruto Characters Figures", stars: 5, text: "Collectible figures are amazing! Must-have for Naruto fans." }
];

// Function to display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById("reviews");

    reviewsData.forEach((review, index) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");

        const starsDiv = document.createElement("div");
        starsDiv.classList.add("stars");
        starsDiv.innerHTML = "&starf;".repeat(review.stars);

        const reviewText = document.createElement("p");
        reviewText.classList.add("review-text");
        reviewText.textContent = review.text;

        reviewDiv.appendChild(document.createElement("h3")).textContent = review.product;
        reviewDiv.appendChild(starsDiv);
        reviewDiv.appendChild(reviewText);

        reviewsContainer.appendChild(reviewDiv);
    });
}

// Call the function to display reviews when the page loads
window.onload = displayReviews;
