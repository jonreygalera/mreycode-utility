import { useEffect, useRef } from "react";
import { EventListenerCallback, EventType } from "../types/types";

export default function useEventListener(eventType: EventType, callback: EventListenerCallback, element: HTMLElement | Window | null = window) : void {
  const callbackRef = useRef<EventListenerCallback>(callback);
  
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if(element == null) return;

    const handler : EventListenerCallback = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};