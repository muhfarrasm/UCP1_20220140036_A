// script.js
// JavaScript for real-time date and time update
function updateTime() {
    var now = new Date();
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerText = now.toLocaleDateString('en-US', options);
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    timeElement.innerText = timeString;

    setTimeout(updateTime, 1000);
}

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
    document.getElementById('time').textContent = now.toLocaleTimeString('en-US');

    const hour = now.getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Selamat Pagi';
    } else if (hour >= 12 && hour < 15) {
        greeting = 'Selamat Siang';
    } else if (hour >= 15 && hour < 19) {
        greeting = 'Selamat Sore';
    } else {
        greeting = 'Selamat Malam';
    }

    document.querySelector('.greeting').textContent = `${greeting}, Farras`;
}

updateTime();
setInterval(updateTime, 1000);

function showNotification() {
    alert("Ini adalah notifikasi! Anda telah mengklik tombol Klik to Info.");
}