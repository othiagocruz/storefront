<script context="module">
  import "$lib/styles/app.scss";
  import { Amplify } from "aws-amplify";
  import awsExports from "../aws-exports";
  Amplify.configure({ ...awsExports, ssr: true });
</script>

<svelte:head>
  <link rel="preload" as="style" href="https://use.typekit.net/sjb7trk.css" />
  <link rel="stylesheet" href="https://use.typekit.net/sjb7trk.css" />
  <title>storefront</title>
</svelte:head>
<slot />
