
import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"
import { Input } from "./input"
import { Separator } from "./separator"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"

const Sidebar = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("h-screen flex", className)} {...props}>
    {children}
  </div>
))
Sidebar.displayName = "Sidebar"

const SidebarMobile = ({ children, className, ...props }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-52">
        {children}
      </SheetContent>
    </Sheet>
  )
}
SidebarMobile.displayName = "SidebarMobile"

const SidebarDesktop = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "hidden border-r bg-background transition-all duration-300 ease-in-out lg:flex lg:flex-col",
      className
    )}
    {...props}
  />
))
SidebarDesktop.displayName = "SidebarDesktop"

const SidebarInner = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col h-full p-4 pt-8", className)}
    {...props}
  >
    {children}
  </div>
))
SidebarInner.displayName = "SidebarInner"

const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-center space-y-2 mb-2", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarHeaderTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold text-center", className)}
    {...props}
  />
))
SidebarHeaderTitle.displayName = "SidebarHeaderTitle"

const SidebarSearch = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative mb-4">
    <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      ref={ref}
      placeholder="Search..."
      className={cn("pl-8", className)}
      {...props}
    />
  </div>
))
SidebarSearch.displayName = "SidebarSearch"

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => (
  <nav ref={ref} className={cn("flex-1 overflow-y-auto", className)} {...props} />
))
SidebarContent.displayName = "SidebarContent"

const SidebarSection = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("pb-4", className)} {...props}>
    {children}
  </div>
))
SidebarSection.displayName = "SidebarSection"

const SidebarSectionTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs uppercase text-muted-foreground mb-2", className)}
    {...props}
  />
))
SidebarSectionTitle.displayName = "SidebarSectionTitle"

const SidebarNav = React.forwardRef(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "grid items-start px-2 text-sm font-medium space-y-1",
      className
    )}
    {...props}
  />
))
SidebarNav.displayName = "SidebarNav"

const SidebarNavItem = React.forwardRef(
  ({ className, children, icon, title, isActive, showToolTip = false, ...props }, ref) => {
    const Icon = icon
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            ref={ref}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors",
              isActive && "bg-accent",
              className
            )}
            {...props}
          >
            {Icon && <Icon className="h-4 w-4" />}
            <span className={showToolTip ? "sr-only" : ""}>{title}</span>
            {children}
          </a>
        </TooltipTrigger>
        {showToolTip && (
          <TooltipContent side="right" className="flex items-center gap-4">
            {title}
          </TooltipContent>
        )}
      </Tooltip>
    )
  }
)
SidebarNavItem.displayName = "SidebarNavItem"

const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <Separator />
    <div
      ref={ref}
      className={cn("mt-auto p-4", className)}
      {...props}
    />
  </>
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarToggle = ({ collapsed = false, onClick, ...props }) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Button variant="ghost" size="icon" onClick={onClick} {...props}>
        {collapsed ? (
          <ChevronRightIcon className="h-4 w-4" />
        ) : (
          <ChevronLeftIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}

export {
  Sidebar,
  SidebarMobile,
  SidebarDesktop,
  SidebarInner,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarSearch,
  SidebarContent,
  SidebarSection,
  SidebarSectionTitle,
  SidebarNav,
  SidebarNavItem,
  SidebarFooter,
  SidebarToggle,
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
