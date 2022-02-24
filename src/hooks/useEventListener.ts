import { RefObject, useEffect, useRef } from 'react';

// interface WindowEventMap {
//   'custom-event': CustomEvent<{ data: string }>;
// }
//
// interface HTMLElementEventMap {
//   'custom-event': CustomEvent<{ data: string }>;
// }

// eslint-disable-next-line no-undef
function useEventListener<K extends keyof WindowEventMap>(
  // eslint-disable-next-line no-unused-vars
  eventName: K,
  // eslint-disable-next-line no-unused-vars,no-undef
  handler: (event: WindowEventMap[K]) => void
): void;
// eslint-disable-next-line no-redeclare
function useEventListener<
  // eslint-disable-next-line no-undef
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
  // eslint-disable-next-line no-unused-vars,no-undef
>(eventName: K, handler: (event: HTMLElementEventMap[K]) => void, element: RefObject<T>): void;

// eslint-disable-next-line no-redeclare
function useEventListener<
  // eslint-disable-next-line no-undef
  KW extends keyof WindowEventMap,
  // eslint-disable-next-line no-undef
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  // eslint-disable-next-line no-unused-vars,no-undef
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: RefObject<T>
) {
  // Create a ref that stores handler
  const savedHandler = useRef<typeof handler>();

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    // eslint-disable-next-line consistent-return
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}

export default useEventListener;
