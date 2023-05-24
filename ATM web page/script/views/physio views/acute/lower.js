import { html } from "../../../../node_modules/lit-html/lit-html.js";


const acuteLowerTemplate = () => html`
<div class="container">
<h3>Най-чести причини за болка в долните крайници.</h3>

<div class="lowerParagraph">
    <p>
        Болката в долните крайници може да бъде от различен характер.
        Трамните на долните крайници са често срещани. Те могат да бъдат получени 
        по време на спорт, планински походи и дори в градска среда. 
        Често срещано е изкълчване на глезена. То води до нестабилност и болка в областта на глезена.
        Според тежестта симптомите варират, както и лечението.
    </p>
</div>
<div class="physioOptions">
    <a class="backBtn" href="/physio/acute" >Назад</a>
</div>
</div>`;

export function acuteLower(ctx) {
    ctx.render(acuteLowerTemplate())
}