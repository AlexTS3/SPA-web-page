import { html } from "../../node_modules/lit-html/lit-html.js";


const aboutTemplate = () => html`
<p>This is the About Page</p>`;


export function aboutPage(ctx) {
    ctx.render(aboutTemplate());
}