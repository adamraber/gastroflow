(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/chat/ChatHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHeader",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
"use client";
;
;
;
function ChatHeader(param) {
    let { stage, totalStages = 4, isComplete = false, onBack } = param;
    const progressRatio = isComplete ? 1 : stage / totalStages;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 active:bg-slate-200",
                        "aria-label": "Volver",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatHeader.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatHeader.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatHeader.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatHeader.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatHeader.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatHeader.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "truncate text-[15px] font-semibold leading-tight text-slate-900",
                                children: "GastroFlow IA"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatHeader.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-medium text-brand-600",
                                children: "Asistente médico · En línea"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatHeader.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatHeader.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            !isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20
                                },
                                className: "rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700 ring-1 ring-brand-200",
                                children: [
                                    stage,
                                    "/",
                                    totalStages
                                ]
                            }, stage, true, {
                                fileName: "[project]/components/chat/ChatHeader.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200",
                                children: "Completado"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatHeader.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100",
                                "aria-label": "Opciones",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatHeader.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatHeader.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatHeader.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ChatHeader.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full bg-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600",
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: "".concat(progressRatio * 100, "%")
                    },
                    transition: {
                        duration: 0.55,
                        ease: "easeOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatHeader.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatHeader.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatHeader.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ChatHeader;
var _c;
__turbopack_context__.k.register(_c, "ChatHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDuration",
    ()=>formatDuration,
    "formatTime",
    ()=>formatTime,
    "generateWaveform",
    ()=>generateWaveform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return "".concat(m, ":").concat(s.toString().padStart(2, "0"));
}
function formatTime(date) {
    return date.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
}
function generateWaveform(seed) {
    let count = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 32;
    let hash = 0;
    for(let i = 0; i < seed.length; i++){
        hash = (hash << 5) - hash + seed.charCodeAt(i);
        hash |= 0;
    }
    return Array.from({
        length: count
    }, (_, i)=>{
        const v = Math.abs(Math.sin(hash * 9301 + i * 49297 + 233) * 0.5 + 0.5);
        return 0.15 + v * 0.85;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/VoiceMessage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceMessage",
    ()=>VoiceMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function VoiceMessage(param) {
    let { waveform, duration, audioUrl, isUser = false } = param;
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = duration > 0 ? elapsed / duration : 0;
    const activeBars = Math.round(progress * waveform.length);
    const stopPlayback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceMessage.useCallback[stopPlayback]": ()=>{
            if (timerRef.current) clearInterval(timerRef.current);
            setIsPlaying(false);
        }
    }["VoiceMessage.useCallback[stopPlayback]"], []);
    const resetPlayback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceMessage.useCallback[resetPlayback]": ()=>{
            stopPlayback();
            setElapsed(0);
        }
    }["VoiceMessage.useCallback[resetPlayback]"], [
        stopPlayback
    ]);
    // Set up audio element when URL is provided
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceMessage.useEffect": ()=>{
            if (!audioUrl) return;
            const audio = new Audio(audioUrl);
            audioRef.current = audio;
            audio.onended = ({
                "VoiceMessage.useEffect": ()=>{
                    stopPlayback();
                    setElapsed(0);
                }
            })["VoiceMessage.useEffect"];
            return ({
                "VoiceMessage.useEffect": ()=>{
                    audio.pause();
                    audioRef.current = null;
                }
            })["VoiceMessage.useEffect"];
        }
    }["VoiceMessage.useEffect"], [
        audioUrl,
        stopPlayback
    ]);
    const togglePlay = ()=>{
        if (isPlaying) {
            var _audioRef_current;
            (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.pause();
            stopPlayback();
            return;
        }
        if (audioRef.current) {
            // Real audio playback
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
            setElapsed(0);
            timerRef.current = setInterval(()=>{
                var _audioRef_current;
                var _audioRef_current_currentTime;
                const current = Math.floor((_audioRef_current_currentTime = (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.currentTime) !== null && _audioRef_current_currentTime !== void 0 ? _audioRef_current_currentTime : 0);
                setElapsed(current);
                if (current >= duration) resetPlayback();
            }, 250);
        } else {
            // Simulated playback (no audio blob)
            setIsPlaying(true);
            setElapsed(0);
            let tick = 0;
            timerRef.current = setInterval(()=>{
                tick++;
                setElapsed(tick);
                if (tick >= duration) {
                    resetPlayback();
                }
            }, 1000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 w-[210px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: togglePlay,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all active:scale-95", isUser ? "bg-brand-700/90 text-white hover:bg-brand-800" : "bg-brand-600 text-white hover:bg-brand-700"),
                "aria-label": isPlaying ? "Pausar" : "Reproducir",
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/components/chat/VoiceMessage.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                    className: "h-3.5 w-3.5 translate-x-[1px]"
                }, void 0, false, {
                    fileName: "[project]/components/chat/VoiceMessage.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/VoiceMessage.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-7 items-end gap-[2px]",
                        children: waveform.map((h, i)=>{
                            const isActive = i < activeBars;
                            const isCurrent = i === activeBars && isPlaying;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-[1px] transition-colors duration-100", isActive ? isUser ? "bg-brand-800" : "bg-brand-600" : isUser ? "bg-brand-300/60" : "bg-slate-300"),
                                style: {
                                    height: "".concat(h * 100, "%")
                                },
                                animate: isCurrent ? {
                                    scaleY: [
                                        1,
                                        1.25,
                                        1
                                    ]
                                } : {},
                                transition: {
                                    duration: 0.4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }, i, false, {
                                fileName: "[project]/components/chat/VoiceMessage.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/chat/VoiceMessage.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-medium tabular-nums", isUser ? "text-brand-900/50" : "text-slate-400"),
                        children: isPlaying ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(elapsed) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(duration)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/VoiceMessage.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/VoiceMessage.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/VoiceMessage.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(VoiceMessage, "8kxoQY7tFJ38s14Zzya+4S4H9l0=");
_c = VoiceMessage;
var _c;
__turbopack_context__.k.register(_c, "VoiceMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ChatBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatBubble",
    ()=>ChatBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/VoiceMessage.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ChatBubble(param) {
    let { message } = param;
    const isUser = message.role === "user";
    var _message_duration;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 8,
            scale: 0.97
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        transition: {
            duration: 0.22,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full px-1", isUser ? "justify-end" : "justify-start"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative max-w-[78%] rounded-2xl shadow-sm", isUser ? "rounded-tr-[4px] bg-brand-100 text-slate-900" : "rounded-tl-[4px] bg-white text-slate-900"),
            children: [
                isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -right-[6px] top-0 h-3 w-3 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-0 top-0 h-3 w-3 origin-top-left rotate-0 bg-brand-100"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatBubble.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatBubble.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -left-[6px] top-0 h-3 w-3 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-0 top-0 h-3 w-3 origin-top-right rotate-0 bg-white"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatBubble.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatBubble.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-2",
                    children: [
                        message.type === "voice" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceMessage"], {
                                waveform: message.waveform,
                                duration: (_message_duration = message.duration) !== null && _message_duration !== void 0 ? _message_duration : 0,
                                audioUrl: message.audioUrl,
                                isUser: isUser
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatBubble.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBubble.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14.5px] leading-[1.55] whitespace-pre-line break-words",
                            children: message.content
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatBubble.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-[3px] flex items-center gap-1", isUser ? "justify-end" : "justify-start"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] leading-none text-slate-400 tabular-nums",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(message.timestamp)
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatBubble.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                    className: "h-3 w-3 flex-shrink-0 text-brand-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatBubble.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ChatBubble.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatBubble.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/ChatBubble.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ChatBubble.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ChatBubble;
var _c;
__turbopack_context__.k.register(_c, "ChatBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useVoiceRecorder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceRecorder",
    ()=>useVoiceRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useVoiceRecorder() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isRecording: false,
        duration: 0,
        audioBlob: null,
        audioUrl: null,
        error: null,
        hasPermission: null
    });
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const durationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const checkPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceRecorder.useCallback[checkPermission]": async ()=>{
            var _navigator_mediaDevices;
            if ("object" === "undefined" || !((_navigator_mediaDevices = navigator.mediaDevices) === null || _navigator_mediaDevices === void 0 ? void 0 : _navigator_mediaDevices.getUserMedia)) {
                setState({
                    "useVoiceRecorder.useCallback[checkPermission]": (s)=>({
                            ...s,
                            hasPermission: false,
                            error: "Tu navegador no soporta grabación de audio."
                        })
                }["useVoiceRecorder.useCallback[checkPermission]"]);
                return false;
            }
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                stream.getTracks().forEach({
                    "useVoiceRecorder.useCallback[checkPermission]": (t)=>t.stop()
                }["useVoiceRecorder.useCallback[checkPermission]"]);
                setState({
                    "useVoiceRecorder.useCallback[checkPermission]": (s)=>({
                            ...s,
                            hasPermission: true,
                            error: null
                        })
                }["useVoiceRecorder.useCallback[checkPermission]"]);
                return true;
            } catch (e) {
                setState({
                    "useVoiceRecorder.useCallback[checkPermission]": (s)=>({
                            ...s,
                            hasPermission: false,
                            error: "Permiso de micrófono denegado. Habilitalo en la configuración del navegador."
                        })
                }["useVoiceRecorder.useCallback[checkPermission]"]);
                return false;
            }
        }
    }["useVoiceRecorder.useCallback[checkPermission]"], []);
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceRecorder.useCallback[startRecording]": async ()=>{
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                streamRef.current = stream;
                durationRef.current = 0;
                const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus" : "audio/webm";
                const mediaRecorder = new MediaRecorder(stream, {
                    mimeType
                });
                mediaRecorderRef.current = mediaRecorder;
                chunksRef.current = [];
                mediaRecorder.ondataavailable = ({
                    "useVoiceRecorder.useCallback[startRecording]": (e)=>{
                        if (e.data.size > 0) chunksRef.current.push(e.data);
                    }
                })["useVoiceRecorder.useCallback[startRecording]"];
                mediaRecorder.onstop = ({
                    "useVoiceRecorder.useCallback[startRecording]": ()=>{
                        const blob = new Blob(chunksRef.current, {
                            type: mimeType
                        });
                        const url = URL.createObjectURL(blob);
                        audioUrlRef.current = url;
                        setState({
                            "useVoiceRecorder.useCallback[startRecording]": (s)=>({
                                    ...s,
                                    isRecording: false,
                                    audioBlob: blob,
                                    audioUrl: url,
                                    duration: durationRef.current
                                })
                        }["useVoiceRecorder.useCallback[startRecording]"]);
                        stream.getTracks().forEach({
                            "useVoiceRecorder.useCallback[startRecording]": (t)=>t.stop()
                        }["useVoiceRecorder.useCallback[startRecording]"]);
                    }
                })["useVoiceRecorder.useCallback[startRecording]"];
                mediaRecorder.start(100);
                setState({
                    "useVoiceRecorder.useCallback[startRecording]": (s)=>({
                            ...s,
                            isRecording: true,
                            duration: 0,
                            audioBlob: null,
                            audioUrl: null,
                            error: null,
                            hasPermission: true
                        })
                }["useVoiceRecorder.useCallback[startRecording]"]);
                timerRef.current = setInterval({
                    "useVoiceRecorder.useCallback[startRecording]": ()=>{
                        durationRef.current += 1;
                        setState({
                            "useVoiceRecorder.useCallback[startRecording]": (s)=>({
                                    ...s,
                                    duration: durationRef.current
                                })
                        }["useVoiceRecorder.useCallback[startRecording]"]);
                    }
                }["useVoiceRecorder.useCallback[startRecording]"], 1000);
            } catch (err) {
                const msg = err instanceof Error ? err.message : "Error al acceder al micrófono.";
                setState({
                    "useVoiceRecorder.useCallback[startRecording]": (s)=>({
                            ...s,
                            error: msg,
                            hasPermission: false
                        })
                }["useVoiceRecorder.useCallback[startRecording]"]);
            }
        }
    }["useVoiceRecorder.useCallback[startRecording]"], []);
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceRecorder.useCallback[stopRecording]": ()=>{
            var _mediaRecorderRef_current;
            if (((_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.state) === "recording") {
                mediaRecorderRef.current.stop();
                if (timerRef.current) clearInterval(timerRef.current);
            }
        }
    }["useVoiceRecorder.useCallback[stopRecording]"], []);
    const cancelRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceRecorder.useCallback[cancelRecording]": ()=>{
            var _streamRef_current;
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.ondataavailable = null;
                mediaRecorderRef.current.onstop = ({
                    "useVoiceRecorder.useCallback[cancelRecording]": ()=>{}
                })["useVoiceRecorder.useCallback[cancelRecording]"];
                if (mediaRecorderRef.current.state === "recording") {
                    mediaRecorderRef.current.stop();
                }
            }
            (_streamRef_current = streamRef.current) === null || _streamRef_current === void 0 ? void 0 : _streamRef_current.getTracks().forEach({
                "useVoiceRecorder.useCallback[cancelRecording]": (t)=>t.stop()
            }["useVoiceRecorder.useCallback[cancelRecording]"]);
            if (timerRef.current) clearInterval(timerRef.current);
            durationRef.current = 0;
            setState({
                "useVoiceRecorder.useCallback[cancelRecording]": (s)=>({
                        ...s,
                        isRecording: false,
                        duration: 0,
                        audioBlob: null,
                        audioUrl: null
                    })
            }["useVoiceRecorder.useCallback[cancelRecording]"]);
        }
    }["useVoiceRecorder.useCallback[cancelRecording]"], []);
    const clearAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceRecorder.useCallback[clearAudio]": ()=>{
            if (audioUrlRef.current) {
                URL.revokeObjectURL(audioUrlRef.current);
                audioUrlRef.current = null;
            }
            durationRef.current = 0;
            setState({
                "useVoiceRecorder.useCallback[clearAudio]": (s)=>({
                        ...s,
                        audioBlob: null,
                        audioUrl: null,
                        duration: 0
                    })
            }["useVoiceRecorder.useCallback[clearAudio]"]);
        }
    }["useVoiceRecorder.useCallback[clearAudio]"], []);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceRecorder.useEffect": ()=>{
            return ({
                "useVoiceRecorder.useEffect": ()=>{
                    var _streamRef_current;
                    if (timerRef.current) clearInterval(timerRef.current);
                    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
                    (_streamRef_current = streamRef.current) === null || _streamRef_current === void 0 ? void 0 : _streamRef_current.getTracks().forEach({
                        "useVoiceRecorder.useEffect": (t)=>t.stop()
                    }["useVoiceRecorder.useEffect"]);
                }
            })["useVoiceRecorder.useEffect"];
        }
    }["useVoiceRecorder.useEffect"], []);
    return {
        ...state,
        startRecording,
        stopRecording,
        cancelRecording,
        clearAudio,
        checkPermission
    };
}
_s(useVoiceRecorder, "7xlw8cOmyZV9zXSIxW0RifD09vE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/VoiceRecorder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceRecorder",
    ()=>VoiceRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVoiceRecorder.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function VoiceRecorder(param) {
    let { onSend, disabled = false } = param;
    _s();
    const { isRecording, duration, audioBlob, audioUrl, error, hasPermission, startRecording, stopRecording, cancelRecording, clearAudio, checkPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceRecorder"])();
    // Stable ref to avoid stale-closure issues in the effect
    const onSendRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSend);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceRecorder.useEffect": ()=>{
            onSendRef.current = onSend;
        }
    }["VoiceRecorder.useEffect"], [
        onSend
    ]);
    // Check permission on mount (silent probe)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceRecorder.useEffect": ()=>{
            checkPermission();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["VoiceRecorder.useEffect"], []);
    // Fire when recording finishes successfully
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceRecorder.useEffect": ()=>{
            if (audioBlob && audioUrl) {
                onSendRef.current(audioBlob, audioUrl, duration);
                clearAudio();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["VoiceRecorder.useEffect"], [
        audioBlob,
        audioUrl
    ]);
    const handleMicPress = async ()=>{
        if (disabled || hasPermission === false) return;
        await startRecording();
    };
    const handleSend = ()=>{
        if (!isRecording) return;
        if (duration < 1) {
            cancelRecording();
        } else {
            stopRecording();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border-t border-slate-100 pb-safe",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            initial: false,
            children: isRecording ? /* ── Recording active ─────────────────────────────────── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 12
                },
                transition: {
                    duration: 0.18
                },
                className: "flex items-center gap-2.5 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: cancelRecording,
                        className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:bg-slate-200 active:bg-slate-300",
                        "aria-label": "Cancelar grabación",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/VoiceRecorder.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/VoiceRecorder.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 items-center gap-2.5 rounded-full border border-red-200 bg-red-50 px-4 py-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "h-2 w-2 flex-shrink-0 rounded-full bg-red-500",
                                animate: {
                                    opacity: [
                                        1,
                                        0.25,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 1,
                                    repeat: Infinity
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/chat/VoiceRecorder.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 text-[13px] font-medium text-red-600",
                                children: "Grabando..."
                            }, void 0, false, {
                                fileName: "[project]/components/chat/VoiceRecorder.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[13px] font-semibold tabular-nums text-red-500",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(duration)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/VoiceRecorder.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/VoiceRecorder.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-md shadow-brand-200 transition-all hover:bg-brand-700 active:scale-95",
                        "aria-label": "Enviar mensaje de voz",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/VoiceRecorder.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/VoiceRecorder.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this)
                ]
            }, "recording", true, {
                fileName: "[project]/components/chat/VoiceRecorder.tsx",
                lineNumber: 69,
                columnNumber: 11
            }, this) : /* ── Idle / ready ─────────────────────────────────────── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 12
                },
                transition: {
                    duration: 0.18
                },
                className: "flex flex-col items-center gap-3 px-4 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center text-xs", error ? "text-red-500" : disabled ? "text-slate-300" : "text-slate-400"),
                        children: error ? error : disabled ? "Procesando respuesta..." : "Presioná para grabar tu mensaje"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/VoiceRecorder.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            !disabled && hasPermission !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 rounded-full bg-brand-400 opacity-30 animate-pulse-ring"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/VoiceRecorder.tsx",
                                lineNumber: 142,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onPointerDown: handleMicPress,
                                onPointerUp: handleSend,
                                onPointerLeave: ()=>{
                                    if (isRecording) handleSend();
                                },
                                disabled: disabled || hasPermission === false,
                                whileTap: {
                                    scale: 0.9
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("no-select relative flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-colors", disabled || hasPermission === false ? "cursor-not-allowed bg-slate-200 text-slate-400 shadow-none" : "cursor-pointer bg-brand-600 text-white shadow-brand-200 hover:bg-brand-700"),
                                "aria-label": "Grabar mensaje de voz",
                                children: hasPermission === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                    className: "h-7 w-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/VoiceRecorder.tsx",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "h-7 w-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/VoiceRecorder.tsx",
                                    lineNumber: 165,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/chat/VoiceRecorder.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/VoiceRecorder.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this)
                ]
            }, "idle", true, {
                fileName: "[project]/components/chat/VoiceRecorder.tsx",
                lineNumber: 112,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/chat/VoiceRecorder.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/VoiceRecorder.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(VoiceRecorder, "53B4h1In+2UFfLAHOoQPca7zv8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVoiceRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceRecorder"]
    ];
});
_c = VoiceRecorder;
var _c;
__turbopack_context__.k.register(_c, "VoiceRecorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ChatContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContainer",
    ()=>ChatContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatBubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/VoiceRecorder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ─── Scripted AI conversation ──────────────────────────────────────────────────
const AI_QUESTIONS = [
    "¡Hola! Soy el asistente médico de GastroFlow 👋\n\nEstoy aquí para ayudarte con tu consulta gastroenterológica de forma rápida y segura. Todo lo que compartas es confidencial.\n\n¿Cuál es el síntoma principal que te trajo hoy?",
    "Gracias por contarme eso. ¿Desde cuándo tenés estos síntomas? ¿Son constantes o aparecen y desaparecen? Podés describirlos con tus propias palabras.",
    "Entendido. ¿Estás tomando algún medicamento actualmente? ¿Tenés alergias conocidas a medicamentos o alimentos que el médico deba saber?",
    "Casi terminamos. ¿Tenés algún antecedente médico relevante? Por ejemplo, cirugías previas, enfermedades crónicas o consultas recientes por este mismo motivo."
];
const AI_FINAL = "Perfecto, recibí toda la información que necesitaba. ✅\n\nAhora estoy procesando tu consulta. En breve un médico especialista la revisará — normalmente esto toma menos de 3 minutos.\n\nTe notificaremos por la app y por email cuando tengamos novedades. 🩺";
// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 6
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 6
        },
        transition: {
            duration: 0.18
        },
        className: "flex justify-start px-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl rounded-tl-[4px] bg-white px-4 py-3 shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-[5px] h-4",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "block h-2 w-2 rounded-full bg-slate-300",
                        animate: {
                            y: [
                                0,
                                -5,
                                0
                            ]
                        },
                        transition: {
                            duration: 0.55,
                            repeat: Infinity,
                            delay: i * 0.16,
                            ease: "easeInOut"
                        }
                    }, i, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/chat/ChatContainer.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ChatContainer.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = TypingIndicator;
// ─── Completion card ──────────────────────────────────────────────────────────
function CompletionCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9,
            y: 8
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        transition: {
            duration: 0.35,
            type: "spring",
            stiffness: 280,
            damping: 22
        },
        className: "mx-auto mt-3 flex max-w-xs flex-col items-center gap-2 rounded-2xl bg-white px-6 py-5 text-center shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-3xl",
                children: "🩺"
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[14px] font-semibold text-slate-800",
                        children: "Consulta enviada"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-[12px] text-slate-400",
                        children: "Un especialista revisará tu caso en breve"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-medium text-brand-700",
                        children: "Tiempo estimado: < 3 min"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatContainer.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c1 = CompletionCard;
function ChatContainer() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAiResponding, setIsAiResponding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatContainer.useCallback[scrollToBottom]": ()=>{
            requestAnimationFrame({
                "ChatContainer.useCallback[scrollToBottom]": ()=>{
                    var _scrollRef_current;
                    (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollTo({
                        top: scrollRef.current.scrollHeight,
                        behavior: "smooth"
                    });
                }
            }["ChatContainer.useCallback[scrollToBottom]"]);
        }
    }["ChatContainer.useCallback[scrollToBottom]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatContainer.useEffect": ()=>{
            scrollToBottom();
        }
    }["ChatContainer.useEffect"], [
        messages,
        isAiResponding,
        scrollToBottom
    ]);
    const addAiMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatContainer.useCallback[addAiMessage]": function(content) {
            let typingDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1600;
            setIsAiResponding(true);
            const timer = setTimeout({
                "ChatContainer.useCallback[addAiMessage].timer": ()=>{
                    setMessages({
                        "ChatContainer.useCallback[addAiMessage].timer": (prev)=>[
                                ...prev,
                                {
                                    id: crypto.randomUUID(),
                                    role: "ai",
                                    type: "text",
                                    content,
                                    waveform: [],
                                    timestamp: new Date()
                                }
                            ]
                    }["ChatContainer.useCallback[addAiMessage].timer"]);
                    setIsAiResponding(false);
                }
            }["ChatContainer.useCallback[addAiMessage].timer"], typingDelay);
            return timer;
        }
    }["ChatContainer.useCallback[addAiMessage]"], []);
    // Show opening AI message on first render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatContainer.useEffect": ()=>{
            const t = setTimeout({
                "ChatContainer.useEffect.t": ()=>{
                    addAiMessage(AI_QUESTIONS[0], 900);
                }
            }["ChatContainer.useEffect.t"], 400);
            return ({
                "ChatContainer.useEffect": ()=>clearTimeout(t)
            })["ChatContainer.useEffect"];
        }
    }["ChatContainer.useEffect"], [
        addAiMessage
    ]);
    const handleVoiceSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatContainer.useCallback[handleVoiceSend]": (audioBlob, audioUrl, duration)=>{
            const nextStage = stage + 1;
            const msgId = crypto.randomUUID();
            const userMsg = {
                id: msgId,
                role: "user",
                type: "voice",
                content: "",
                duration,
                audioBlob,
                audioUrl,
                waveform: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWaveform"])(msgId),
                timestamp: new Date()
            };
            setMessages({
                "ChatContainer.useCallback[handleVoiceSend]": (prev)=>[
                        ...prev,
                        userMsg
                    ]
            }["ChatContainer.useCallback[handleVoiceSend]"]);
            setStage(nextStage);
            if (nextStage < 4) {
                addAiMessage(AI_QUESTIONS[nextStage], 2000);
            } else {
                addAiMessage(AI_FINAL, 2400);
                setTimeout({
                    "ChatContainer.useCallback[handleVoiceSend]": ()=>setIsComplete(true)
                }["ChatContainer.useCallback[handleVoiceSend]"], 2400 + 800);
            }
        }
    }["ChatContainer.useCallback[handleVoiceSend]"], [
        stage,
        addAiMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-dvh max-w-lg flex-col mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatHeader"], {
                stage: stage,
                totalStages: 4,
                isComplete: isComplete
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "chat-scroll flex-1 overflow-y-auto space-y-2 px-2 py-3",
                style: {
                    backgroundColor: "var(--chat-bg)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-black/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm",
                            children: "Hoy"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatContainer.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: [
                            messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatBubble"], {
                                    message: msg
                                }, msg.id, false, {
                                    fileName: "[project]/components/chat/ChatContainer.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)),
                            isAiResponding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingIndicator, {}, "typing-indicator", false, {
                                fileName: "[project]/components/chat/ChatContainer.tsx",
                                lineNumber: 188,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompletionCard, {}, void 0, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 191,
                        columnNumber: 24
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatContainer.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            !isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$VoiceRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceRecorder"], {
                onSend: handleVoiceSend,
                disabled: isAiResponding
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-100 bg-white px-4 py-3 pb-safe text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] text-slate-400",
                    children: "Te avisaremos cuando el médico complete tu consulta"
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatContainer.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatContainer.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatContainer.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(ChatContainer, "Oocck2cvF89MgLUTAy6peRW10vk=");
_c2 = ChatContainer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TypingIndicator");
__turbopack_context__.k.register(_c1, "CompletionCard");
__turbopack_context__.k.register(_c2, "ChatContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e7ce562b._.js.map