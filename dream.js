const circleContainer = document.getElementById('circleContainer');
let isDragging = false;
let currentRotation = 0;
let startAngle = 0;
let currentScale = 1;

function getcenter(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2};
}


