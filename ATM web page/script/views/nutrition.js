import { html } from "../../node_modules/lit-html/lit-html.js";


const nutriTemplate = () => html`
<h3>Какво искате да научите за храненето?</h3>

<div class="nutriOptions">
<a class="nutriBtn" href="/acute" >Какво са макро и микронутриенти?</a>
<a class="nutriBtn" href="/chronic" >Как да изградим диета според нуждите ни?</a>
<a class="nutriBtn" href="/limitations" >Хранителни добавки и как да ги използваме?</a>
<a class="nutriBtn" href="/postural" >Какво представляват калориите?</a>
<a class="nutriBtn" href="/surgical" >Съдържание на най-честите храни</a>
</div>`;


export function nutriPage(ctx) {
    ctx.render(nutriTemplate());
    document.body.style.backgroundImage = "url('../../resources/mediterranean-cuisine-2378758_960_720.jpg')";
    
}