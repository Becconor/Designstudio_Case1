
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
    };
};






// Första sidan
function pageOne() {
    let firstBackground = document.createElement("div");
    let infoBackground = document.createElement("div");
    const imgLogo = document.createElement("img");
    let infodiv = document.createElement("div");
    let info = document.createElement("button");

    let eggButtons = document.createElement("div");
    let eggButton1 = document.createElement("div");
    let eggButton2 = document.createElement("div");
    let eggButton3 = document.createElement("div");
    let eggButton4 = document.createElement("div");

    let softImg = document.createElement("img");
    let mediumImg = document.createElement("img");
    let hardImg = document.createElement("img");
    let recipes = document.createElement("p");

    let eggDes = document.createElement("div");
    let eggType = document.createElement("div");
    let eggTextDes = document.createElement("p");
    let eggButtonDes = document.createElement("button");

    firstBackground.className = "firstBackground";
    infodiv.className = "infoDiv";
    info.className = "info";

    eggButtons.className = "eggButtonPanel";
    eggButton1.className = "eggButtonsDown";
    eggButton2.className = "eggButtons";
    eggButton3.className = "eggButtons";
    eggButton4.className = "eggButtons";

    softImg.className = "eggImg";
    mediumImg.className = "eggImg";
    hardImg.className = "eggImg";
    recipes.className = "recipes";

    eggDes.className = "eggDes";
    eggType.className = "eggType";
    eggTextDes.className = "eggTextDes";
    eggButtonDes.className = "eggButtonDes";


    imgLogo.src = "Images/Logo.png";
    imgLogo.alt = "LogoType";
    imgLogo.className = "firstImage";


    softImg.src = "Images/Soft.png";
    softImg.alt = "Soft egg";
    mediumImg.src = "Images/Medium.png";
    mediumImg.alt = "Medium egg";
    hardImg.src = "Images/Hard.png";
    hardImg.alt = "Hard egg";


    const txt = "Recipies";
    recipes.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;

    info.textContent = "i"
    eggTextDes.textContent = "Soft boiled";
    eggButtonDes.textContent = "Boil Your Egg";


    document.body.append(firstBackground);
    firstBackground.append(imgLogo, eggButtons);
    eggButton1.append(softImg);
    eggButton2.append(mediumImg);
    eggButton3.append(hardImg);
    eggButton4.append(recipes);
    eggButtons.append(eggButton1, eggButton2, eggButton3, eggButton4);
    firstBackground.append(eggDes);
    infodiv.append(info);
    eggDes.append(infodiv, eggType);
    eggType.append(eggTextDes, eggButtonDes);



    eggButton1.addEventListener("click", pageSoft);
    eggButton2.addEventListener("click", pageMedium);
    eggButton3.addEventListener("click", pageHard);
    eggButton4.addEventListener("click", pageRecipes);
    eggButtonDes.addEventListener("click", pageSoft);

    info.addEventListener("click", () => {
        pageInfo();
    });



    function pageInfo(value) {
        firstBackground.innerHTML = `
            <div class="xDiv"> 
                <p class="xClose">+</p> 
            </div> <div class="infoDivTxt"> 
                
            <div class="infoTxt"> 
                <p class="infoH2">How do you cook an egg?</p> 
                <p class="infoP">Put water in a pott so that the egg is just covered with water. Let the water cook to a boil BEFORE putting in the eggs in the water, for best effect.</p> 
            </div> 
            
            <div class="infoTxt"> 
                <p class="infoH2">How do you cook an egg?</p> 
                <p class="infoP">Put water in a pott so that the egg is just covered with water. Let the water cook to a boil BEFORE putting in the eggs in the water, for best effect.</p> 
            </div> 
            
            <div class="infoTxt"> 
                <p class="infoH2">How do you cook an egg?</p> 
                <p class="infoP">Put water in a pott so that the egg is just covered with water. Let the water cook to a boil BEFORE putting in the eggs in the water, for best effect.</p> 
            </div> 
            
            </div> 
            `;

        firstBackground.style.width = "310px";
        firstBackground.style.height = "720px";
        firstBackground.style.top = "83px";
        firstBackground.style.borderRadius = "20px 20px 0 0";
        firstBackground.style.border = "1px solid #000000"
        firstBackground.style.justifyContent = "flex-start";
        firstBackground.style.gap = "40px";

        let xClose = firstBackground.querySelector('.xClose');

        xClose.addEventListener('click', () => {
            firstBackground.remove();
            pageOne();
        });

        eggButtons.remove();
        eggDes.remove();
        imgLogo.remove();
    }

    function pageSoft() {
        eggButton1.className = "eggButtonsDown";
        if (eggButton4.className === "eggButtonsDown") {
            eggButton4.className = "eggButtons";
        } else if (eggButton2.className === "eggButtonsDown") {
            eggButton2.className = "eggButtons";
        } else if (eggButton3.className === "eggButtonsDown") {
            eggButton3.className = "eggButtons";
        }

        eggType.innerHTML = `
            <div class="labelTxt">
            <p class="eggTextDes">Soft Boiled</p>
            <p class="eggTxt">Egg</p>
            </div>

            <p class="timer timer1">07:00</p>
            <button class="eggButtonDes">START</button>
        `;

        const eggButtonDesEl = eggType.querySelector('.eggButtonDes');

        firstBackground.style.width = "310px";
        firstBackground.style.height = "720px";
        firstBackground.style.top = "83px";
        firstBackground.style.borderRadius = "20px 20px 0 0";

        eggButtonDesEl.style.width = "167px";
        eggButtonDesEl.style.height = "64px";
        eggButtonDesEl.style.fontFamily = "Alexandria";

        eggButtons.style.margin = "0";
        eggType.style.height = "500px";
        eggType.style.gap = "70px";
        eggDes.style.height = "680px";

        imgLogo.remove();
        infodiv.style.display = '';

        homeButton();
        info.addEventListener("click", () => pageInfo("soft"));
    }


    function pageMedium() {

        eggButton2.className = "eggButtonsDown";
        if (eggButton1.className === "eggButtonsDown") {
            eggButton1.className = "eggButtons";
        } else if (eggButton4.className === "eggButtonsDown") {
            eggButton4.className = "eggButtons";
        } else if (eggButton3.className === "eggButtonsDown") {
            eggButton3.className = "eggButtons";
        }

        eggType.innerHTML = `
            <div class="labelTxt">
            <p class="eggTextDes">Medium Boiled</p>
            <p class="eggTxt">Egg</p>
            </div>

            <p class="timer timer1">09:00</p>
            <button class="eggButtonDes">START</button>
        `;

        const eggButtonDesEl = eggType.querySelector('.eggButtonDes');

        firstBackground.style.width = "310px";
        firstBackground.style.height = "720px";
        firstBackground.style.top = "83px";
        firstBackground.style.borderRadius = "20px 20px 0 0";

        eggButtonDesEl.style.width = "167px";
        eggButtonDesEl.style.height = "64px";
        eggButtonDesEl.style.fontFamily = "Alexandria";

        eggButtons.style.margin = "0";
        eggType.style.height = "500px";
        eggType.style.gap = "70px";

        imgLogo.remove();
        infodiv.style.display = '';

        homeButton();

        eggDes.style.height = "680px";

    }


    function pageHard() {
        eggButton3.className = "eggButtonsDown";
        if (eggButton1.className === "eggButtonsDown") {
            eggButton1.className = "eggButtons";
        } else if (eggButton2.className === "eggButtonsDown") {
            eggButton2.className = "eggButtons";
        } else if (eggButton4.className === "eggButtonsDown") {
            eggButton4.className = "eggButtons";
        }

        eggType.innerHTML = `
        <div class="labelTxt">
        <p class="eggTextDes">Hard Boiled</p>
        <p class="eggTxt">Egg</p>
        </div>

        <p class="timer timer1">12:00</p>
        <button class="eggButtonDes">START</button>
    `;

        const eggButtonDesEl = eggType.querySelector('.eggButtonDes');

        firstBackground.style.width = "310px";
        firstBackground.style.height = "720px";
        firstBackground.style.top = "83px";
        firstBackground.style.borderRadius = "20px 20px 0 0";

        eggButtonDesEl.style.width = "167px";
        eggButtonDesEl.style.height = "64px";
        eggButtonDesEl.style.fontFamily = "Alexandria";

        eggButtons.style.margin = "0";
        eggType.style.height = "500px";
        eggType.style.gap = "70px";
        eggDes.style.height = "680px";

        imgLogo.remove();
        infodiv.style.display = '';

        homeButton();
    }


    function pageRecipes() {
        eggButton4.className = "eggButtonsDown";
        if (eggButton1.className === "eggButtonsDown") {
            eggButton1.className = "eggButtons";
        } else if (eggButton2.className === "eggButtonsDown") {
            eggButton2.className = "eggButtons";
        } else if (eggButton3.className === "eggButtonsDown") {
            eggButton3.className = "eggButtons";
        }

        eggType.innerHTML = `
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
                    <img src="Images/Greek_inspired.png" class="eggPics"></img>

                    <div class="recipeTxt">
                        <p class="recipeTitle">GREEK INSPIRED</p>
                        <p class="recipeIngredient">• Dill</p>
                        <p class="recipeIngredient">• Feta</p>
                        <p class="recipeIngredient">• Kalamata olives</p>
                    </div>
                </div>

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
                    <img src="Images/Greek_inspired.png" class="eggPics"></img>

                    <div class="recipeTxt">
                        <p class="recipeTitle">GREEK INSPIRED</p>
                        <p class="recipeIngredient">• Dill</p>
                        <p class="recipeIngredient">• Feta</p>
                        <p class="recipeIngredient">• Kalamata olives</p>
                    </div>
                </div>

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
                    <img src="Images/Greek_inspired.png" class="eggPics"></img>

                    <div class="recipeTxt">
                        <p class="recipeTitle">GREEK INSPIRED</p>
                        <p class="recipeIngredient">• Dill</p>
                        <p class="recipeIngredient">• Feta</p>
                        <p class="recipeIngredient">• Kalamata olives</p>
                    </div>
                </div>

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
                    <img src="Images/Greek_inspired.png" class="eggPics"></img>

                    <div class="recipeTxt">
                        <p class="recipeTitle">GREEK INSPIRED</p>
                        <p class="recipeIngredient">• Dill</p>
                        <p class="recipeIngredient">• Feta</p>
                        <p class="recipeIngredient">• Kalamata olives</p>
                    </div>
                </div>

                <div class="recipeLable">
                    <img src="Images/Greek_inspired.png" class="eggPics"></img>
            
                    <div class="recipeTxt">
                        <p class="recipeTitle">GREEK INSPIRED</p>
                        <p class="recipeIngredient">• Dill</p>
                        <p class="recipeIngredient">• Feta</p>
                        <p class="recipeIngredient">• Kalamata olives</p>
                    </div>
                </div>
            </div>
        `;

        firstBackground.style.width = "310px";
        firstBackground.style.height = "720px";
        firstBackground.style.top = "83px";
        firstBackground.style.borderRadius = "20px 20px 0 0";

        eggButtons.style.margin = "0";
        eggType.style.height = "590px";

        imgLogo.remove();
        infodiv.style.display = 'none';

        eggDes.style.height = "680px";
    }


    function homeButton() {
        const homeButton = document.createElement("p");
        homeButton.textContent = "Home";
        homeButton.className = "homeButton";
        homeButton.style.textDecoration = "underline";
        homeButton.style.fontFamily = "Kaushan";
        homeButton.style.fontSize = "24px";
        eggType.append(homeButton);

        homeButton.addEventListener('click', () => {
            document.querySelector('.firstBackground').remove();
            pageOne();
        });
    }
}


pageOne();