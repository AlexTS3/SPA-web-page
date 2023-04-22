import { html } from "../../node_modules/lit-html/lit-html.js";


const physioTemplate = () => html`
<h3>С какъв проблем можем да ви помогнем?</h3>

<div class="physioOptions">
<a class="physioBtn" href="/acute" >Остра болкова симптоматика</a>
<a class="physioBtn" href="/chronic" >Хронични болки</a>
<a class="physioBtn" href="/limitations" >Ограничения в движението</a>
<a class="physioBtn" href="/surgical" >Пост и предоперативни състояния</a>
<a class="physioBtn" href="/postural" >Тренировки за подобряване на стойката</a>
</div>`;


export function physioPage(ctx) {
    ctx.render(physioTemplate());
}