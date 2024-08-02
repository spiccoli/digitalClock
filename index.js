function updateClock (){

    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    //Conversion to 12-hour clock format
    const isNoon = hours <= 12 ? "AM" : "PM";
    hours = hours % 12 || 12;

    //display
    const currentTime = `${hours}:${minutes}:${seconds} ${isNoon}`;
    document.getElementById("clock").textContent = currentTime;

}

updateClock();
setInterval(updateClock, 1000);