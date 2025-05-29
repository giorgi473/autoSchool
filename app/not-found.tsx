import Link from "next/link";

function notfound() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-3">
      <h1 className="text-4xl text-red-500">Not Found Page 404</h1>
      <Link href={"/road-signs"} className="">
        Home Page
      </Link>
    </div>
  );
}

export default notfound;
