import Image from "next/image"

import { Stack } from "@mui/material"

import { EmptyList } from "@/components/shared/EmptyList"

export const PolicyPage = () => {
	return (
		<Stack
			alignItems="center"
			justifyContent="center"
			mt={4}
			spacing={2}
			minHeight="inherit"
		>
			<EmptyList />
		</Stack>
	)
}
