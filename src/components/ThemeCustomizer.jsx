import { useState, useEffect } from "react";
import { X, Settings, RotateCcw } from "lucide-react";

const themeColors = [
    { name: "Cyan", hex: "#06b6d4", bg: "bg-cyan-500" },
    { name: "Blue", hex: "#3b82f6", bg: "bg-blue-500" },
    { name: "Indigo", hex: "#6366f1", bg: "bg-indigo-500" },
    { name: "Violet", hex: "#8b5cf6", bg: "bg-violet-500" },
    { name: "Purple", hex: "#a855f7", bg: "bg-purple-500" },
    { name: "Fuchsia", hex: "#d946ef", bg: "bg-fuchsia-500" },
    { name: "Pink", hex: "#ec4899", bg: "bg-pink-500" },
    { name: "Rose", hex: "#f43f5e", bg: "bg-rose-500" },
    { name: "Red", hex: "#ef4444", bg: "bg-red-500" },
    { name: "Orange", hex: "#f97316", bg: "bg-orange-500" },
    { name: "Amber", hex: "#f59e0b", bg: "bg-amber-500" },
    { name: "Yellow", hex: "#eab308", bg: "bg-yellow-500" },
    { name: "Lime", hex: "#84cc16", bg: "bg-lime-500" },
    { name: "Green", hex: "#22c55e", bg: "bg-green-500" },
    { name: "Emerald", hex: "#10b981", bg: "bg-emerald-500" },
    { name: "Teal", hex: "#14b8a6", bg: "bg-teal-500" },
    { name: "Sky", hex: "#0ea5e9", bg: "bg-sky-500" },
    { name: "Slate", hex: "#64748b", bg: "bg-slate-500" },
    { name: "Gray", hex: "#6b7280", bg: "bg-gray-500" },
    { name: "Stone", hex: "#78716c", bg: "bg-stone-500" },
];

const fonts = [
    { name: "Poppins", family: "'Poppins', sans-serif" },
    { name: "Roboto", family: "'Roboto', sans-serif" },
    { name: "Montserrat", family: "'Montserrat', sans-serif" },
    { name: "Open Sans", family: "'Open Sans', sans-serif" },
    { name: "Lato", family: "'Lato', sans-serif" },
    { name: "Nunito", family: "'Nunito', sans-serif" },
    { name: "Inter", family: "'Inter', sans-serif" },
];

export default function ThemeCustomizer() {
    const [open, setOpen] = useState(false);
    const defaultColor = "#06b6d4"; // cyan-500
    const [activeColor, setActiveColor] = useState(defaultColor);
    const [activeFont, setActiveFont] = useState(null);

    // Load Google Font safely
    const loadFont = (fontName) => {
        const id = `font-${fontName.replace(/\s+/g, "-")}`;
        if (!document.getElementById(id)) {
            const link = document.createElement("link");
            link.id = id;
            link.rel = "stylesheet";
            link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
                /\s+/g,
                "+"
            )}:wght@300;400;500;600;700&display=swap`;
            document.head.appendChild(link);
        }
    };

    // Change theme color
    const changeColor = (color) => {
        document.documentElement.style.setProperty("--primary-color", color);
        setActiveColor(color);
    };

    // Change font
    const changeFont = (font) => {
        const cleanName = font.split(",")[0].replace(/'/g, "");
        loadFont(cleanName);
        document.documentElement.style.setProperty("--font-family", font);
        setActiveFont(font);
    };

    // Reset theme
    const resetTheme = () => {
        document.documentElement.style.removeProperty("--primary-color");
        document.documentElement.style.removeProperty("--font-family");
        setActiveColor(null);
        setActiveFont(null);
    };

    useEffect(() => {
        document.documentElement.style.setProperty("--primary-color", defaultColor);
    }, []);


    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="group fixed right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-l-xl shadow-lg z-50 flex items-center gap-2 border border-white/20 hover:bg-zinc-900 transition"
            >
                <Settings
                    size={18}
                    className={`transition-transform duration-300 ${open ? "rotate-90" : "group-hover:rotate-90"
                        }`}
                />
            </button>

            {/* Backdrop */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40"
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-[80px] right-0 h-[calc(100%-80px)] w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 rounded-l-2xl ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-semibold text-lg">Customize Theme</h2>
                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-6 overflow-y-auto h-full pb-24">
                    {/* Colors */}
                    <div>
                        <p className="font-medium mb-3">Theme Colors</p>
                        <div className="grid grid-cols-4 gap-3">
                            {themeColors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => changeColor(color.hex)}
                                    className="flex flex-col items-center gap-1 group"
                                >
                                    <span
                                        className={`w-8 h-8 rounded-full ${color.bg} border-2 ${activeColor === color.hex
                                            ? "border-black scale-110"
                                            : "border-black/10"
                                            } transition`}
                                    />
                                    <span className="text-xs text-gray-600">{color.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Fonts */}
                    <div>
                        <p className="font-medium mb-2">Font Family</p>
                        <div className="space-y-2 pr-1">
                            {fonts.map((font) => (
                                <button
                                    key={font.name}
                                    onClick={() => changeFont(font.family)}
                                    className={`block w-full text-left border px-3 py-2 rounded transition ${activeFont === font.family
                                        ? "bg-black text-white border-black"
                                        : "hover:bg-gray-50"
                                        }`}
                                    style={{ fontFamily: font.family }}
                                >
                                    {font.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Reset */}
                    <button
                        onClick={resetTheme}
                        className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 transition"
                    >
                        <RotateCcw size={16} />
                        Reset to Default
                    </button>
                </div>
            </div>
        </>
    );
}
