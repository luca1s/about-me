<script>
    export let project = {};
</script>

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

<style>
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
</style>
