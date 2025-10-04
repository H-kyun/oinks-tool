import "server-only";
import { cookies } from "next/headers";

const KEY = "sidebar";

export async function readSidebarPref(): Promise<boolean> {
    const cookiesSidebar = await cookies(); // 동기
    return cookiesSidebar.get(KEY)?.value !== "closed"; // 기본은 열림
}
