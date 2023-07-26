import { MutableRefObject } from 'react';

export function useScrollIntoView(ref: MutableRefObject<HTMLElement | HTMLDivElement | null>) {
  function scroll() {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  return scroll;
}
