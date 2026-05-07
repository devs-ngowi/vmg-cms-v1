import { usePage } from '@inertiajs/react';

// ── Types ─────────────────────────────────────────────────────────────────────

export type PermissionAction = 'view' | 'create' | 'edit' | 'delete' | 'publish';

type RawPermission = {
    module:      string;
    can_view:    boolean;
    can_create:  boolean;
    can_edit:    boolean;
    can_delete:  boolean;
    can_publish: boolean;
};


export function usePermission() {
    const { auth } = usePage<any>().props;

    const isAdmin: boolean       = auth?.is_admin    ?? false;
    const permissions: RawPermission[] = auth?.permissions ?? [];

    const find = (module: string): RawPermission | undefined =>
        permissions.find(p => p.module.toLowerCase() === module.toLowerCase());

    const can = (module: string, action: PermissionAction): boolean => {
        if (isAdmin) return true;
        const p = find(module);
        if (!p) return false;
        const map: Record<PermissionAction, boolean> = {
            view:    p.can_view,
            create:  p.can_create,
            edit:    p.can_edit,
            delete:  p.can_delete,
            publish: p.can_publish,
        };
        return map[action] ?? false;
    };

    return {
        isAdmin,
        can,
        canView:    (module: string) => can(module, 'view'),
        canCreate:  (module: string) => can(module, 'create'),
        canEdit:    (module: string) => can(module, 'edit'),
        canDelete:  (module: string) => can(module, 'delete'),
        canPublish: (module: string) => can(module, 'publish'),
    };
}
