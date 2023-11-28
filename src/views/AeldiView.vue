<script setup>
import {RouterLink} from "vue-router";
</script>

<template>

  <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
   <div class="mb-2 sm:mb-0">
      <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">On fire</a>
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

  <div class="flex flex-wrap bg-slate-300">

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://miro.medium.com/v2/resize:fit:864/0*g2uhz1Q84EycA6o5 "/>
        </div>
        <p class="text-center m-2 font-serif">Serhou Guirassy</p>
        <p class="text-center">Forward for Bundesliga club VfB Stuttgart and the Guinea national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:10 Goals:15 Assists:1</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSWOh6DcMbkNXNVRdlEjhlVNqmsfVepMxRfgYkabkF_lwK_1VIzQRPWYvsed-mHMwx0Iq7RaVI-CNptKIo "/>
        </div>
        <p class="text-center m-2 font-serif">Santiago Giménez</p>
        <p class="text-center ">Forward for Eredivisie club Feyenoord and Mexico national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:13 Goals:16 Assists:3</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://sportal365images.com/process/smp-images-production/ringier.africa/13092023/22e3c0b5-982e-47a9-b4c2-d997c9638fce.jpg?operations=fit(480:)"/>
        </div>
        <p class="text-center m-2 font-serif">Victor Boniface</p>
        <p class="text-center ">Forward for Bundesliga club Bayer Leverkusen and the Nigeria national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:12 Goals:7 Assists:5</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRWNeIAkCXkd0rB_RKM7Q_S27E2kX51MTXvBd29pMVxDADZaclCuT0sc5BvvBZUJHFsxbFd6av0W1jsMBw"/>
        </div>
        <p class="text-center m-2 font-serif">Jude Bellingham</p>
        <p class="text-center ">Midfielder for La Liga club Real Madrid and the England national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:12 Goals:11 Assists:2</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://keepup.com.au/wp-content/uploads/2023/01/1tckwxz5uecyr1h1fxzrdrvubu.jpg"/>
        </div>
        <p class="text-center m-2 font-serif">Erling Haaland</p>
        <p class="text-center ">Striker for Premier League club Manchester City and the Norway national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:13 Goals:14 Assists:3</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1a35f39cba26e7c8/6347ec2d5a97597c0b89e33a/GettyImages-1432964395.jpg?auto=webp&format=pjpg&width=3840&quality=60"/>
        </div>
        <p class="text-center m-2 font-serif">Mohamed Salah</p>
        <p class="text-center ">Right winger or forward for Premier League club Liverpool and Egypt national</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:13 Goals:10 Assists:5</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://static.independent.co.uk/2023/03/03/15/77a14d87a06eff645755f7d7cb54e01eY29udGVudHNlYXJjaGFwaSwxNjc3OTQzMTM5-2.71034678.jpg"/>
        </div>
        <p class="text-center m-2 font-serif">Ollie Watkins</p>
        <p class="text-center">Forward for Premier League club Aston Villa and the England national team</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:13 Goals:7 Assists:5</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://keepup.com.au/wp-content/uploads/2021/10/5aa7uqkevoa21hiw9l66h7qbg.jpg"/>
        </div>
        <p class="text-center m-2 font-serif">Florian Wirtz</p>
        <p class="text-center"> Attacking midfielder or left winger for Bundesliga club Bayer Leverkusen and the Germany national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:12 Goals:3 Assists:5</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://assets.bundesliga.com/contender/2023/9/grimaldo.jpg"/>
        </div>
        <p class="text-center m-2 font-serif">Álex Grimaldo</p>
        <p class="text-center"> Left-back for Bundesliga club Bayer Leverkusen and the Spain national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:12 Goals:7 Assists:4</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://images.bild.de/64ea4fcde63d957cc455b46c/32be0b79ed3556e5309736310c26e941,c8f3c257?w=992"/>
        </div>
        <p class="text-center m-2 font-serif">Jonas Hofmann</p>
        <p class="text-center">midfielder for Bundesliga club Bayer Leverkusen and the Germany national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:12 Goals:5 Assists:5</p>
      </div>
    </div>


    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6587446b6ee3d2db/65469abb7479c6040a19c866/Harry_Kane.jpg?auto=webp&format=pjpg&width=3840&quality=60"/>
        </div>
        <p class="text-center m-2 font-serif">Harry Kane</p>
        <p class="text-center">Striker for Bundesliga club Bayern and captains the England national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:12 Goals:18 Assists:5</p>
      </div>
    </div>

    <div class="w-1/2">
      <div class="p-8">
        <div class="flex justify-center overflow-hidden">
          <img class="w-72" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5f39f78fc8a79731/65378d98e2bb46b95ab01730/GOAL_-_Blank_WEB_-_Facebook_-_2023-10-24T102449.066.png?auto=webp&format=pjpg&width=3840&quality=60"/>
        </div>
          <p class="text-center m-2 font-serif">Leroy Sané</p>
        <p class="text-center"> Winger for Bundesliga club Bayern Munich and the Germany national team.</p>
        <p class="flex justify-center bg-gray-600 text-amber-50">Matches:12 Goals:8 Assists:6</p>
      </div>
    </div>





  </div>





  <div class="Aeldi">


  </div>





</template>

