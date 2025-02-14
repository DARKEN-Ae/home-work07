export default function useLocation() {
  const { hash, key, pathname, search, state } = window.location;
  return { hash, key, pathname, search, state };
}
