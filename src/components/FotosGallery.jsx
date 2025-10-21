import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function FotosGallery({ fotos }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Soporte de teclado
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, fotos.length]);

  if (!fotos || fotos.length === 0) return null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextPhoto = () => {
    setSelectedIndex((prev) => (prev + 1) % fotos.length);
  };

  const prevPhoto = () => {
    setSelectedIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <>
      {/* Grid de Thumbnails */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-200 dark:border-gray-700">
          <ImageIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Evidencia Fotográfica ({fotos.length})
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fotos.map((url, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
            >
              <img
                src={url}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon className="w-8 h-8" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                {index + 1}/{fotos.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          {/* Botón Cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Botón Anterior */}
          {fotos.length > 1 && (
            <button
              onClick={prevPhoto}
              className="absolute left-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Imagen Principal */}
          <div className="max-w-5xl max-h-[90vh] w-full">
            <img
              src={fotos[selectedIndex]}
              alt={`Foto ${selectedIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white text-sm">
              Foto {selectedIndex + 1} de {fotos.length}
            </div>
          </div>

          {/* Botón Siguiente */}
          {fotos.length > 1 && (
            <button
              onClick={nextPhoto}
              className="absolute right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Thumbnails en el Lightbox */}
          {fotos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-gray-800 bg-opacity-80 p-2 rounded-lg max-w-full overflow-x-auto">
              {fotos.map((url, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                    index === selectedIndex
                      ? 'border-white scale-110'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
