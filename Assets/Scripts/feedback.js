let standyby = document.getElementById('formSection')

standyby.style.display ="none";

function showForm(formId) {
    // Hide all iframes
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('youthFeedback').style.display = 'none';
    document.getElementById('volunteerForm').style.display = 'none';

    // Show the selected iframe
    standyby.style.display= 'block';
    document.getElementById(formId).style.display = 'block';
}

showForm()