<script setup lang="ts">
    interface MovieProps{
        movie: string;
        index: number;
    }

    const props = defineProps<MovieProps>();

    const emit = defineEmits(["remove"]);

    const removeMovies = () => {
        emit("remove", props.index);
    }
</script>

<template>
    <div class="card">
        <h4>{{movie}}</h4>
        <p  @click="removeMovies">x</p>
      </div>
</template>

<style scoped>
    .card {
  background-color: whitesmoke;
  width: 28%;
  color: black;
  border-radius: 1rem;
  outline: 0.10rem solid black;
  padding: 0.1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}
.card p {
  position: absolute;
  top: -29%;
  left: 92.5%;
  cursor: pointer;
  color: black;
}
</style>