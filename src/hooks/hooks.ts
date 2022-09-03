import type{ AppDispatch, RootState } from "./../redux/index"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"


export const useAddDispatch = () => useDispatch<AppDispatch>()
export const useAddSelector: TypedUseSelectorHook<RootState> = useSelector