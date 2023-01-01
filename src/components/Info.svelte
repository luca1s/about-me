<script>
    import pfp from "../images/pfp.jpg";
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
</script>

<div class="flex">
    <div style="text-align: left;">
        <h1 style="font-size: 2.5rem; margin: 0px;">Hi, I'm</h1>
        <h1 class="name">
            Luc Francis
        </h1>
        <p id="bio">
            I'm a 16 year old frontend web developer most proficient in React. I
            am always looking to improve as a developer, and I am constantly
            picking up new frameworks and technologies.
        </p>
        <div class="socials-container">
            <a href="https://github.com/luca1s" class="icon">
                <DiGithubBadge />
            </a>
            <a
                href="https://www.linkedin.com/in/luc-francis-34a6b6258/"
                class="icon"
            >
                <FaLinkedin />
            </a>
        </div>
    </div>
    <img src={pfp} style="max-width: 25vw;" alt="profile" />
</div>

<style>
    .name {
        font-size: 4rem;
        margin: 0px;
        left: 0;
        color: #4287f5;
    }

    @media (max-width: 768px) {
        .name {
            font-size: 3rem;
        }
    }


    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .flex img {
        border-radius: 14px;
    }

    #bio {
        max-width: 50em;
        margin: auto;
    }

    .icon {
        color: white;
        width: 3em;
        display: inline-block;
        height: 3em;
    }

    .icon:hover {
        color: red;
    }

    .socials-container {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: left;
    }
</style>
