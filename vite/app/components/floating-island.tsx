import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/toggle"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function FloatingIsland() {
	const { open, toggleSidebar } = useSidebar()

	return (
		<div
			className={cn(
				"fixed top-4 left-4 sm:top-4 sm:left-4 max-sm:bottom-4 max-sm:top-auto z-50 flex items-center gap-1 rounded-lg bg-background/80 backdrop-blur-sm p-1",
				"shadow-[0_0_44px_rgba(236,72,153,0.22)]",
				"[.dark_&]:shadow-[0_0_44px_rgba(236,72,153,0.55)]",
				"transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
				open
					? "opacity-0 scale-95 pointer-events-none -translate-x-2"
					: "opacity-100 scale-100 pointer-events-auto translate-x-0",
			)}
		>
			<Button
				variant="ghost"
				size="icon"
				className="size-8 rounded-lg"
				onClick={toggleSidebar}
			>
				<PanelLeft className="size-4" />
				<span className="sr-only">Open sidebar</span>
			</Button>
			<ThemeToggle className="size-8 rounded-lg" />
		</div>
	)
}
