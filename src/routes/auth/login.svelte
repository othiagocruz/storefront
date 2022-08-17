<script type="ts">
  import { goto } from "$app/navigation";

  import { Auth } from "aws-amplify";

  let username = "";
  let password = "";

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      goto("/");
    } catch (error) {
      console.log("error signing in", error);
    }
  }
</script>

<h1>Storefront</h1>
<form class="flex flex-col gap-4 max-w-screen-sm mx-auto" on:submit|preventDefault={signIn}>
  <h2>Login to your account</h2>
  <input type="text" bind:value={username} id="username" placeholder="username" />
  <input type="password" bind:value={password} id="password" placeholder="password" />
  <button class="bg-black text-white p-4">Submit</button>
</form>

<nav class="mt-6">
  <a href="/">Back to home</a>
</nav>
