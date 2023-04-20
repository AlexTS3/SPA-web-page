import { html } from "../../node_modules/lit-html/lit-html.js";


const aboutTemplate = () => html`
<h3>This is the About Page</h3>`;


export function aboutPage(ctx) {
    ctx.render(aboutTemplate());
}