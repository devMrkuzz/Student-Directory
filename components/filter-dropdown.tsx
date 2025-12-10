"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Filter, X } from "lucide-react"

interface FilterDropdownProps {
  departments: string[]
  selectedDepartment: string | null
  onSelectDepartment: (dept: string | null) => void
}

export default function FilterDropdown({ departments, selectedDepartment, onSelectDepartment }: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Filter className="w-4 h-4" />
          Department
          {selectedDepartment && (
            <span className="ml-1 px-1.5 py-0.5 bg-primary text-primary-foreground rounded text-xs font-medium">1</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {selectedDepartment && (
          <>
            <DropdownMenuItem onClick={() => onSelectDepartment(null)} className="gap-2">
              <X className="w-4 h-4" />
              Clear Filter
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        {departments.map((dept) => (
          <DropdownMenuCheckboxItem
            key={dept}
            checked={selectedDepartment === dept}
            onCheckedChange={(checked) => {
              onSelectDepartment(checked ? dept : null)
            }}
          >
            {dept}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
