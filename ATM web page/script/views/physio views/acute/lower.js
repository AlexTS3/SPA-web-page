import { html } from "../../../../node_modules/lit-html/lit-html.js";


const acuteLowerTemplate = () => html`
<div class="container">
<h3>Най-чести причини за болка в долните крайници.</h3>

<div class="lowerParagraph">
    <a href='acute/lower/hip'><img src='../../../../resources/hip.avif'></a>
</div>
<div class="physioOptions">
    <a class="backBtn" href="/physio/acute" >Назад</a>
</div>
</div>`;

export function acuteLower(ctx) {
    ctx.render(acuteLowerTemplate())
}