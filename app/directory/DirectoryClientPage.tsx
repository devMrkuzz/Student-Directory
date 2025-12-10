"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import UserCard from "@/components/user-card";
import FilterDropdown from "@/components/filter-dropdown";
import { mockUsers } from "@/lib/mock-data";

export default function DirectoryClientPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  // Get unique departments
  const departments = useMemo(() => {
    return Array.from(new Set(mockUsers.map((user) => user.department)));
  }, []);

  // Filter users based on search and department
  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        !selectedDepartment || user.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-primary">Directory</h1>
          <div className="w-24" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-base"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-2 flex-wrap">
            <FilterDropdown
              departments={departments}
              selectedDepartment={selectedDepartment}
              onSelectDepartment={setSelectedDepartment}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredUsers.length} of {mockUsers.length} results
          </p>
        </div>

        {/* User Grid */}
        {filteredUsers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <Link key={user.id} href={`/profile/${user.id}`}>
                <UserCard user={user} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No results found</p>
            <Button
              variant="ghost"
              onClick={() => {
                setSearchTerm("");
                setSelectedDepartment(null);
              }}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Student/Employee Directory. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
