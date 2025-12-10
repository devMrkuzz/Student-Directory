"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-primary">Directory</h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold text-primary text-pretty">
              Student/Employee Directory
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance">
              Find and connect with students and employees. Search by name,
              role, or department to discover profiles and contact information.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-left">
            <h3 className="text-lg font-semibold text-foreground">
              About This Directory
            </h3>
            <p className="text-sm text-muted-foreground">
              Our Student/Employee Directory is a centralized platform designed
              to help you find and connect with individuals across your
              organization. Whether you're looking for a colleague, classmate,
              or contact information, our searchable database makes it easy to
              find exactly who you need.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Key Features:</strong>
              </p>
              <ul className="space-y-1 ml-4 list-disc">
                <li>Search by name, email, or role</li>
                <li>Filter by department</li>
                <li>View detailed user profiles</li>
                <li>Quick access to contact information</li>
              </ul>
            </div>
          </div>

          <Link href="/directory">
            <Button size="lg" className="gap-2">
              View Directory
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Student/Employee Directory. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
