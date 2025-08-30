export const getToken = () => localStorage.getItem("token") || null;

export const parseJwt = (t) => {
  try {
    const base64 = t.split(".")[1];
    return JSON.parse(atob(base64.replace(/-/g, "+").replace(/_/g, "/")));
  } catch { return null; }
};

export const getUserIdFromToken = () => {
  const t = getToken();
  if (!t) return localStorage.getItem("userId") || null;
  const p = parseJwt(t);
  return p?.userId || p?.id || p?._id || localStorage.getItem("userId") || null;
};

export const isAuthenticated = () => !!getToken();

/** clear only auth info; don't wipe guest cart */
export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("user");     
     localStorage.removeItem("cartLocal");     // if you stored profile
    localStorage.removeItem("wlLocal");  // if you stored wishlist
    // let other parts of the app know auth changed (same tab + other tabs)
    window.dispatchEvent(new Event("auth-change"));
};
