<script setup lang="ts">
  import {Language, Gender, Year, Movies} from "@/data";

interface OptionsState {
  language: Language;
  gender: Gender;
  year: Year;
}
const options = reactive<OptionsState>({
  language: Language.SPANISH,
  gender: Gender.COMEDY,
  year: Year.OLD,
});

const computeSelectedMovies = () => {
  const filteredMovies = Movies
    .filter((movie) => movie.language === options.language)
    .filter((movie) => movie.gender === options.gender)
    .filter((movie) => {
      if (options.year === Year.OLD) return true;
      else return movie.year === options.year;
})

selectedMovies.value = filteredMovies.map(Movies => Movies.movie)
}; 
const selectedMovies = ref<string[]>([]);

const removeMovies = (index: number) => {
  const filteredMovies = [...selectedMovies.value]
  filteredMovies.splice(index, 1)
  selectedMovies.value = filteredMovies;
}

const optionsArray = [
  {
    title: "1) Choose the best language",
    category: "language",
    buttons: [Language.ENGLISH, Language.SPANISH, Language.SPANISHOFCOURSE]
  },
  {
    title: "2) Choose the Gender",
    category: "gender",
    buttons: [Gender.COMEDY, Gender.ROMANCE, Gender.HORROR]
  },
  {
    title: "3) Choose the year",
    category: "year",
    buttons: [Year.OLD, Year.NEW, Year.Waiting]
  }
]
</script>

<template>
  <div class="container">
    <h1>Movie Name Generator</h1>
    <p>Choose your option and Don't click the "Find best movies" buttom below</p>
    <div class="options-container">
      <Option
       v-for="option in optionsArray" 
       :key="option.title" 
       :option="option"
       :options="options"/>

      <button class="primary" @click="computeSelectedMovies">Find Movies</button>
    </div> 
    <div class="cards-container">
      <CardName
       v-for="(Movies, index) in selectedMovies"
       :key="Movies"
        :movies="Movies" 
        @remove="() => removeMovies(index)"
         :index="index"/>
    </div>
  </div>
</template>

<style scoped>
  .container{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:black;
    max-width: 50rem;
    margin: auto;
    text-align: center;
  }

  h1{
    font-size: 3rem;
  }

  .options-container{
    background-color:whitesmoke;
    border-radius: 2rem;
    padding: 1rem;
    width: 95%;
    margin-top: 2rem;
    position: relative;
  }


  .primary{
    background-color: whitesmoke;
    outline: 0.15rem solid black;
    color: black;
    border-radius: 6.5rem;
    border: none;
    padding: 0.75rem 4rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  .cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}
</style>