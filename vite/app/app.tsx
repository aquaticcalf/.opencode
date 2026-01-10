import { FileSystemRouter } from "file-system-router"
import type { ComponentType } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/components/theme/provider"
import { AppSidebar } from "@/components/app-sidebar"
import { FloatingIsland } from "@/components/floating-island"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

const pages: Record<string, { default: ComponentType<unknown> }> =
	import.meta.glob("./pages/**/*.tsx", { eager: true })

export default function App() {
	return (
		<ThemeProvider>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<FloatingIsland />
					<Router>
						<FileSystemRouter pages={pages} />
					</Router>
				</SidebarInset>
			</SidebarProvider>
		</ThemeProvider>
	)
}
