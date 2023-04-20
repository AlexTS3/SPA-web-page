import { html } from "../../node_modules/lit-html/lit-html.js";


const nutriTemplate = () => html`
<h3>This is the Nutrition Talks Page</h3>`;


export function nutriPage(ctx) {
    ctx.render(nutriTemplate());
}