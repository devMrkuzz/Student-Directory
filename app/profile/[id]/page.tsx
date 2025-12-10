"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { mockUsers } from "@/lib/mock-data";

export default function ProfilePage() {
  const params = useParams();
  const userId = params.id as string;
  const user = mockUsers.find((u) => u.id === userId);

  if (!user) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg text-muted-foreground">User not found</p>
          <Link href="/directory">
            <Button>Back to Directory</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/directory">
            <Button variant="ghost" size="sm" className="gap-2 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </Button>
          </Link>
        </div>
      </header>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-8 space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <div className="w-24 h-24 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-primary-foreground">
                {user.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-primary mb-2">
                {user.name}
              </h1>
              <p className="text-xl text-muted-foreground">{user.role}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-primary hover:underline"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${user.phone}`}
                    className="text-primary hover:underline"
                  >
                    {user.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="text-foreground">{user.department}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="text-foreground">{user.age} years old</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Additional Details */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Additional Details
            </h2>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p>
                <span className="text-muted-foreground">Status:</span>{" "}
                <span className="text-foreground ml-2">Active</span>
              </p>
              <p>
                <span className="text-muted-foreground">Joined:</span>{" "}
                <span className="text-foreground ml-2">2023</span>
              </p>
            </div>
          </div>
        </Card>
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
