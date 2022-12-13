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

  const technologies = [firebase, js, mui, react, svelte, bootstrap];
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
      technologies: [svelte],
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
        "A chat app created using vanilla JS, Firebase annd Bootstrap",
      thumbnail: ouichat,
      technologies: [firebase, js, bootstrap],
      link: "https://ouichat.luca1s.tech",
    },
  ];
</script>

<main style="margin-top: 1rem; margin-bottom: 1rem;">
  <img src={pfp} width="250" alt="profile" />
  <h1>luca1s</h1>
  <h2>highschool student, pilot and frontend web developer</h2>
  <div class="technologiesDiv">
    {#each technologies as technology}
      <img src={technology} class="technologyImg" alt="technology" />
    {/each}
  </div>
  <div id="projectsContainer">
    {#each projects as project}
      <div
        class="projectCard"
        class:featured={project.featured}
        class:default={!project.featured}
      >
        <h2>
          {project.name}
          {#if project.featured}
            <span class="featuredSpan">Featured</span>
          {/if}
        </h2>
        <p>Status: {project.status}</p>
        {#if project.thumbnail}
          <img src={project.thumbnail} class="thumbnail" alt="thumbnail" />
        {/if}
        <p>{project.description}</p>
        {#each project.technologies as technology}
          <img src={technology} class="technologyImg" alt="technology" />
        {/each}
        <br />
        <a href={project.link}>Visit</a>
      </div>
    {/each}
  </div>
</main>

<style>
  #projectsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .featured {
    border: 4px solid orange;
  }

  .default {
    border: 1px solid rgba(128, 128, 128, 0.5);
  }

  .projectCard {
    border-radius: 5px;
    background-color: #242424;
    max-width: 30vw;
    transition: box-shadow 0.3s ease-in-out;
    padding: 2rem;
    margin: 10px;
  }

  .projectCard:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  .technologyImg {
    max-width: 50px;
    max-height: 50px;
    margin: 10px;
  }

  .thumbnail {
    width: 100%;
  }

  .featuredSpan {
    color: black;
    padding: 5px;
    background-color: orange;
    border-radius: 15px;
    font-size: 0.7em;
  }

  .technologiesDiv {
    display: inline-flex;
    align-itms: center;
    text-align: center;
    border-radius: 15px;
    border: 1px solid gray;
  }
</style>
