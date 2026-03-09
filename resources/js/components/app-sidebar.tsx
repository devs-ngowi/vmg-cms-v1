import { Link, usePage } from '@inertiajs/react';
import {
    BarChart2,
    BookOpen,
    Briefcase,
    ClipboardList,
    Factory,
    FileText,
    FolderOpen,
    GalleryHorizontal,
    GitPullRequest,
    Image,
    LayoutGrid,
    LibraryBig,
    Mail,
    Navigation,
    NotebookTabs,
    PanelTop,
    PenLine,
    Search,
    Settings,
    ShieldCheck,
    Star,
    Tag,
    Users,
    Wrench,
} from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import AppLogo from './app-logo';

// ── Permission hook ───────────────────────────────────────────────────────────

function useCanView() {
    const { auth } = usePage<any>().props;
    const isAdmin: boolean     = auth?.is_admin    ?? false;
    const permissions: any[]   = auth?.permissions ?? [];

    return (module: string): boolean => {
        if (isAdmin) return true;
        if (!permissions.length) return false;
        const perm = permissions.find(
            (p: any) => p.module.toLowerCase() === module.toLowerCase(),
        );
        return perm?.can_view === true;
    };
}

// ── Types ─────────────────────────────────────────────────────────────────────

type NavItemWithModule = NavItem & { module?: string };

// ── Helper ────────────────────────────────────────────────────────────────────

function filterItems(
    items: NavItemWithModule[],
    canView: (m: string) => boolean,
): NavItem[] {
    return items.filter(item => canView(item.module ?? item.title));
}

// ── Overview ──────────────────────────────────────────────────────────────────

const overviewItems: NavItemWithModule[] = [
    { title: 'Dashboard', href: dashboard(), icon: LayoutGrid, module: 'Dashboard' },
];

// ── Auth & Users ──────────────────────────────────────────────────────────────

const authItems: NavItemWithModule[] = [
    { title: 'Users',               href: '/users',   icon: Users,       module: 'Users' },
    { title: 'Roles & Permissions', href: '/roles',   icon: ShieldCheck, module: 'Roles' },
    { title: 'Authors',             href: '/authors', icon: PenLine,     module: 'Users' },
];

// ── Content Management ────────────────────────────────────────────────────────

const contentItems: NavItemWithModule[] = [
    {
        title: 'Pages', href: '/pages', icon: FileText, module: 'Pages',
        items: [
            { title: 'All Pages',    href: '/pages',        icon: FileText },
            { title: 'Add New Page', href: '/pages/create', icon: FileText },
            { title: 'Drafts',       href: '/pages/drafts', icon: FileText },
        ],
    },
    { title: 'Services',   href: '/services',   icon: Wrench,    module: 'Services'   },
    { title: 'Industries', href: '/industries', icon: Factory,   module: 'Industries' },
    {
        title: 'Projects', href: '/projects', icon: FolderOpen, module: 'Projects',
        items: [
            { title: 'All Projects',    href: '/projects',          icon: FolderOpen },
            { title: 'Add New Project', href: '/projects/create',   icon: FolderOpen },
            { title: 'Featured',        href: '/projects/featured', icon: FolderOpen },
        ],
    },
    {
        title: 'Knowledge', href: '/knowledge', icon: LibraryBig, module: 'Blog',
        items: [
            { title: 'Categories',   href: '/knowledge/categories',        icon: NotebookTabs },
            { title: 'Add Category', href: '/knowledge/categories/create', icon: NotebookTabs },
            { title: 'Articles',     href: '/knowledge/articles',          icon: BookOpen },
            { title: 'Add Article',  href: '/knowledge/articles/create',   icon: BookOpen },
        ],
    },
    {
        title: 'Blog / Insights', href: '/blog', icon: BookOpen, module: 'Blog',
        items: [
            { title: 'All Posts',    href: '/blog',            icon: BookOpen },
            { title: 'Add New Post', href: '/blog/create',     icon: BookOpen },
            { title: 'Categories',   href: '/blog/categories', icon: BookOpen },
            { title: 'Tags',         href: '/blog/tags',       icon: BookOpen },
        ],
    },
    // {
    //     title: 'Vacancies', href: '/vacancies', icon: Briefcase, module: 'Vacancies',
    //     items: [
    //         { title: 'All Vacancies',   href: '/vacancies',        icon: Briefcase },
    //         { title: 'Add New Vacancy', href: '/vacancies/create', icon: Briefcase },
    //     ],
    // },
];

