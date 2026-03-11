import localFont from "next/font/local";

export const nebulas = localFont({
    src: [
        {
            path: "../../public/fonts/Nebulas-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Nebulas-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Nebulas-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/Nebulas-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Nebulas-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/Nebulas-Black.woff2",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-nebulas-local",
});
