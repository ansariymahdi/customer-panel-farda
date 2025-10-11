import { CheckCircle } from "@mui/icons-material"
import { Stack } from "@mui/material"

import useCopyToClipboard from "@/hooks/useCopyToClipboard"

export const CopyBox = ({ copyValue, bgColor }: any) => {
	const { copyToClipboard, isCopied } = useCopyToClipboard()

	return (
		<Stack
			onClick={() => copyToClipboard(copyValue)}
			sx={{ cursor: "pointer" }}
		>
			{isCopied ? <CheckCircle /> : <CopyIcon />}
		</Stack>
	)
}
