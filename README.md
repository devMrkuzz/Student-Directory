# Student/Employee Directory

A modern, professional web application for browsing and searching student/employee profiles with advanced filtering capabilities.

## Overview

This directory application provides an intuitive interface for finding and connecting with people in your organization. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4, it features real-time search, department filtering, and detailed profile views.

## Features

- **Real-time Search**: Instantly search across names, emails, and job roles
- **Department Filtering**: Filter users by department with a single click
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Profile Pages**: Detailed individual profile pages with contact information
- **Modern UI**: Clean, professional interface using shadcn/ui components
- **Fast Performance**: Built on Next.js 16 with optimized rendering

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Project Structure

\`\`\`
├── app/
│ ├── layout.tsx # Root layout with metadata
│ ├── page.tsx # Homepage (Server Component)
│ ├── HomePageClient.tsx # Homepage client component
│ ├── globals.css # Global styles and theme tokens
│ ├── directory/
│ │ ├── page.tsx # Directory page wrapper
│ │ ├── DirectoryClientPage.tsx # Directory with search/filter
│ │ └── loading.tsx # Loading state
│ └── profile/
│ └── [id]/
│ └── page.tsx # Individual profile page
├── components/
│ ├── user-card.tsx # User card component
│ ├── filter-dropdown.tsx # Department filter dropdown
│ └── ui/ # shadcn/ui components
├── lib/
│ ├── mock-data.ts # Mock user data
│ └── utils.ts # Utility functions
└── README.md # This file
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Code Snippets

### 1. User Data Structure (`lib/mock-data.ts`)

The user data is stored in a simple array format. You can easily replace this with API calls:

\`\`\`typescript
export const mockUsers = [
{
id: "1",
name: "Sarah Johnson",
role: "Senior Software Engineer",
department: "Engineering",
email: "sarah.johnson@company.com",
phone: "(555) 123-4567",
age: 28,
},
// ... more users
]
\`\`\`

**To add more users**: Simply add new objects to the `mockUsers` array following the same structure.

### 2. Search and Filter Logic (`app/directory/DirectoryClientPage.tsx`)

The directory uses React's `useMemo` hook for efficient filtering:

\`\`\`typescript
const filteredUsers = useMemo(() => {
return mockUsers.filter((user) => {
const matchesSearch =
user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
user.role.toLowerCase().includes(searchTerm.toLowerCase())
const matchesDepartment = !selectedDepartment || user.department === selectedDepartment
return matchesSearch && matchesDepartment
})
}, [searchTerm, selectedDepartment])
\`\`\`

**How it works**:

- Searches across name, email, and role fields
- Applies department filter if selected
- Updates automatically when search term or department changes

### 3. User Card Component (`components/user-card.tsx`)

Reusable card component with hover effects:

\`\`\`typescript
export default function UserCard({ user }: { user: User }) {
return (
<Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
{/_ Avatar with first letter _/}

<div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center mb-4">
<span className="text-2xl font-bold text-primary-foreground">
{user.name.charAt(0)}
</span>
</div>

      {/* User info */}
      <div className="space-y-2 mb-4">
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-primary font-medium">{user.role}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{user.department}</span>
        </div>
      </div>

      {/* Email contact */}
      <a href={`mailto:${user.email}`} className="flex items-center gap-2">
        <Mail className="w-3.5 h-3.5" />
        <span>{user.email}</span>
      </a>
    </Card>

)
}
\`\`\`

### 4. Department Filter (`components/filter-dropdown.tsx`)

Dropdown menu for filtering by department:

\`\`\`typescript
export default function FilterDropdown({
departments,
selectedDepartment,
onSelectDepartment,
}: FilterDropdownProps) {
return (
<DropdownMenu>
<DropdownMenuTrigger asChild>
<Button variant="outline" size="sm">
<Filter className="w-4 h-4 mr-2" />
{selectedDepartment || "All Departments"}
</Button>
</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuItem onClick={() => onSelectDepartment(null)}>
All Departments
</DropdownMenuItem>
{departments.map((dept) => (
<DropdownMenuItem key={dept} onClick={() => onSelectDepartment(dept)}>
{dept}
</DropdownMenuItem>
))}
</DropdownMenuContent>
</DropdownMenu>
)
}
\`\`\`

### 5. Profile Page (`app/profile/[id]/page.tsx`)

Dynamic route for individual profiles using Next.js App Router:

\`\`\`typescript
export default async function ProfilePage({
params,
}: {
params: Promise<{ id: string }>
}) {
const { id } = await params
const user = mockUsers.find((u) => u.id === id)

if (!user) {
return <div>User not found</div>
}

return (

<main>
{/_ User details display _/}
<h1>{user.name}</h1>
<p>{user.role}</p>
{/_ ... more details _/}
</main>
)
}
\`\`\`

## Customization

### Changing Colors

Edit the design tokens in `app/globals.css`:

\`\`\`css
@theme inline {
--color-primary: #1e3a8a; /_ Navy blue _/
--color-accent: #3b82f6; /_ Bright blue _/
--color-background: #ffffff; /_ White background _/
/_ ... more tokens _/
}
\`\`\`

### Adding New User Fields

1. Update the user interface in `lib/mock-data.ts`
2. Add the field to mock data
3. Display it in `components/user-card.tsx` or `app/profile/[id]/page.tsx`

### Connecting to a Real Database

Replace the mock data import with API calls:

\`\`\`typescript
// Instead of importing mockUsers
import { mockUsers } from "@/lib/mock-data"

// Fetch from your API
const response = await fetch('/api/users')
const users = await response.json()
\`\`\`

## Features to Add

Here are some ideas for extending the directory:

- **Authentication**: Add login to protect the directory
- **User Profiles**: Allow users to edit their own profiles
- **Photo Uploads**: Replace letter avatars with real photos
- **Advanced Search**: Add filters for age, location, etc.
- **Export**: Download directory as CSV or PDF
- **Favorites**: Let users bookmark frequently contacted people
- **Database Integration**: Connect to Supabase, Neon, or another database

## Performance

The application uses several performance optimizations:

- **Server Components**: Default pages are Server Components for faster initial load
- **Client Components**: Only interactive parts use client-side JavaScript
- **Memoization**: `useMemo` prevents unnecessary re-renders
- **Code Splitting**: Next.js automatically splits code by route
- **Responsive Images**: Optimized loading for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for use in educational and commercial projects.

## Support

For issues or questions, please refer to the Next.js documentation at [nextjs.org](https://nextjs.org) or the shadcn/ui documentation at [ui.shadcn.com](https://ui.shadcn.com).
