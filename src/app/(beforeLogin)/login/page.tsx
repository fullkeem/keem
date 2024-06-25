"use client";

import { useRouter } from "next/router";
import Main from "@/app/(beforeLogin)/_components/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}
