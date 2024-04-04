export function setToken({ key, secret }: { key: string; secret: string }) {
  localStorage.setItem("Key", key);
  localStorage.setItem("Secret", secret);
}

export function removeToken() {
  localStorage.removeItem("Key");
  localStorage.removeItem("Secret");
}

export const getUserToken = (): {
  Key: string;
  Secret: string;
} | null => {
  const userKey = localStorage.getItem("Key");
  const userSecret = localStorage.getItem("Secret");
  if (userKey !== null && userSecret !== null) {
    return {
      Key: userKey,
      Secret: userSecret,
    };
  } else return null;
};
