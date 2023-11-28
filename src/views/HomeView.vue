<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {RouterLink} from "vue-router";
</script>

<template>

  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <img  src="https://cdn-icons-png.flaticon.com/512/188/188899.png" class="h-12 mr-3 animate-spin" alt="Flowbite Logo" />
      <span class="text-4xl font-semibold dark:text-white mr-20">Boltinn</span>
      <div class="flex items-center">
      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li>
            <RouterLink to="/" class="text-gray-900 dark:text-white hover:underline">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/leikir" class="text-gray-900 dark:text-white hover:underline">Games today</RouterLink>
          </li>
          <li>
            <RouterLink to="/nykaup" class="text-gray-900 dark:text-white hover:underline">New signings</RouterLink>
          </li>
          <li>
            <RouterLink to="/top10" class="text-gray-900 dark:text-white hover:underline">Top 10</RouterLink>
          </li>
          <li>
            <RouterLink to="/Aeldi" class="text-gray-900 dark:text-white hover:underline">On fire</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <main class="min-h-screen" style="background-image: url('https://cdn.pixabay.com/photo/2017/08/10/01/38/grass-2616911_1280.jpg');">


    
  </main>

</template>