// ── Assets ────────────────────────────────────────────────────────────────────

const assetItems: NavItemWithModule[] = [
    { title: 'Media Library', href: '/media', icon: Image, module: 'Media' },
];

// ── Forms & Inquiries ─────────────────────────────────────────────────────────

const formItems: NavItemWithModule[] = [
    {
        title: 'Forms', href: '/forms', icon: ClipboardList, module: 'Forms',
        items: [
            { title: 'All Forms', href: '/forms',        icon: ClipboardList },
            { title: 'New Form',  href: '/forms/create', icon: ClipboardList },
        ],
    },
    { title: 'Submissions', href: '/submissions', icon: Mail, module: 'Submissions' },
];

// ── Publishing ────────────────────────────────────────────────────────────────

const publishingItems: NavItemWithModule[] = [
    { title: 'Workflow', href: '/workflow', icon: GitPullRequest, module: 'Workflow' },
];

// ── Site Configuration ────────────────────────────────────────────────────────

const siteConfigItems: NavItemWithModule[] = [
    { title: 'Home-Banners',  href: '/banners',      icon: PanelTop,          module: 'Hero Slides'  },
    { title: 'Hero Slides',   href: '/hero-slides',  icon: GalleryHorizontal, module: 'Hero Slides'  },
    { title: 'Client Logos',  href: '/client-logos', icon: Tag,               module: 'Client Logos' },
    { title: 'Testimonials',  href: '/testimonials', icon: Star,              module: 'Testimonials' },
    { title: 'Site Settings', href: '/settings',     icon: Settings,          module: 'Settings'     },
];

// ── SEO & Navigation ──────────────────────────────────────────────────────────

const seoNavItems: NavItemWithModule[] = [
    { title: 'SEO Manager', href: '/seo', icon: Search, module: 'SEO' },
    {
        title: 'Menu Manager', href: '/menus/primary', icon: Navigation, module: 'Menus',
        items: [
            { title: 'Primary Navigation', href: '/menus/primary', icon: Navigation },
            { title: 'Footer Links',       href: '/menus/footer',  icon: Navigation },
        ],
    },
];

// ── Analytics ─────────────────────────────────────────────────────────────────

const analyticsItems: NavItemWithModule[] = [
    { title: 'Analytics', href: '/analytics', icon: BarChart2, module: 'Analytics' },
];

// ── Sidebar ───────────────────────────────────────────────────────────────────

export function AppSidebar() {
    const canView = useCanView();

    const groups: { label: string; items: NavItemWithModule[] }[] = [
        { label: 'Overview',           items: overviewItems    },
        { label: 'Auth & Users',       items: authItems        },
        { label: 'Content Management', items: contentItems     },
        { label: 'Assets',             items: assetItems       },
        { label: 'Forms & Inquiries',  items: formItems        },
        { label: 'Publishing',         items: publishingItems  },
        { label: 'Site Configuration', items: siteConfigItems  },
        { label: 'SEO & Navigation',   items: seoNavItems      },
        { label: 'Analytics',          items: analyticsItems   },
    ];

    const visibleGroups = groups
        .map(g => ({ ...g, items: filterItems(g.items, canView) }))
        .filter(g => g.items.length > 0);

    return (
        <Sidebar collapsible="icon" variant="inset">
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
                        <NavMain items={group.items} groupLabel={group.label} />
                    </div>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
