import { useState, useMemo } from "react"
import {
	Search,
	Settings,
	Calendar,
	FileText,
	Users,
	Zap,
	PanelLeftClose,
} from "lucide-react"
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarFooter,
	SidebarSeparator,
	useSidebar,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme/toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const recentChatsItems = [
	{ title: "Chat 1" },
	{ title: "Chat 2" },
	{ title: "Chat 3" },
	{ title: "Chat 4" },
	{ title: "Chat 5" },
	{ title: "Chat 6" },
	{ title: "Chat 7" },
	{ title: "Chat 8" },
	{ title: "Chat 9" },
	{ title: "Chat 10" },
	{ title: "Chat 11" },
	{ title: "Chat 12" },
	{ title: "Chat 13" },
	{ title: "Chat 14" },
	{ title: "Chat 15" },
	{ title: "Chat 16" },
	{ title: "Chat 17" },
	{ title: "Chat 18" },
	{ title: "Chat 19" },
	{ title: "Chat 20" },
]

export function AppSidebar() {
	const { toggleSidebar, isMobile } = useSidebar()
	const [searchQuery, setSearchQuery] = useState("")

	const filteredChats = useMemo(() => {
		return recentChatsItems.filter((chat) =>
			chat.title.toLowerCase().includes(searchQuery.toLowerCase()),
		)
	}, [searchQuery])

	const header = (
		<SidebarHeader className="px-4 py-2 pt-5">
			<div className="flex items-center gap-1">
				<Button
					variant="ghost"
					size="icon"
					className="size-8"
					onClick={toggleSidebar}
				>
					<PanelLeftClose className="size-4" />
					<span className="sr-only">Close sidebar</span>
				</Button>
				<ThemeToggle className="size-8" />
				<span className="text-sm font-semibold ml-1">openglow</span>
			</div>
		</SidebarHeader>
	)

	const footer = (
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<Settings className="size-4" />
						<span>Settings</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	)

	return (
		<Sidebar collapsible="offExamples">
			{isMobile ? footer : header}

			<SidebarContent className="flex flex-col">
				{!isMobile && (
					<div className="sticky top-0 z-10 bg-sidebar p-2">
						<SidebarGroup className="pt-0 pb-2">
							<Button
								variant="default"
								className="w-full justify-center h-10 text-lg font-medium tracking-wide"
							>
								<span>New Thread</span>
							</Button>
						</SidebarGroup>

						<SidebarGroup className="pt-0 pb-0">
							<Input
								placeholder="Search your threads"
								className="h-8 text-xs"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</SidebarGroup>
					</div>
				)}

				<SidebarGroup className="pt-0 flex-1 overflow-y-auto custom-scrollbar">
					<SidebarGroupContent>
						<SidebarMenu>
							{filteredChats.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton>
										<span>{item.title}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{isMobile && (
					<div className="sticky bottom-0 z-10 bg-sidebar p-2 border-t">
						<SidebarGroup className="pt-0 pb-2">
							<Button
								variant="default"
								className="w-full justify-center h-10 text-lg font-medium tracking-wide"
							>
								<span>New Thread</span>
							</Button>
						</SidebarGroup>

						<SidebarGroup className="pt-0 pb-0">
							<Input
								placeholder="Search your threads"
								className="h-8 text-xs"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</SidebarGroup>
					</div>
				)}
			</SidebarContent>

			{isMobile ? header : footer}
		</Sidebar>
	)
}
