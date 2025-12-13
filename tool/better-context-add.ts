import { tool } from "@opencode-ai/plugin"

export default tool({
	description: "Add a new repository to Better Context",
	args: {
		name: tool.schema.string().describe("Name of the repository to add"),
		url: tool.schema.string().describe("URL of the repository to add"),
		branch: tool.schema
			.string()
			.optional()
			.describe("Branch of the repository to add"),
	},
	async execute(args) {
		const { name, url, branch } = args

		const branch_command = branch ? `-b ${branch}` : ""

		const output =
			await Bun.$`btca config repos add -n ${name} -u ${url} ${branch_command}`.text()
		return output
	},
})
