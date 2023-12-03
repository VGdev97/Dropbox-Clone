import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      {/* First div */}
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox.
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>
          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-[10px]" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Disclaimer */}
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This website is created solely for demonstration and portfolio purposes.
        We do not claim ownership or affiliation with any entities mentioned,
        including but not limited to the website platform used. This content is
        produced for informational and educational use only. In accordance with
        the principles of fair use, as outlined in section 107 of the Copyright
        Act 1976, this website's content is intended for educational purposes.
      </p>
    </main>
  );
}
