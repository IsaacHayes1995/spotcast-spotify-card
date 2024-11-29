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