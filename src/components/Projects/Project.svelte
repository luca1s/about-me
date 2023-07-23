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
    </h2>
    {#if project.thumbnail}
        <img src={project.thumbnail} class="thumbnail" alt="thumbnail" />
    {/if}
    <p>{project.description}</p>
    <div class="imageContainer">
        {#each project.technologies as technology}
            <img src={technology} class="technologyImg" alt="technology" />
        {/each}
    </div>
    <br />
    {#if project.link}
        <a href={project.link}>Visit</a>
    {:else}
        <p class="notAvail">No Longer Published</p>
    {/if}
</div>

<style>
    .notAvail {
        color: gray;
    }

    a {
        font-size: 1.25em;
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
        width: 20rem;
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

    .imageContainer {
        display: flex;
        gap: 0.25rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
