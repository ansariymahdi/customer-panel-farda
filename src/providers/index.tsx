"use client"

import { ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"

import MuiProvider from "./mui-provider"

const queryClient = new QueryClient()

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<MuiProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			<Toaster />
		</MuiProvider>
	)
}
