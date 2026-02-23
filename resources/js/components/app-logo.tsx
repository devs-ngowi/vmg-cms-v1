export default function AppLogo() {
    return (
        <>
            {/* Sidebar background is always VMG blue — use white logo */}
            <div className="flex size-12 items-center justify-center overflow-hidden">
                <img
                    src="/vmg-out-logo.png"
                    alt="VMG Logo"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                />
            </div>
            <div className="ml-1 grid flex-1 text-left text-base">
                <span className="mb-0.5 truncate leading-tight font-bold tracking-wide">
                    Contents-MS
                </span>
            </div>
        </>
    );
}
