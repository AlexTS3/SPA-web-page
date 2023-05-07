import { html } from "../../../node_modules/lit-html/lit-html.js";

const posturalTemplate = () => html`
<h3>Къде е вашето слабо място?</h3>

<div class="physioOptions">
<a class="backBtn" href="/physio" >Назад</a>
<a class="physioBtn" href="/physio/acute/spine" >Гръбначен стълб</a>
<a class="physioBtn" href="/physio/acute/lower" >Долни крайници</a>
<a class="physioBtn" href="/physio/acute/shoulders" >Раменен пояс</a>

</div>`;

export function postural(ctx) {
    ctx.render(posturalTemplate());
    console.log(ctx);
}