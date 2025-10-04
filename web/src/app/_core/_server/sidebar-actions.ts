"use server";

import { cookies } from "next/headers";

const KEY = "sidebar";
const MAX_AGE = 60 * 60 * 24 * 365;

export async function setSidebarPref(open: boolean) {
    const cookiesSidebar = await cookies(); // 동기
    cookiesSidebar .set(KEY, open ? "open" : "closed", {
      path: "/",
      sameSite: "lax",
      maxAge: MAX_AGE,
    });
}
