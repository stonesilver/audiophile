import { RefObject, useEffect, useRef } from "react";

/**
 * Custom hook to detect clicks outside of the referenced elements.
 * @param callback - Callback function to invoke when a click outside occurs. ! pass a ref func to avoid re-rendering
 * @returns {RefObject<HTMLElement[]>} - Array of refs that you can assign to your elements
 */
const useOutsideClick = (callback: RefObject<() => void>): RefObject<HTMLElement[]> => {
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside all referenced elements
      const isOutside = refs.current.every((ref) => ref && !ref.contains(event.target as Node));

      if (isOutside) {
        callback.current();
      }
    };

    // Attach the event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return refs; // Return the array of refs
};

export default useOutsideClick;
