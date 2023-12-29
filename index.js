let currentStep = 1;

function nextStep() {
 let stepElement = document.getElementById('step' + currentStep);
 stepElement.style.display = 'none';
 currentStep++;
 stepElement = document.getElementById('step' + currentStep);
 stepElement.style.display = 'block';
}

function previousStep() {
 let stepElement = document.getElementById('step' + currentStep);
 stepElement.style.display = 'none';
 currentStep--;
 stepElement = document.getElementById('step' + currentStep);
 stepElement.style.display = 'block';
}

document.getElementById('productForm').addEventListener('submit', function(event) {
 event.preventDefault();
 // Implement the functionality to import products here
});