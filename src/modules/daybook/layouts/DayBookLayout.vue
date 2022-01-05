<template>
  <div>
    <Navbar />

    <div class="d-flex">
      <div class="col-3">
        <EntryList />
      </div>

      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import EntryList from "../components/EntryList";

export default {
  components: {
    Navbar,
    EntryList
  },
};
</script>

<style>
</style>