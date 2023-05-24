import { html } from "../../../../node_modules/lit-html/lit-html.js";


const limitedTemplate = () => html`
<div class="container">

<h3>Къде усещате ограничено движение?</h3>

<div class="physioOptions">
    <a class="physioBtn" href="/physio/limitations/upper" >Горни крайници</a>
    <a class="physioBtn" href="/physio/limitations/lower" >Долни крайници</a>
    <a class="physioBtn" href="/physio/limitations/neck" >Шиен дял</a>
    <a class="physioBtn" href="/physio/limitations/torso" >Торса</a>
    <a class="backBtn" href="/physio" >Назад</a>

</div>
</div>`;

export function limited(ctx) {
    ctx.render(limitedTemplate());
}