// A program that gives a random horoscope based on the user's birth month and day
const messages = [
    "Today, you may find unexpected opportunities coming your way. Be ready to take advantage of them.",
    "Patience is key today. You may find that things don't go your way, but don't worry, it will all work out in the end.",
    "Your creativity is at an all-time high today. Use it to your advantage and you will be amazed at what you can accomplish.",
    "Someone close to you may need your help today. Be there for them and you will find that it brings you closer together.",
    "Today is a good day to focus on your health. Take some time to relax and recharge your batteries.",
    "You may encounter a challenging situation today. Stay calm and think things through before making any decisions.",
    "Love is in the air; whether you are single or in a relationship, today is a good day to show your love and appreciation for those around you.",
    "Financial matters may require your attention today. Take some time to review your budget and make any necessary adjustments.",
    "A long-awaited message or news may arrive today. Be prepared for some exciting developments in your life.",
    "Today, trust your intuition and follow your instincts. You may be surprised at where they lead you.",
    "Social connections will be particularly rewarding today. Reach out to friends and family and enjoy their company.",
    "Take some time today to reflect on your goals and aspirations. You may find that you are closer to achieving them than you think."
];

document.getElementById('horoscope-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const dob = document.getElementById('dob').value;
    const date = new Date(dob);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let sign = "";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        sign = "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        sign = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        sign = "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        sign = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        sign = "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        sign = "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        sign = "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        sign = "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        sign = "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        sign = "Capricorn";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        sign = "Aquarius";
    } else {
        sign = "Pisces";
    }

    const message = messages[Math.floor(Math.random() * messages.length)];
    const horoscopeDiv = document.getElementById('horoscope');
    horoscopeDiv.innerHTML = `<p>${sign}: ${message}</p>`;
    horoscopeDiv.style.display = 'block';
});
