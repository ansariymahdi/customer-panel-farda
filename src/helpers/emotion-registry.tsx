"use client"

import * as React from "react"

import { CacheProvider } from "@emotion/react"

import createEmotionCache from "./emotion-cache"

const clientSideEmotionCache = createEmotionCache()

export default function EmotionRegistry({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const [cache] = React.useState(() => clientSideEmotionCache)
	return <CacheProvider value={cache}>{children}</CacheProvider>
}
