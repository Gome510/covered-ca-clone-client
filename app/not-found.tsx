import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen text-center pt-8">
      <h2>Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Link
        className="bg-primary font-bold text-white text-center rounded-full py-1 px-4 w-40"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
