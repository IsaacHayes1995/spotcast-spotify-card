import { SpotcastWebsocketService } from "./services/spotcastWebsocketService";
import { SpotcastSpotifyCard } from "./card";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

if (!customElements.get('spotcast-spotify-card')) {
  customElements.define('spotcast-spotify-card', SpotcastSpotifyCard);
}

new SpotcastWebsocketService();
window.customCards = window.customCards || [];
window.customCards.push({
  type: "spotcast-spotify-card",
  name: "Spotcast spotify card",
  description: "Spotify card for the spotcast component",
});
