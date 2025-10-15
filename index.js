let backgroundContainer = document.createElement("div");
backgroundContainer.className = "backgroundContainer";
document.body.append(backgroundContainer);

for (let i = 1; i <= 40; i++) {
    for (let j = 1; j <= 20; j++) {
        let items = document.createElement("div");
        if (i % 1 === 0) {
            if (j % 2 === 0) {
                items.style.backgroundColor = "#FAF8EC";
            } else {
                items.style.backgroundColor = "#EE740A";
            }
        } else {
            if (j % 2 === 0) {
                items.style.backgroundColor = "#EE740A";
            } else {
                items.style.backgroundColor = "#FAF8EC";
            }
        }
        backgroundContainer.append(items);
    }
}

let backgroundWidth = document.createElement("div");
let logoImage = document.createElement("img");
let displayDiv = document.createElement("div");
let buttonDisplay = document.createElement("div");
let buttonSoft = document.createElement("div");
let imgSoft = document.createElement("img");
let buttonMedium = document.createElement("div");
let imgMedium = document.createElement("img");
let buttonHard = document.createElement("div");
let imgHard = document.createElement("img");
let buttonRecipes = document.createElement("div");
let imgRecipes = document.createElement("p");
let txt = "Recipies";
let typeDisplay = document.createElement("div");
let infoDiv = document.createElement("div");
let infoButton = document.createElement("button");
let startEggBoilDiv = document.createElement("div");
let typeText = document.createElement("p");
let typeButton = document.createElement("button");
let typeTextDiv = document.createElement("div");
let eggText = document.createElement("p");
let timeText = document.createElement("p");
let homeButton = document.createElement("button");
let currentButton = "button1";
const timeDuration = {
    button1: 0.1 * 60,
    button2: 9 * 60,
    button3: 12 * 60
};
const timeState = {
    button1: { time: timeDuration.button1, running: false, id: null },
    button2: { time: timeDuration.button2, running: false, id: null },
    button3: { time: timeDuration.button3, running: false, id: null }
};

function firstPage() {
    backgroundWidth = document.createElement("div");
    logoImage = document.createElement("img");
    displayDiv = document.createElement("div");
    buttonDisplay = document.createElement("div");
    buttonSoft = document.createElement("div");
    imgSoft = document.createElement("img");
    buttonMedium = document.createElement("div");
    imgMedium = document.createElement("img");
    buttonHard = document.createElement("div");
    imgHard = document.createElement("img");
    buttonRecipes = document.createElement("div");
    imgRecipes = document.createElement("p");
    typeDisplay = document.createElement("div");
    infoDiv = document.createElement("div");
    infoButton = document.createElement("button");
    startEggBoilDiv = document.createElement("div");
    typeText = document.createElement("p");
    typeButton = document.createElement("button");

    backgroundWidth.className = "backgroundWidth";
    logoImage.className = "logoImage";
    displayDiv.className = "displayDiv";
    buttonDisplay.className = "buttonDisplay";
    buttonSoft.className = "buttonDown";
    imgSoft.className = "imageButton";
    buttonMedium.className = "buttons";
    imgMedium.className = "imageButton";
    buttonHard.className = "buttons";
    imgHard.className = "imageButton";
    buttonRecipes.className = "recipeButton";
    typeDisplay.className = "typeDisplay";
    infoDiv.className = "infoDiv";
    infoButton.className = "infoButton";
    startEggBoilDiv.className = "startEggBoilDiv";
    typeText.className = "typeText";
    typeButton.className = "typeButton";

    logoImage.src = "Images/Logo.png";
    logoImage.alt = "LogoType";
    imgSoft.src = "Images/Soft.png"
    imgSoft.alt = "Soft Egg"
    imgMedium.src = "Images/Medium.png"
    imgMedium.alt = "Medium Egg"
    imgHard.src = "Images/Hard.png"
    imgHard.alt = "Hard Egg"

    txt = "Recipies";
    imgRecipes.textContent = "Recipes";
    infoButton.textContent = "i";
    typeText.textContent = "Soft Boiled";
    typeButton.textContent = "Boil Your Egg";
    imgRecipes.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;

    document.body.append(backgroundWidth);
    backgroundWidth.append(logoImage);
    backgroundWidth.append(displayDiv);
    displayDiv.append(buttonDisplay);
    buttonDisplay.append(buttonSoft);
    buttonSoft.append(imgSoft);
    buttonDisplay.append(buttonMedium);
    buttonMedium.append(imgMedium);
    buttonDisplay.append(buttonHard);
    buttonHard.append(imgHard);
    buttonDisplay.append(buttonRecipes);
    buttonRecipes.append(imgRecipes);
    displayDiv.append(typeDisplay);
    typeDisplay.append(infoDiv);
    infoDiv.append(infoButton);
    typeDisplay.append(startEggBoilDiv);
    startEggBoilDiv.append(typeText, typeButton);

    buttonSoft.addEventListener("click", () => softPage("softPage"));
    typeButton.addEventListener("click", () => softPage("softPage"));
    buttonMedium.addEventListener("click", () => mediumPage("mediumPage"));
    buttonHard.addEventListener("click", () => hardPage("hardPage"));
    buttonRecipes.addEventListener("click", () => recipesPage());
    infoButton.addEventListener("click", () => getInfo("home"));
}

