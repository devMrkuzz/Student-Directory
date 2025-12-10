"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"

interface User {
  id: string
  name: string
  role: string
  department: string
  email: string
  age: number
  phone: string
}

export default function UserCard({ user }: { user: User }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/90 transition-colors">
        <span className="text-2xl font-bold text-primary-foreground">{user.name.charAt(0)}</span>
      </div>

      {/* Content */}
      <div className="space-y-2 mb-4">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2">{user.name}</h3>
        <p className="text-sm text-primary font-medium">{user.role}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{user.department}</span>
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-2 mb-4 pb-4 border-t border-border pt-4">
        <a
          href={`mailto:${user.email}`}
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors truncate"
          onClick={(e) => e.preventDefault()}
        >
          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{user.email}</span>
        </a>
      </div>

      {/* Button */}
      <Button variant="outline" size="sm" className="w-full text-sm bg-transparent">
        View Profile
      </Button>
    </Card>
  )
}
