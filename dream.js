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

circle.addEventListener('wheel', function(e) {
    e.preventDefault();
    scale += e.deltaY > 0 ? -0.1 : 0.1;
    scale = Math.min(2, Math.max(0.5, scale));
    update();
}, { passive: false });

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') rotation -= 21.2;
    if (e.key === 'ArrowRight') rotation += 21.2;
    if (e.key === 'ArrowUp') scale = Math.min(2, scale + 0.1);
    if (e.key === 'ArrowDown') scale = Math.max(0.5, scale - 0.1);
    update();
});

circle.addEventListener('touchstart', function(e) {
    dragging = true;
    startAngle = angleFromCenter(e.touches[0].clientX, e.touches[0].clientY) - rotation;
    e.preventDefault();
}, { passive: false });

  