function getInfo(value) {
    backgroundWidth.remove();
    backgroundWidth = document.createElement("div");
    backgroundWidth.className = "backgroundWidth";
    if (["softPage", "mediumPage", "hardPage", "recipesPage"].includes(value)) {
        backgroundWidth.style.backgroundColor = "transparent";
    }
    document.body.append(backgroundWidth);

    displayDiv = document.createElement("div");
    const xClose = document.createElement("div");
    const xCloseButton = document.createElement("button");
    const xCloseText = document.createElement("div");

    displayDiv.className = "displayDiv";
    xClose.className = "xClose";
    xCloseButton.className = "xCloseButton";
    xCloseText.className = "xCloseText";

    displayDiv.style.border = "1px solid #000000";
    displayDiv.style.borderRadius = "20px";
    displayDiv.style.height = "684px";
    displayDiv.style.top = "40px";
    displayDiv.style.bottom = "0";

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

    backgroundWidth.append(displayDiv);
    displayDiv.append(xClose, xCloseText);
    xClose.append(xCloseButton);

    if (value === "home") {
        xCloseButton.addEventListener("click", () => {
            backgroundWidth.remove();
            firstPage("softButton");
        });
    } else if (value === "softPage") {
        xCloseButton.addEventListener("click", () => {
            backgroundWidth.remove();
            softPage();
        });
    } else if (value === "mediumPage") {
        xCloseButton.addEventListener("click", () => {
            backgroundWidth.remove();
            mediumPage();
        });
    } else if (value === "hardPage") {
        xCloseButton.addEventListener("click", () => {
            backgroundWidth.remove();
            hardPage();
        });
    }
}

