import { html } from "../../../node_modules/lit-html/lit-html.js";

const limitedTemplate = () => html`
<h3>Къде усещате ограничено движение?</h3>

<div class="physioOptions">
<a class="physioBtn" href="/physio" >Назад</a>
<a class="physioBtn" href="/physio/limitations/upper" >Горни крайници</a>
<a class="physioBtn" href="/physio/limitations/lower" >Долни крайници</a>
<a class="physioBtn" href="/physio/limitations/neck" >Врата</a>
<a class="physioBtn" href="/physio/limitations/torso" >Торса</a>

</div>`;

export function limited(ctx) {
    ctx.render(limitedTemplate());
    console.log(ctx);
}