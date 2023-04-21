import type { V2_MetaFunction } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import { addToast } from "~/features/toasts/toastsSlice";
import { useAppDispatch } from "~/hooks/redux";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Remix Toasts" }];
};

export default function Index() {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="sticky top-0 z-30 w-full transition-all duration-300 shadow-sm bg-opacity-60 bg-base-100 text-base-content backdrop-blur">
                <nav className="navbar min-h-12 bg-base-100">
                    <div className="flex items-center flex-1 gap-1 lg:gap-2">
                        <div className="inline-flex text-lg font-semibold transition-all duration-200 md:text-2xl">
                            <span className="uppercase text-primary">
                                Application Title
                            </span>
                        </div>
                    </div>
                    <div className="flex-0">
                        {/* Right side of navbar */}
                    </div>
                </nav>
            </div>
            <div className="m-4">
                <button
                    className="btn btn-sm"
                    onClick={() => dispatch(addToast({ message: "Info toast" }))}
                >
                    Add Info Toast
                </button>
                <button
                    className="btn btn-sm btn-success"
                    onClick={() => dispatch(addToast({ message: "Everyting is gooing realy well", level: "success" }))}
                >
                    Add Success Toast
                </button>
                <button
                    className="btn btn-sm btn-warning"
                    onClick={() => dispatch(addToast({ message: "Be carefull what are you doing", level: "warning" }))}
                >
                    Add Warning Toast
                </button>
                <button
                    className="btn btn-sm btn-error"
                    onClick={() => dispatch(addToast({ message: "Ka Buuuummm, you are dead!", level: "error" }))}
                >
                    Add Error Toast
                </button>
            </div>
            <Outlet />
        </>
    )
}
