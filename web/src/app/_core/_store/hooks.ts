"use client";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

/** 가장 안정적인 패턴: 캐스팅 */
export const useAppDispatch = () => useDispatch() as AppDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



