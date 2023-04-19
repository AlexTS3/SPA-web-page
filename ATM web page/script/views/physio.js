import { html } from "../../node_modules/lit-html/lit-html.js";


const physioTemplate = () => html`
<h3>This is the Physio Talks Page</h3>`;


export function physioPage(ctx) {
    ctx.render(physioTemplate());
}