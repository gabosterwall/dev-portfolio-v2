import Link from "next/link";
import { PiLinkBreak } from "react-icons/pi";
import { IoReturnUpBack } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col min-h-screen items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center text-center text-6xl">
          <h1>4</h1>
          <PiLinkBreak />
          <h1>4</h1>
        </div>
        <h2 className="text-xl">Not Found</h2>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-lg w-full">Could not find requested resource</p>
        <Link
          href="/"
          className="w-fit flex items-center text-center px-2 py-1 gap-2 rounded-full bg-slate-600/50 text-slate-200 hover:bg-slate-600/30 hover:text-slate-400"
        >
          <IoReturnUpBack className="text-xl" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
