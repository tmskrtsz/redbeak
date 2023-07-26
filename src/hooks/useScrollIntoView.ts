import { MutableRefObject } from 'react';

export function useScrollIntoView(ref: MutableRefObject<HTMLElement>) {
  function scroll() {
    if (!ref) return;

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  return scroll;
}
