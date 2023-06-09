import { html } from "../../node_modules/lit-html/lit-html.js";


const physioTemplate = (physioHTML) => html`
<div @click=${physioHTML} class="container">

<h3 class="physioHeader" >С какъв проблем можем да ви помогнем?</h3>

<div class="physioOptions">
<a class="physioBtn" href="/physio/acute" >Остра болкова симптоматика</a>
<a class="physioBtn" href="/physio/chronic" >Хронични болки</a>
<a class="physioBtn" href="/physio/limitations" >Ограничения в движението</a>
<a class="physioBtn" href="/physio/surgical" >Пост и предоперативни състояния</a>
<a class="physioBtn" href="/physio/postural" >Тренировки за подобряване на стойката</a>
</div>

<div class="bodyImg">
    
</div>
</div>`;


export function physioPage(ctx) {
    ctx.render(physioTemplate(physioHTML));
    const container = document.querySelector('.container');
    container.style.backgroundImage = "url('../../resources/physiotherapy-595529_960_720.jpg')";
};


export function physioHTML(e) {
    const textContent = e.target.textContent;
    const htmlEl = `<p class="inMenu">${textContent}</p>`;
    return htmlEl;
}