"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      priority
      src="/images/logo.png"
      alt="adaka"
      width={120}
      height={40}
      onClick={() => router.push("/")}
      className="w-auto h-auto cursor-pointer"
    />
  );
};
