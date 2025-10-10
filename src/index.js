import "./styles.css";
import applepieImg from "./img/apple-pie.jpg"
import pancakeImg from "./img/pancakes.jpg"

const renderPage = function () {

    const content = document.querySelector("#content");

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

        function clean() {
            content.innerHTML = "";
        }
    }