import Image from "next/image";
import Link from "next/link";
import articleImage from "@/app/IMG/india-idea-set-geography.jpg";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl w-1/5 mb-5">Shivatsh's Blog</h1>
      <div className="flex justify-between w-screen h-1/2 p-4 ">
        <div className=" h-full w-1/3">
          <Link href={"/articles/article1"}>
            <Image
              src={articleImage}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="w-full text-2xl  text-center">
              Geography Of India
            </div>
          </Link>
        </div>
        <div className="border-2 h-full w-1/3">
          <Link href={"/articles/article2"}>
            <div className=" w-full">article 2</div>
          </Link>
        </div>
      </div>
    </>
  );
}
