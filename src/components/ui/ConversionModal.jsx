import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

export default function ConversionModal({ isOpen, onCancel, onDemo }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={onCancel}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="mb-6 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {t('sections.medicalVoice.conversion.title')}
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            {t('sections.medicalVoice.conversion.message')}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onDemo}
            className="rounded-lg bg-[#0c243c] px-6 py-3 font-medium text-white transition-all hover:bg-[#1a3a5c] hover:shadow-lg"
          >
            {t('sections.medicalVoice.conversion.demoButton')}
          </button>
          <button
            onClick={onCancel}
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50"
          >
            {t('sections.medicalVoice.conversion.cancelButton')}
          </button>
        </div>
      </div>
    </div>
  );
}
