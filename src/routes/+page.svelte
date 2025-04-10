<!--
  ? This maps to the '/' URL (root directory/folder) in your browser. Likewise,
  ? a file at '/settings/+page.svelte' would map to the '/settings' URL.
  -->

<script>
  /**
   * Here is where you would define the logic for the page.
   */
  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import("virtual:pwa-register");
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log("SW registration error", error);
        },
      });
    }
  });

  const webManifest = $derived(() =>
    pwaInfo ? pwaInfo.webManifest.linkTag : "",
  );
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<p>Hello World</p>

<style>
  /* Here is where you'd define the styling for a page */
</style>
