import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const {data: blog } = await fetch(process.env.SITE_URL + "/api/blog?id=" + params.id).then((res) => res.json());

  return (
    <div className="max-v-5xl mx-auto min-h-screen pt-10 space-y-10">
      <div>
        <h1 className="text-5xl font-bold">{blog.title}</h1>
        <p>{new Date(blog.created_at).toDateString()} </p>
      </div>
    </div>
  );
}
