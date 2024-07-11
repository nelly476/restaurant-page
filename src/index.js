import Content from "./Content";
import Home from "./Home"

document.body.appendChild(Content())

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

// [homeBtn, menuBtn, aboutBtn].forEach(btn => {
//     addEventListener("click", e => getPage(e))
// })
homeBtn.addEventListener("click", (e) => {
    getPage(e)
})

console.log(homeBtn)



function getPage(e) {
    // console.log(e.target.id === "home-btn")
        switch (e.target.id) {
            case "home-btn" :
                console.log("home")
                document.body.appendChild(Home())
                break

            case "menu-btn" :
                console.log("bcjd")
                break

            case "about-btn" :
                console.log("about")
                break
        }
}