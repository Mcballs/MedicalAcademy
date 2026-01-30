import embrionario from "../assets/Catalogo3D/embrion.glb";

export const cuestionarios = [
    {
        pregunta: "En que semana se inicia la formacion de sistema cardiovascular embrionario?",
        opciones: ["A MITAD DE LA 3ER SEMANA",
            "A MITAD DE LA 4TA SEMANA",
            "A MITAD DE LA 5TA SEMANA",
            "A FINAL DE LA 5TA SEMANA",
            "A FINAL DE LA 6TA SEMANA"],
        respuesta: "A MITAD DE LA 3ER SEMANA",
        imagen: "/Catalogo2D/corazon.png",
        catalogo3D: embrionario
    },
    {
        pregunta: "Entre que días de la gestación, SE ESTABLECE LA LATERALIDAD CARDIACA Y DEFECTOS CARDIACOS como la TRANSPOSCIÓN DE GRANDES VASO",
        opciones: ["12 - 14",
            "14 - 16",
            "16 - 18",
            "18 - 20",
            "20 - 22"],
        respuesta: "16 - 18",
        imagen: "/Catalogo2D/corazon.png"
    },
];