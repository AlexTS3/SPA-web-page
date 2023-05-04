import { html } from "../../../node_modules/lit-html/lit-html.js";

const chronicTemplate = () => html`
<h3>Къде е болката която ви тормози?</h3>

<div class="physioOptions">
<a class="physioBtn" href="/physio" >Назад</a>
<a class="physioBtn" href="/physio/acute/upper" >Остра болка в горни крайници</a>
<a class="physioBtn" href="/physio/acute/lower" >Остра болка в долни крайници</a>
<a class="physioBtn" href="/physio/acute/neck" >Остра болка във врата</a>
<a class="physioBtn" href="/physio/acute/torso" >Остра болка в торса</a>

</div>`;

export function chronic(ctx) {
    ctx.render(chronicTemplate());
    console.log(ctx);
}