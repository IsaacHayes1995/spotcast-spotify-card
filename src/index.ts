import { SpotcastSpotifyCard } from "./card";
import { CurrentlyPlayingView } from "./views/currentlyPlayingView";
import { HeaderView } from "./views/headerView";
import { PlayingIcon } from "./views/icons/playingIcon";
import { viewHandler } from "./handlers/viewHandler";
import { SpotcastHandler } from "./handlers/spotcastHandler";
import { ErrorHandler } from "./handlers/errorHandler";
import { PlaylistSkeleton } from "./views/skeletons/playlistSkeleton";
import { CurrentlyPlayingSkeleton } from "./views/skeletons/currentlyPlayingSkeleton";
import { TableView } from "./views/tableView";
import { PlayPauseIcon } from "./views/icons/playPauseIcon";
import { LikeIcon } from "./views/icons/likeIcon";
import { DevicesIcon } from "./views/icons/devicesButton";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

// Component registry
const customElementsRegistry = [
  { tag: 'spotcast-spotify-card', class: SpotcastSpotifyCard },
  { tag: 'header-view', class: HeaderView },
  { tag: 'table-view', class: TableView },
  { tag: 'currently-playing-view', class: CurrentlyPlayingView },

  // Skeletons
  { tag: 'playlist-skeleton', class: PlaylistSkeleton },
  { tag: 'currently-playing-skeleton', class: CurrentlyPlayingSkeleton },

  // Icons
  { tag: 'playing-icon', class: PlayingIcon },
  { tag: 'play-pause-icon', class: PlayPauseIcon },
  { tag: 'like-icon', class: LikeIcon },
  { tag: 'devices-icon', class: DevicesIcon}
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
