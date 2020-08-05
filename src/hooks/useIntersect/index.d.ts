declare const useIntersect: (
  intersect?: IntersectionObserverInit,
) => [
  React.Dispatch<React.SetStateAction<null | Element>> | null,
  IntersectionObserverEntry | null,
];

export { useIntersect, useIntersect as default };
