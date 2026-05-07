import { useSidebarConfig } from '@/hooks/use-company-storage';
import { useCompany } from '@/hooks/use-company-storage';

export default function AppLogo() {
    const config  = useSidebarConfig();
    const company = useCompany();

    // Priority: sidebar_logo setting → company logo → default VMG logo
    const logoSrc   = config?.logo || company?.logo || '/vmg-out-logo.png';
    const logoAlt   = config?.company_name || company?.name || 'Logo';
    const brandName = config?.company_name || company?.name || 'Contents-MS';

    return (
        <>
            <div className="flex size-12 items-center justify-center overflow-hidden rounded-lg">
                <img
                    src={logoSrc}
                    alt={`${logoAlt} Logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                        // Fallback to default if custom logo fails to load
                        (e.target as HTMLImageElement).src = '/vmg-out-logo.png';
                    }}
                />
            </div>
            <div className="ml-1 grid flex-1 text-left text-base">
                <span className="mb-0.5 truncate font-bold leading-tight tracking-wide">
                    {brandName}
                </span>
                {company?.plan && (
                    <span className="truncate text-[10px] capitalize opacity-60">
                        {company.plan} plan
                    </span>
                )}
            </div>
        </>
    );
}
