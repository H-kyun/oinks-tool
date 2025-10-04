"use client";
export function ThemeForceToggle() {
  function setDark() {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";
    localStorage.setItem("theme", "dark");
  }

  function setLight() {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    localStorage.setItem("theme", "light");
  }

  return (
    <div className="flex gap-2">
      <button onClick={setLight} className="px-3 py-1 bg-gray-200">라이트 강제</button>
      <button onClick={setDark} className="px-3 py-1 bg-gray-800 text-white">다크 강제</button>
    </div>
  );
}
