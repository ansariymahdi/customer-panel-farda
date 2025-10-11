"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"

import store from "@/stores/store"

import MuiProvider from "./mui-provider"

const queryClient = new QueryClient()

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<MuiProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
				<Toaster />
			</Provider>
		</MuiProvider>
	)
}
