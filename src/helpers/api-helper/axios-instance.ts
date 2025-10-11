import axios, { AxiosRequestConfig } from "axios"

import { API_CONFIG, CONTENT_TYPES } from "@/constants"
import { setupInterceptors } from "@/constants/config/api"

export const axiosInstance = axios.create({
	baseURL: API_CONFIG.BASE_URL,
	timeout: API_CONFIG.TIMEOUT,
	headers: {
		"Content-Type": CONTENT_TYPES.json
	}
})

export const customInstance = <T>(
	config: AxiosRequestConfig,
	options?: AxiosRequestConfig
): Promise<T> => {
	const source = axios.CancelToken.source()
	const promise = axiosInstance({
		...config,
		...options,
		cancelToken: source.token
	}).then(({ data }) => data?.data)

	// @ts-ignore
	promise.cancel = () => {
		source.cancel("Query was cancelled")
	}

	return promise
}

export const client = setupInterceptors(axiosInstance)

// export default axiosInstance
