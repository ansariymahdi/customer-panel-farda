"use client"

import { useSelector } from "react-redux"

import { Stack } from "@mui/material"

import MobileForm from "./MobileForm"
import OTPForm from "./OTPFrom"

export default function LoginForm() {
	const loginStep = useSelector((state: any) => state.loginState.loginStep)

	return (
		<Stack sx={{ mt: 12 }} alignItems="center">
			{loginStep === "OtpStep" ? <OTPForm /> : <MobileForm />}
		</Stack>
	)
}
