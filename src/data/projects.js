import studystate from '@/images/studystate.png';
import ouichat from '@/images/ouichat.png';
import opencanvas from '@/images/opencanvas.png';
import cartolake from '@/images/cartolake.png';

export const projects = [
    {
        name: "StudyState",
        description: "A web app that helps students study more efficiently, created out of frustration with Quizlet's high prices. StudyState exceeds Quizlet's core feature set, while being completely free.",
        technologies: ["React", "Material UI", "Firebase", "OpenAI", "Typesense"],
        image: studystate,
        url: "https://studystate.net"
    },
    {
        name: "CartoLake Content Library",
        description: "A web-based content library for map creation and geo-referencing tool CartoLake. This was my main project as an intern/part-time employee of CartoLake LLC.",
        technologies: ["Svelte", "TailwindCSS", "Java"],
        image: cartolake,
        url: "https://content.cartolake.com"
    },
    {
        name: "OuiChat (completed)",
        description: "An experimental encrypted messaging webapp with push notifications. The site was completed in early 2021, and is no longer published.",
        technologies: ["HTML", "JavaScript", "Node.js", "CSS", "Firebase"],
        image: ouichat
    },
    {
        name: "OpenCanvas (completed)",
        description: "A collaborative, online whiteboard with support for rich content (images, sketches, etc.). This site was an experiment completed in late 2021, and is no longer published.",
        technologies: ["HTML", "JavaScript", "CSS", "Firebase"],
        image: opencanvas
    }
]