// app/login/layout.tsx
import * as React from "react"

import AuthLayout from "@/components/layout/AuthLayout"
import ProfileLayout from "@/components/layout/ProfileLayout"

export const metadata = {
	title: "ورود به حساب کاربری"
}

export default function layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <ProfileLayout>{children}</ProfileLayout>
}