function softPage(value) {
    backgroundWidth.remove();

    backgroundWidth = document.createElement("div");
    backgroundWidth.className = "backgroundWidth";
    backgroundWidth.style.width = "310px";
    backgroundWidth.style.height = "720px";
    backgroundWidth.style.top = "84px";
    backgroundWidth.style.borderRadius = "20px 20px 0 0";

    displayDiv = document.createElement("div");
    displayDiv.style.height = "720px";
    displayDiv.style.top = "0";
    displayDiv.style.bottom = "0";

    buttonDisplay = document.createElement("div");
    buttonSoft = document.createElement("div");
    imgSoft = document.createElement("img");
    buttonMedium = document.createElement("div");
    imgMedium = document.createElement("img");
    buttonHard = document.createElement("div");
    imgHard = document.createElement("img");
    buttonRecipes = document.createElement("div");
    imgRecipes = document.createElement("p");
    typeDisplay = document.createElement("div");
    infoDiv = document.createElement("div");
    infoButton = document.createElement("button");
    startEggBoilDiv = document.createElement("div");
    typeTextDiv = document.createElement("div");
    typeText = document.createElement("p");
    eggText = document.createElement("p");
    timeText = document.createElement("p");
    typeButton = document.createElement("button");
    homeButton = document.createElement("button");

    backgroundWidth.className = "backgroundWidth";
    displayDiv.className = "displayDiv";
    buttonDisplay.className = "buttonDisplay";
    buttonSoft.className = "buttonDown";
    imgSoft.className = "imageButton";
    buttonMedium.className = "buttons";
    imgMedium.className = "imageButton";
    buttonHard.className = "buttons";
    imgHard.className = "imageButton";
    buttonRecipes.className = "recipeButton";
    typeDisplay.className = "typeDisplay";
    infoDiv.className = "infoDiv";
    infoButton.className = "infoButton";
    startEggBoilDiv.className = "startEggBoilDiv";
    typeText.className = "typeText";
    typeButton.className = "typeButton";
    homeButton.className = "homeButton";

    imgSoft.src = "Images/Soft.png";
    imgSoft.alt = "Soft Egg";
    imgMedium.src = "Images/Medium.png";
    imgMedium.alt = "Medium Egg";
    imgHard.src = "Images/Hard.png";
    imgHard.alt = "Hard Egg";

    txt = "Recipies";
    imgRecipes.textContent = "Recipes";
    imgRecipes.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;
    infoButton.textContent = "i";
    typeText.textContent = "Soft Boiled";
    homeButton.textContent = "Home";
    eggText.textContent = "Egg";

    typeDisplay.style.height = "660px";
    startEggBoilDiv.style.height = "585px";
    startEggBoilDiv.style.justifyContent = "space-around";
    eggText.style.textAlign = "center";
    eggText.style.fontSize = "24px";
    eggText.style.color = "#EE740A";
    timeText.style.fontSize = "80px";

    backgroundWidth.append(displayDiv);
    document.body.append(backgroundWidth);
    displayDiv.append(buttonDisplay);
    buttonDisplay.append(buttonSoft);
    buttonSoft.append(imgSoft);
    buttonDisplay.append(buttonMedium);
    buttonMedium.append(imgMedium);
    buttonDisplay.append(buttonHard);
    buttonHard.append(imgHard);
    buttonDisplay.append(buttonRecipes);
    buttonRecipes.append(imgRecipes);
    displayDiv.append(typeDisplay);
    typeDisplay.append(infoDiv);
    infoDiv.append(infoButton);
    typeDisplay.append(startEggBoilDiv);
    typeTextDiv.append(typeText, eggText);
    startEggBoilDiv.append(typeTextDiv, timeText, typeButton, homeButton);

    {
        const tab = "button1";
        timeText.id = `timer-${tab}`;
        typeButton.id = `startbtn-${tab}`;
        if (timeState[tab].running) {
            timeText.textContent = mmss(timeState[tab].time);
            typeButton.textContent = "RESTART";
        } else if (timeState[tab].time > 0) {
            timeText.textContent = mmss(timeState[tab].time);
            typeButton.textContent = "START";
        } else {
            showDone(tab);
            typeButton.textContent = "RESTART";
        }
        typeButton.addEventListener("click", () => handleStart(tab));
    }

    buttonSoft.addEventListener("click", () => softPage("softPage"));
    buttonMedium.addEventListener("click", () => mediumPage("mediumPage"));
    buttonHard.addEventListener("click", () => hardPage("hardPage"));
    buttonRecipes.addEventListener("click", () => recipesPage());
    infoButton.addEventListener("click", () => getInfo("softPage"));
    homeButton.addEventListener("click", () => {
        backgroundWidth.remove();
        firstPage("softPage");
    });

    if (value === "softPage") {
        buttonSoft.className = "buttonDown";
        buttonMedium.className = "buttons";
        buttonHard.className = "buttons";
        buttonRecipes.style.borderBottom = "1px solid #000000";
    } else if (value === "recipesPage") {
        buttonRecipes.style.borderBottom = "0";
    }
}

