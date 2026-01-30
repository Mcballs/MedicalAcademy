const CardPreguntas = ({
    data,
    OnHandleRespuesta,
    respuestaSeleccionada,
    haRespondido,
    haTerminado,
    irSiguientePregunta,
    numeroPreguntaActual,
    totalPreguntas
}) => {
    const { pregunta, opciones, respuesta } = data;

    // Clases base para las opciones (sin seleccionar)
    const baseClasses = "w-full p-3 rounded-xl border-2 text-left transition-all duration-300 font-medium text-sm border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:transform hover:scale-[1.01] cursor-pointer active:scale-[0.99]";

    // Función para determinar estilos según el estado de la respuesta
    // Función para determinar estilos según el estado de la respuesta
    const getOptionClasses = (opcionSeleccionada) => {
        const esSeleccionada = opcionSeleccionada === respuestaSeleccionada;
        const esCorrecta = opcionSeleccionada === respuesta;

        // Estado base (aún no responde)
        if (!haRespondido) {
            return baseClasses;
        }

        // Estado respondido
        let classes = "w-full p-3 rounded-xl border-2 text-left transition-all duration-300 font-medium text-sm ";

        if (esSeleccionada && esCorrecta) {
            // Seleccionó la correcta
            classes += "border-green-500 bg-green-50 text-green-900 shadow-lg shadow-green-200/50";
        } else if (esSeleccionada && !esCorrecta) {
            // Seleccionó una incorrecta
            classes += "border-red-500 bg-red-50 text-red-900 shadow-lg shadow-red-200/50";
        } else if (esCorrecta) {
            // Mostrar cuál era la correcta (si falló)
            classes += "border-green-400 bg-green-50 text-green-900 shadow-md";
        } else {
            // Las demás opciones se apagan
            classes += "border-gray-200 bg-gray-50 text-gray-400 opacity-60";
        }

        return classes;
    };

    return (
        <div className="space-y-3">
            {/* Pregunta */}
            <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 leading-snug">
                    {pregunta}
                </h3>
                <p className="text-xs text-blue-400 font-medium mt-1">
                    Pregunta {numeroPreguntaActual + 1} de {totalPreguntas}
                </p>
            </div>

            {/* Opciones */}
            <div className="space-y-2">
                {opciones.map((opcion, index) => {
                    const esCorrecta = opcion === respuesta;
                    const esSeleccionada = opcion === respuestaSeleccionada;

                    return (
                        <button
                            key={index}
                            onClick={() => OnHandleRespuesta(opcion)}
                            className={getOptionClasses(opcion)}
                            disabled={haRespondido}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {/* Letra de opción */}
                                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-xs shrink-0 transition-colors ${haRespondido && (esSeleccionada || (esCorrecta && esSeleccionada))
                                        ? 'bg-white/50'
                                        : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {String.fromCharCode(65 + index)}
                                    </span>

                                    {/* Texto de opción */}
                                    <span className="flex-1">{opcion}</span>
                                </div>

                                {/* Iconos de resultado */}
                                {haRespondido && esSeleccionada && (
                                    <span className="text-2xl shrink-0">
                                        {esCorrecta ? "✓" : "✗"}
                                    </span>
                                )}
                                {haRespondido && !esSeleccionada && esCorrecta && (
                                    <span className="text-2xl text-green-600 shrink-0">✓</span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Botón Siguiente */}
            {haRespondido && !haTerminado && (
                <div className="flex justify-end mt-4 animate-fade-in">
                    <button
                        onClick={irSiguientePregunta}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                    >
                        Siguiente
                        <span>→</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CardPreguntas;
