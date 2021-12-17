import Image from "next/image";

function Shortcuts({src, title}) {
    return (
        <div>
            
        <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
            {src && (
            <Image
            className="rounded-lg"
            src={src}
            width={40}
            height={40}
            layout="fixed"
            />
            )}

            {src && (
                <src className="" />
            )}

            <p className="hidden sm:inline-flex font-medium">{title}</p>

             </div>
        </div>
    )
}

export default Shortcuts
