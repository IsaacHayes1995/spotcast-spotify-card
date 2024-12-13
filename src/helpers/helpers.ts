import { HassEntity } from "home-assistant-js-websocket/dist/types";
import ColorThief from "colorthief";
import { UseHomeAssistantStore } from "../store";

/**
 * A utility function to debounce a callback.
 * @param func - The callback function to debounce.
 * @param wait - The debounce delay in milliseconds.
 * @returns A debounced version of the function.
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number | undefined;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => func(...args), wait);
  };
}

export function truncateText(text: string, maxLength: number = 20): string {
  if(text == null || !text) return text;

  if (text.length > maxLength) {
   return text.substring(0, maxLength) + '...';
  }

  return text;
}

export function getActiveSpotcastPlayer(): string | undefined {
  const account = UseHomeAssistantStore.getState().accounts
    .find((account: { is_default: boolean }) => account.is_default)?.spotify_name;

  const hass = UseHomeAssistantStore.getState().hass;

  if (!account) {
    console.error("No default account found");
    return undefined;
  }

  const activePlayer = Object.values(hass.states).filter((state: HassEntity) => {
    return (
      state.entity_id.includes('media_player') &&
      state.entity_id.includes('spotcast') &&
      state.entity_id.includes(account) &&
      state.state === 'on' // Filter only devices that are currently on
    );
  });

  return activePlayer.length > 0 ? activePlayer[0].entity_id : undefined;
}

export function removeHtmlTags(text: string): string {
  if(text == null || !text) return text;

  return text.replace(/<\/?[^>]+(>|$)/g, "");
}

export function areObjectsEqual<T>(obj1: T, obj2: T): boolean {
  console.info("checking object equality");

  // If both are null or undefined, they are equal
  if (obj1 === obj2) return true;

  // If one is null/undefined but not the other, they are not equal
  if (obj1 == null || obj2 == null) return false;

  // If types are different, they are not equal
  if (typeof obj1 !== typeof obj2) return false;

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const keys1 = Object.keys(obj1 as Record<string, any>);
    const keys2 = Object.keys(obj2 as Record<string, any>);

    // If the number of keys is different, objects are not equal
    if (keys1.length !== keys2.length) return false;

    // Check if all keys and values are equal
    for (const key of keys1) {
      if (!keys2.includes(key)) return false;

      // Recursively check equality for nested objects
      if (!areObjectsEqual((obj1 as Record<string, any>)[key], (obj2 as Record<string, any>)[key])) {
        return false;
      }
    }

    return true;
  }

  // For primitive types, perform strict equality check
  return false;
}

export async function getBackgroundGradient(imgUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const colorThief = new ColorThief();

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imgUrl;

    img.onload = () => {
      try {
        const [r, g, b] = colorThief.getColor(img);

        // Darken the color for one end of the gradient
        const darkenedR = Math.floor(r * 0.4);
        const darkenedG = Math.floor(g * 0.4);
        const darkenedB = Math.floor(b * 0.4);

        // Convert to hex
        const darkenedHex = `#${((1 << 24) + (darkenedR << 16) + (darkenedG << 8) + darkenedB).toString(16).slice(1)}`;

        // Lighten the color for the other end of the gradient
        const lightenedR = Math.min(255, Math.floor(r + (255 - r) * 0.15));
        const lightenedG = Math.min(255, Math.floor(g + (255 - g) * 0.15));
        const lightenedB = Math.min(255, Math.floor(b + (255 - b) * 0.15));

        const lightenedHex = `#${((1 << 24) + (lightenedR << 16) + (lightenedG << 8) + (lightenedB)).toString(16).slice(1)}`;

        // Resolve the promise with the gradient
        const gradient = `linear-gradient(45deg, ${darkenedHex}, ${lightenedHex})`;
        resolve(gradient);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
  });
}