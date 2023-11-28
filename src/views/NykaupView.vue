<script setup>
import {RouterLink} from "vue-router";
</script>

<template>


  <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full bg-blue-200">
    <div class="mb-2 sm:mb-0">
      <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">new signings</a>
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

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte45820a3daad7a5e/650345c4c2fad1d14d12ac30/Dominik_Szoboszlai_Liverpool_2023-24_(2).jpg?auto=webp&format=pjpg&width=3840&quality=60" class="w-full"/>
        </div>
        <p class="text-justify">Dominik Szoboszlai is a Hungarian professional footballer who plays as a midfielder for Premier League club Liverpool and captains the Hungary national team. A versatile player, he is able to play as a box-to-box midfielder, right midfielder or attacking midfielder</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://cdn.vox-cdn.com/thumbor/RmONOmqsAVqWtoQlnryDurPPaxM=/0x0:6000x4000/1200x800/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/72485754/1563649163.0.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Moussa Diaby is a French professional footballer who plays as a right winger or attacking midfielder for Premier League club Aston Villa and the France national team</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.sportinglife.com/images/news/original/9927983d-5405-4280-b9e2-4e387f7a13fc-6af8e639-009f-4004-b86f-7d9b2f0d5c6d.jpeg" class="w-full"/>
        </div>
        <p class="text-justify">Micky van de Ven is a Dutch professional footballer who plays as a centre-back for Premier League club Tottenham Hotspur and the Netherlands national team.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://uk1.sportal365images.com/process/smp-image-api/livescore.com/27082023/3539e7ef-56d2-43f6-9812-045fafeadb81.jpg?operations=fit(707:)&w=707&quality=100" class="w-full"/>
        </div>
        <p class="text-justify">Mohammed Kudus is a Ghanaian professional footballer who plays as an attacking midfielder or a right winger for Premier League club West Ham United and the Ghana national team. He has previously played for Nordsjælland and Ajax.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.thesun.co.uk/wp-content/uploads/2023/09/rasmus-hojlund-manchester-united-premier-842248283-2.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Rasmus Winther Højlund is a Danish professional footballer who plays as a forward for Premier League club Manchester United and the Denmark national team. Højlund graduated from Copenhagen's youth academy, making his first-team debut for the club aged 17 in October 2020.</p>
      </div>
    </div>


    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.mancity.com/meta/media/nefkrakz/tf502096.png" class="w-full"/>
        </div>
        <p class="text-justify">Joško Gvardiol is a Croatian professional footballer who plays as a defender for Premier League club Manchester City and the Croatia national team. Although primarily a centre-back, he has often played as a left-back</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_3338,h_1877,x_0,y_137/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01hefr7hqywfs50vzpm0.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Jérémy Baffour Doku is a Belgian professional footballer who plays as a winger for Premier League club Manchester City and the Belgium national team. Known for his speed and dribbling ability, he is considered to be one of the most talented young players in the world in his position.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2023-10/ryan-gravenberch-13102023.webp?itok=Zv5PCNSW" class="w-full"/>
        </div>
        <p class="text-justify">Ryan Jiro Gravenberch is a Dutch professional footballer who plays as a central midfielder for Premier League club Liverpool and the Netherlands national team.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://s3.eu-west-1.amazonaws.com/gc-media-assets.gc.nffcservices.co.uk/4a1663b0-491b-11ee-9ae9-2bd984fa2d26.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Ibrahim Sangaré is an Ivorian professional footballer who plays as a defensive midfielder for Premier League club Nottingham Forest and the Ivory Coast national team.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/231026093857-01-sandro-tonali-newcastle-102123.jpg?c=16x9&q=h_720,w_1280,c_fill" class="w-full"/>
        </div>
        <p class="text-justify">Sandro Tonali is an Italian professional footballer who plays mainly as a defensive-midfielder or central-midfielder for Premier League club Newcastle United and the Italy national team. He is currently banned from all competitive footballing activities until 27 August 2024 for gambling offences.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://cdn.theathletic.com/app/uploads/2023/07/03074647/30JUN23-Bart-Verbrggen-JB-0044-scaled-e1688384827434.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Bart Verbruggen is a Dutch professional footballer who plays as a goalkeeper for Premier League club Brighton & Hove Albion and the Netherlands national team.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/timber-back-of-shirt.png?auto=webp&itok=1zzHUoXC" class="w-full"/>
        </div>
        <p class="text-justify">Jurriën David Norman Timber is a Dutch professional footballer who plays as a defender for Premier League club Arsenal and the Netherlands national team. Mainly a centre-back, he can also play as a right-back. Timber joined Ajax's youth academy in 2014, from Feyenoord.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd12936ee-48e8-11ee-9359-63e432ab6148.jpg?crop=3457%2C1945%2C168%2C150" class="w-full"/>
        </div>
        <p class="text-justify">Pau Francisco Torres is a Spanish professional footballer who plays as a centre-back for Premier League club Aston Villa and the Spain national team. He began his career with Villarreal, making 173 competitive appearances and winning the 2021 Europa League; he was also loaned to Málaga.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.afcb.co.uk/media/217177/max-aarons-profile.jpg?anchor=center&mode=crop&width=640&height=420&quality=60" class="w-full"/>
        </div>
        <p class="text-justify">Maximillian James Aarons is an English professional footballer who plays as a right-back for Premier League club Bournemouth. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.afcb.co.uk/media/215606/kluivert_1.jpg?anchor=center&mode=crop&width=900&height=600&quality=75" class="w-full"/>
        </div>
        <p class="text-justify">Justin Dean Kluivert is a Dutch professional footballer who plays as a winger or forward for Premier League club Bournemouth. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.afcb.co.uk/media/210875/4s4a2796.jpg?anchor=center&mode=crop&width=900&height=600&quality=75" class="w-full"/>
        </div>
        <p class="text-justify">Hamed Traorè is an Ivorian professional footballer who plays as an attacking midfielder for Premier League club AFC Bournemouth and the Ivory Coast national team. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/The%205th%20Stand%20app%20editorial/Players%20stock/Jackson/image00005.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Nicolas Jackson is a Senegalese professional footballer who plays as a forward for Premier League club Chelsea and the Senegal national team. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://cdn1.thechelseachronicle.com/uploads/17/2023/11/GettyImages-1573572241-3.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Christopher Alan Nkunku is a French professional footballer who plays as an attacking midfielder, second striker or forward for Premier League club Chelsea and the France national team. Nkunku is a graduate of the Paris Saint-Germain Academy and made his professional debut for the club in December 2015. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://cdn.vox-cdn.com/thumbor/G1b5feO4OaY8myEz_iyBo9ARSVc=/0x0:2505x3358/1200x800/filters:focal(872x592:1272x992)/cdn.vox-cdn.com/uploads/chorus_image/image/72737497/1722985913.0.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Axel Wilson Arthur Disasi Mhakinis Belho is a French professional footballer who plays as a centre back for Premier League club Chelsea and the France national team. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://s3.eu-west-1.amazonaws.com/gc-media-assets.fulhamfc.com/494be6a0-2d62-11ee-b307-0feca56b88e3.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Calvin Bassey is a professional footballer who plays as a left-back or a centre-back for Premier League club Fulham. Born in Italy, he plays for the Nigeria national team. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2023-09/wataru-endo-leicester-reaction-28092023.png?itok=4S3TyDf1" class="w-full"/>
        </div>
        <p class="text-justify">Wataru Endō is a Japanese professional footballer who plays as a defensive midfielder for Premier League club Liverpool and captains the Japan national team. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://images.ps-aws.com/c?url=https%3A%2F%2Fimages.teamtalk.com%2Fcontent%2Fuploads%2F2023%2F10%2F24222206%2FAndre-Onana-celebrating-for-Man-Utd.jpg" class="w-full"/>
        </div>
        <p class="text-justify">André Onana Onana is a Cameroonian professional footballer who plays as a goalkeeper for Premier League club Manchester United and the Cameroon national team. Onana joined Barcelona's youth system in 2010. He signed for Ajax in 2015, where he made 214 appearances and won three Eredivisie titles. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://e0.365dm.com/23/06/1600x900/skysports-gugliemo-vicario_6200780.jpg?20230627174629" class="w-full"/>
        </div>
        <p class="text-justify">Guglielmo Vicario is an Italian professional footballer who plays as a goalkeeper for Premier League club Tottenham Hotspur. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/10/16916884294263.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Edson Omar Álvarez Velázquez is a Mexican professional footballer who plays as a defensive midfielder or centre-back for Premier League club West Ham United and the Mexico national team. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://resources.brightonandhovealbion.com/photo-resources/2023/07/27/1ee32a9c-8ecf-417c-9e5b-73449904cb38/25JUL23-Igor-Julio-JB-0187.jpg?width=1500" class="w-full"/>
        </div>
        <p class="text-justify">Igor Julio dos Santos de Paulo, known as Igor Julio or simply Igor, is a Brazilian professional footballer who plays as a centre-back for Premier League club Brighton & Hove Albion. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://e0.365dm.com/23/08/2048x1152/skysports-beto-everton-premier-league_6266708.jpg?20230829143051" class="w-full"/>
        </div>
        <p class="text-justify">Norberto Bercique Gomes Betuncal, known as Beto, is a Portuguese professional footballer who plays as a striker for Premier League club Everton. </p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd2f286803655ee98/6481ab31a5487f2465eb6493/GOAL_-_Blank_WEB_-_Facebook.jpg?auto=webp&format=pjpg&width=3840&quality=60" class="w-full"/>
        </div>
        <p class="text-justify">Alexis Mac Allister is an Argentine professional footballer who plays as a midfielder for Premier League club Liverpool and the Argentina national team. Born to a footballing family, Mac Allister started his senior career with Argentinos Juniors in 2016, winning the Argentine second division in his debut season.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://e0.365dm.com/23/02/2048x1152/skysports-pedro-porro-spurs_6042901.jpg?20230201095759" class="w-full"/>
        </div>
        <p class="text-justify">Pedro Antonio Porro Sauceda is a Spanish professional footballer who plays as a right-back or right wing-back for Premier League club Tottenham Hotspur and the Spain national team. He started his career with Girona's reserve team Peralda, before being promoted to the first team in 2017.</p>
      </div>
    </div>





  </div>

  <h1 class="text-3xl bg-cyan-100">young and exciting signings</h1>

  <div class="flex flex-wrap bg-cyan-100">

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://cdn.mbl.is/m2/9pMyRGYI8_FlIWQ26RQtAFZVwfg=/1640x1093/filters:cropcenter(53,38)/frimg/1/43/53/1435357.jpg" class="w-full"/>
        </div>
        <p class="text-justify">Carlos Noom Quomah Baleba is a Cameroonian professional footballer who plays as a central or defensive midfielder for Premier League club Brighton & Hove Albion.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.afcb.co.uk/media/217167/048a1971.jpg?anchor=center&mode=crop&width=640&height=420&quality=60" class="w-full"/>
        </div>
        <p class="text-justify">Alex Jay Scott is an English professional footballer who plays as a midfielder for Premier League club AFC Bournemouth. Born in Guernsey, he represents England at youth level</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://www.afcb.co.uk/media/216561/048a7763.jpg?anchor=center&mode=crop&width=640&height=420&quality=60" class="w-full"/>
        </div>
        <p class="text-justify">Miloš Kerkez is a professional footballer who plays as a left-back or left wing-back for Premier League club Bournemouth. Born in Serbia, he represents the Hungary national team.</p>
      </div>
    </div>

    <div class="w-1/3">
      <div class="p-8">
        <div class="h-48 overflow-hidden">
          <img src="https://static.globalnoticias.pt/tsf/image.jpg?brand=TSF&type=generate&guid=ca1cbff1-44fe-4b69-98bc-fd49f4e86145&w=800&h=450&t=20230811100610" class="w-full"/>
        </div>
        <p class="text-justify">Youssef Ramalho Chermiti is a Portuguese professional footballer who plays as a striker for Premier League club Everton.</p>
      </div>
    </div>


  </div>





</template>
