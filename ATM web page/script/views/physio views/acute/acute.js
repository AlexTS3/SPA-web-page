import { html } from "../../../../node_modules/lit-html/lit-html.js";

const acuteTemplate = () => html`
<div class="container">
<h3>Къде е болката която ви тормози?</h3>

<div class="physioOptions">
    <a class="physioBtn" href="/physio/acute/upper" >Горни крайници</a>
    <a class="physioBtn" href="/physio/acute/lower" >Долни крайници</a>
    <a class="physioBtn" href="/physio/acute/neck" >Шиен дял</a>
    <a class="physioBtn" href="/physio/acute/torso" >Торса</a>
    <a class="backBtn" href="/physio" >Назад</a>

</div>
</div>`;

export function acute(ctx) {
    ctx.render(acuteTemplate())
}