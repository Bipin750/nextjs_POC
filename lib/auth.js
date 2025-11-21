import { LOCAL_USER_KEY } from "./constant";

export function loadUser() {
  if (typeof window === "undefined") return null;
  const userData = localStorage.getItem(LOCAL_USER_KEY);
  return userData ? JSON.parse(userData) : null;
}

export function saveUser(user) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
}

export function clearUser() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(LOCAL_USER_KEY);
}
