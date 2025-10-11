module.exports = {
	petstore: {
		output: {
			mode: "tags-split",
			target: "src/hooks/api-hooks/petstore.ts",
			schemas: "src/model",
			client: "react-query",
			mock: false,
			override: {
				mutator: {
					path: "./src/helpers/api-helper/axios-instance.ts",
					name: "customInstance"
				}
			}
		},
		input: {
			target:
				"https://customerpanelapi-test.fardains.ir/swagger/v1/swagger.json"
		}
	}
}
