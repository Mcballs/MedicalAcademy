import { cuestionarios } from "../../data/cuestionarios";
import Confetti from "react-confetti";
import { useState } from "react";
import CardPreguntas from "../ContenedorCardPreguntas/CardPreguntas/CardPreguntas";
import CardImagenPreguntas from "../ContenedorCardPreguntas/CardImagenPreguntas/CardImagenPreguntas";

const ContenedorCardPreguntas = () => {

    const [numeroPreguntaActual, setNumeroPreguntaActual] = useState(0)
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)
    const [puntuacion, setPuntuacion] = useState(0)
    const [haTerminado, setHaTerminado] = useState(false)
    const [haRespondido, setHaRespondido] = useState(false)


    const handleRespuesta = (opcionSeleccionada) => {
        if (haRespondido) return
        setRespuestaSeleccionada(opcionSeleccionada)
        setHaRespondido(true)

        if (opcionSeleccionada === cuestionarios[numeroPreguntaActual].respuesta) {
            setPuntuacion(puntuacion + 1)
        }
    }

    const irSiguientePregunta = () => {
        if (numeroPreguntaActual + 1 < cuestionarios.length) {
            setNumeroPreguntaActual(numeroPreguntaActual + 1)
            setHaRespondido(false)
            setRespuestaSeleccionada(null)
        } else {
            setHaTerminado(true)
        }
    }

    const volverIntentar = () => {
        setHaTerminado(false)
        setNumeroPreguntaActual(0)
        setRespuestaSeleccionada(null)
        setPuntuacion(0)
        setHaRespondido(false)
    }

    const calcularProgreso = () => {
        if (haTerminado) return 100
        const progresoInicial = (numeroPreguntaActual / cuestionarios.length) * 100
        const progresiFinal = respuestaSeleccionada
            ? (1 / cuestionarios.length) * 100
            : 0
        return progresoInicial + progresiFinal
    }

    const porcentaje = (puntuacion / cuestionarios.length) * 100
    const showConfetti = haTerminado && porcentaje >= 50
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 py-4 px-4 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header Section */}
                {showConfetti && <Confetti />}
                <div className="text-center mb-4 animate-fade-in">
                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-linear-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-sm">
                        EMBRIOLOGÍA CARDÍACA
                    </h1>

                    {/* Medical Icon/Decoration */}
                    <div className="flex justify-center mb-2">
                        <div className="w-12 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
                    </div>
                </div>

                {/* Compact Info Bar: Score & Progress */}
                <div className="flex items-center justify-between mb-4 bg-white/50 p-2 rounded-lg backdrop-blur-sm mx-1">
                    <span className="text-blue-800 font-semibold px-2">Puntuación: {puntuacion}</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: `${calcularProgreso()}%` }}></div>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">{Math.round(calcularProgreso())}%</span>
                </div>

                {/* Question Card Container */}
                {/* Question Card Container */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-blue-200/50 border border-blue-100 transition-all overflow-hidden">
                    {
                        haTerminado ? (
                            <div className="p-8 text-center bg-linear-to-b from-white to-blue-50">
                                <h2 className="text-3xl font-bold text-blue-900 mb-4">¡Cuestionario Completado!</h2>
                                <p className="text-xl text-blue-700 mb-2">Has obtenido <span className="font-extrabold text-blue-600 text-2xl">{puntuacion}</span> puntos de {cuestionarios.length}</p>
                                <div className="w-full bg-gray-200 rounded-full h-4 mb-6 max-w-md mx-auto">
                                    <div
                                        className="bg-green-500 h-4 rounded-full transition-all duration-1000"
                                        style={{ width: `${Math.round((puntuacion / cuestionarios.length) * 100)}%` }}
                                    ></div>
                                </div>
                                <p className="mb-8 text-gray-600">Tu porcentaje final es del {Math.round((puntuacion / cuestionarios.length) * 100)}%</p>
                                <button
                                    onClick={volverIntentar}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 active:scale-95"
                                >
                                    Volver a intentar
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                {/* Columna Izquierda: Preguntas */}
                                <div className="p-6 md:p-8 order-2 md:order-1">
                                    <CardPreguntas
                                        haRespondido={haRespondido}
                                        OnHandleRespuesta={handleRespuesta}
                                        data={cuestionarios[numeroPreguntaActual]}
                                        respuestaSeleccionada={respuestaSeleccionada}
                                        numeroPreguntaActual={numeroPreguntaActual}
                                        totalPreguntas={cuestionarios.length}
                                        irSiguientePregunta={irSiguientePregunta}
                                        haTerminado={haTerminado}
                                    />
                                </div>

                                {/* Columna Derecha: Imagen */}
                                <div className="bg-blue-50/30 border-l border-blue-100 flex items-center justify-center p-4 order-1 md:order-2 min-h-[200px] md:min-h-full">
                                    <CardImagenPreguntas
                                        imagenUrl={cuestionarios[numeroPreguntaActual].imagen}
                                        modeloUrl={cuestionarios[numeroPreguntaActual].catalogo3D}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ContenedorCardPreguntas