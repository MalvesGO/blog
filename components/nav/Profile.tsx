import { useUser } from "@/lib/store/user";
import Image from "next/image";
import React from "react";

export default function Profile() {
  const user = useUser((state) => state.user);
  return (
    <Image
      src={user?.user_metadata.avatar_url}
      alt={user?.user_metadata.user_name}
      width={50}
      height={50}
      className="rounded-full ring-2 ring-green-500"
    />
  );
}
