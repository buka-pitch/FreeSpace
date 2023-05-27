import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col text-white">
      <section className="flex flex-row  w-screen items-center justify-center">
        <div className="border-2 w-3/4 h-40 m-5 border-teal-700 rounded-xl flex flex-col items-center justify-center">
          <div className=" text-lg ">FreeSpace</div>
          <p>Share Your Opinons and Speek Freely</p>
          <img src="" alt="logo" />
        </div>
      </section>
      <button
        className=" bg-violet-600 p-5 rounded-lg hover:bg-yellow-600 hover:p-6 hover:text-slate-950 hover:font-bold"
      >
        Get Started
      </button>
    </div>
  );
}
