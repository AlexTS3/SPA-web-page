import { html } from "../../node_modules/lit-html/lit-html.js";

const homeScreenTemplate = () => html`

<div class="home-screen">
    <h1>Abuse The Movement Community</h1>
<!-- <div class="img-logo"> -->
    <img class="home-logo"  src="../../resources/logo.png">
<!-- </div> -->

<p>Добре дошли! Тук може да намерите информация за фитнес, кинезитерапия и хранене!<p>

</div>`;

export function homeScreen(ctx) {
    ctx.render(homeScreenTemplate());
}