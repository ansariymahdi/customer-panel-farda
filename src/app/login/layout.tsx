// app/login/layout.tsx
import * as React from "react"

import AuthLayout from "@/components/layout/AuthLayout"

export const metadata = {
	title: "ورود به حساب کاربری"
}

export default function layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AuthLayout>{children}</AuthLayout>
}