function mediumPage(value) {
    backgroundWidth.remove();

    backgroundWidth = document.createElement("div");
    backgroundWidth.className = "backgroundWidth";
    backgroundWidth.style.width = "310px";
    backgroundWidth.style.height = "720px";
    backgroundWidth.style.top = "84px";
    backgroundWidth.style.borderRadius = "20px 20px 0 0";

    displayDiv = document.createElement("div");
    displayDiv.style.height = "720px";
    displayDiv.style.top = "0";
    displayDiv.style.bottom = "0";

    buttonDisplay = document.createElement("div");
    buttonSoft = document.createElement("div");
    imgSoft = document.createElement("img");
    buttonMedium = document.createElement("div");
    imgMedium = document.createElement("img");
    buttonHard = document.createElement("div");
    imgHard = document.createElement("img");
    buttonRecipes = document.createElement("div");
    imgRecipes = document.createElement("p");
    typeDisplay = document.createElement("div");
    infoDiv = document.createElement("div");
    infoButton = document.createElement("button");
    startEggBoilDiv = document.createElement("div");
    typeTextDiv = document.createElement("div");
    typeText = document.createElement("p");
    eggText = document.createElement("p");
    timeText = document.createElement("p");
    typeButton = document.createElement("button");
    homeButton = document.createElement("button");

    displayDiv.className = "displayDiv";
    buttonDisplay.className = "buttonDisplay";
    buttonSoft.className = "buttons";
    buttonMedium.className = "buttonDown";
    buttonHard.className = "buttons";
    buttonRecipes.className = "recipeButton";
    imgSoft.className = "imageButton";
    imgMedium.className = "imageButton";
    imgHard.className = "imageButton";
    typeDisplay.className = "typeDisplay";
    infoDiv.className = "infoDiv";
    infoButton.className = "infoButton";
    startEggBoilDiv.className = "startEggBoilDiv";
    typeText.className = "typeText";
    typeButton.className = "typeButton";
    homeButton.className = "homeButton";

    imgSoft.src = "Images/Soft.png";
    imgSoft.alt = "Soft Egg";
    imgMedium.src = "Images/Medium.png";
    imgMedium.alt = "Medium Egg";
    imgHard.src = "Images/Hard.png";
    imgHard.alt = "Hard Egg";

    txt = "Recipies";
    imgRecipes.textContent = "Recipes";
    imgRecipes.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;
    infoButton.textContent = "i";
    typeText.textContent = "Medium Boiled";
    eggText.textContent = "Egg";
    homeButton.textContent = "Home";

    typeDisplay.style.height = "660px";
    startEggBoilDiv.style.height = "585px";
    startEggBoilDiv.style.justifyContent = "space-around";
    eggText.style.textAlign = "center";
    eggText.style.fontSize = "24px";
    eggText.style.color = "#EE740A";
    timeText.style.fontSize = "80px";

    document.body.append(backgroundWidth);
    backgroundWidth.append(displayDiv);
    displayDiv.append(buttonDisplay);
    buttonDisplay.append(buttonSoft);
    buttonSoft.append(imgSoft);
    buttonDisplay.append(buttonMedium);
    buttonMedium.append(imgMedium);
    buttonDisplay.append(buttonHard);
    buttonHard.append(imgHard);
    buttonDisplay.append(buttonRecipes);
    buttonRecipes.append(imgRecipes);

    displayDiv.append(typeDisplay);
    typeDisplay.append(infoDiv);
    infoDiv.append(infoButton);
    typeDisplay.append(startEggBoilDiv);
    typeTextDiv.append(typeText, eggText);
    startEggBoilDiv.append(typeTextDiv, timeText, typeButton, homeButton);

    {
        const tab = "button2";
        timeText.id = `timer-${tab}`;
        typeButton.id = `startbtn-${tab}`;
        if (timeState[tab].running) {
            timeText.textContent = mmss(timeState[tab].time);
            typeButton.textContent = "RESTART";
        } else if (timeState[tab].time > 0) {
            timeText.textContent = mmss(timeState[tab].time);
            typeButton.textContent = "START";
        } else {
            showDone(tab);
            typeButton.textContent = "RESTART";
        }
        typeButton.addEventListener("click", () => handleStart(tab));
    }

    buttonSoft.addEventListener("click", () => softPage("softPage"));
    buttonMedium.addEventListener("click", () => mediumPage("mediumPage"));
    buttonHard.addEventListener("click", () => hardPage("hardPage"));
    buttonRecipes.addEventListener("click", () => recipesPage());
    infoButton.addEventListener("click", () => getInfo("mediumPage"));
    homeButton.addEventListener("click", () => {
        backgroundWidth.remove();
        firstPage("mediumPage");
    });

    if (value === "recipesPage") buttonRecipes.style.borderBottom = "0";
    else buttonRecipes.style.borderBottom = "1px solid #000000";
}

