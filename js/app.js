const moodData = [];

function trackMood() {
    const moodSelect = document.getElementById('mood');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const descriptionInput = document.getElementById('description');
    const selectedMoodElement = document.getElementById('selected-mood');

    const selectedMood = moodSelect.value;
    const selectedMoodText = moodSelect.options[moodSelect.selectedIndex].text;
    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;
    const selectedDescription = descriptionInput.value;

    moodData.push({
        mood: selectedMoodText,
        date: selectedDate,
        time: selectedTime,
        description: selectedDescription
    });

    selectedMoodElement.textContent = `You are feeling ${selectedMoodText} on ${selectedDate} at ${selectedTime}. Description: ${selectedDescription}`;

    moodSelect.value = '';
    dateInput.value = '';
    timeInput.value = '';
    descriptionInput.value = '';

    updateMoodChart();
}

function updateMoodChart() {
    const canvas = document.getElementById('mood-chart');
    const ctx = canvas.getContext('2d');
    const moodCounts = countMoods(moodData);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = canvas.width / Object.keys(moodCounts).length;
    let x = 0;

    for (const mood in moodCounts) {
        const barHeight = moodCounts[mood] * 30;
        ctx.fillStyle = getColorForMood(mood);
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        ctx.fillStyle = '#000';
        ctx.fillText(mood, x + barWidth / 2, canvas.height - 5);

        x += barWidth;
    }
}

function countMoods(data) {
    const moodCounts = {
        'Happy': 0,
        'Sad': 0,
        'Excited': 0,
        'Calm': 0,
        'Angry': 0,
        'Stressed': 0
    };

    data.forEach(entry => {
        moodCounts[entry.mood]++;
    });

    return moodCounts;
}

function getColorForMood(mood) {
    const colors = {
        'Happy': '#FFD700',
        'Sad': '#4682B4',
        'Excited': '#FF6347',
        'Calm': '#00FA9A',
        'Angry': '#FF4500',
        'Stressed': '#8A2BE2'
    };

    return colors[mood] || '#808080';
}

function setRandomBackground() {
    const backgroundImage = document.getElementById('background-image');
    const imageUrls = [
        'url(images/random1.jpg)',
        'url(images/random2.jpg)',
        'url(images/random3.jpg)',
    ];

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    backgroundImage.style.backgroundImage = imageUrls[randomIndex];
}

updateMoodChart();

setRandomBackground();