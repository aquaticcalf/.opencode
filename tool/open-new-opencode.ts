import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "restart opencode session",
  args: {
    directory: tool.schema.string().optional().describe("Directory to open opencode in"),
  },
  async execute({ directory }) {
    try {
      const command = directory ? `cd "${directory}"; opencode; exec bash` : "opencode; exec bash";
      const proc = Bun.spawn(["ghostty", "-e", "bash", "-lc", command], {
        env: {
          ...process.env,
          GHOSTTY_SINGLE_INSTANCE: "0",
        },
        stdout: "ignore",
        stderr: "ignore",
      })

      proc.unref()
      return "opened new opencode session"
    } catch (error) {
      return `failed to open new opencode session: ${error instanceof Error ? error.message : String(error)}`
    }
  },
})

