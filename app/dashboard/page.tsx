import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import BlogTable from "./components/BlogTable";

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link href="/dashboard/blog/create">
          <Button variant="outline">
            Create Blog
            <Plus size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
      <BlogTable />
    </div>
  );
}
