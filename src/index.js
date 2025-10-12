import "./styles.css";
import applepieImg from "./img/apple-pie.jpg"
import pancakeImg from "./img/pancakes.jpg"

const Content = function () {

    const Render = function () {

        const content = document.querySelector("#content");

        function clean() {
            content.innerHTML = "";
        }
        
        const home = function () {
            const resTitle = document.createElement("h1");
            resTitle.classList.add("res-title");
            resTitle.textContent = "Restaurant Title";
            
            const splashCont = document.createElement("div");
            splashCont.classList.add("splash-cont");
            
            const imgWrapper1 = document.createElement("div");
            imgWrapper1.classList.add("img-wrapper");
            const imgWrapper2 = document.createElement("div");
            imgWrapper2.classList.add("img-wrapper");
            
            const titleTxt = "Splash Title";
            const imgTitle1 = document.createElement("h2");
            imgTitle1.textContent = titleTxt;
            const imgTitle2 = document.createElement("h2");
            imgTitle2.textContent = titleTxt;
            
            const splashImg1 = document.createElement("img");
            splashImg1.src = applepieImg;
            const splashImg2 = document.createElement("img");
            splashImg2.src = pancakeImg;
            
            content.appendChild(resTitle);
            content.appendChild(splashCont);
            splashCont.appendChild(imgWrapper1)
            splashCont.appendChild(imgWrapper2)
            imgWrapper1.appendChild(imgTitle1)
            imgWrapper2.appendChild(imgTitle2)
            imgWrapper1.appendChild(splashImg1)
            imgWrapper2.appendChild(splashImg2)
        }
        
        const menu = () => {
            function makeMenuItem (name, price, parentElement) {
                if (typeof name !== "string" ||
                    typeof price !== "string"
                ) {
                    throw new Error("Menu Item Name must be a String")
                } else if (typeof parentElement !== "object") {
                    throw new Error("Variable Must be a Dom Node")
                };

                const itemDiv = document.createElement("div");

                const itemTitle = document.createElement("span");
                itemTitle.textContent = name;

                const itemPrice = document.createElement("div");
                itemPrice.textContent = price;

                itemDiv.appendChild(itemTitle);
                itemDiv.appendChild(itemPrice);
                parentElement.appendChild(itemDiv);
            }

            const menuDiv = document.createElement("div");
            menuDiv.classList.add("menu");

            const menuTitle = document.createElement("h1");
            menuTitle.textContent = "Cafe Menu";
            menuTitle.classList.add("menu-title");

            const hotCoffSect = document.createElement("section");
            const hotTitle = document.createElement("h2");
            hotTitle.textContent = "HOT COFFEE";
            hotCoffSect.appendChild(hotTitle)
            makeMenuItem("Cappucino", "$1.99", hotCoffSect);
            makeMenuItem("Cottage Cheese Fry", "$2.99", hotCoffSect);
            makeMenuItem("Velvet Coffee", "$2.99", hotCoffSect);
            makeMenuItem("Flat White", "$4.99", hotCoffSect);
            makeMenuItem("Cinnamon Coffee", "$3.99", hotCoffSect);
            makeMenuItem("Espresso", "$1.99", hotCoffSect);
            makeMenuItem("Vanilla Late", "$3.99", hotCoffSect);
            makeMenuItem("Filter Coffee", "$4.99", hotCoffSect);
            
            const snackSect = document.createElement("section");
            const snackTitle = document.createElement("h2");
            snackTitle.textContent = "SNACKS";
            snackSect.appendChild(snackTitle);
            makeMenuItem("Sandwich", "$1.99", snackSect);
            makeMenuItem("Cottage Cheese Fry", "$2.99", snackSect);
            makeMenuItem("Garlic Bread", "$4.99", snackSect);
            makeMenuItem("Bread Sticks", "$1.99");
            makeMenuItem("Veg Burger", "$3.99", snackSect);
            makeMenuItem("Veg Pizza", "$1.99", snackSect);
            makeMenuItem("Chicken Pockets", "$3.99", snackSect);
            makeMenuItem("Pita Bread", "$4.99", snackSect);

            const coldCoffSect = document.createElement("section");
            const coldTitle = document.createElement("h2");
            coldTitle.textContent = "COLD COFFEE";
            coldCoffSect.appendChild(coldTitle);
            makeMenuItem("Vegan Shake", "$1.99", coldCoffSect);
            makeMenuItem("Cold Coffee", "$2.99", coldCoffSect);
            makeMenuItem("Cold Mocha", "$4.99", coldCoffSect);
            makeMenuItem("Iced Tea", "$1.99", coldCoffSect);
            makeMenuItem("Chilled Late", "$3.99", coldCoffSect);
            makeMenuItem("Belgian Chocolate", "$1.99", coldCoffSect);
            makeMenuItem("Crunchy Frappe", "$3.99", coldCoffSect);
            makeMenuItem("Chocolate Shake", "$4.99", coldCoffSect);

            const dessertSect = document.createElement("section");
            const dessertTitle = document.createElement("h2");
            dessertTitle.textContent = "DESSERT";
            dessertSect.appendChild(dessertTitle);
            makeMenuItem("Cheesecake", "$1.99", dessertSect);
            makeMenuItem("Choco Fantasy", "$2.99", dessertSect);
            makeMenuItem("Brownie", "$4.99", dessertSect);
            makeMenuItem("Choco Fudge", "$1.99", dessertSect);
            makeMenuItem("Vanilla Scoop", "$3.99", dessertSect);
            makeMenuItem("Berry Cheesecake", "$1.99", dessertSect);
            makeMenuItem("Strawberry Cake", "$3.99", dessertSect);
            makeMenuItem("Red Velvet Cake", "$4.99", dessertSect);
        }
    }
}