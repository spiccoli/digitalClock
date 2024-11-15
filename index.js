function updateClock() {
    const now = new Date();
    const hours24 = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Convert to 12-hour clock format
    const period = hours24 < 12 ? "AM" : "PM";
    const hours12 = hours24 % 12 || 12;

    // Format the current time string
    const currentTime = `${hours12.toString().padStart(2, '0')}:${minutes}:${seconds} ${period}`;

    // Update the clock display
    document.getElementById("clock").textContent = currentTime;
}

// Initialize the clock and update it every second
updateClock();
setInterval(updateClock, 1000);
