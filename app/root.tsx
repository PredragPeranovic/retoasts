import type { LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "@remix-run/react";

import StyleSheet from "./tailwind.css";
import FontStyles from "@fontsource/roboto/index.css"
import { Provider } from "react-redux";
import { store } from "./features/store";
import { Toasts } from "./features/toasts/Toasts";


export default function App() {
    return (
        <Provider store={store}>
            <AppHtml />
        </Provider>
    );
}

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: StyleSheet },
    { rel: "stylesheet", href: FontStyles },
];

/**
 * Separeted HTML component to be able to access redux store and obtain theme
 */
function AppHtml() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="box-border m-0 text-base, bg-base-200 [font-kerning:normal] min-h-screen">
                <Outlet />
                <Toasts />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
