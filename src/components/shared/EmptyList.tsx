import { Button, Stack, Typography } from "@mui/material"

import EmptyPolicyIcon from "../icons/EmptyPolicyIcon"

export const EmptyList = () => {
	return (
		<Stack alignItems="center" spacing={2}>
			<EmptyPolicyIcon
				sx={{
					height: 400,
					width: 400
				}}
			/>
			<Typography variant="h6">
				در حال حاضر برای شما بیمه‌ نامه ای وجود ندارد.
			</Typography>

			<Button fullWidth={false} disableElevation>
				خرید بیمه‌نامه
			</Button>
		</Stack>
	)
}
