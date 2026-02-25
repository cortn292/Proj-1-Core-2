const circleContainer = document.getElementById('circleContainer');
let isDragging = false;
let currentRotation = 0;
let startAngle = 0;
let currentScale = 1;

function getAngle(el) {
    const rect = circle.getBoundingClientRect();
    const dx = x - (rect.left + rect.width / 2);
    const dy = y - (rect.top + rect.height / 2);
    return Math.atan2(dy, dx) * (180 / Math.PI);
}

function update() {
    circle.style.transform = `rotate(${rotation}deg) scale(${scale})`;
}

circle.addEventListener('mousedown', function(e) {
    dragging = true;
    startAngle = angleFromCenter(e.clientX, e.clientY) - rotation;
});

  


