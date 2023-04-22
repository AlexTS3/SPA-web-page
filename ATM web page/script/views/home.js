import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
    <h2>
        Добре дошли в нашата страница! 
    </h2>

    <h2>
        Тук ще намерите информация за всичко, от което се нуждаете за пълноценни 
        тренировки, ежедневие и здраве!
    </h2>`;
    
    // <!-- <img class="homeImg" src="../resources/pexels-photo-4397841.webp">`; -->


export function homePage(ctx) {
    ctx.render(homeTemplate());
    document.body.style.backgroundImage = "url('../../resources/mount-fuji-2297961_960_720.jpg')";
}