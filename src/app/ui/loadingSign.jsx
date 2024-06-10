import Image from "next/image";

const LoadingSign = () => {

    return (
        <div className="h-[88vh] flex justify-center items-end">
            <Image
                src="/static_image.png"
                alt="Loading Image"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="center bottom"
            />
        </div>
    )
}
export default LoadingSign;