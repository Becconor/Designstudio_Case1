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

let background1 = document.createElement("div");
let logoImage = document.createElement("img");
let background2 = document.createElement("div");


function firstPage() {
    background1.style.backgroundColor = "#FAF8EC";
    background1.style.width = "390px";
    background1.style.height = "764px";

    background1.style.display = "flex";
    background1.style.flexDirection = "column";
    background1.style.justifyContent = "center";
    background1.style.alignItems = "center";

    background1.style.position = "absolute";
    background1.style.top = "40px";
    background1.style.bottom = "40px";



    logoImage.src = "Images/Logo.png";
    logoImage.alt = "LogoType";
    logoImage.style.width = "362px";
    logoImage.style.position = "absolute";
    logoImage.style.top = "64px";



    background2.style.backgroundColor = "#FAF8EC";
    background2.style.width = "310px";
    background2.style.height = "424px";
    background2.style.borderRadius = "20px 20px 0 0";
    background2.style.display = "flex";
    background2.style.flexDirection = "column";
    background2.style.alignItems = "center";

    background2.style.position = "absolute";
    background2.style.top = "337px";
    background2.style.bottom = "80px";



    let buttons = document.createElement("div");
    buttons.style.width = "100%";
    buttons.style.display = "flex";



    let button1 = document.createElement("div");
    button1.style.width = "77.5px";
    button1.style.height = "60px";
    button1.style.borderTop = "1px solid #000000";
    button1.style.borderRight = "1px solid #000000";
    button1.style.borderLeft = "1px solid #000000";
    button1.style.borderRadius = "20px 20px 0 0";
    button1.style.display = "flex";
    button1.style.justifyContent = "center";
    button1.style.alignItems = "center";
    button1.style.cursor = "pointer";

    let button1Image = document.createElement("img");
    button1Image.style.width = "60px";
    button1Image.src = "Images/Soft.png";
    button1Image.alt = "Soft egg";



    let button2 = document.createElement("div");
    button2.style.width = "77.5px";
    button2.style.height = "60px";
    button2.style.border = "1px solid #000000";
    button2.style.borderRadius = "20px 20px 0 0";
    button2.style.display = "flex";
    button2.style.justifyContent = "center";
    button2.style.alignItems = "center";
    button2.style.cursor = "pointer";

    let button2Image = document.createElement("img");
    button2Image.style.width = "60px";
    button2Image.src = "Images/Medium.png";
    button2Image.alt = "Medium egg";



    let button3 = document.createElement("div");
    button3.style.width = "77.5px";
    button3.style.height = "60px";
    button3.style.border = "1px solid #000000";
    button3.style.borderRadius = "20px 20px 0 0";
    button3.style.display = "flex";
    button3.style.justifyContent = "center";
    button3.style.alignItems = "center";
    button3.style.cursor = "pointer";

    let button3Image = document.createElement("img");
    button3Image.style.width = "60px";
    button3Image.src = "Images/Hard.png";
    button3Image.alt = "Hard egg";



    let button4 = document.createElement("p");
    button4.style.color = "#EE740A";
    button4.style.fontFamily = "Kaushan";
    button4.style.fontSize = "16px";
    button4.style.width = "77.5px";
    button4.style.height = "60px";
    button4.style.border = "1px solid #000000";
    button4.style.borderRadius = "20px 20px 0 0";
    button4.textContent = "Recipes";
    button4.style.display = "flex";
    button4.style.justifyContent = "center";
    button4.style.alignItems = "center";
    button4.style.cursor = "pointer";

    let txt = "Recipies";
    button4.innerHTML = `<span class="first-letter">${txt[0]}</span>${txt.slice(1)}`;



    let homePage = document.createElement("div");
    homePage.style.height = "364px";
    homePage.style.width = "100%";
    homePage.style.borderLeft = "1px solid #000000";
    homePage.style.borderRight = "1px solid #000000";
    homePage.style.borderBottom = "1px solid #000000";

    let infoDiv = document.createElement("div");
    infoDiv.style.display = "flex";
    infoDiv.style.justifyContent = "flex-end";
    infoDiv.style.padding = "25px 25px";

    let infoButton = document.createElement("button");
    infoButton.textContent = "i"
    infoButton.style.border = "2px solid #000000";
    infoButton.style.borderRadius = "50%";
    infoButton.style.width = "24px";
    infoButton.style.height = "24px";
    infoButton.style.backgroundColor = "#FAF8EC";
    infoButton.style.cursor = "pointer";



    let getStartedDiv = document.createElement("div");
    getStartedDiv.style.display = "flex";
    getStartedDiv.style.flexDirection = "column";
    getStartedDiv.style.justifyContent = "center";
    getStartedDiv.style.alignItems = "center";
    getStartedDiv.style.height = "290px";
    getStartedDiv.style.padding = "0 25px 50px";
    getStartedDiv.style.gap = "50px";

    let softText = document.createElement("p");
    softText.textContent = "Soft Boiled";
    softText.style.fontFamily = "Kaushan";
    softText.style.fontSize = "48px";

    let getStartedButton = document.createElement("button");
    getStartedButton.textContent = "Boil Your Egg";
    getStartedButton.style.fontSize = "36px";
    getStartedButton.style.backgroundColor = "#000000";
    getStartedButton.style.color = "#EE740A";
    getStartedButton.style.border = "0";
    getStartedButton.style.borderRadius = "20px";
    getStartedButton.style.padding = "10px 20px";
    getStartedButton.style.cursor = "pointer";



    infoButton.addEventListener("click", getInfo);



    document.body.append(background1);
    document.body.append(logoImage);
    document.body.append(background2);
    homePage.append(infoDiv, getStartedDiv)
    infoDiv.append(infoButton);
    getStartedDiv.append(softText, getStartedButton);
    button1.append(button1Image);
    button2.append(button2Image);
    button3.append(button3Image);
    buttons.append(button1, button2, button3, button4);
    background2.append(buttons, homePage);
}

