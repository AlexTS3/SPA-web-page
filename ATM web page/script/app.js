import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

import { navBar } from "./views/navbar.js";
import { homePage } from "./views/home.js";
import { gymPage } from "./views/gym.js";
import { physioPage } from "./views/physio.js";
import { nutriPage } from "./views/nutrition.js";
import { aboutPage } from "./views/about.js";


const root = document.querySelector('main');

page(middleware);
page('/index.html', '/');
page('/', homePage);
page('/gym', gymPage);
page('/physio', physioPage);
page('/nutrition', nutriPage);
page('/about', aboutPage);


page.start();

function middleware(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = navBar;
    next();
}