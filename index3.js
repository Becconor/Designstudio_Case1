// ——— BACKGROUND RUTNÄT ———
let backgroundContainer = document.createElement("div");
backgroundContainer.className = "backgroundContainer";
document.body.append(backgroundContainer);

for (let i = 1; i <= 40; i++) {
    for (let j = 1; j <= 20; j++) {
        let items = document.createElement("div");
        if (i % 1 === 0) {
            items.style.backgroundColor = (j % 2 === 0) ? "#FAF8EC" : "#EE740A";
        } else {
            items.style.backgroundColor = (j % 2 === 0) ? "#EE740A" : "#FAF8EC";
        }
        backgroundContainer.append(items);
    }
}

// ——— GLOBALA ELEMENT/REFERENSER (skapas/fylls i funktionerna) ———
let logoImage = document.createElement("img");
let button1Image = document.createElement("img");
let button2Image = document.createElement("img");
let button3Image = document.createElement("img");

let background1 = document.createElement("div");
let background2 = document.createElement("div");
let background3 = document.createElement("div");
let buttons = document.createElement("div");
let button1 = document.createElement("div");
let button2 = document.createElement("div");
let button3 = document.createElement("div");
let homePage = document.createElement("div");
let infoDiv = document.createElement("div");
let getStartedDiv = document.createElement("div");
let eggTextDiv = document.createElement("div");

let bigText = document.createElement("p");
let eggText = document.createElement("p");
let timer = document.createElement("p");
let button4 = document.createElement("p");
let txt = "Recipies";

let homeButton = document.createElement("button");
let infoButton = document.createElement("button");
let getStartedButton = document.createElement("button");

// ——— TIMER ———
const startingMinute = 1;
let time = startingMinute * 60;
let timerId = null;
let timerRunning = false;

// ——— NAV-STATE (vilken flik i timer) ———
let currentTab = "button1";

// ——— SIDOR ———
function firstPage() {
    // Rensa ev. andra vyer
    background3?.remove();

    // (Re)skapa bilder
    logoImage = document.createElement("img");
    button1Image = document.createElement("img");
    button2Image = document.createElement("img");
    button3Image = document.createElement("img");

    // (Re)skapa containers
    background1 = document.createElement("div");
    background2 = document.createElement("div");
    buttons = document.createElement("div");
    button1 = document.createElement("div");
    button2 = document.createElement("div");
    button3 = document.createElement("div");
    homePage = document.createElement("div");
    infoDiv = document.createElement("div");
    infoButton = document.createElement("button");
    getStartedDiv = document.createElement("div");

    button4 = document.createElement("p");
    bigText = document.createElement("p");
    getStartedButton = document.createElement("button");

    // Innehåll
    button4.textContent = "Recipes";
    txt = "Recipies";
    button4.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;
    infoButton.textContent = "i";
    bigText.textContent = "Soft Boiled";
    getStartedButton.textContent = "Boil Your Egg";

    // Bilder
    logoImage.src = "Images/Logo.png";
    logoImage.alt = "LogoType";
    button1Image.src = "Images/Soft.png";
    button1Image.alt = "Soft egg";
    button2Image.src = "Images/Medium.png";
    button2Image.alt = "Medium egg";
    button3Image.src = "Images/Hard.png";
    button3Image.alt = "Hard egg";

    // Klasser (CSS styr!)
    background1.className = "background1";
    background2.className = "background2";
    logoImage.className = "logoImage";

    buttons.className = "buttons";
    button1.className = "buttonDown";
    button2.className = "button";
    button3.className = "button";
    button4.className = "buttonP";
    button1Image.className = "buttonImage";
    button2Image.className = "buttonImage";
    button3Image.className = "buttonImage";

    homePage.className = "homePage";
    infoDiv.className = "infoDiv";
    infoButton.className = "infoButton";
    getStartedDiv.className = "getStartedDiv";
    bigText.className = "bigText";
    getStartedButton.className = "getStartedButton";

    // Event
    infoButton.onclick = () => getInfo("firstPage");
    button1.onclick = () => getTimers("button1");
    button2.onclick = () => getTimers("button2");
    button3.onclick = () => getTimers("button3");
    button4.onclick = () => getTimers("button4");
    getStartedButton.onclick = () => getTimers("button1");

    // Montera DOM
    document.body.append(background1);
    document.body.append(background2);
    document.body.append(logoImage);

    background2.append(buttons, homePage);
    button1.append(button1Image);
    button2.append(button2Image);
    button3.append(button3Image);
    buttons.append(button1, button2, button3, button4);

    homePage.append(infoDiv, getStartedDiv);
    infoDiv.append(infoButton);
    getStartedDiv.append(bigText, getStartedButton);
}

