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

// --- MULTI-TIMER STATE (en per flik) ---
let currentTab = "button1"; // button1=soft, button2=medium, button3=hard, button4=recipes

const DURATIONS = {
    button1: 0.1 * 60,   // Soft (test: 6 sek)
    button2: 0.4 * 60,     // Medium
    button3: 0.9 * 60     // Hard
};

// varje flik får egen tid, running-flagga och interval-id
const STATE = {
    button1: { time: DURATIONS.button1, running: false, id: null },
    button2: { time: DURATIONS.button2, running: false, id: null },
    button3: { time: DURATIONS.button3, running: false, id: null }
};
// ----------------------------------------

function firstPage() {
    background3.remove();

    logoImage = document.createElement("img");
    button1Image = document.createElement("img");
    button2Image = document.createElement("img");
    button3Image = document.createElement("img");
    background1 = document.createElement("div");
    background2 = document.createElement("div");
    buttons = document.createElement("div");
    button1 = document.createElement("div");
    button2 = document.createElement("div");
    button3 = document.createElement("div");
    homePage = document.createElement("div");
    infoDiv = document.createElement("div");
    getStartedDiv = document.createElement("div");
    infoButton = document.createElement("button");
    getStartedButton = document.createElement("button");
    button4 = document.createElement("p");
    bigText = document.createElement("p");

    button4.textContent = "Recipes";
    txt = "Recipies";
    button4.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;
    infoButton.textContent = "i";
    bigText.textContent = "Soft Boiled";
    getStartedButton.textContent = "Boil Your Egg";

    logoImage.src = "Images/Logo.png";
    logoImage.alt = "LogoType";
    button1Image.src = "Images/Soft.png";
    button1Image.alt = "Soft egg";
    button2Image.src = "Images/Medium.png";
    button2Image.alt = "Medium egg";
    button3Image.src = "Images/Hard.png";
    button3Image.alt = "Hard egg";

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

    infoButton.onclick = () => getInfo("firstPage");
    button1.onclick = () => getTimers("button1");
    button2.onclick = () => getTimers("button2");
    button3.onclick = () => getTimers("button3");
    button4.onclick = () => { getTimers("button4"); };
    getStartedButton.onclick = () => getTimers("button1");

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
    background1.remove();
    background2.remove();
    logoImage.remove();
    background3.remove();

    if (value) currentTab = value;

    background3 = document.createElement("div");
    background3.className = "background3";
    document.body.append(background3);

    buttons = document.createElement("div");
    button1 = document.createElement("div");
    button2 = document.createElement("div");
    button3 = document.createElement("div");
    button4 = document.createElement("p");

    buttons.className = "buttons";
    button1.className = "button";
    button2.className = "button";
    button3.className = "button";
    button4.className = "buttonP";

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

    button1.className = (currentTab === "button1") ? "buttonDown" : "button";
    button2.className = (currentTab === "button2") ? "buttonDown" : "button";
    button3.className = (currentTab === "button3") ? "buttonDown" : "button";
    button4.className = "buttonP";
    button4.style.borderBottom = (currentTab === "button4") ? "0" : "1px solid #000000";

    homePage = document.createElement("div");
    homePage.className = "homePage";
    homePage.style.height = "660px";
    background3.append(homePage);

    if (currentTab === "button4") {
        homePage.style.display = "flex";
        homePage.style.justifyContent = "center";
        homePage.style.alignItems = "center";
        homePage.style.padding = "25px 0 25px";

        homePage.innerHTML = `
            <div class="recipesList">
                <div class="recipeLable">
                    <img src="Images/Greek_inspired.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">GREEK INSPIRED</p>
                        <p class="recipeIngredient">• Dill</p>
                        <p class="recipeIngredient">• Feta</p>
                        <p class="recipeIngredient">• Kalamata olives</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/Everything_bagel.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">EVERYTHING BAGEL</p>
                        <p class="recipeIngredient">• Cream cheese</p>
                        <p class="recipeIngredient">• Smoked salmon</p>
                        <p class="recipeIngredient">• Poppy seeds</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/Pimiento_cheese.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">PIMIENTO CHEESE</p>
                        <p class="recipeIngredient">• Pimiento peppers</p>
                        <p class="recipeIngredient">• Cheddar</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/BLT.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">BLT</p>
                        <p class="recipeIngredient">• Bacon</p>
                        <p class="recipeIngredient">• Letters</p>
                        <p class="recipeIngredient">• Tomato</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/Buffalo.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">BUFFALO</p>
                        <p class="recipeIngredient">• Blue cheese</p>
                        <p class="recipeIngredient">• Hot sauce</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/Guacamole.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">GUACAMOLE</p>
                        <p class="recipeIngredient">• Lime juice</p>
                        <p class="recipeIngredient">• Avocado</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/Jalap_popper.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">JALAPEÑO POPPER</p>
                        <p class="recipeIngredient">• Cheddar</p>
                        <p class="recipeIngredient">• Jalapeño</p>
                        <p class="recipeIngredient">• Cream cheese</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/Dill_pickle.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">DILL PICKLE</p>
                        <p class="recipeIngredient">• Dill pickles</p>
                        <p class="recipeIngredient">• Old bay</p>
                    </div>
                </div>
                <div class="recipeLable">
                    <img src="Images/Bacon_jalap.png" class="eggPics"></img>
                    <div class="recipeTxt">
                        <p class="recipeTitle">BACON JALAPEÑO</p>
                        <p class="recipeIngredient">• Bacon</p>
                        <p class="recipeIngredient">• Jalapeño</p>
                        <p class="recipeIngredient">• Scallions</p>
                    </div>
                </div>
            </div>
        `;
        button1.onclick = () => { currentTab = "button1"; getTimers("button1"); };
        button2.onclick = () => { currentTab = "button2"; getTimers("button2"); };
        button3.onclick = () => { currentTab = "button3"; getTimers("button3"); };
        button4.onclick = () => { };
        return;
    }

    // ----- Timer-vy -----
    infoDiv = document.createElement("div");
    infoDiv.className = "infoDiv";

    infoButton = document.createElement("button");
    infoButton.className = "infoButton";
    infoButton.textContent = "i";

    getStartedDiv = document.createElement("div");
    getStartedDiv.className = "getStartedDiv";
    getStartedDiv.style.height = "585px";
    getStartedDiv.style.textAlign = "center";
    getStartedDiv.style.justifyContent = "space-between";

    eggTextDiv = document.createElement("div");
    eggTextDiv.className = "eggTextDiv";

    bigText = document.createElement("p");
    bigText.className = "bigText";

    eggText = document.createElement("p");
    eggText.className = "eggText";
    eggText.style.color = "#EE740A";
    eggText.style.fontSize = "24px";

    timer = document.createElement("p");
    timer.className = "timer";
    timer.style.fontSize = "80px";

    getStartedButton = document.createElement("button");
    getStartedButton.className = "getStartedButton";
    getStartedButton.style.fontSize = "36px";

    homeButton = document.createElement("button");
    homeButton.className = "homeButton";

    if (currentTab === "button1") {
        bigText.textContent = "Soft Boiled";
    } else if (currentTab === "button2") {
        bigText.textContent = "Medium Boiled";
    } else if (currentTab === "button3") {
        bigText.textContent = "Hard Boiled";
    } else {
        bigText.textContent = "Recipes";
    }
    eggText.textContent = "Egg";

    // START/RESTART-etikett beror på aktuell fliks state
    getStartedButton.textContent = STATE[currentTab].running ? "RESTART" : "START";
    homeButton.textContent = "Home";

    infoButton.onclick = () => {
        background3.remove();
        getInfo(currentTab);
    };

    homeButton.onclick = () => {
        background3.remove();
        firstPage();
    };

    // Viktigt: start/reset ska bara påverka AKTUELL flik
    getStartedButton.onclick = onStartRestartClick;

    homePage.append(infoDiv, getStartedDiv);
    infoDiv.append(infoButton);
    eggTextDiv.append(bigText, eggText);
    getStartedDiv.append(eggTextDiv, timer, getStartedButton, homeButton);
    background3.append(buttons, homePage);

    // flikknappar
    button1.onclick = () => { currentTab = "button1"; background3.remove(); getTimers("button1"); };
    button2.onclick = () => { currentTab = "button2"; background3.remove(); getTimers("button2"); };
    button3.onclick = () => { currentTab = "button3"; background3.remove(); getTimers("button3"); };
    button4.onclick = () => { currentTab = "button4"; background3.remove(); getTimers("button4"); };

    // visa den flikens kvarvarande tid (utan att störa andra timers)
    updateCountdownDisplay(currentTab);
}

