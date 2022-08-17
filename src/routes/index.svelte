<script type="ts">
  import { goto } from "$app/navigation";
  import { withSSRContext } from "aws-amplify";
  const { Auth } = withSSRContext();
  let promise = Auth.currentAuthenticatedUser();

  async function signOut() {
    try {
      await Auth.signOut();
      goto("/auth/login");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
</script>

<h1>Storefront</h1>
<nav>
  {#await promise}
    <p>loading...</p>
  {:then user}
    <p>
      Hello {user.username},
      <button class="hover:text-orange-500" on:click|preventDefault={signOut}>logout</button>.
    </p>
  {:catch error}
    <a href="/auth/signup">Sign up</a>
    <a href="/auth/login">Login</a>
  {/await}

  <a href="/cart">Cart</a>
</nav>
