<script>
    import { technologies } from "../data.js";
</script>

<div>
    <h1>Technologies</h1>
    <div class="technologiesDiv">
        {#each technologies as technology}
            <a href={technology.url} class="technologyImgContainer">
                <img
                    src={technology.img}
                    class="technologyImg"
                    alt="technology"
                />
                <p>{technology.name}</p>
            </a>
        {/each}
    </div>
</div>

<style>
    .technologyImg {
        max-width: 15vw;
        max-height: 15vh;
        margin: 10px;
    }

    .technologyImgContainer {
        padding: 1rem;
        border-radius: 14px;
        transition: box-shadow 0.3s ease-in-out;
    }

    .technologyImgContainer:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
            rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    .technologiesDiv {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
