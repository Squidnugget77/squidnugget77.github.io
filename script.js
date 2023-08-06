function calculateAngle(x1, z1, x2, z2) {
    const deltaX = x2 - x1;
    const deltaZ = z2 - z1;
    
    // Calculate angle using Minecraft's coordinate system (0 degrees facing south, positive clockwise)
    const angleRad = Math.atan2(deltaZ, deltaX);
    let angleDeg = angleRad * (180 / Math.PI);
    angleDeg -= 90;
    if (angleDeg < 0) {
        angleDeg += 360;
    }

    return angleDeg;
}

function calculateDistance(x1, z1, x2, z2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(z2 - z1, 2));
}

function calculateTravelTime() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const z1 = parseFloat(document.getElementById('z1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const z2 = parseFloat(document.getElementById('z2').value);

    const runningSpeed = 5.612;  // units per second
    const jumpingSpeed = 7.127;  // units per second

    const angleDeg = calculateAngle(x1, z1, x2, z2);
    const distance = calculateDistance(x1, z1, x2, z2);
    const travelTimeRunning = distance / runningSpeed / 60;  // Convert to minutes
    const travelTimeJumping = distance / jumpingSpeed / 60;  // Convert to minutes

    document.getElementById('angle').textContent = angleDeg.toFixed(2);
    document.getElementById('travel-time-running').textContent = travelTimeRunning.toFixed(2);
    document.getElementById('travel-time-jumping').textContent = travelTimeJumping.toFixed(2);
}
