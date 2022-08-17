<script type="ts">
  import { goto } from "$app/navigation";

  import { Auth } from "aws-amplify";

  let username = "";
  let password = "";
  let email = "";

  async function handleSubmit() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email // optional
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true
        }
      });
      console.log(user);
      goto("/auth/confirm");
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
</script>

<h1>Storefront</h1>
<form class="flex flex-col gap-4 max-w-screen-sm mx-auto" on:submit|preventDefault={handleSubmit}>
  <h2>Sign up for free! You will receive an e-mail with a confirmation code.</h2>
  <input type="text" bind:value={username} id="username" placeholder="username" />
  <input type="email" bind:value={email} id="email" placeholder="email" />
  <input type="password" bind:value={password} id="password" placeholder="password" />
  <button class="bg-black text-white p-4">Submit</button>
</form>

<nav class="mt-6">
  <a href="/">Back to home</a>
</nav>
