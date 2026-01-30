import React from 'react';
import '@google/model-viewer'; // Importante importar aquí

const CardImagenPreguntas = ({ modeloUrl, imagenUrl }) => {
    if (modeloUrl) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <model-viewer
                    src={modeloUrl}
                    alt="Modelo 3D médico"
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    auto-rotate
                    camera-controls
                    camera-orbit="90deg 75deg auto"
                    shadow-intensity="1"
                    style={{ width: '100%', height: '400px', backgroundColor: '#f0f9ff' }}
                >
                    <button className="Hotspot" slot="hotspot-1" data-position="-0.02478042978507511m 0.4406817232830805m 0.009207987793016265m" data-normal="-0.989999891489127m 0.14093681177947148m 0.006085222835249928m" data-visibility-attribute="visible">
                        <div className="HotspotAnnotation">Bulbo Cardiaco</div>
                    </button>

                    <button className="Hotspot" slot="hotspot-3" data-position="-0.0273816923096315m 0.11172821100296092m -0.21089346937807843m" data-normal="-0.999805065734529m -0.018769569153028645m -0.006126483933199504m" data-visibility-attribute="visible">
                        <div className="HotspotAnnotation">Aurícula primitiva</div>
                    </button>
                    <button className="Hotspot" slot="hotspot-4" data-position="-0.026173803986520028m -0.2822534213735307m -0.00624984168398815m" data-normal="-0.4158537865723463m 0.33604707294495956m -0.8450668570939027m" data-visibility-attribute="visible">
                        <div className="HotspotAnnotation">Membrana Cloacal</div>
                    </button>
                    <div className="progress-bar hide" slot="progress-bar">
                        <div className="update-bar"></div>
                    </div>
                </model-viewer>
            </div>
        );
    }

    if (imagenUrl) {
        return (
            <div className="h-full flex items-center justify-center p-4 rounded-2xl animate-fade-in relative w-full">
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-4 border-white w-full max-w-md mx-auto">
                    <img
                        src={imagenUrl}
                        alt="Ilustración médica"
                        className="w-full h-auto object-contain max-h-[400px] transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        );
    }

    return null;
}

export default CardImagenPreguntas;