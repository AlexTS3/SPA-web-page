import { html } from "../../node_modules/lit-html/lit-html.js";

const homeScreenTemplate = () => html`
<img class="home-logo" src="../../resources/logo.png" href="/nav-page">

<h1>Abuse The Movement Community</h1>

<p>Добре дошли! Тук може да намерите информация за фитнес, кинезитерапия и хранене!<p>
    
<p>Abuse The Knowledge<p>`;

export function homeScreen(ctx) {
    ctx.render(homeScreenTemplate());
}