// Get references to the elements
const formSection = document.getElementById('formSection');
const feedbackForm = document.getElementById('feedbackForm');
const youthFeedback = document.getElementById('youthFeedback');
const volunteerForm = document.getElementById('volunteerForm');

// Initially hide the form section and all iframes
formSection.style.display = 'none';
feedbackForm.style.display = 'none';
youthFeedback.style.display = 'none';
volunteerForm.style.display = 'none';

// Function to show the selected form
function showForm(formId) {
    // Hide all iframes
    feedbackForm.style.display = 'none';
    youthFeedback.style.display = 'none';
    volunteerForm.style.display = 'none';

    // Show the selected iframe and the form section
    formSection.style.display = 'block';
    document.getElementById(formId).style.display = 'block';
}