function hardPage(value) {
    backgroundWidth.remove();

    backgroundWidth = document.createElement("div");
    backgroundWidth.className = "backgroundWidth";
    backgroundWidth.style.width = "310px";
    backgroundWidth.style.height = "720px";
    backgroundWidth.style.top = "84px";
    backgroundWidth.style.borderRadius = "20px 20px 0 0";

    displayDiv = document.createElement("div");
    displayDiv.style.height = "720px";
    displayDiv.style.top = "0";
    displayDiv.style.bottom = "0";

    buttonDisplay = document.createElement("div");
    buttonSoft = document.createElement("div");
    imgSoft = document.createElement("img");
    buttonMedium = document.createElement("div");
    imgMedium = document.createElement("img");
    buttonHard = document.createElement("div");
    imgHard = document.createElement("img");
    buttonRecipes = document.createElement("div");
    imgRecipes = document.createElement("p");
    typeDisplay = document.createElement("div");
    infoDiv = document.createElement("div");
    infoButton = document.createElement("button");
    startEggBoilDiv = document.createElement("div");
    typeTextDiv = document.createElement("div");
    typeText = document.createElement("p");
    eggText = document.createElement("p");
    timeText = document.createElement("p");
    typeButton = document.createElement("button");
    homeButton = document.createElement("button");

    displayDiv.className = "displayDiv";
    buttonDisplay.className = "buttonDisplay";
    buttonSoft.className = "buttons";
    buttonMedium.className = "buttons";
    buttonHard.className = "buttonDown";
    buttonRecipes.className = "recipeButton";
    imgSoft.className = "imageButton";
    imgMedium.className = "imageButton";
    imgHard.className = "imageButton";
    typeDisplay.className = "typeDisplay";
    infoDiv.className = "infoDiv";
    infoButton.className = "infoButton";
    startEggBoilDiv.className = "startEggBoilDiv";
    typeText.className = "typeText";
    typeButton.className = "typeButton";
    homeButton.className = "homeButton";

    imgSoft.src = "Images/Soft.png";
    imgSoft.alt = "Soft Egg";
    imgMedium.src = "Images/Medium.png";
    imgMedium.alt = "Medium Egg";
    imgHard.src = "Images/Hard.png";
    imgHard.alt = "Hard Egg";

    txt = "Recipies";
    imgRecipes.textContent = "Recipes";
    imgRecipes.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;
    infoButton.textContent = "i";
    typeText.textContent = "Hard Boiled";
    eggText.textContent = "Egg";
    homeButton.textContent = "Home";

    typeDisplay.style.height = "660px";
    startEggBoilDiv.style.height = "585px";
    startEggBoilDiv.style.justifyContent = "space-around";
    eggText.style.textAlign = "center";
    eggText.style.fontSize = "24px";
    eggText.style.color = "#EE740A";
    timeText.style.fontSize = "80px";

    document.body.append(backgroundWidth);
    backgroundWidth.append(displayDiv);
    displayDiv.append(buttonDisplay);
    buttonDisplay.append(buttonSoft);
    buttonSoft.append(imgSoft);
    buttonDisplay.append(buttonMedium);
    buttonMedium.append(imgMedium);
    buttonDisplay.append(buttonHard);
    buttonHard.append(imgHard);
    buttonDisplay.append(buttonRecipes);
    buttonRecipes.append(imgRecipes);

    displayDiv.append(typeDisplay);
    typeDisplay.append(infoDiv);
    infoDiv.append(infoButton);
    typeDisplay.append(startEggBoilDiv);
    typeTextDiv.append(typeText, eggText);
    startEggBoilDiv.append(typeTextDiv, timeText, typeButton, homeButton);

    {
        const tab = "button3";
        timeText.id = `timer-${tab}`;
        typeButton.id = `startbtn-${tab}`;
        if (timeState[tab].running) {
            timeText.textContent = mmss(timeState[tab].time);
            typeButton.textContent = "RESTART";
        } else if (timeState[tab].time > 0) {
            timeText.textContent = mmss(timeState[tab].time);
            typeButton.textContent = "START";
        } else {
            showDone(tab);
            typeButton.textContent = "RESTART";
        }
        typeButton.addEventListener("click", () => handleStart(tab));
    }

    buttonSoft.addEventListener("click", () => softPage("softPage"));
    buttonMedium.addEventListener("click", () => mediumPage("mediumPage"));
    buttonHard.addEventListener("click", () => hardPage("hardPage"));
    buttonRecipes.addEventListener("click", () => recipesPage());
    infoButton.addEventListener("click", () => getInfo("hardPage"));
    homeButton.addEventListener("click", () => {
        backgroundWidth.remove();
        firstPage("hardPage");
    });

    if (value === "recipesPage") buttonRecipes.style.borderBottom = "0";
    else buttonRecipes.style.borderBottom = "1px solid #000000";
}

