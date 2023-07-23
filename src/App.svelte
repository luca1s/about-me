<script>
  import Projects from "./components/Projects/index.svelte";
  import Info from "./components/Info.svelte";
  import Technologies from "./components/Technologies.svelte";
</script>

<main>
  <div class="section">
    <Info />
  </div>
  <div class="section" style="background-color: #191919">
    <Projects />
  </div>
  <div class="section" style="background-color: #303030">
    <Technologies />
  </div>
</main>

<style>
  .section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
