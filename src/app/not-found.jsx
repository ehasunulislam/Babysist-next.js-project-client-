import Image from "next/image";

export default function GlobalError() {
    return(
        <div className="flex flex-col justify-center items-center text-center py-20 space-y-4">
            <h3 className="text-3xl font-bold">Oops!</h3>
            <h4 className="text-2xl font-semibold">
                Page not found. Looks like it has wandered off, <br /> just like a curious toddler.
            </h4>
            <p>
                To find the information you are looking for, you can use the <br /> menu on this page.
            </p>

            <Image src={"/assets/error.png"} alt="error image" width={300} height={300} />
        </div>
    )
}