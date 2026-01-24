import { memo, useEffect } from 'react';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const DonationModal = memo(({ isOpen, onClose, children }: DonationModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                    aria-label="Cerrar"
                >
                    <X size={24} className="text-slate-600" />
                </button>
                {children}
            </div>
        </div>
    );
});

DonationModal.displayName = 'DonationModal';
