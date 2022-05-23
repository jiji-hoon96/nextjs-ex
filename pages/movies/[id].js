import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();
  return (
    <div>
      <h4>{router.query.title || "로딩중"}</h4>
    </div>
  );
}
