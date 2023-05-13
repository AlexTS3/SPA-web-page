import { html } from "../../node_modules/lit-html/lit-html.js";

const homeScreenTemplate = () => html`

<div class="container">
    <h1>Abuse The Movement Community</h1>
    <img class="home-logo"  src="../../resources/logo.png">


<p>Добре дошли! Тук може да намерите информация за фитнес, кинезитерапия и хранене!<p>

</div>`;

export function homeScreen(ctx) {
    ctx.render(homeScreenTemplate());
}