function getTimers(value) {
    // Stäng startsidan om den finns
    background1?.remove();
    background2?.remove();
    logoImage?.remove();

    // Spara aktiv flik om given
    if (value) currentTab = value;

    // Skapa timersidan
    background3 = document.createElement("div");
    background3.className = "background3";
    document.body.append(background3);

    // Top-knappar
    buttons = document.createElement("div");
    button1 = document.createElement("div");
    button2 = document.createElement("div");
    button3 = document.createElement("div");
    button4 = document.createElement("p");

    buttons.className = "buttons";
    // Standardklasser, byts strax ut beroende på currentTab
    button1.className = "button";
    button2.className = "button";
    button3.className = "button";
    button4.className = "buttonP";

    // Återanvänd bilderna (flyttas i DOM)
    button1Image.className = "buttonImage";
    button2Image.className = "buttonImage";
    button3Image.className = "buttonImage";
    button4.textContent = "Recipes";
    button4.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;

    background3.append(buttons);
    button1.append(button1Image);
    button2.append(button2Image);
    button3.append(button3Image);
    buttons.append(button1, button2, button3, button4);

    // Sätt aktiva klasser beroende på currentTab
    button1.className = (currentTab === "button1") ? "buttonDown" : "button";
    button2.className = (currentTab === "button2") ? "buttonDown" : "button";
    button3.className = (currentTab === "button3") ? "buttonDown" : "button";
    if (currentTab === "button4") {
        button4.className = "buttonP"; // behåll din P-stil men utan underkant
        button4.style.borderBottom = "0";
    } else {
        button4.className = "buttonP";
        button4.style.borderBottom = "1px solid #000000";
    }

    // Koppla klick (ersätter alltid tidigare handlers)
    button1.onclick = () => getTimers("button1");
    button2.onclick = () => getTimers("button2");
    button3.onclick = () => getTimers("button3");
    button4.onclick = () => getTimers("button4");

    // Innehållsdel
    homePage = document.createElement("div");
    homePage.className = "homePage";
    background3.append(homePage);

    infoDiv = document.createElement("div");
    infoDiv.className = "infoDiv";
    infoButton = document.createElement("button");
    infoButton.className = "infoButton";
    infoButton.textContent = "i";

    getStartedDiv = document.createElement("div");
    getStartedDiv.className = "getStartedDiv";

    eggTextDiv = document.createElement("div");
    eggTextDiv.className = "eggTextDiv";

    bigText = document.createElement("p");
    bigText.className = "bigText";
    eggText = document.createElement("p");
    eggText.className = "eggText";
    timer = document.createElement("p");
    timer.className = "timer";
    getStartedButton = document.createElement("button");
    getStartedButton.className = "getStartedButton";
    homeButton = document.createElement("button");
    homeButton.className = "homeButton";

    // Text per flik (du kan byta texter per tab här)
    if (currentTab === "button1") {
        bigText.textContent = "Soft Boiled";
    } else if (currentTab === "button2") {
        bigText.textContent = "Medium Boiled";
    } else if (currentTab === "button3") {
        bigText.textContent = "Hard Boiled";
    } else {
        bigText.textContent = "Recipes";
    }
    eggText.textContent = (currentTab === "button4") ? "" : "Egg";

    // START/RESTART-knappens text beroende på timerRunning
    getStartedButton.textContent = timerRunning ? "RESTART" : "START";
    homeButton.textContent = "Home";

    // Events
    infoButton.onclick = () => getInfo(currentTab);
    homeButton.onclick = () => {
        // Gå hem utan att påverka timer (du kan pausa här om du vill)
        background3.remove();
        firstPage();
    };
    getStartedButton.onclick = onStartRestartClick;

    // Montera
    homePage.append(infoDiv, getStartedDiv);
    infoDiv.append(infoButton);
    eggTextDiv.append(bigText, eggText);
    getStartedDiv.append(eggTextDiv, timer, getStartedButton, homeButton);

    // Visa timer-läget som det är nu
    updateCountdownDisplay();
}

