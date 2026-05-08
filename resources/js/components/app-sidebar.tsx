import { Link } from '@inertiajs/react';
import {
    BarChart2, BookOpen, ClipboardList, Factory,
    FileText, FolderOpen, GalleryHorizontal, GitPullRequest,
    HelpCircle, Image, LayoutGrid, LibraryBig, Mail, MessageSquare, Navigation,
    NotebookTabs, PanelTop, PenLine, Search, Settings,
    ShieldCheck, Star, Tag, Users, Wrench,
} from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar, SidebarContent, SidebarFooter,
    SidebarHeader, SidebarMenu, SidebarMenuButton,
    SidebarMenuItem, SidebarSeparator,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import AppLogo from './app-logo';
import { useSidebarConfig } from '@/hooks/use-company-storage';

type NavItemWithMeta = NavItem & {
    module?: string;
    sidebarKey: string;
};

const overviewItems: NavItemWithMeta[] = [
    { title: 'Dashboard', href: dashboard(), icon: LayoutGrid, module: 'Dashboard', sidebarKey: 'dashboard' },
];

const authItems: NavItemWithMeta[] = [
    { title: 'Users', href: '/users', icon: Users, module: 'Users', sidebarKey: 'users' },
    { title: 'Roles & Permissions', href: '/roles', icon: ShieldCheck, module: 'Roles', sidebarKey: 'roles' },
    { title: 'Authors', href: '/authors', icon: PenLine, module: 'Authors', sidebarKey: 'authors' },
];

const contentItems: NavItemWithMeta[] = [
    {
        title: 'Pages',
        href: '/pages',
        icon: FileText,
        module: 'Pages',
        sidebarKey: 'pages',
        items: [
            { title: 'All Pages', href: '/pages', icon: FileText },
            { title: 'Add New Page', href: '/pages/create', icon: FileText },
            { title: 'Drafts', href: '/pages/drafts', icon: FileText },
        ],
    },
    { title: 'Services', href: '/services', icon: Wrench, module: 'Services', sidebarKey: 'services' },
    { title: 'Industries', href: '/industries', icon: Factory, module: 'Industries', sidebarKey: 'industries' },
    {
        title: 'Projects',
        href: '/projects',
        icon: FolderOpen,
        module: 'Projects',
        sidebarKey: 'projects',
        items: [
            { title: 'All Projects', href: '/projects', icon: FolderOpen },
            { title: 'Add New Project', href: '/projects/create', icon: FolderOpen },
            { title: 'Featured', href: '/projects/featured', icon: FolderOpen },
        ],
    },
    {
        title: 'Knowledge',
        href: '/knowledge',
        icon: LibraryBig,
        module: 'Blog',
        sidebarKey: 'knowledge',
        items: [
            { title: 'Categories', href: '/knowledge/categories', icon: NotebookTabs },
            { title: 'Add Category', href: '/knowledge/categories/create', icon: NotebookTabs },
            { title: 'Articles', href: '/knowledge/articles', icon: BookOpen },
            { title: 'Add Article', href: '/knowledge/articles/create', icon: BookOpen },
        ],
    },
    {
        title: 'Blog / Insights',
        href: '/blog',
        icon: BookOpen,
        module: 'Blog',
        sidebarKey: 'blog',
        items: [
            { title: 'All Posts', href: '/blog', icon: BookOpen },
            { title: 'Add New Post', href: '/blog/create', icon: BookOpen },
            { title: 'Categories', href: '/blog/categories', icon: BookOpen },
            { title: 'Tags', href: '/blog/tags', icon: BookOpen },
        ],
    },
];

const assetItems: NavItemWithMeta[] = [
    { title: 'Media Library', href: '/media', icon: Image, module: 'Media', sidebarKey: 'media' },
];

const formItems: NavItemWithMeta[] = [
    {
        title: 'Forms',
        href: '/forms',
        icon: ClipboardList,
        module: 'Forms',
        sidebarKey: 'forms',
        items: [
            { title: 'All Forms', href: '/forms', icon: ClipboardList },
            { title: 'New Form', href: '/forms/create', icon: ClipboardList },
        ],
    },
    { title: 'Submissions', href: '/submissions', icon: Mail, module: 'Submissions', sidebarKey: 'submissions' },
];

