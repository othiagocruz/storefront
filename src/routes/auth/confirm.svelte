<script type="ts">
  import { goto } from "$app/navigation";
  import { getErrorMessage } from "$lib/error";
  import { Auth } from "aws-amplify";
  import { getContext } from "svelte";
  let code = "";
  let username: string = getContext("user");
  let posting = false;
  let _error = "";
  async function confirmSignUp() {
    posting = true;
    try {
      await Auth.confirmSignUp(username, code);
      setTimeout(() => {
        posting = false;
        goto("/");
      }, 1000);
    } catch (error) {
      posting = false;
      _error = getErrorMessage(error);
    }
  }
</script>

<h1>Storefront</h1>
<form class="flex flex-col gap-4 max-w-screen-sm mx-auto" on:submit|preventDefault={confirmSignUp}>
  <h2>Enter the received code:</h2>
  <input
    type="text"
    bind:value={username}
    id="username"
    placeholder="username"
    disabled={posting}
  />
  <input type="text" bind:value={code} id="code" placeholder="code" disabled={posting} />
  {#if _error}
    <p class="text-red-600">{_error}</p>
  {/if}
  <button class="bg-black text-white p-4" disabled={posting}>Submit</button>
</form>
