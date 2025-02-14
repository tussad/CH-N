const messages = [
    "Bẹn Cóaa Chc Hog?",
    "Thtt Sự Chcc Hog??",
    "Thtt sự không hỏ?",
    "Đii Mòoo",
    "Nghĩi ikk Tuỵt lm ó!",
    "Hogg làa tuii buann ó...",
    "Tuii rấtt buann ó...",
    "Buannnnnnnnnn...",
    "Thuii đc òii, hog ns nx đy đc hog...",
    "Tuii chỉi đùaa hoii đy nhó! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}