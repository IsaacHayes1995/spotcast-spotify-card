import { SpotcastWebsocketService } from "./services/spotcastWebsocketService";
import { SpotcastSpotifyCard } from "./card";
import { SpotcastService } from "./services/spotcastService";
import { CurrentlyPlayingView } from "./views/CurrentlyPlayingView";
import { HeaderView } from "./views/HeaderView";
import { PlaylistView } from "./views/playlistView";
import { SkeletonView } from "./views/skeletonView";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

// Component registry
const customElementsRegistry = [
  { tag: 'header-view', class: HeaderView },
  { tag: 'playlist-view', class: PlaylistView },
  { tag: 'currently-playing-view', class: CurrentlyPlayingView },
  { tag: 'skeleton-view', class: SkeletonView },
  { tag: 'spotcast-spotify-card', class: SpotcastSpotifyCard },
];

// Register custom elements dynamically
customElementsRegistry.forEach(({ tag, class: componentClass }) => {
  if (!customElements.get(tag)) {
    customElements.define(tag, componentClass);
  }
});

// Register services
new SpotcastWebsocketService();
new SpotcastService();

// Register custom cards
window.customCards = window.customCards || [];
window.customCards.push({
  type: "spotcast-spotify-card",
  name: "Spotcast spotify card",
  description: "Spotify card for the spotcast component",
});
