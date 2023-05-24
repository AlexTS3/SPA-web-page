import { html } from "../../../../node_modules/lit-html/lit-html.js";


const surgicalTemplate = () => html`
<div class="container">

<h3>Къде е или ще бъде вашата операция?</h3>

<div class="physioOptions">
    <a class="physioBtn" href="/physio/surgical/upper" >Горни крайници</a>
    <a class="physioBtn" href="/physio/surgical/lower" >Долни крайници</a>
    <a class="physioBtn" href="/physio/surgical/torso" >Торса</a>
    <a class="backBtn" href="/physio" >Назад</a>

</div>
</div>`;

export function surgical(ctx) {
    ctx.render(surgicalTemplate());
}