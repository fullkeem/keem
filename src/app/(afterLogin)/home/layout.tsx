import { ReactNode } from "react";

export default async function name({ children }: { children: ReactNode }) {
  return <div>홈 레이아웃{children}</div>;
}
