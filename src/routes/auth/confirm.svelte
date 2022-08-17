<script type="ts">
  import { goto } from "$app/navigation";

  import { Auth } from "aws-amplify";
  let code = "";
  let username = "";
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      goto("/");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
</script>

<h1>Storefront</h1>
<form class="flex flex-col gap-4 max-w-screen-sm mx-auto" on:submit|preventDefault={confirmSignUp}>
  <h2>Enter the received code:</h2>
  <input type="text" bind:value={username} id="username" placeholder="username" />
  <input type="text" bind:value={code} id="code" placeholder="code" />
  <button class="bg-black text-white p-4">Submit</button>
</form>
