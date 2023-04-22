import { html } from "../../node_modules/lit-html/lit-html.js";


const gymPageTemplate = () => html`
<h3>Изберете желаната от вас тема:</h3>
<div class="gymOptions">
<a class="gymBtn" href="/strength" >Силови тренировки</a>
<a class="gymBtn" href="/cardio" >Кардио тренировки</a>
<a class="gymBtn" href="/functional" >Функционални тренировки</a>
<a class="gymBtn" href="/mobility" >Тренировки за подвижност</a>
<a class="gymBtn" href="/conditioning" >Кондиционни тренировки</a>
</div>`;


export function gymPage(ctx) {
    ctx.render(gymPageTemplate());
    document.body.style.backgroundImage = "url('../../resources/pexels-photo-1552252.jpeg')";
}