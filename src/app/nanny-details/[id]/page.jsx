import Image from "next/image";

export default async function nannyDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/single-nanny/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-6">
        {/* TOP CARD */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={data?.img}
              alt={data?.name}
              className="rounded-full object-cover border-4 border-white shadow-lg"
              width={120}
              height={120}
            />

            <div className="flex-1">
              <h1 className="text-3xl font-semibold">{data?.name}</h1>
              <p className="text-gray-300">{data?.role} in {data?.location}</p>

              <div className="flex gap-8 mt-4">
                <div>
                  <p className="text-gray-300 text-sm">Age</p>
                  <h3 className="text-xl">{data?.age}</h3>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Per Day Rate</p>
                  <h3 className="text-xl">BDT {data?.perDayTk}</h3>
                </div>
              </div>

              <p className="mt-4 text-gray-300 text-sm">
                Last activity: {data?.lastActivity}
              </p>
            </div>

            <button className="bg-teal-400 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-teal-300 cursor-pointer">
              Book {data?.name}
            </button>
          </div>
        </div>

        {/* ABOUT */}
        <div className="mt-8 bg-gray-100 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">{data?.about}</p>
        </div>

        {/* CHARACTERISTICS */}
        <div className="mt-8 bg-gray-100 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-4">Characteristics</h2>
          <div className="flex flex-wrap gap-3">
            {data?.characteristics?.map((c, i) => (
              <span
                key={i}
                className="bg-white py-2 px-4 rounded-full text-gray-700 border"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-8 bg-gray-100 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <p className="text-gray-700">{data?.experience}</p>
        </div>

        {/* SUPERPOWERS & COMFORT */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">
              My babysitting superpowers
            </h2>

            <ul className="space-y-2 text-gray-700">
              {data?.superpowers?.map((s, i) => (
                <li key={i} className="flex gap-2">
                  • {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">Im comfortable with</h2>

            <ul className="space-y-2 text-gray-700">
              {data?.comfortableWith?.map((c, i) => (
                <li key={i} className="flex gap-2">
                  • {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
