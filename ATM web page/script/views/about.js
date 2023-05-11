import { html } from "../../node_modules/lit-html/lit-html.js";


const aboutTemplate = () => html`
<h3 class="about">This is the About Page</h3>`;


export function aboutPage(ctx) {
    ctx.render(aboutTemplate());
    // document.body.style.backgroundImage = "url('../../resources/about.png')";

}