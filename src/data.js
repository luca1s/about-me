import firebase from "./images/firebase.svg";
import js from "./images/js.png";
import mui from "./images/mui.png";
import react from "./images/react.png";
import svelte from "./images/svelte.png";
import bootstrap from "./images/bootstrap.png";
import opencanvas from "./images/opencanvas.png";
import studystate from "./images/studystate.png";
import ouichat from "./images/ouichat.png";
import vite from './images/vite.png';
import html from './images/html.svg';
import css from './images/css.png';
import typesense from './images/typesense.svg';
import tailwind from './images/tailwind.png';

export const technologies = [
    {
        img: html,
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        img: css,
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        img: js,
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        img: firebase,
        name: "Firebase",
        url: "https://firebase.google.com/",
    },
    {
        img: mui,
        name: "Material UI",
        url: "https://material-ui.com/",
    },
    {
        img: react,
        name: "React",
        url: "https://reactjs.org/",
    },
    {
        img: svelte,
        name: "Svelte",
        url: "https://svelte.dev/",
    },
    {
        img: bootstrap,
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
    },
    {
        img: vite,
        name: "Vite",
        url: "https://vitejs.dev/",
    },
    {
        img: typesense,
        name: 'Typesense',
        url: 'https://typesense.org/'
    },
    {
        img: tailwind,
        name: 'TailwindCSS',
        url: 'https://tailwindcss.com/'
    }
];

export const projects = [
    {
        name: "StudyState",
        status: "Active",
        featured: true,
        description:
            "A website for students to create, share and study, created as a free and lightweight alternative to Quizlet.  ",
        thumbnail: studystate,
        technologies: [firebase, react, mui, typesense],
        link: "https://studystate.net",
    },
    {
        name: "OpenCanvas",
        status: "Finished - Abandoned",
        description:
            "A realtime, collaborative whiteboard site created using vanilla JS, Firebase and Bootstrap",
        thumbnail: opencanvas,
        technologies: [firebase, bootstrap]
    },
    {
        name: "OuiChat",
        status: "Finished - Abandoned",
        description:
            "A realtime chat app with notifications created using vanilla JS, Firebase and Bootstrap",
        thumbnail: ouichat,
        technologies: [firebase, bootstrap]
    },
];