import {
    XCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    CheckCircleIcon
} from "@heroicons/react/24/outline"
import type { ToastLevel } from "./toastsSlice";
import { removeToast } from "./toastsSlice"
import React from "react"
import { useAppDispatch } from "~/hooks/redux"

export interface ToastProps {
    id: string,
    message: string,
    level: ToastLevel
}

/**
 * Displays single Toast
 */
export function Toast({ id, message, level }: ToastProps) {
    const dispatch = useAppDispatch()

    const [Icon, alertClass] = getToastIconAndClass(level)

    function handleClose(event: React.MouseEvent) {
        event.preventDefault()
        dispatch(removeToast(id))
    }

    return (
        <div className={`z-[1000] w-auto pointer-events-auto shadow-lg alert ${alertClass}`}>
            <div>
                <Icon className="flex-shrink-0 w-6 h-6 stroke-current" />
                <span>{message}</span>
            </div>
            {(level === "error") && <div className="flex-none">
                <button className="link" onClick={handleClose}>
                    close
                </button>
            </div>
            }
        </div>
    )
}

function getToastIconAndClass(level: ToastLevel) {
    if (level === "info") return [InformationCircleIcon, ""]
    if (level === "success") return [CheckCircleIcon, "alert-success"]
    if (level === "warning") return [ExclamationTriangleIcon, "alert-warning"]
    if (level === "error") return [XCircleIcon, "alert-error"]
    return [InformationCircleIcon, ""]
}
