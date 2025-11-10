import studystate from '../images/studystate.png';
import ouichat from '../images/ouichat.png';
import opencanvas from '../images/opencanvas.png';
import infiniteradar from '../images/infiniteradar.jpg';

export const projects = [
    {
        name: "StudyState",
        description: "StudyState is a web app that helps students study more effectively. It offers custom study sets, flashcards, practice tests, use-in-a-sentence exercises and spaced repetition, all supercharged by OpenAI models. StudyState is already trusted by over 3,600 students!",
        technologies: ["React", "Express.js", "Firebase", "Typesense", "OpenAI"],
        image: studystate,
        url: "https://studystate.net/set/cC1gQU9c4LDisBpTeLtK"
    },
    {
        name: "OuiChat",
        description: "A progressive web app for real-time messaging with end-to-end encryption, graceful offline degradation, unlimited-member group chats, and cross-platform push notifications. Completed in early 2021.",
        technologies: ["Vanilla JavaScript", "Express.js", "Firebase", "RSA", "AES"],
        image: ouichat
    },
    {
        name: "Infinite Radar",
        description: "A responsive flight tracker for the Infinite Flight flight simulator, featuring flight plan visualization, speed and altitude graphs, pilot information and more, with a peak of over 1,000 active users. Completed in early 2021.",
        technologies: ["Vanilla JavaScript", "PHP"],
        image: infiniteradar
    },
    {
        name: "OpenCanvas",
        description: "A collaborative, online whiteboard with support for rich content (images, sketches, etc.), multiple pages and live collaboration. Completed in late 2021.",
        technologies: ["Vanilla JavaScript", "Firebase"],
        image: opencanvas
    },
]