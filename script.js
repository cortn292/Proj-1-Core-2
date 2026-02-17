const circleContainer = document.getElementById('circleContainer');
let isDragging = false;
let currentRotation = 0;
let startAngle = 0;
let currentScale = 1;


function getCenter(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}


function getAngle(center, point) {
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    return Math.atan2(dy, dx) * (180 / Math.PI);
}


circleContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    const center = getCenter(circleContainer);
    startAngle = getAngle(center, { x: e.clientX, y: e.clientY }) - currentRotation;
});


document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const center = getCenter(circleContainer);
    const angle = getAngle(center, { x: e.clientX, y: e.clientY });
    currentRotation = angle - startAngle;
    
    circleContainer.style.transform = `rotate(${currentRotation}deg) scale(${currentScale})`;
});


document.addEventListener('mouseup', () => {
    isDragging = false;
});


circleContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    const center = getCenter(circleContainer);
    startAngle = getAngle(center, { x: touch.clientX, y: touch.clientY }) - currentRotation;
    e.preventDefault();
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const center = getCenter(circleContainer);
    const angle = getAngle(center, { x: touch.clientX, y: touch.clientY });
    currentRotation = angle - startAngle;
    
    circleContainer.style.transform = `rotate(${currentRotation}deg) scale(${currentScale})`;
    e.preventDefault();
});

document.addEventListener('touchend', () => {
    isDragging = false;
});


circleContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    currentScale += delta;
    
    
    currentScale = Math.max(0.5, Math.min(2, currentScale));
    
    circleContainer.style.transform = `rotate(${currentRotation}deg) scale(${currentScale})`;
});

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            currentRotation -= 21.2; 
            break;
        case 'ArrowRight':
            currentRotation += 21.2; 
            break;
        case 'ArrowUp':
            currentScale = Math.min(2, currentScale + 0.1);
            break;
        case 'ArrowDown':
            currentScale = Math.max(0.5, currentScale - 0.1);
            break;
        case 'r':
        case 'R':
            currentRotation = 0;
            currentScale = 1;
            break;
    }
    circleContainer.style.transform = `rotate(${currentRotation}deg) scale(${currentScale})`;
});
