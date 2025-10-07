// src/emotion-cache.ts
"use client"

import createCache from "@emotion/cache"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"

export default function createEmotionCache() {
	return createCache({
		key: "mui-rtl",
		stylisPlugins: [prefixer, rtlPlugin],
		prepend: true
	})
}