firstPage();







function getInfo() {
    background1.remove();
    logoImage.remove();
    background2.remove();

    let backgroundInfo1 = document.createElement("div");
    backgroundInfo1.style.backgroundColor = "#FAF8EC";
    backgroundInfo1.style.width = "310px";
    backgroundInfo1.style.height = "676px";

    backgroundInfo1.style.border = "1px solid #000000"
    backgroundInfo1.style.borderRadius = "20px";

    backgroundInfo1.style.position = "absolute";
    backgroundInfo1.style.top = "84px";
    backgroundInfo1.style.bottom = "84px";



    let xClose = document.createElement("div");
    xClose.style.width = "100%";
    xClose.style.padding = "15.5px 25px";
    xClose.style.display = "flex";
    xClose.style.justifyContent = "flex-end";

    let xCloseButton = document.createElement("button");
    xCloseButton.textContent = "+";
    xCloseButton.style.borderRadius = "50%";
    xCloseButton.style.border = "0";
    xCloseButton.style.backgroundColor = "#FAF8EC";
    xCloseButton.style.transform = "rotate(45deg)";
    xCloseButton.style.fontSize = "36px";



    let xCloseText = document.createElement("div");
    xCloseText.style.display = "flex";
    xCloseText.style.flexDirection = "column";
    xCloseText.style.textAlign = "center";
    xCloseText.style.gap = "50px";
    xCloseText.style.padding = "9.5px 25px 25px 25px"
    xCloseText.style.height = "602px";
    xCloseText.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 50px;">
            <p style="font-family: Kaushan; font-size: 16px; color: #EE740A;">How do you cook an egg?</p>
            <p style="font-size: 13px;">Put water in a pott so that the egg is just covered with water. Let the water cook to a boil BEFORE putting in the eggs in the water, for best effect.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 20px;">
            <p style="font-family: Kaushan; font-size: 16px; color: #EE740A;">How do you cook an egg?</p>
            <p style="font-size: 13px;">Put water in a pott so that the egg is just covered with water. Let the water cook to a boil BEFORE putting in the eggs in the water, for best effect.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 20px;">
            <p style="font-family: Kaushan; font-size: 16px; color: #EE740A;">How do you cook an egg?</p>
            <p style="font-size: 13px;">Put water in a pott so that the egg is just covered with water. Let the water cook to a boil BEFORE putting in the eggs in the water, for best effect.</p>
        </div>
    `;


    document.body.append(backgroundInfo1);
    backgroundInfo1.append(xClose, xCloseText);
    xClose.append(xCloseButton);

    xCloseButton.addEventListener('click', () => {
        backgroundInfo1.remove();
        firstPage();
    });
};












let background3 = document.createElement("div");
background3.style.backgroundColor = "#FAF8EC";
background3.style.width = "310px";
background3.style.height = "720px";
background3.style.borderRadius = "20px 20px 0 0";

background3.style.display = "flex";
background3.style.flexDirection = "column";
background3.style.justifyContent = "center";
background3.style.alignItems = "center";

background3.style.position = "absolute";
background3.style.top = "84px";
background3.style.bottom = "40px";

/* document.body.append(background3); */





let backgroundInfo2 = document.createElement("div");
backgroundInfo2.style.backgroundColor = "#FAF8EC";
backgroundInfo2.style.width = "310px";
backgroundInfo2.style.height = "720px";

backgroundInfo2.style.border = "1px solid #000000"
backgroundInfo2.style.borderRadius = "20px 20px 0 0";

backgroundInfo2.style.display = "flex";
backgroundInfo2.style.flexDirection = "column";
backgroundInfo2.style.justifyContent = "center";
backgroundInfo2.style.alignItems = "center";

backgroundInfo2.style.position = "absolute";
backgroundInfo2.style.top = "84px";
backgroundInfo2.style.bottom = "40px";

/* document.body.append(backgroundInfo2); */