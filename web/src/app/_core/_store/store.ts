import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

// 1) 루트 리듀서 먼저 선언
const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

// 2) 루트 상태 타입
export type RootState = ReturnType<typeof rootReducer>;

// 3) (선호하는 스타일) 슬라이스별 preloadedState 인터페이스
export interface PreloadedState {
  sidebar?: ReturnType<typeof sidebarReducer>;
}

// 4) store 생성
export const makeStore = (preloadedState?: PreloadedState) => {
  return configureStore({
    reducer: rootReducer,          // ✅ 여기!
    preloadedState,                // SSR 초기 상태 주입
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore    = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
