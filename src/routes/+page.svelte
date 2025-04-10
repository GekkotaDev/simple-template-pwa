<!--
  ? This maps to the '/' URL (root directory/folder) in your browser. Likewise,
  ? a file at '/settings/+page.svelte' would map to the '/settings' URL.
  -->

<script>
  /**
   * Here is where you would define the logic for the page.
   */

  import { registerSW } from "virtual:pwa-register";
  import { onMount } from "svelte";

  /*
    The onMount function runs when the page has been fully rendered.
   */
  onMount(() => {
    // This enables the PWA to prompt users whenever a new update is available.
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm("New content available. Reload?")) {
          updateSW(true);
        }
      },
    });
  });
</script>

<p>Hello World</p>

<style>
  /* Here is where you'd define the styling for a page */
</style>
