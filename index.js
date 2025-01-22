const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const distance = new Date(targetDate).getTime() - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const targetDate = "2025-02-23T23:59:59";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


const interval = setInterval(() => {
    const timeLeft = calculateTimeLeft(targetDate);
  
    daysEl.textContent = String(timeLeft.days).padStart(2, "0");
    hoursEl.textContent = String(timeLeft.hours).padStart(2, "0");
    minutesEl.textContent = String(timeLeft.minutes).padStart(2, "0");
    secondsEl.textContent = String(timeLeft.seconds).padStart(2, "0");
  
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);

  const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // Ցույց տալ "Play" նշանը
    } else {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Ցույց տալ "Pause" նշանը
    }
    isPlaying = !isPlaying;
});
