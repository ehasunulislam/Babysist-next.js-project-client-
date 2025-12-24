import AllNaniCardDesign from "@/components/Design/AllNaniCardDesign";
import Link from "next/link";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/all-nanny`, {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
      {data.map(item => (
        <Link href={`/all-nanny/${item._id}`} key={item._id}>
          <AllNaniCardDesign
            name={item.name}
            img={item.img}
            location={item.location}
          />
        </Link>
      ))}
    </div>
  );
}