function getInfo(value) {
    background1.remove();
    background2.remove();
    logoImage.remove();
    background3.remove();

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

    xCloseButton.onclick = () => {
        backgroundInfo1.remove();
        if (value === "firstPage") {
            firstPage();
        } else {
            getTimers(value || currentTab);
        }
    };
}

// ---------- TIMER-HJÄLPSFUNKTIONER (per flik) ----------
function formatMMSS(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
}

function updateCountdownDisplay(tab = currentTab) {
    if (!timer) return;
    const { time } = STATE[tab];
    timer.textContent = formatMMSS(time);
}

function startTimer(tab = currentTab) {
    const st = STATE[tab];

    // om redan igång, gör inget
    if (st.running) return;

    // om tiden är 0 (uppäten), nollställ till originaltid för en ny start
    if (st.time <= 0) st.time = DURATIONS[tab];

    st.running = true;
    if (tab === currentTab) {
        getStartedButton.textContent = "RESTART";
        timer.style.textAlign = "";
        timer.style.color = "";
        updateCountdownDisplay(tab);
    }

    // egen interval för denna flik
    if (st.id !== null) clearInterval(st.id);
    st.id = setInterval(() => {
        st.time--;
        // uppdatera bara visningen om man står på denna flik
        if (tab === currentTab) updateCountdownDisplay(tab);

        if (st.time <= 0) {
            clearInterval(st.id);
            st.id = null;
            st.running = false;
            st.time = 0;

            // om användaren tittar på denna flik: visa "EAT IT!"
            if (tab === currentTab && timer) {
                timer.textContent = "EAT IT!";
                timer.style.textAlign = "center";
                timer.style.color = "#EE740A";
                getStartedButton.textContent = "START";
            }
        }
    }, 1000);
}

function resetTimer(tab = currentTab) {
    const st = STATE[tab];
    if (st.id !== null) clearInterval(st.id);
    st.id = null;
    st.running = false;
    st.time = DURATIONS[tab];

    if (tab === currentTab) {
        updateCountdownDisplay(tab);
        getStartedButton.textContent = "START";
        if (timer) {
            timer.style.textAlign = "";
            timer.style.color = "";
        }
    }
}

function onStartRestartClick() {
    const st = STATE[currentTab];
    if (!st.running) {
        startTimer(currentTab);  // starta bara AKTUELL fliks timer
    } else {
        resetTimer(currentTab);  // RESTART = stoppa + nollställ bara denna flik
    }
}
// -------------------------------------------------------

firstPage();
