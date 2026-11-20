"use client";

interface ShortcutsModalProps {
  open: boolean;
  onClose: () => void;
}

const SHORTCUTS = [
  { action: "Summon Clipra Shelf", key: "⌘ + ⇧ + V" },
  { action: "Paste Item from 1 to 9", key: "⌘ + 1 ... 9" },
  { action: "Open Text Transformer", key: "⌥ + Enter" },
  { action: "Power Search History", key: "⌘ + F" },
  { action: "Sequential Paste Stack", key: "⌘ + ⌥ + V" },
  { action: "Pin Item to Board", key: "⌘ + P" },
  { action: "Close Shelf", key: "Esc" },
];

export default function ShortcutsModal({ open, onClose }: ShortcutsModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/[0.04] backdrop-blur-[18px] z-[200] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard Shortcuts"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FFFFFF] border border-[#0071E3]/30 rounded-2xl max-w-[520px] w-full p-7 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-h-[calc(100dvh-40px)] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <h3 className="text-lg font-bold text-[#1D1D1F]">Clipra Shortcuts Reference</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6E6E73] hover:text-[#1D1D1F] text-2xl leading-none transition-colors"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        {/* Shortcuts */}
        <div className="flex flex-col divide-y divide-black/10">
          {SHORTCUTS.map((s) => (
            <div key={s.action} className="flex items-center justify-between py-3 text-sm">
              <span className="text-[#6E6E73]">{s.action}</span>
              <kbd className="kbd">{s.key}</kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
