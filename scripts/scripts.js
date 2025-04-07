// Load face detection models
async function loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('https://justadudewhohacks.github.io/face-api.js/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('https://justadudewhohacks.github.io/face-api.js/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('https://justadudewhohacks.github.io/face-api.js/models');
    console.log('Models loaded');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async () => {
    await loadModels();
    
    // Set up file uploads
    document.getElementById('upload1').addEventListener('change', handleImageUpload.bind(null, 'face1'));
    document.getElementById('upload2').addEventListener('change', handleImageUpload.bind(null, 'face2'));
    
    // Set up compare button
    document.getElementById('compare').addEventListener('click', compareFaces);
});

/* Include all the JavaScript functions from your original single-file version */