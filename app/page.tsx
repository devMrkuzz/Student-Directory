import HomePageClient from "@/app/profile/HomePageClient";

export const metadata = {
  title: "Home | Student/Employee Directory",
  description:
    "Welcome to the Student/Employee Directory. Browse our comprehensive database of students and employees. Start searching now to find and connect with people in your organization.",
};

export default function Home() {
  return <HomePageClient />;
}
