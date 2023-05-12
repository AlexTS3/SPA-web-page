import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

import { navBar } from "./views/navbar.js";
import { homePage } from "./views/home.js";
import { gymPage } from "./views/gym.js";
import { physioPage } from "./views/physio.js";
import { nutriPage } from "./views/nutrition.js";
import { aboutPage } from "./views/about.js";
import { acute } from "./views/physio views/acute.js";
import { chronic } from "./views/physio views/chronic.js";
import { limited } from "./views/physio views/limitMovement.js";
import { postural } from "./views/physio views/postural.js";
import { surgical } from "./views/physio views/surgical.js";
import { homeScreen } from "./views/homeScreen.js";


const root = document.querySelector('main');

page(middleware);
page('/index.html', '/');
page('/', homeScreen);
page('/nav-page', homePage)
page('/gym', gymPage);
page('/physio', physioPage);
page('/physio/acute', acute);
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