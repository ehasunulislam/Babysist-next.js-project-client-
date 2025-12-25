"use client";
import PrivateRoutes from "@/routes/PrivateRoutes";
import useAxios from "@/Hooks/useAxios";
import { useEffect, useState } from "react";
import useAuthInfo from "@/Hooks/useAuthInfo";

function BookingPage() {
  const axiosSecure = useAxios();
  const { user } = useAuthInfo(); 
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    axiosSecure
      .get(`/user-bookings/${user.email}`)
      .then((res) => {
        setBookings(res.data.bookings || []);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [user?.email, axiosSecure]);

  if (!user) return <p className="text-center py-10">Please login first.</p>;
  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Booked Nannies</h1>
      <p className="mb-6 text-gray-600">
        Total Booked Nannies: <span className="font-semibold">{bookings.length}</span>
      </p>

      {bookings.length === 0 ? (
        <p className="text-gray-500">You havent booked any nanny yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Nanny Name</th>
                <th>Booked At</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {bookings.map((b, index) => (
                <tr key={b._id}>
                  <th>{index + 1}</th>
                  <td>{b.nannyId}</td>
                  <td>{new Date(b.bookedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Wrap with PrivateRoutes
export default function PageWrapper() {
  return (
    <PrivateRoutes>
      <BookingPage />
    </PrivateRoutes>
  );
}