const publishingItems: NavItemWithMeta[] = [
    { title: 'Workflow', href: '/workflow', icon: GitPullRequest, module: 'Workflow', sidebarKey: 'workflow' },
];

const siteConfigItems: NavItemWithMeta[] = [
    { title: 'Home-Banners', href: '/banners', icon: PanelTop, module: 'Hero Slides', sidebarKey: 'home_banners' },
    { title: 'Hero Slides', href: '/hero-slides', icon: GalleryHorizontal, module: 'Hero Slides', sidebarKey: 'hero_slides' },
    { title: 'Client Logos', href: '/client-logos', icon: Tag, module: 'Client Logos', sidebarKey: 'client_logos' },
    { title: 'Testimonials', href: '/testimonials', icon: Star, module: 'Testimonials', sidebarKey: 'testimonials' },
    { title: 'Site Settings', href: '/settings', icon: Settings, module: 'Settings', sidebarKey: 'site_settings' },
];

const seoNavItems: NavItemWithMeta[] = [
    { title: 'SEO Manager', href: '/seo', icon: Search, module: 'SEO', sidebarKey: 'seo' },
    {
        title: 'Menu Manager',
        href: '/menus/primary',
        icon: Navigation,
        module: 'Menus',
        sidebarKey: 'menus',
        items: [
            { title: 'Primary Navigation', href: '/menus/primary', icon: Navigation },
            { title: 'Footer Links', href: '/menus/footer', icon: Navigation },
        ],
    },
];

const analyticsItems: NavItemWithMeta[] = [
    { title: 'Analytics', href: '/analytics', icon: BarChart2, module: 'Analytics', sidebarKey: 'analytics' },
];

const supportItems: NavItemWithMeta[] = [
    { title: 'Feedback', href: '/feedback', icon: MessageSquare, module: 'Feedback', sidebarKey: 'feedback' },
    { title: 'Help & Support', href: '/help', icon: HelpCircle, module: 'Help', sidebarKey: 'help' },
];

const ALL_GROUPS: { label: string; items: NavItemWithMeta[] }[] = [
    { label: 'Overview', items: overviewItems },
    { label: 'Auth & Users', items: authItems },
    { label: 'Content Management', items: contentItems },
    { label: 'Assets', items: assetItems },
    { label: 'Forms & Inquiries', items: formItems },
    { label: 'Publishing', items: publishingItems },
    { label: 'Site Configuration', items: siteConfigItems },
    { label: 'SEO & Navigation', items: seoNavItems },
    { label: 'Analytics', items: analyticsItems },
    { label: 'Support', items: supportItems },
];

export function AppSidebar() {
    const sidebarConfig = useSidebarConfig();

    const REQUIRED_ITEM = 'site_settings';

    const enabledSidebarKeys: string[] = Array.from(
        new Set([...(sidebarConfig?.enabled_modules ?? []), REQUIRED_ITEM]),
    );

    const showLabels = sidebarConfig?.show_group_labels ?? true;
    const brandColor = sidebarConfig?.brand_color;

    function isVisible(sidebarKey: string): boolean {
        if (sidebarKey === REQUIRED_ITEM) return true;
        if (enabledSidebarKeys.length === 0) return true;
        return enabledSidebarKeys.includes(sidebarKey);
    }

    const visibleGroups = ALL_GROUPS
        .map(group => ({
            ...group,
            items: group.items.filter(item => isVisible(item.sidebarKey)),
        }))
        .filter(group => group.items.length > 0);

    return (
        <Sidebar
            collapsible="icon"
            variant="inset"
            style={brandColor ? { '--sidebar-brand': brandColor } as React.CSSProperties : undefined}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {visibleGroups.map((group, index) => (
                    <div key={group.label}>
                        {index > 0 && <SidebarSeparator />}
                        <NavMain
                            items={group.items}
                            groupLabel={showLabels ? group.label : undefined}
                        />
                    </div>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