function recipesPage() {
    backgroundWidth.remove();

    backgroundWidth = document.createElement("div");
    backgroundWidth.className = "backgroundWidth";
    backgroundWidth.style.width = "310px";
    backgroundWidth.style.height = "720px";
    backgroundWidth.style.top = "84px";
    backgroundWidth.style.borderRadius = "20px 20px 0 0";

    displayDiv = document.createElement("div");
    displayDiv.style.height = "720px";
    displayDiv.style.top = "0";
    displayDiv.style.bottom = "0";

    buttonDisplay = document.createElement("div");
    buttonSoft = document.createElement("div");
    imgSoft = document.createElement("img");
    buttonMedium = document.createElement("div");
    imgMedium = document.createElement("img");
    buttonHard = document.createElement("div");
    imgHard = document.createElement("img");
    buttonRecipes = document.createElement("div");
    imgRecipes = document.createElement("p");

    typeDisplay = document.createElement("div");
    typeDisplay.className = "typeDisplay";
    typeDisplay.style.height = "660px";

    buttonDisplay.className = "buttonDisplay";
    buttonSoft.className = "buttons";
    buttonMedium.className = "buttons";
    buttonHard.className = "buttons";
    buttonRecipes.className = "recipeButton";
    imgSoft.className = "imageButton";
    imgMedium.className = "imageButton";
    imgHard.className = "imageButton";

    imgSoft.src = "Images/Soft.png"; imgSoft.alt = "Soft Egg";
    imgMedium.src = "Images/Medium.png"; imgMedium.alt = "Medium Egg";
    imgHard.src = "Images/Hard.png"; imgHard.alt = "Hard Egg";
    txt = "Recipies";
    imgRecipes.textContent = "Recipes";
    imgRecipes.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;

    buttonRecipes.style.borderBottom = "0";

    document.body.append(backgroundWidth);
    backgroundWidth.append(displayDiv);
    displayDiv.append(buttonDisplay);
    buttonDisplay.append(buttonSoft);
    buttonSoft.append(imgSoft);
    buttonDisplay.append(buttonMedium);
    buttonMedium.append(imgMedium);
    buttonDisplay.append(buttonHard);
    buttonHard.append(imgHard);
    buttonDisplay.append(buttonRecipes);
    buttonRecipes.append(imgRecipes);
    displayDiv.append(typeDisplay);

    typeDisplay.innerHTML = `
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

    buttonSoft.addEventListener("click", () => softPage("softPage"));
    buttonMedium.addEventListener("click", () => mediumPage("mediumPage"));
    buttonHard.addEventListener("click", () => hardPage("hardPage"));
    buttonRecipes.addEventListener("click", () => recipesPage());
}


function mmss(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
}

function paint(tab) {
    const el = document.getElementById(`timer-${tab}`);
    if (!el) return;
    if (timeState[tab].time <= 0) return;
    const t = timeState[tab].time;
    el.style.textAlign = "";
    el.style.color = "";
    el.textContent = mmss(t);
}

function showDone(tab) {
    const el = document.getElementById(`timer-${tab}`);
    if (!el) return;
    el.textContent = "EAT IT!";
    el.style.textAlign = "center";
    el.style.color = "#EE740A";

    const btn = document.getElementById(`startbtn-${tab}`);
    if (btn) btn.textContent = "RESTART";
}

function startTimer(tab) {
    const st = timeState[tab];
    if (st.running) return;
    if (st.time <= 0) st.time = timeDuration[tab];

    st.running = true;
    const btn = document.getElementById(`startbtn-${tab}`);
    if (btn) btn.textContent = "RESTART";
    paint(tab);

    if (st.id) clearInterval(st.id);
    st.id = setInterval(() => {
        st.time--;
        paint(tab);
        if (st.time <= 0) {
            clearInterval(st.id);
            st.id = null;
            st.running = false;
            st.time = 0;
            showDone(tab);
        }
    }, 1000);
}

function restartTimer(tab) {
    const st = timeState[tab];
    if (st.id) clearInterval(st.id);
    st.id = null;
    st.running = false;
    st.time = timeDuration[tab];

    paint(tab);
    const btn = document.getElementById(`startbtn-${tab}`);
    if (btn) btn.textContent = "START";
}

function handleStart(tab) {
    const btn = document.getElementById(`startbtn-${tab}`);
    if (!btn) return;
    if (btn.textContent === "START") {
        startTimer(tab);
    } else {
        restartTimer(tab);
    }
}

firstPage("softButton");
