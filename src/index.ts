import { SpotcastSpotifyCard } from "./card";
import { CurrentlyPlayingView } from "./views/CurrentlyPlayingView";
import { HeaderView } from "./views/HeaderView";
import { PlaylistView } from "./views/playlistView";
import { PlayingIcon } from "./views/playingIcon";
import { viewHandler } from "./handlers/viewHandler";
import { SpotcastHandler } from "./handlers/spotcastHandler";
import { ErrorHandler } from "./handlers/errorHandler";
import { PlaylistSkeleton } from "./views/skeletons/playlistSkeleton";
import { CurrentlyPlayingSkeleton } from "./views/skeletons/CurrentlyPlayingSkeleton";

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
  { tag: 'spotcast-spotify-card', class: SpotcastSpotifyCard },
  { tag: 'playing-icon', class: PlayingIcon },
  { tag: 'playlist-skeleton', class: PlaylistSkeleton },
  { tag: 'currently-playing-skeleton', class: CurrentlyPlayingSkeleton },
];

// Register custom elements dynamically
customElementsRegistry.forEach(({ tag, class: componentClass }) => {
  if (!customElements.get(tag)) {
    customElements.define(tag, componentClass);
  }
});

// Register handlers
new viewHandler();
new SpotcastHandler();
new ErrorHandler();


// Register custom cards
window.customCards = window.customCards || [];
window.customCards.push({
  type: "spotcast-spotify-card",
  name: "Spotcast spotify card",
  description: "Spotify card for the spotcast component",
});
