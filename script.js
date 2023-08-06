function calculateAngle(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const angleRad = Math.atan2(deltaY, deltaX);
    const angleDeg = angleRad * (180 / Math.PI);
    return angleDeg;
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function calculateTravelTime() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const runningSpeed = 5.612;  // units per second
    const jumpingSpeed = 7.127;  // units per second

    const angleDeg = calculateAngle(x1, y1, x2, y2);
    const distance = calculateDistance(x1, y1, x2, y2);
    const travelTimeRunning = distance / runningSpeed / 60;  // Convert to minutes
    const travelTimeJumping = distance / jumpingSpeed / 60;  // Convert to minutes

    document.getElementById('angle').textContent = angleDeg.toFixed(2);
    document.getElementById('travel-time-running').textContent = travelTimeRunning.toFixed(2);
    document.getElementById('travel-time-jumping').textContent = travelTimeJumping.toFixed(2);
}