function getInfo(value) {
    // Stäng aktuell sida
    background1?.remove();
    background2?.remove();
    logoImage?.remove();
    background3?.remove();

    // Skapa overlay
    const backgroundInfo1 = document.createElement("div");
    const xClose = document.createElement("div");
    const xCloseButton = document.createElement("button");
    const xCloseText = document.createElement("div");

    backgroundInfo1.className = "backgroundInfo1";
    xClose.className = "xClose";
    xCloseButton.className = "xCloseButton";
    xCloseText.className = "xCloseText";

    xCloseButton.textContent = "+";
    xCloseText.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:20px;margin-top:50px;">
      <p style="font-family: Kaushan; font-size: 16px; color: #EE740A;">How do you cook an egg?</p>
      <p style="font-size: 13px;">Put water in a pot so that the egg is just covered with water. Let the water boil BEFORE putting the eggs in for best effect.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;">
      <p style="font-family: Kaushan; font-size: 16px; color: #EE740A;">How do you cook an egg?</p>
      <p style="font-size: 13px;">Put water in a pot so that the egg is just covered with water. Let the water boil BEFORE putting the eggs in for best effect.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;">
      <p style="font-family: Kaushan; font-size: 16px; color: #EE740A;">How do you cook an egg?</p>
      <p style="font-size: 13px;">Put water in a pot so that the egg is just covered with water. Let the water boil BEFORE putting the eggs in for best effect.</p>
    </div>
  `;

    document.body.append(backgroundInfo1);
    backgroundInfo1.append(xClose, xCloseText);
    xClose.append(xCloseButton);

    // Stäng tillbaka
    xCloseButton.onclick = () => {
        backgroundInfo1.remove();
        if (value === "firstPage") {
            firstPage();
        } else {
            getTimers(value || currentTab);
        }
    };
}

// ——— TIMER-LOGIK ———
function onStartRestartClick() {
    if (getStartedButton.textContent === "START") {
        if (!timerRunning) {
            timerRunning = true;
            getStartedButton.textContent = "RESTART";
            if (timerId === null) {
                timerId = setInterval(updateCountdown, 1000);
            }
        }
    } else {
        // RESTART: stoppa och nollställ, men starta inte
        clearInterval(timerId);
        timerId = null;
        timerRunning = false;
        time = startingMinute * 60;
        updateCountdownDisplay();
        getStartedButton.textContent = "START";
    }
}

function updateCountdownDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (timer) {
        timer.textContent = `${minutes}:${seconds < 1 ? "0" + seconds : seconds}`;
    }
}

function updateCountdown() {
    if (!timerRunning) return;

    if (time <= 0) {
        clearInterval(timerId);
        timerId = null;
        timerRunning = false;

        if (timer) {
            timer.textContent = "EAT IT!";
            timer.style.textAlign = "center";
            timer.style.color = "#EE740A";
        }
        return;
    }

    time--;
    updateCountdownDisplay();
}

// ——— STARTA APPEN ———
firstPage();
