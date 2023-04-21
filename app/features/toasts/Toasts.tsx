import { useAppSelector } from "~/hooks/redux"
import { Toast } from "./Toast"

/** Displays taosts stacks at the bottom right corner of the page */
export function Toasts() {
    const toasts = useAppSelector((state) => state.toasts)

    return (
        <div className="absolute inset-0 flex justify-end pointer-events-none">
            <div className="box-border flex flex-col justify-end h-full gap-4 p-8 sm:max-w-1/3">
                <div className="contents">
                    {toasts.map(
                        toast =>
                            <Toast key={toast.id} id={toast.id} level={toast.level} message={toast.message} />
                    )}
                </div>
            </div>
        </div>
    )
}
