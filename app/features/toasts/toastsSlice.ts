import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import type { AppDispatch } from "../store";

const DEFAULT_TOAST_TIMEOUT = 2000

export const ToastLevels = ["info", "success", "warning", "error"]

export type ToastLevel = typeof ToastLevels[0] | typeof ToastLevels[1] | typeof ToastLevels[2] | typeof ToastLevels[3]

export interface Toast {
    id: string,
    message: string,
    level: ToastLevel
}
const initialState: Toast[] = []

export const toastsSlice = createSlice({
    name: "toasts",
    initialState,
    reducers: {
        /**
         * Addes new toast
         */
        pushToast: (state, action: PayloadAction<Toast>) => {
            state.push(action.payload)
        },
        /**
         * Removes existing toast
         */
        removeToast: (state, action: PayloadAction<string>) => {
            const index = state.findIndex(toast => toast.id === action.payload)
            if (index !== -1) state.splice(index, 1)
        },
    }
})

export const { pushToast, removeToast } = toastsSlice.actions
export default toastsSlice.reducer

export const addToast = (
    { message, level }: { message: string, level?: ToastLevel }
) => (
    dispatch: AppDispatch
) => {
        level = level === undefined ? "info" : level

        const newToast = createToast({ message, level })

        dispatch(pushToast(newToast))
        if (level !== "error") {
            setTimeout(() => {
                dispatch(removeToast(newToast.id))
            }, DEFAULT_TOAST_TIMEOUT)
        }
    }

export function createToast(
    { message, level }: { message: string, level: ToastLevel }
): Toast {
    const id = uuidv4()
    return {
        id,
        message,
        level,
    } as Toast
}
