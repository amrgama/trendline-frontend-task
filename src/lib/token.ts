export const getToken = () => {
  if (typeof window !== "undefined") {
    // Try to get from localStorage first
    const localToken = localStorage.getItem("token");
    if (localToken) return localToken;

    // Fallback to cookie
    const match = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
    if (match) return match[2];
  }
  return null;
};

export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
    // Set cookie for 7 days
    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    document.cookie = "token=; path=/; max-age=0";
  }
};
