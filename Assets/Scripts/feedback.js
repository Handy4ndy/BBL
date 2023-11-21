function showForm(formId) {
    // Hide all iframes
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('youthFeedback').style.display = 'none';
    document.getElementById('volunteerForm').style.display = 'none';

    // Show the selected iframe
    document.getElementById(formId).style.display = 'block';
}