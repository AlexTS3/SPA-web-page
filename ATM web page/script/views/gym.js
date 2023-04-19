import { html } from "../../node_modules/lit-html/lit-html.js";


const gymPageTemplate = () => html`
<h3>Изберете желаната от вас тема:</h3>`;


export function gymPage(ctx) {
    ctx.render(gymPageTemplate());
}