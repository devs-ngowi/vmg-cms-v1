import { Link } from '@inertiajs/react';
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
    Mail,
    Navigation,
    PanelTop,
    PenLine,
    ScrollText,
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
import users from '@/routes/users';
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

// ── Overview ──────────────────────────────────────────
const overviewItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

// ── Auth & Users ──────────────────────────────────────
const authItems: NavItem[] = [
     {
        title: 'Users',
        href: '/users',
        icon: Users,
    },
    {
        title: 'Roles & Permissions',
        href: '/roles',
        icon: ShieldCheck,
    },
    {
        title: 'Authors',
        href: '/authors',
        icon: PenLine,
    },
];

// ── Content Management ────────────────────────────────
const contentItems: NavItem[] = [
    {
        title: 'Pages',
        href: '/pages',
        icon: FileText,
        items: [
            { title: 'All Pages',    href: '/pages',        icon: FileText },
            { title: 'Add New Page', href: '/pages/create', icon: FileText },
            { title: 'Drafts',       href: '/pages/drafts', icon: FileText },
        ],
    },
    {
        title: 'Services',
        href: '/services',
        icon: Wrench,
    },
    {
        title: 'Industries',
        href: '/industries',
        icon: Factory,
    },
    {
        title: 'Projects',
        href: '/projects',
        icon: FolderOpen,
        items: [
            { title: 'All Projects',    href: '/projects',          icon: FolderOpen },
            { title: 'Add New Project', href: '/projects/create',   icon: FolderOpen },
            { title: 'Featured',        href: '/projects/featured', icon: FolderOpen },
        ],
    },
    {
        title: 'Blog / Insights',
        href: '/blog',
        icon: BookOpen,
        items: [
            { title: 'All Posts',    href: '/blog',            icon: BookOpen },
            { title: 'Add New Post', href: '/blog/create',     icon: BookOpen },
            { title: 'Categories',   href: '/blog/categories', icon: BookOpen },
            { title: 'Tags',         href: '/blog/tags',       icon: BookOpen },
        ],
    },
];

// ── Assets ────────────────────────────────────────────
const assetItems: NavItem[] = [
    {
        title: 'Media Library',
        href: '/media',
        icon: Image,
    },
];

// ── Forms & Inquiries ─────────────────────────────────
const formItems: NavItem[] = [
    {
        title: 'Forms',
        href: '/forms',
        icon: ClipboardList,
        items: [
            { title: 'All Forms',   href: '/forms',        icon: ClipboardList },
            { title: 'New Form',    href: '/forms/create', icon: ClipboardList }, // ← was /forms/builder (404)
        ],
    },
    {
        title: 'Submissions',
        href: '/submissions',
        icon: Mail,
    },
];

// ── Publishing ────────────────────────────────────────
const publishingItems: NavItem[] = [
    {
        title: 'Workflow',
        href: '/workflow',
        icon: GitPullRequest,
    },
];

// ── Site Configuration ────────────────────────────────
const siteConfigItems: NavItem[] = [
    {
        title: 'Home-Banners',
        href: '/banners',
        icon: PanelTop,
    },
    {
        title: 'Hero Slides',
        href: '/hero-slides',
        icon: GalleryHorizontal,
    },
    {
        title: 'Client Logos',
        href: '/client-logos',
        icon: Tag,
    },
    {
        title: 'Testimonials',
        href: '/testimonials',
        icon: Star,
    },
    {
        title: 'Site Settings',
        href: '/settings',
        icon: Settings,
    },
];

// ── SEO & Navigation ──────────────────────────────────
const seoNavItems: NavItem[] = [
    {
        title: 'SEO Manager',
        href: '/seo',
        icon: Search,
    },
    {
        title: 'Menu Manager',
        href: '/menus/primary', // ← was /menus (no such route → 404)
        icon: Navigation,
        items: [
            { title: 'Primary Navigation', href: '/menus/primary', icon: Navigation },
            { title: 'Footer Links',       href: '/menus/footer',  icon: Navigation },
        ],
    },
];

// ── Analytics & Logs ──────────────────────────────────
// const analyticsItems: NavItem[] = [
//     {
//         title: 'Page Views',
//         href: '/analytics/page-views',
//         icon: BarChart2,
//     },
//     {
//         title: 'Audit Log',
//         href: '/analytics/audit-log',
//         icon: ScrollText,
//     },
// ];

export function AppSidebar() {
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
                <NavMain items={overviewItems} groupLabel="Overview" />

                <SidebarSeparator />
                <NavMain items={authItems} groupLabel="Auth & Users" />

                <SidebarSeparator />
                <NavMain items={contentItems} groupLabel="Content Management" />

                <SidebarSeparator />
                <NavMain items={assetItems} groupLabel="Assets" />

                <SidebarSeparator />
                <NavMain items={formItems} groupLabel="Forms & Inquiries" />

                <SidebarSeparator />
                <NavMain items={publishingItems} groupLabel="Publishing" />

                <SidebarSeparator />
                <NavMain items={siteConfigItems} groupLabel="Site Configuration" />

                <SidebarSeparator />
                <NavMain items={seoNavItems} groupLabel="SEO & Navigation" />

                <SidebarSeparator />
                {/* <NavMain items={analyticsItems} groupLabel="Analytics & Logs" /> */}
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
