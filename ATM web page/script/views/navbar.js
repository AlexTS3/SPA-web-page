import { render } from "../../node_modules/lit-html/lit-html.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const navRoot = document.querySelector('header');

const navBarTemplate = () => html`
 <div class="navbar">
            <a class="navBtn active" href="/">Home</a>
            <a class="navBtn" href="/gym">Gym Talks</a>
            <a class="navBtn" href="/physio">Physio Talks</a>
            <a class="navBtn" href="/nutrition">Nutrition Talks</a>
            <a class="navBtn" href="/about">About Us</a>
        </div>`

export function navBar() {   
    render(navBarTemplate(), navRoot)
}