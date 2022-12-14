<script>
  import pfp from "./pfp.jpg";
  import firebase from "./images/firebase.svg";
  import js from "./images/js.png";
  import mui from "./images/mui.png";
  import react from "./images/react.png";
  import svelte from "./images/svelte.png";
  import bootstrap from "./images/bootstrap.png";
  import opencanvas from "./images/opencanvas.png";
  import studystate from "./images/studystate.png";
  import ouichat from "./images/ouichat.png";
  import aboutme from "./images/aboutme.png";
  import Project from "./Project.svelte";
  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";

  const technologies = [
    {
      img: firebase,
      url: "https://firebase.google.com/",
    },
    {
      img: js,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      img: mui,
      url: "https://material-ui.com/",
    },
    {
      img: react,
      url: "https://reactjs.org/",
    },
    {
      img: svelte,
      url: "https://svelte.dev/",
    },
    {
      img: bootstrap,
      url: "https://getbootstrap.com/",
    }
  ];
  const projects = [
    {
      name: "StudyState",
      status: "Active",
      featured: true,
      description:
        "A website for students to create, share and study, created as a free and lightweight alternative to Quizlet.  ",
      thumbnail: studystate,
      technologies: [firebase, js, react, mui],
      link: "https://studystate.net",
    },
    {
      name: "Portfolio Website",
      status: "Active",
      description:
        "This website, a showcase of my projects and technical capabilities. This site was also my first forray into Svelte as a React developer",
      technologies: [svelte, js],
      thumbnail: aboutme,
      link: "https://luca1s.tech",
    },
    {
      name: "OpenCanvas",
      status: "Finished - Abandoned",
      description:
        "A collaborative whiteboard site created using vanilla JS, Firebase and Bootstrap",
      thumbnail: opencanvas,
      technologies: [firebase, js, bootstrap],
      link: "https://opencanvas.netlify.app",
    },
    {
      name: "OuiChat",
      status: "Finished - Abandoned",
      description:
        "A chat app created using vanilla JS, Firebase and Bootstrap",
      thumbnail: ouichat,
      technologies: [firebase, js, bootstrap],
      link: "https://ouichat.luca1s.tech",
    },
  ];
</script>

<main style="margin-top: 1rem; margin-bottom: 1rem;">
  <img src={pfp} width="250" alt="profile" />
  <div class="title-container">
    <h1>luca1s</h1>
    <a href="https://github.com/luca1s" class="icon">
      <DiGithubBadge />
    </a>
  </div>
  <p>
    I'm a 16 year old frontend web developer most proficient in React.
    Currently, I'm focused on <br />
    building a free and lightweight alternative to Quizlet, <b>StudyState</b>. I
    am always looking to <br />
    improve as a developer, and I am constantly picking up new frameworks and technologies,
    <br />
    such as Svelte, the framework this portfolio website is built with.
  </p>
  <div class="technologiesDiv">
    {#each technologies as technology}
      <a href={technology.url} class="technologyImgContainer">
        <img src={technology.img} class="technologyImg" alt="technology" />
      </a>
    {/each}
  </div>
  <div id="projectsContainer">
    {#each projects as project}
      <Project {project} />
    {/each}
  </div>
</main>

<style>
  #projectsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .technologyImg {
    height: 50px;
    margin: 10px;
  }

  .technologyImgContainer {
    border-radius: 10px;
  }

  .technologyImgContainer:hover {
    background-color: #f5f5f5;
  }

  .technologiesDiv {
    display: inline-flex;
    align-items: center;
    text-align: center;
    border-radius: 15px;
    border: 1px solid gray;
  }

  .icon {
    color: white;
    width: 2em;
    display: inline-block;
    height: 2em;
  }

  .icon:hover {
    color: red;
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
