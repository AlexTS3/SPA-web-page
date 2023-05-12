import { html } from "../../node_modules/lit-html/lit-html.js";

const homeScreenTemplate = () => html`
<div class="home-screen">
<div class="img-logo">

    <img class="home-logo"  src="../../resources/logo.png">
</div>

<div class="home-text">
<h1>Abuse The Movement Community</h1>

<p>Добре дошли! Тук може да намерите информация за фитнес, кинезитерапия и хранене!<p>
    
<p>Abuse The Knowledge<p>
</div>

</div>`;

export function homeScreen(ctx) {
    ctx.render(homeScreenTemplate());
}