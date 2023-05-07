import { html } from "../../../node_modules/lit-html/lit-html.js";

const chronicTemplate = () => html`
<h3>Къде е болката която ви тормози?</h3>

<div class="physioOptions">
<a class="backBtn" href="/physio" >Назад</a>
<a class="physioBtn" href="/physio/acute/upper" >Горни крайници</a>
<a class="physioBtn" href="/physio/acute/lower" >Долни крайници</a>
<a class="physioBtn" href="/physio/acute/neck" >Шиен дял</a>
<a class="physioBtn" href="/physio/acute/torso" >Торса</a>

</div>`;

export function chronic(ctx) {
    ctx.render(chronicTemplate());
    console.log(ctx);
}