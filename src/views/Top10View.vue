<script setup>
import {RouterLink} from "vue-router";
</script>

<template>



  <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-yellow-100 shadow sm:items-baseline w-full">
    <div class="mb-2 sm:mb-0">
      <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Top 10</a>
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


  <div class="flex items-center flex-col">

    <div class="w-10/12 mt-28 p-16 bg-amber-400 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://www.japantimes.co.jp/uploads/imported_images/uploads/2022/12/np_file_200271.jpeg"/>
        </div>
        <p class="font-bold m-5">#1</p>
        <p  class="text-justify">Lionel Messi, often revered as the "G.O.A.T" (Greatest of All Time), is a football phenomenon who has left an indelible mark on the beautiful game. Born in Rosario, Argentina, on June 24, 1987, Messi's story is one of talent, perseverance, and extraordinary achievements.

          Messi's journey to greatness began in the streets of Rosario, where he showcased his dazzling dribbling skills from a very young age. At just 13, he moved to Barcelona to join the world-renowned La Masia youth academy, setting the stage for a legendary career.

          For over two decades, Messi mesmerized football fans with his exceptional ball control, lightning-quick acceleration, and an uncanny ability to navigate through defenders. His goal-scoring prowess, combined with an innate playmaking vision, set him apart from his peers. During his time at FC Barcelona, he helped the club secure numerous domestic and international titles, including multiple UEFA Champions League and La Liga trophies.

          Messi's individual accolades are equally impressive. He has won the Ballon d'Or award multiple times, becoming the most decorated player in the history of the award. His rivalry with Cristiano Ronaldo has added another layer of excitement to the football world, as fans and pundits passionately debate who is the greatest.

          In August 2021, Messi made a surprising move to Paris Saint-Germain (PSG) due to financial constraints faced by Barcelona. This transfer marked a new chapter in his illustrious career, showcasing his ability to adapt and thrive in different footballing environments.

          Off the pitch, Messi is known for his philanthropic efforts. He actively supports various charitable causes, with a particular focus on children's health and education. His humility and dedication to making the world a better place mirror his excellence on the field.

          Lionel Messi's legacy is secure, and his impact on the world of soccer is immeasurable. He continues to inspire millions of fans and aspiring footballers globally, demonstrating that with talent, hard work, and humility, dreams can be transformed into extraordinary realities.</p>
      </div>
    </div>

    <div class="w-10/12 mt-28 p-16 bg-gray-300 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://media.cnn.com/api/v1/images/stellar/prod/230621042149-01-cristiano-ronaldo-euro-200-apps-062023-restricted.jpg?c=original"/>
        </div>
        <p class="font-bold m-5">#2</p>
        <p  class="text-justify">Cristiano Ronaldo, widely regarded as one of the greatest footballers of all time, has etched his name in the annals of the sport's history. Born on February 5, 1985, in Funchal, Madeira, Portugal, Ronaldo's journey to superstardom is a testament to unwavering determination and unparalleled talent.

          From his early years in the island of Madeira, Ronaldo's incredible potential was evident. His ability to dribble past opponents with ease, powerful strikes, and impeccable work ethic paved the way for a career that would reach stratospheric heights. At the age of 12, he left his family to pursue his dream, joining the Sporting Lisbon academy in Portugal.

          Ronaldo's breakthrough came when he signed with Manchester United in 2003, where he honed his skills under the guidance of Sir Alex Ferguson. During his six-year tenure, he helped the club secure numerous titles, including three Premier League titles and the UEFA Champions League.

          In 2009, Ronaldo made a high-profile move to Real Madrid for a then-world record transfer fee. His time at Los Blancos was marked by a staggering goal-scoring record, including four Champions League titles and numerous individual awards.

          After a stint with Juventus, Ronaldo returned to Manchester United in 2021, reaffirming his status as a global football icon. His impact transcends the pitch, as his charisma and work ethic have earned him a massive following and endorsement deals with some of the world's leading brands.

          Off the field, Ronaldo is recognized for his philanthropy, actively supporting various charitable causes, with a particular focus on children's hospitals and disaster relief efforts.

          Cristiano Ronaldo's legacy is built on an unwavering commitment to excellence, and his influence on the sport remains immense. His remarkable career continues to inspire a new generation of footballers and fans, proving that dedication, talent, and a relentless pursuit of greatness can truly change the game.</p>
      </div>
    </div>


    <div class="w-10/12 mt-28 p-16 bg-amber-600 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://www.guinnessworldrecords.com/Images/Diego-Maradona-playing-football-1982_tcm25-640178.jpg"/>
        </div>
        <p class="font-bold m-5">#3</p>

        <p  class="text-justify">Diego Maradona, an enduring legend in the world of football, is celebrated as one of the most iconic figures to have ever graced the sport. Born on October 30, 1960, in Lanús, Argentina, Maradona's life and career were marked by extraordinary talent, remarkable highs, and profound lows.

          Maradona's ascent to stardom began in the shantytowns of Buenos Aires, where he honed his remarkable dribbling skills and innate footballing instincts. His journey took him from the gritty streets to the stadiums, becoming a symbol of hope and inspiration for countless aspiring footballers.

          Maradona's international recognition came in the 1986 FIFA World Cup, held in Mexico, where he delivered performances that transcended the ordinary. His famous "Hand of God" goal and the "Goal of the Century" against England in the quarter-finals remain indelible moments in football history. His ability to mesmerize defenders and the audience with his dribbling and vision made him a rare talent.

          Over the course of his club career, Maradona played for renowned clubs, including Barcelona and Napoli, where he achieved great success and won titles. At Napoli, he became a deity, leading the team to their first-ever Serie A titles and etching his name into the city's folklore.

          Despite his undeniable brilliance on the field, Maradona faced personal struggles and controversy off it. His battles with addiction and health issues added complexity to his story, making him a symbol of resilience and humanity.

          Maradona's legacy extends beyond the pitch. He was a symbol of national pride in Argentina and remains an influential figure in the global football community. His charisma, passion, and unwavering spirit continue to inspire generations of players and fans, reminding us that greatness comes in various forms and that football can shape and define lives in remarkable ways. Diego Maradona will forever be remembered as a footballing deity and a true legend of the beautiful game.</p>
      </div>
    </div>

    <div class="w-10/12 mt-28 p-16 bg-gray-200  rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://static.dw.com/image/61527609_605.webp"/>
        </div>
        <p class="font-bold m-5">#4</p>

        <p  class="text-justify">Edson Arantes do Nascimento, universally known as Pele, is a football icon whose impact on the sport is immeasurable. Born on October 23, 1940, in Três Corações, Brazil, Pele's journey from humble beginnings to becoming one of the most celebrated figures in the world of soccer is the stuff of legends.

          Pele's rise to stardom began on the streets of Bauru, where he showcased his dazzling skills as a child. At the age of 15, he made his professional debut for Santos FC, setting in motion a career that would change the face of Brazilian and international football.

          During his tenure with Santos FC and the New York Cosmos, Pele accumulated an astonishing list of achievements, including three FIFA World Cup titles with the Brazilian national team. His unparalleled combination of agility, vision, and goal-scoring prowess made him a household name. He scored over a thousand professional goals in his career, a record that stands as one of the sport's greatest achievements.

          Pele's charisma and sportsmanship endeared him to fans worldwide, transcending the sport. His influence extended to pop culture, and his endorsement deals paved the way for future generations of athletes to explore off-field opportunities.

          Off the pitch, Pele is known for his philanthropy and commitment to social causes. He has used his fame to support various charitable endeavors, particularly those related to children's health and education.

          Pele's legacy as a footballing legend remains secure, and his impact on the beautiful game is imprinted in the hearts of football enthusiasts worldwide. His remarkable journey, filled with unforgettable moments and achievements, continues to inspire generations of aspiring footballers and reminds us all that true greatness knows no boundaries.</p>
      </div>
    </div>


    <div class="w-10/12 mt-28 p-16 bg-gray-200 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://tmssl.akamaized.net/images/foto/galerie/ronaldo-luis-nazario-de-lima-1472042256-5977.jpg?lm=1483606131"/>
        </div>
        <p class="font-bold m-5">#5</p>

        <p  class="text-justify">Ronaldo Luis Nazario de Lima, often referred to simply as Ronaldo, is a name synonymous with sheer footballing brilliance. Born on September 18, 1976, in Rio de Janeiro, Brazil, Ronaldo's journey from the streets of Bento Ribeiro to the grand stages of world football is a story of unparalleled talent and resilience.

          From an early age, Ronaldo showcased his innate goal-scoring ability, blinding speed, and remarkable skill. His meteoric rise began with his time at Cruzeiro in Brazil, where he became the youngest player to win the FIFA World Player of the Year award at the age of 21.

          His successful move to Europe brought him to Barcelona and later Inter Milan. Ronaldo's time with these clubs established him as one of the world's premier strikers, with his electric pace, close ball control, and uncanny ability to score from any position. He won numerous awards and accolades, including two FIFA World Player of the Year titles.

          In 2002, Ronaldo achieved legendary status by leading the Brazilian national team to World Cup victory. He was the tournament's top scorer and displayed exceptional strength and agility, reaffirming his status as the most lethal striker of his generation.

          Despite suffering from a series of debilitating injuries during his career, Ronaldo managed to make a triumphant comeback time and again, showcasing his resilience and determination. He continued to shine with clubs like Real Madrid and AC Milan, adding to his extensive list of achievements.

          Off the field, Ronaldo has been involved in various charitable activities and business ventures, demonstrating his commitment to giving back to the community.

          Ronaldo Nazario's legacy is a testament to his incredible talent and his unwavering dedication to the sport. His influence on football remains profound, and his name is forever etched in the history of the beautiful game.</p>
      </div>
    </div>

    <div class="w-10/12 mt-28 p-16 bg-gray-200 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://www.ispo.com/sites/default/files/2020-09/imago0018897513h.jpg"/>
        </div>
        <p class="font-bold m-5">#6</p>

        <p  class="text-justify">Franz Beckenbauer, affectionately known as "The Kaiser," is a footballing legend whose influence on the sport extends far beyond the pitch. Born on September 11, 1945, in Munich, Germany, Beckenbauer's career and contributions have left an indelible mark on the world of soccer.

          Beckenbauer's football journey began in the streets of Munich, where his skill and versatility quickly caught the attention of scouts. His journey to greatness began at Bayern Munich, where he became a stalwart for the club, leading them to multiple Bundesliga titles and European Cup victories.

          Known for his elegance on the ball and astute defensive skills, Beckenbauer revolutionized the role of the sweeper or libero. His ability to read the game and initiate attacks from the back made him a trailblazer in the evolution of modern football.

          As captain of the West German national team, Beckenbauer's crowning achievement came in the 1974 FIFA World Cup when his team lifted the trophy on home soil. His leadership and composure under pressure solidified his legacy as one of the sport's great leaders.

          Beckenbauer's club career took him to the New York Cosmos in the North American Soccer League (NASL) during the late 1970s, adding a new dimension to his already illustrious career.

          Off the field, Beckenbauer continued to shape the footballing world, serving as a successful manager and later as an influential administrator, including a tenure as FIFA vice president.

          Franz Beckenbauer's legacy goes well beyond his playing days. His impact on the game's tactics, his leadership qualities, and his contributions to the sport's administration make him a true footballing icon. The Kaiser's name remains synonymous with excellence, innovation, and a deep love for the beautiful game.</p>
      </div>
    </div>

    <div class="w-10/12 mt-28 p-16 bg-gray-200 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6208719b8aa55c7f/62fed65e81992935c2e84852/jq2yyzvabv761039zb60jy9u4.jpg?auto=webp&format=pjpg&width=3840&quality=60"/>
        </div>
        <p class="font-bold m-5">#7</p>

        <p  class="text-justify">Johan Cruyff, often heralded as the footballing visionary, is a name that will forever be etched in the annals of the sport. Born on April 25, 1947, in Amsterdam, Netherlands, Cruyff's impact on football transcends his exceptional skills as a player and coach.

          Cruyff's football journey began at the famed Ajax youth academy, where he developed the Total Football philosophy that would revolutionize the game. His exquisite dribbling, creative passing, and ability to read the game set him apart. With Ajax, he won numerous domestic titles and three consecutive European Cups, leaving an indelible mark on the club's history.

          His move to FC Barcelona in 1973 was transformative for both the club and himself. At Barcelona, Cruyff's influence was profound. His footballing genius and charismatic leadership revitalized the team, earning him the admiration of fans worldwide. Cruyff's time at the club laid the foundation for the renowned La Masia youth academy and the tiki-taka style that would bring Barcelona unprecedented success in the years to come.

          Cruyff also made a significant impact with the Dutch national team, particularly during the 1974 FIFA World Cup, where they reached the final with a brand of football that epitomized Total Football.

          Off the field, Cruyff's contribution continued through coaching. He guided Barcelona to their first European Cup in 1992, solidifying his status as an influential manager. His coaching philosophy, often referred to as "Cruyffism," influenced generations of coaches and players.

          Beyond football, Johan Cruyff was a philanthropist, dedicated to improving the lives of underprivileged children through his Johan Cruyff Foundation.

          Johan Cruyff's legacy is a testament to his revolutionary thinking, innovation on the pitch, and his enduring impact on the sport's philosophy. His name will forever be associated with footballing excellence and a commitment to the beautiful game's progress.</p>
      </div>
    </div>

    <div class="w-10/12 mt-28 p-16 bg-gray-200 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://cdn.artphotolimited.com/images/5c77db4dea7f855052aeb269/1000x1000/zinedine-zidane.jpg"/>
        </div>
        <p class="font-bold m-5">#8</p>

        <p  class="text-justify">Zinedine Zidane, known as "Zizou" to football enthusiasts worldwide, is a name synonymous with exquisite grace, footballing artistry, and an enduring legacy. Born on June 23, 1972, in Marseille, France, Zidane's illustrious career as a player and manager has left an indelible mark on the beautiful game.

          Zidane's footballing journey began in the heart of Marseille, where his extraordinary talent quickly gained attention. His elegant dribbling, precise passing, and innate ability to control the tempo of a match made him one of the sport's true magicians. His journey to greatness took him from AS Cannes to Bordeaux and then to Juventus, where he honed his skills and garnered a reputation as one of the world's finest midfielders.

          However, it was Zidane's time at Real Madrid that solidified his status as a footballing icon. His performances for Los Blancos, where he won numerous titles, including the UEFA Champions League, elevated him to legendary status. Zidane's pivotal role in delivering France's first FIFA World Cup victory in 1998, with two goals in the final, etched his name in the annals of history.

          Zidane's career as a player was marked by his graceful demeanor both on and off the field. He was known for his humility, fair play, and sportsmanship, earning admiration from fans and fellow professionals.

          After retiring as a player, Zidane transitioned to management with the same elegance and success. His tenure as the head coach of Real Madrid saw him lead the club to an unprecedented three consecutive UEFA Champions League titles, showcasing his tactical acumen and leadership abilities.

          Off the field, Zinedine Zidane has been actively involved in philanthropic efforts and charity work, emphasizing the importance of giving back to the community.

          Zinedine Zidane's legacy is a testament to his extraordinary skill, sportsmanship, and leadership in the world of football. His name continues to be associated with beauty, excellence, and the enduring magic of the sport.</p>
      </div>
    </div>

    <div class="w-10/12 mt-28 p-16 bg-gray-200 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://footballmakeshistory.eu/wp-content/uploads/2022/12/Michel_Platini1920x1280.jpg"/>
        </div>
        <p class="font-bold m-5">#9</p>

        <p  class="text-justify">Michel Platini, a name forever etched in the history of football, is celebrated as one of France's greatest footballing icons. Born on June 21, 1955, in Jœuf, France, Platini's remarkable career as a player and influential role in football administration have left a profound mark on the sport.

          Platini's footballing journey began at AS Nancy, where his extraordinary talent and vision on the pitch quickly became evident. His ability to dictate the game's tempo, deliver precision passes, and score with ease made him one of the sport's most elegant and effective midfielders.

          His move to AS Saint-Étienne and later to Juventus in Italy solidified his status as a footballing maestro. At Juventus, he enjoyed immense success, winning numerous Serie A titles and the European Cup, becoming the focal point of the team's midfield.

          Platini's crowning achievement as a player came with the French national team. He led Les Bleus to victory in the 1984 UEFA European Championship, where he was the tournament's top scorer and the heartbeat of the French midfield.

          After retiring as a player, Platini turned to football administration, serving as the president of UEFA from 2007 to 2015. During his tenure, he played a pivotal role in shaping European football, including the expansion of the UEFA European Championship and the introduction of the Financial Fair Play regulations.

          Despite his contributions to the sport, Platini's legacy has been marred by controversies in his later years, which saw him banned from football-related activities for a period.

          Michel Platini's impact on football remains undeniable, and his name is synonymous with elegance, vision, and a deep love for the beautiful game. His influence, both as a player and administrator, continues to shape the world of football.</p>
      </div>
    </div>

    <div class="w-10/12 mt-28 p-16 bg-gray-200 rounded-3xl">
      <div class="flex flex-col my-auto items-center bgimg bg-cover">
        <div>
          <img class="h-60" src="https://i.eurosport.com/2011/02/26/694410-21498655-2560-1440.jpg"/>
        </div>
        <p class="font-bold m-5">#10</p>

        <p  class="text-justify">Alfredo Di Stéfano, an enduring legend in the realm of football, is celebrated as one of the sport's most versatile and accomplished figures. Born on July 4, 1926, in Buenos Aires, Argentina, Di Stéfano's indomitable spirit and remarkable career have forever left an indelible mark on the beautiful game.

          Di Stéfano's footballing journey began in the neighborhoods of Buenos Aires, where he showcased his prodigious talent and remarkable versatility. His ability to play multiple positions made him a unique force on the pitch. His extraordinary dribbling, vision, and work rate set him apart and quickly drew the attention of scouts.

          His illustrious club career took him from River Plate in Argentina to Colombia's Millonarios, and eventually to Real Madrid, where he achieved monumental success. Di Stéfano led Los Blancos to five consecutive European Cup victories, solidifying his status as one of the sport's greats. His leadership on the field and his scoring prowess made him the focal point of the Madrid side during one of the most successful eras in the club's history.

          Di Stéfano's influence was not limited to club football; he represented the Spanish national team and played a key role in their success, guiding them to victory in the 1964 UEFA European Championship.

          Off the field, Di Stéfano was known for his charismatic personality and dedication to the sport. He continued to inspire generations of footballers, serving as a role model for versatility and adaptability in the game.

          Alfredo Di Stéfano's legacy is a testament to his remarkable skills, work ethic, and his unwavering dedication to the sport. His name remains synonymous with versatility and excellence, and he will forever be remembered as a true legend of the beautiful <game class=""></game></p>
      </div>
    </div>




  </div>







  <div class="top10">
    <h1></h1>
  </div>
</template>
