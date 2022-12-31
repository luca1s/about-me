<script>
    import { projects } from "../../data.js";
    import Project from "./Project.svelte";
</script>

<div>
    <h1>Projects</h1>
    <div id="projectsContainer">
        {#each projects as project}
            <Project {project} />
        {/each}
    </div>
</div>

<style>
    #projectsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
