import { html } from "../../node_modules/lit-html/lit-html.js";


const nutriTemplate = () => html`
<p>This is the Nutrition Talks Page</p>`;


export function nutriPage(ctx) {
    ctx.render(nutriTemplate());
}