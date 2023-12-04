import { MutableRefObject } from 'react';

export function useScrollIntoView(ref: MutableRefObject<HTMLElement | HTMLDivElement | null>) {
  function scroll(block: ScrollLogicalPosition = 'center') {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block
    });
  }

  return scroll;
}
