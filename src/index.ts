import { SpotcastWebsocketService } from "./services/spotcastWebsocketService";
import { SpotcastSpotifyCard } from "./card";
import { SpotcastService } from "./services/spotcastService";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

if (!customElements.get('spotcast-spotify-card')) {
  customElements.define('spotcast-spotify-card', SpotcastSpotifyCard);
}

// Register services
new SpotcastWebsocketService();
new SpotcastService();


window.customCards = window.customCards || [];
window.customCards.push({
  type: "spotcast-spotify-card",
  name: "Spotcast spotify card",
  description: "Spotify card for the spotcast component",
});
