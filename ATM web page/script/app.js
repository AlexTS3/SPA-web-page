import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

import { navBar } from "./views/navbar.js";
import { gymPage } from "./views/gym.js";
import { physioPage } from "./views/physio.js";
import { nutriPage } from "./views/nutrition.js";
import { aboutPage } from "./views/about.js";
import { acute } from "./views/physio views/acute/acute.js";
import { chronic } from "./views/physio views/chronic/chronic.js";
import { limited } from "./views/physio views/limited/limitMovement.js";
import { postural } from "./views/physio views/postural/postural.js";
import { surgical } from "./views/physio views/surgical/surgical.js";
import { homeScreen } from "./views/homeScreen.js";
import { acuteLower } from "./views/physio views/acute/lower.js";


const root = document.querySelector('main');

page(middleware);
page('/index.html', '/');
page('/', homeScreen);
page('/gym', gymPage);
page('/physio', physioPage);
page('/physio/acute', acute);
// page('/physio/acute/upper', acute);
page('/physio/acute/lower', acuteLower);
// page('/physio/acute/neck', acute);
// page('/physio/acute/torso', acute);
page('/physio/chronic', chronic);
page('/physio/limitations', limited);
page('/physio/postural', postural);
page('/physio/surgical', surgical);
page('/nutrition', nutriPage);
page('/about', aboutPage);


page.start();
navBar();

function middleware(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = navBar;
    next();
}

document.querySelector('.navbar').addEventListener('click', (e) => {
    if(e.target.href){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        e.target.classList.toggle('active')
    }
})

// document.querySelector('.container').addEventListener('click', (e) => {
//     const currentEl = e.target;
//     currentEl.setAttribute('class', 'inMenu');
// })