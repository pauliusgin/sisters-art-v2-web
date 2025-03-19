import Image from "next/image";
import { bigSister3 } from "../../public";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Image
                    className=""
                    src={bigSister3}
                    alt="Next.js logo"
                    width={500}
                    height={180}
                    priority
                />
                <p className="size-full text-center">wip...</p>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
        </div>
    );
}
