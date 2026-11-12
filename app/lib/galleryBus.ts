import type { AlbumId } from "../data/gallery";

/**
 * Lets other sections (e.g. the anniversary mosaic) open a specific photo in
 * the gallery viewer without sharing React state across the page.
 */
export type GalleryRequest = { album: AlbumId; index: number };

const EVENT = "gallery:show";

export function showInGallery(req: GalleryRequest) {
  window.dispatchEvent(new CustomEvent<GalleryRequest>(EVENT, { detail: req }));
}

export function onShowInGallery(cb: (req: GalleryRequest) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<GalleryRequest>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
