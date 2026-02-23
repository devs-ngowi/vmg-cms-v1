import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Bold, Italic, Underline as UnderlineIcon, Strikethrough,
    Heading1, Heading2, Heading3,
    List, ListOrdered, Quote, Code, Code2,
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    Link as LinkIcon, Unlink,
    Highlighter, Undo, Redo,
    Minus, WrapText,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCallback, useEffect } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Props = {
    value:       string;
    onChange:    (html: string) => void;
    placeholder?: string;
    error?:      string;
    minHeight?:  number;
};

// ── Toolbar button ────────────────────────────────────────────────────────────

function ToolBtn({
    onClick,
    active,
    disabled,
    title,
    children,
}: {
    onClick:   () => void;
    active?:   boolean;
    disabled?: boolean;
    title:     string;
    children:  React.ReactNode;
}) {
    return (
        <button
            type="button"
            title={title}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors',
                'hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
                active
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'text-muted-foreground hover:text-foreground',
                disabled && 'pointer-events-none opacity-40',
            )}
        >
            {children}
        </button>
    );
}

function ToolSep() {
    return <div className="mx-1 h-5 w-px bg-border" />;
}

// ── Toolbar ───────────────────────────────────────────────────────────────────

function Toolbar({ editor }: { editor: Editor }) {
    const setLink = useCallback(() => {
        const prev = editor.getAttributes('link').href;
        const url  = window.prompt('Enter URL:', prev ?? 'https://');
        if (url === null) return;
        if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url, target: '_blank' }).run();
    }, [editor]);

    return (
        <div className="flex flex-wrap items-center gap-0.5 border-b bg-muted/30 px-2 py-1.5">

            {/* History */}
            <ToolBtn title="Undo (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}>
                <Undo className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Redo (Ctrl+Shift+Z)" onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}>
                <Redo className="h-3.5 w-3.5" />
            </ToolBtn>

            <ToolSep />

            {/* Headings */}
            <ToolBtn title="Heading 1" active={editor.isActive('heading', { level: 1 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                <Heading1 className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Heading 2" active={editor.isActive('heading', { level: 2 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                <Heading2 className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Heading 3" active={editor.isActive('heading', { level: 3 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                <Heading3 className="h-3.5 w-3.5" />
            </ToolBtn>

            <ToolSep />

            {/* Inline marks */}
            <ToolBtn title="Bold (Ctrl+B)" active={editor.isActive('bold')}
                onClick={() => editor.chain().focus().toggleBold().run()}>
                <Bold className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Italic (Ctrl+I)" active={editor.isActive('italic')}
                onClick={() => editor.chain().focus().toggleItalic().run()}>
                <Italic className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Underline (Ctrl+U)" active={editor.isActive('underline')}
                onClick={() => editor.chain().focus().toggleUnderline().run()}>
                <UnderlineIcon className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Strikethrough" active={editor.isActive('strike')}
                onClick={() => editor.chain().focus().toggleStrike().run()}>
                <Strikethrough className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Highlight" active={editor.isActive('highlight')}
                onClick={() => editor.chain().focus().toggleHighlight().run()}>
                <Highlighter className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Inline Code" active={editor.isActive('code')}
                onClick={() => editor.chain().focus().toggleCode().run()}>
                <Code className="h-3.5 w-3.5" />
            </ToolBtn>

            <ToolSep />

            {/* Alignment */}
            <ToolBtn title="Align Left" active={editor.isActive({ textAlign: 'left' })}
                onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                <AlignLeft className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Align Center" active={editor.isActive({ textAlign: 'center' })}
                onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                <AlignCenter className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Align Right" active={editor.isActive({ textAlign: 'right' })}
                onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                <AlignRight className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Justify" active={editor.isActive({ textAlign: 'justify' })}
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
                <AlignJustify className="h-3.5 w-3.5" />
            </ToolBtn>

            <ToolSep />

            {/* Lists */}
            <ToolBtn title="Bullet List" active={editor.isActive('bulletList')}
                onClick={() => editor.chain().focus().toggleBulletList().run()}>
                <List className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Numbered List" active={editor.isActive('orderedList')}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                <ListOrdered className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Blockquote" active={editor.isActive('blockquote')}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                <Quote className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Code Block" active={editor.isActive('codeBlock')}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                <Code2 className="h-3.5 w-3.5" />
            </ToolBtn>

            <ToolSep />

            {/* Link */}
            <ToolBtn title="Add Link" active={editor.isActive('link')} onClick={setLink}>
                <LinkIcon className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Remove Link" disabled={!editor.isActive('link')}
                onClick={() => editor.chain().focus().unsetLink().run()}>
                <Unlink className="h-3.5 w-3.5" />
            </ToolBtn>

            <ToolSep />

            {/* Extras */}
            <ToolBtn title="Horizontal Rule"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <Minus className="h-3.5 w-3.5" />
            </ToolBtn>
            <ToolBtn title="Hard Break (Shift+Enter)"
                onClick={() => editor.chain().focus().setHardBreak().run()}>
                <WrapText className="h-3.5 w-3.5" />
            </ToolBtn>
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function RichTextEditor({
    value,
    onChange,
    placeholder = 'Start writing…',
    error,
    minHeight = 320,
}: Props) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading:   { levels: [1, 2, 3] },
                codeBlock: { languageClassPrefix: 'language-' },
            }),
            Underline,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Link.configure({ openOnClick: false, autolink: true }),
            TextStyle,
            Color,
            Highlight.configure({ multicolor: false }),
            Placeholder.configure({ placeholder }),
            CharacterCount,
        ],
        content:    value,
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
        editorProps: {
            attributes: {
                class: 'prose prose-sm max-w-none focus:outline-none px-4 py-3',
            },
        },
    });

    // Sync external value changes (e.g. form reset)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value, false);
        }
    }, [value]);  // eslint-disable-line react-hooks/exhaustive-deps

    const charCount = editor?.storage.characterCount.characters() ?? 0;
    const wordCount = editor?.storage.characterCount.words()      ?? 0;

    return (
        <div className={cn(
            'rounded-lg border bg-background transition-colors',
            'focus-within:ring-1 focus-within:ring-ring',
            error && 'border-destructive focus-within:ring-destructive',
        )}>
            {editor && <Toolbar editor={editor} />}

            <EditorContent
                editor={editor}
                style={{ minHeight }}
                className={cn(
                    '[&_.ProseMirror]:min-h-[inherit]',
                    '[&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none',
                    '[&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left',
                    '[&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0',
                    '[&_.ProseMirror_p.is-editor-empty:first-child::before]:text-muted-foreground/50',
                    '[&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]',
                    // Prose styling inside editor
                    '[&_.ProseMirror_h1]:text-2xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h1]:mt-4 [&_.ProseMirror_h1]:mb-2',
                    '[&_.ProseMirror_h2]:text-xl  [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h2]:mt-3 [&_.ProseMirror_h2]:mb-2',
                    '[&_.ProseMirror_h3]:text-lg  [&_.ProseMirror_h3]:font-semibold [&_.ProseMirror_h3]:mt-3 [&_.ProseMirror_h3]:mb-1',
                    '[&_.ProseMirror_p]:my-1',
                    '[&_.ProseMirror_ul]:list-disc   [&_.ProseMirror_ul]:pl-5',
                    '[&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-5',
                    '[&_.ProseMirror_li]:my-0.5',
                    '[&_.ProseMirror_blockquote]:border-l-4 [&_.ProseMirror_blockquote]:border-primary/40 [&_.ProseMirror_blockquote]:pl-4 [&_.ProseMirror_blockquote]:italic [&_.ProseMirror_blockquote]:text-muted-foreground',
                    '[&_.ProseMirror_code]:rounded [&_.ProseMirror_code]:bg-muted [&_.ProseMirror_code]:px-1.5 [&_.ProseMirror_code]:py-0.5 [&_.ProseMirror_code]:text-xs [&_.ProseMirror_code]:font-mono',
                    '[&_.ProseMirror_pre]:rounded-lg [&_.ProseMirror_pre]:bg-muted [&_.ProseMirror_pre]:p-4 [&_.ProseMirror_pre]:my-2 [&_.ProseMirror_pre]:overflow-x-auto',
                    '[&_.ProseMirror_pre_code]:bg-transparent [&_.ProseMirror_pre_code]:p-0',
                    '[&_.ProseMirror_a]:text-primary [&_.ProseMirror_a]:underline',
                    '[&_.ProseMirror_hr]:border-border [&_.ProseMirror_hr]:my-4',
                    '[&_.ProseMirror_mark]:bg-yellow-200 [&_.ProseMirror_mark]:dark:bg-yellow-900/50 [&_.ProseMirror_mark]:rounded-sm [&_.ProseMirror_mark]:px-0.5',
                )}
            />

            {/* Footer: word/char count */}
            <div className="flex items-center justify-end border-t bg-muted/20 px-3 py-1.5">
                <span className="text-xs text-muted-foreground">
                    {wordCount} word{wordCount !== 1 ? 's' : ''} · {charCount} character{charCount !== 1 ? 's' : ''}
                </span>
            </div>
        </div>
    );
}
