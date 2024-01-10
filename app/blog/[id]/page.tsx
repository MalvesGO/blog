import { IBlog } from "@/lib/types";
import Image from "next/image";
import React from "react";
import BlogContent from "./components/BlogContent";

// export async function generateStaticParams() {
//   const { data: blog } = await fetch(
//     process.env.SITE_URL + "/api/blog?id=" + "*"
//   ).then((res) => res.json());
//   return blog;
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const { data: blog } = (await fetch(
//     process.env.SITE_URL + "/api/blog?id=" + params.id
//   ).then((res) => res.json())) as { data: IBlog };
//   return {
//     title: blog?.title,
//     authors: {
//       name: 'Daily Blog Coding'
//     },
//     openGraph: {
//       title: blog?.title,
//       url: process.env.SITE_ULR + "/blog/" + params.id,
//       siteName: "Daily Blog",
//       images: blog?.image_url,
//       type: "website",
//     },
//     keywords: ["Daily Blog", "Daily Blog Coding", "Blog", "Coding", "Daily"]
//   }
// }

export default async function page({ params }: { params: { id: string } }) {
  const { data: blog } = (await fetch(
    process.env.SITE_URL + "/api/blog?id=" + params.id
  ).then((res) => res.json())) as { data: IBlog };

  if (!blog?.id) {
    return <div className="text-5xl font-bold text-center">404</div>;
  }

  return (
    <div className="max-v-5xl mx-auto min-h-screen pt-10 space-y-10">
      <div className="sm:px-10 space-y-5">
        <h1 className="text-5xl font-bold">{blog?.title}</h1>
        <p>{new Date(blog?.created_at || "").toDateString()} </p>
      </div>
      <div className="w-full h-96 relative">
        <Image
          priority
          src={blog?.image_url || "/"}
          alt="ccover"
          fill
          className="object-cover object-center rounded-md border"
          sizes="(max-wdith: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <BlogContent blogId={blog?.id} />
    </div>
  );
}
