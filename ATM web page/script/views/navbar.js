import { render } from "../../node_modules/lit-html/lit-html.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const navRoot = document.querySelector('header');

const navBarTemplate = () => html`
 <div class="navbar">
            <a class="navBtn home" href="/">Home</a>
            <a class="navBtn gym" href="/gym">Gym Talks</a>
            <a class="navBtn physio" href="/physio">Physio Talks</a>
            <a class="navBtn nutri" href="/nutrition">Nutrition Talks</a>
            <a class="navBtn about" href="/about">About Us</a>
        </div>`

export function navBar() {
    console.log('test');
    render(navBarTemplate(), navRoot)
}