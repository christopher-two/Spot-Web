export interface SectionData {
    id: string;
    letter: string;
    title: string;
    description: string;
    bgColor: string;
    textColor: string;
    accentColor: string;
}

export const sections: SectionData[] = [
    {
        id: 's',
        letter: 'S',
        title: 'ENTIMIENTO',
        description: "Los mensajes importantes se pierden en el scroll. En Spot, tus palabras y fotos tienen un lugar físico y eterno. No es solo un chat, es un recuerdo anclado.",
        bgColor: 'bg-rose-100',
        textColor: 'text-rose-900',
        accentColor: 'rose-500'
    },
    {
        id: 'p',
        letter: 'P',
        title: 'ROXIMIDAD',
        description: "Exclusividad geográfica. El contenido no se consume, se descubre. Tus fotos y mensajes se desbloquean solo cuando estás a menos de 30 metros.",
        bgColor: 'bg-fuchsia-100',
        textColor: 'text-fuchsia-900',
        accentColor: 'fuchsia-500'
    },
    {
        id: 'o',
        letter: 'O',
        title: 'BJETIVO',
        description: "Visual-First. Captura la esencia de cada rincón con imágenes que cuentan historias. Sin filtros, solo la verdad del momento y su ubicación.",
        bgColor: 'bg-amber-100',
        textColor: 'text-amber-900',
        accentColor: 'amber-500'
    },
    {
        id: 't',
        letter: 'T',
        title: 'ESOROS',
        description: "Geocaching emocional. Crea una cápsula del tiempo visual para tu ciudad, deja mensajes secretos en el campus o tesoros para alguien especial.",
        bgColor: 'bg-sky-100',
        textColor: 'text-sky-900',
        accentColor: 'sky-500'
    },
];
