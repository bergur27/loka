<script>
import {RouterLink} from "vue-router";
import axios from 'axios';

export default {
  data() {
    return {
      rounds: {}
    }
  },
  mounted() {
    axios.get("https://grouplimit.co/api/v1/bergur?")
        .then((response) => {
          this.rounds = response.data
          console.log(response);
        })
  }
}
</script>

<template>

  <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div class="mb-2 sm:mb-0">
      <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Games today</a>
    </div>
    <div>
      <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
        <li>
          <RouterLink to="/" class="text-gray-900 dark:text-black hover:underline">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/leikir" class="text-gray-900 dark:text-black hover:underline">Games today</RouterLink>
        </li>
        <li>
          <RouterLink to="/nykaup" class="text-gray-900 dark:text-black hover:underline">new signings</RouterLink>
        </li>
        <li>
          <RouterLink to="/top10" class="text-gray-900 dark:text-black hover:underline">Top 10</RouterLink>
        </li>
        <li>
          <RouterLink to="/Aeldi" class="text-gray-900 dark:text-black hover:underline">On fire</RouterLink>
        </li>
      </ul>
    </div>
  </nav>




  <div class="leikir m-5">


      <div class="m-5 bg-slate-300 text-center rounded-3xl p-8" v-for="(round, roundNumber) in rounds">
        <h1 class="text-xl animate-pulse mb-6"> Round - {{ roundNumber }} </h1>
        <div class="flex" v-for="game in round">
          <p class="m-2 flex-1 text-right">{{ game.HomeTeam }}</p>
          <p class="m-2 hover:underline rounded-md">{{ game.HomeTeamScore }} - {{ game.AwayTeamScore }} </p>
          <p class="m-2 flex-1 text-left"> {{ game.AwayTeam }} <span class="text-xs italic">played at {{game.Location}}</span></p>
        </div>
      </div>
  </div>





</template>

