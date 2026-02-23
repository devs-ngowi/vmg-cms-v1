export default function AppLogoIcon({ className }: { className?: string }) {
    return (
        <>
            
            <img
                src="/latest_vmg_logo.png"
                alt="VMG Logo"
                className={`block dark:hidden ${className ?? ''}`}
            />
            <img
                src="/vmg-out-logo.png"
                alt="VMG Logo"
                className={`hidden dark:block ${className ?? ''}`}
            />
        </>
    );
}
