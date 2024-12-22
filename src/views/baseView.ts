import { LitElement, html } from "lit";
import { styles } from "../card.styles"; // Shared Tailwind styles

export abstract class BaseView extends LitElement {
  // Shared styles for all components
  static get styles() {
    return [styles];
  }

  abstract renderTemplate(): unknown;

  render() {
    return html`
      ${this.renderTemplate()}
    `;
  }
}
