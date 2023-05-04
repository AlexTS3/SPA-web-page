import { html } from "../../../node_modules/lit-html/lit-html.js";

const acuteTemplate = () => html`
<h3>Къде е болката която ви тормози?</h3>

<div class="physioOptions">
<a class="physioBtn" href="/physio" >Назад</a>
<a class="physioBtn" href="/physio/acute/upper" >Горни крайници</a>
<a class="physioBtn" href="/physio/acute/lower" >Долни крайници</a>
<a class="physioBtn" href="/physio/acute/neck" >Врата</a>
<a class="physioBtn" href="/physio/acute/torso" >Торса</a>

</div>`;

export function acute(ctx) {
    ctx.render(acuteTemplate())
    console.log(ctx);
}