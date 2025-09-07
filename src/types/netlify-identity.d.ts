interface NetlifyIdentity {
  on: (event: string, callback: (user?: any) => void) => void;
  open: () => void;
  logout: () => void;
  currentUser: () => any;
}

interface Window {
  netlifyIdentity: NetlifyIdentity;
}
