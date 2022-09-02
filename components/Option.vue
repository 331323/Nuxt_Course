<script setup lang="ts">
import { Language, Gender, Year } from "@/data";

    interface OptionProps{
        option: {
            title: string;
            category: string;
            buttons: Language[] | Gender[]| Year[];
        };
        options: {
            language: Language;
            gender: Gender;
            year: Year;
        };
    }

const props = defineProps<OptionProps>();

const computeButtonClasses = (value, index) => {
  const classMovies = [];
  if (props.options[props.option.category] === value) {
    classMovies.push("option-active");
  }
  if (index === 0) classMovies.push("option-left");
  if (index === props.option.buttons.length - 1)
    classMovies.push("option-right");
  return classMovies.join(" ");
};
</script>

<template>
    <div class="option-container">
        <h4>{{ option.title }}</h4>
        <div class="option-buttons">
          <button 
          v-for="(value, index) in option.buttons" 
          :key="value" 
          class="option" 
          :class="computeButtonClasses(value, index)" 
          @click="options [option.category] = value">
          {{ value }}</button>
        </div>
    </div>
</template>

<style scoped>
     .option-container{
    margin-bottom: 2rem;

  }

  .option{
    background-color: white;
    outline: 0.15rem solid rgb(0, 0, 0);
    border: none;
    padding: 0.80rem;
    width: 14rem;
    font-size: 1rem;
    color:black ;
    cursor: pointer;
    font-weight: 200;
  }

  .option-left{
    border-radius: 1rem 0 0 1rem;
  }
  .option-right{
    border-radius: 0 1rem  1rem 0;
  }

  .option-active{
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  }
</style>