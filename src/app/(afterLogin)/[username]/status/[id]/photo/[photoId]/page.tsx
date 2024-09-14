import Home from "@/app/(afterLogin)/home/page";

type Props = {
  params: { username: string; id: number; photoId: number };
};

export default function Page({ params }: Props) {
  return <Home />;
}
