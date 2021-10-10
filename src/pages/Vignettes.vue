<template>
  <div>
    <div class="section bg-lgct-white relative flex items-center">
      <home-logo></home-logo>
      <rounded-card
        :heading="'Land Parcels'"
        class="w-100"
        :isTitle="true"
      ></rounded-card>
      <curved-border :color="'red'"></curved-border>
    </div>
    <div
      class="
        section
        bg-lgct-red
        flex
        justify-center
        items-center
        relative
        overflow-hidden
      "
    >
      <stacked-card-horizontal class="w-75-l z-0" mainColor="bg-moon-gray">
        <template v-slot:gps>45.4594 N, 112.2694 W</template>
        <template v-slot:heading><div>Niitsítpiis-stahkoii ᖹᐟᒧᐧᐨᑯᐧ ᓴᐦᖾᐟ (Blackfoot / Niitsítapi ᖹᐟᒧᐧᒣᑯ) </div>
<div>Michif Piyii (Métis) Apsaalooké (Crow) Salish Kootenai (Flathead) Očhéthi Šakówiŋ </div>
</template>
        <template v-slot:subtitle>Currently known as Montana - Madison County</template>
        <template v-slot:plot><a href="https://www.landgrabu.org/lands/mt200040s0050w0sn300ashalfnwct" target="_blank" class="underline">MT200040S0050W0SN300AS1/2NWCT</a><i class="fa fa-external-link"></i></template>
        <p>
          On October 17, 1855, the United States government signed a treaty with
          the Blackfoot people and Ontonagon band of the Chippewa that
          relinquished the land as common hunting ground. This 80 acre parcel
          was granted to the state of Connecticut in 1862 and accepted by the
          university in 1893. The parcel raised $60.35 for the University - a
          22x return on the land. Adjusting for 2021 inflation, that equates to
          $1751.88 raised.
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <land-today-tab
          style="bottom: 10em"
          class="z-0"
          :sitesObj="landTodayObjs[0]"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></land-today-tab
        >
        <collapsible-tab
          style="bottom: 6em"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Settler Appropriation and Uses</template>
          <p>
            Connecticut Land Grant scrip was redeemed in 1877 for two parcels in
            northern Sonoma County by John Comstock and Daniel Sink.
          </p>
          <p>
            Originally the homelands of the Southern Pomo people and the site of
            a village of ?iy.o.tok.o wi (‘at the lower field’), these parcels
            were close to a nearly 9,000 acre Mexican Rancheria, Rancho Rincon
            de Musalacon, granted by Governor Pio Pico to Francisco Berreyesa in
            1846. While the US agreed to honor the Mexican land grants when it
            took control of California following the Mexican-American War of
            1848, the US laid claim to these parcels and other California
            indigenous lands through a series of treaties negotiated in the
            early 1850s. As with treaties in other parts of the US, these
            treaties provided for minimal monetary compensation and small
            reservations of tribal lands. However, through the vigorous
            opposition of California’s senators, the Senate declined to ratify
            the treaties and the Native land rights were terminated through fiat
            with no monetary compensation or land reserves.
          </p>
          <p>
            The failure to ratify the treaties effectively endorsed the
            extra-judicial seizure of land by white settlers which was rampant
            in the Gold Rush period. This seizure was accompanied by a series of
            extermination campaigns which Benjamin Madley has characterized as
            an American Genocide. In what is now known as the Bloody Island
            Massacre, a large community of Pomo were surrounded and massacred by
            US Army forces on May 15, 1850. Madley estimates between 60 and 800
            Pomo were murdered in that attack, perhaps making it the largest
            settler killing of North American natives—larger than the murders of
            Lakota at Wounded Knee or of Pequot at Mystic.
          </p>
          <p>
            These parcels lay just to the northwest of the city of Cloverdale,
            which Daniel Sink had helped to found in 1872. Sink created a road
            on these lands, for which he charged travelers a toll to use, and
            later planted grapes. His son, William Sink would establish a winery
            in 1893, joining the burgeoning California wine industry.
            [https://soconews.org/cloverdale_reveille/opinion/columns/cloverdale-pioneers-daniel-sink/article_5f67d3c6-6c56-11e9-8101-575aba603257.html]
          </p>
        </collapsible-tab>
        <collapsible-tab
          style="bottom: 2em"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples of this Land</template>
          <p>
            The Pomo people have lived for millenia in what is today parts of
            the Northern California counties of Sonoma, Mendocino, and Lake.
            Prior to European contact, the Pomo lived in several culturally and
            linguistically distinct bands and tribes along the Pacific coast,
            redwood forests, Russian River valley, and Clear Lake areas. These
            parcels are located near the northern end of the Southern Pomo
            territory, close to the likely site of a village of ?iy.o.tok.o wi
            (‘at the lower field’). The foothills of the Russian River valley
            were rich in acorn oaks, buckeyes, small and large game, and other
            resources, and supported a flourishing population of 3,950 to 6,300
            Southern Pomo by the turn of the nineteenth century.
          </p>
          <p>
            Targeted by US settlers for extermination in the 19th century,
            including at the Bloody Island Massacre at Clear Lake on May 15,
            1850. The Pomo had previously survived expropriation and forced
            labor at the hands of Russian colonists at Fort Ross, the Spanish
            Mission system, and the Mexican rancherias. With encroachment and
            depredation, Pomo resisted, adapted, and endured, continuing to
            practice traditional arts, like basketweaving, and adopting new
            practices, like the Ghost Dance. These systematic efforts at
            displacement, assimilation, and/or extermination took a profound
            toll, with Pomo populations decimated and lands reduced by 99
            percent. Nevertheless, the Pomo people survived this attempted
            genocide, with several communities achieving Federal recognition in
            the 20th century.
          </p>
          <p>
            One such community is the Cloverdale Rancheria of Pomo Indians.
            First federally recognized in 1921, the tribe was “terminated” under
            the Rancheria Act of 1958. Thanks to the leadership of Pomo elder
            Tillie Harwick, the termination was overturned in 1983 and the
            Rancheria works to preserve, revive, and extend Pomo traditions
            including basketweaving and dance. Today including nearly 500
            members, the Cloverdale Rancheria provides key Tribal services,
            sustains and grows cultural traditions, and is working toward
            self-sufficiency and sovereignty in the Cloverdale area.
          </p></collapsible-tab>
        
      </div>
        <curved-border :color="'white'" :left="true" class="z-5" ></curved-border>
    </div>
    <div
      class="
        section
        bg-lgct-white
        flex
        justify-center
        items-center
        relative
        overflow-hidden
      "
    >
      <stacked-card-horizontal class="w-75-l z-0" mainColor="bg-moon-gray">
        <template v-slot:gps> 40.3442 N 96.5325 W</template>
        <template v-slot:heading
          ><div>Jiwere (Otoe-Missouria),</div>
          <div>Pâri (Pawnee),</div>
          <div>Očhéthi Šakówiŋ Land</div></template
        >
        <template v-slot:subtitle>Currently known as Nebraska</template>
        <template v-slot:plot><a class="underline" href="https://www.landgrabu.org/lands/ne060100n0070e0sn170anect" target="_blank">NE060100N0070E0SN170ANECT</a><i class="fa fa-external-link"></i></template>
        <p>
          On March 15, 1854 under Treaty No. 265 was signed by the United States
          government and the Otoe and Missouria People, ceding thousands of
          acres of Native land to the US Government to create land parcels that
          would eventually become part of the land used in the Morrill Act. One
          particular land parcel was 160 acres in size and cost the United
          States $20.67. The land ceded was granted to the University of
          Connecticut in 1862, which made a return of six times the original
          price - $121.22 was raised for the university from this one parcel of
          land. Today, residential homes and Currently known as Nebraska
          Wesleyan University sit on this parcel.
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <land-today-tab
          style="bottom: 10em"
          class="z-0"
          :sitesObj="landTodayObjs[1]"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></land-today-tab
        >
        <collapsible-tab
          style="bottom: 6em"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Settler Appropriation and Uses</template>
          <p>
            Treaty No. 265 was written by George W. Manypenny. Manypenny focused
            heavily on the assimilation and acculturation of Native peoples
            rather than solely removal and relocation. He was recorded as
            insensitive to Native cultures when negotiating treaties. Today, the
            parcel contains an institution, community buildings, and residential
            homes. Nebraska Wesleyan University was founded on this parcel in
            1887. The university has an affiliation with the Great Plains
            Conference of the United Methodist Church. The land was desired by
            white settlers from the east who saw the area as valuable farming
            property. The Otoe-Missouria fought the white settlers squatting and
            using their land. Due to this conflict and the United State’s
            expansion in agriculture, the government took action to remove the
            Otoe-Missouria people from their land to the reservation on the Big
            Blue River in 1855, then again to the Red Rock, Oklahoma in 1881.
          </p></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 2em"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples of this Land</template>
          <p>
            The Native peoples who inhabited this land were the Jiwere people
            (also known as the Otoe and Missouria people), the Pâri (Pawnee)
            people, and the Očhéthi Šakówiŋ people. As a result of the 1854
            treaty, the Otoe and Missouria people were forcibly placed on the
            Big Blue River Reservation in southeast Nebraska. The government did
            not allow them to hunt buffalo there, which had been a staple in
            their diet and a large role in their culture. The government also
            enforced an agrarian lifestyle, which was a massive shift from the
            migratory patterns that played a huge role in their culture. From
            1869 - 1881, there was a push from the government for the Otoe and
            Missouria people to relocate again to Oklahoma. In 1881, a large
            portion the Otoe-Missouria people on the reservation made an 18 day
            trek to the reallocated territory in Oklahoma, and the rest of the
            people joined in 1890. Once at this new reservation, the children of
            the Otoe-Missouria tribe were taken from their parents to government
            boarding schools, one of which was named the Otoe Boarding School.
            Because of the government’s commitment to assimilation and
            acculturation, much of the language and culture of the
            Otoe-Missouria people was lost. In 1887, the Dawes Act further
            separated the new land the Otoe-Missouria people were on, dividing
            it into individual parcels, opening up the reservation to white
            settlers and railroad development.
          </p>
          <p>
            Currently, most of the 3100 members of the Otoe-Missouria tribe live
            in Oklahoma. The tribe is progressively led by a Tribal Council
            intent on using their gaming revenue for other sustainable long term
            projects in the realms of hospitality, natural resource development,
            loan companies, and more. They also celebrate their culture through
            feasts, annual powwows, dances, and the guidance of song leaders to
            recognize lineage, clan and tribal ties. To learn more about the
            Otoe-Missouria people, visit
            <a class="di" href="www.omtribe.org">www.omtribe.org</a>.
          </p></collapsible-tab
        >
      </div>
      <curved-border :color="'red'" style="z-index: 100"></curved-border>
    </div>
    <div
      class="
        section
        bg-lgct-red
        flex
        justify-center
        items-center
        relative
        overflow-hidden
      "
    >
      <stacked-card-horizontal class="w-75-l z-0">
        <template v-slot:gps> 47.0326 N 88.5842 W</template>
        <template v-slot:heading
          ><div>Anishinabewaki ᐊᓂᔑᓈᐯᐗᑭ,</div>
          <div>Očhéthi Šakówiŋ Land</div></template
        >
        <template v-slot:subtitle
          >Currently known as Michigan - Houghton County</template
        >
        <template v-slot:plot><a href="https://www.landgrabu.org/lands/mi190540n0340w0sn350anwct" class="underline" target="_blank">MI190540N0340W0SN3500ANWCT</a><i class="fa fa-external-link"></i></template>
        <p>
          On October 4, 1842, the United States government acquired this 160
          acre parcel as a part of the Treaty of La Pointe signed by the
          Chippewa of the Mississippi and Lake Superior. These treaties relied
          on the fabrication of a “Chippewa Nation” of tribes in this area, and
          much of the money owed by the US government was never paid. The land
          was taken in 1842, granted to the state of Connecticut in 1862,
          patented in 1866 and accepted by the university in 1893. It raised
          $121.22, which is $3,518.72 in today’s dollars.
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <land-today-tab
          style="bottom: 10em"
          class="z-0"
          :sitesObj="landTodayObjs[2]"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template>
          This parcel counts for 160 acres of the 9144.95 in Houghton County,
          Michigan. This parcel is part of a group of six parcels tied to
          Connecticut in Chassell, Michigan. The area is mostly forested, but
          has a few private homes off of Upper Massie Road.
        </land-today-tab>
        <collapsible-tab
          style="bottom: 6em"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Settler Appropriation and Uses</template>
          <p>
            In the 1826 Fond du Lac Treaty, the Ojibwe granted the United States
            the right to prospect for minerals on their land as it was
            established in the 1825 treaty, which included the modern day Upper
            Peninsula of Michigan. For hundreds of years, it was known that the
            area currently referred to as the “Keweenaw Bay” held large amounts
            of copper. In fact, a few years earlier, in 1820, Lewis Cass had led
            an expedition to survey the western part of modern day Michigan,
            with one of the objectives being to search for commercially valuable
            minerals, more specifically “the body of copper in the vicinity of
            Lake Superior.” Cass was particularly interested in the area that
            produced the massive Ontonagon Boulder, a 3,708 pound boulder of
            native copper. In tow was Henry Rowe Schoolcraft, a geologist and
            ethnographer from Albany, New York who was particularly interested
            in the study of minerals. Having looked at the boulder himself,
            Schoolcraft decided that the area must be filled with veins of the
            same mineral. After the expedition, communications and publications
            grew about the “Keweenaw copper”, and “molded the views of a nation
            hungry for news of the expanding west.” While it is difficult to say
            what the exact motivations of Cass’s involvement in the 1825 and
            1826 treaties were, given that he stated purpose for his expedition
            and the growing interest in the copper of the region, one must at
            the very least not take his stated reasons at face value. In 1831,
            Cass took up the appointment of Secretary of War, and helped to
            implement Andrew Jackson’s policy of Indian removal.
          </p>
          <p>
            Leading up to the year 1836 pressure from citizens and politicians
            led to a Senate bill that authorized the cession of Ojibwe lands.
            Lewis Cass thought that U.S. citizens could make more use of the
            pine timber, the land could be sold to white U.S. settlers, and that
            the land was unimportant to the two tribes that it bordered,
            although he was wrong. Yet still, in 1837, General W.R. Smith
            gathered together tribal leaders to discuss the purchase of their
            land, although not all of the representatives even lived on the land
            in question. Another major problem was that Governor Dodge, who
            conducted the treaty, purposefully created an amalgam of all
            separate band as the “Chippewa Nation of Indians”. By lumping
            together sovereign groups of people with competing interests, Dodge
            effectively created one entity that could be more easily eroded by
            U.S. policy. The Ojibwe thought they were signing a treaty similar
            to the 1826 treaty, where they were giving up rights to minerals and
            not the land itself and thought they would be able to continue to
            hunt, fish and gather in perpetuity, while being paid by the U.S. to
            allow its citizens to cut down timber. Dodge listened to Ojibwe
            demands, and told them “It will probably be many years, before your
            Great Father will want all these lands for the use of his white
            children”. There was no explicit language for immediate removal of
            Ojibwe from the ceded lands, but the Ojibwe did not understand that
            the treaty contained the clause “during the pleasure of the
            President”, which means that they could be removed at any time the
            president saw fit. Unaware of the full consequences, the 1837 Treaty
            of St. Peters was signed.
          </p>
          <p>
            If the 1837 Treaty was driven by the want for pine, the 1842 Treaty
            of La Pointe was driven by the copper of northern Michigan which had
            been scouted previously by Cass and Schoolcraft. This treaty
            similarly did not explicitly state removal, and the Ojibwe thought
            that it would be a fairly long time before there would be any
            cession of land. However, Robert Stuart, the conductor of the
            treaty, immediately began contemplating the eventual removal of the
            people from the land. Building on the 1837 construction of the
            “Chippewa Nation”, he included people who did not live on the ceded
            land into the treaty, and made them all common property of the
            lands. When it came time for the Ojibwe to be forcibly dispossessed,
            they could now be moved to anywhere within the “Chippewa Nation”.
            With the sovereignty of the Indigenous people effectively eroded and
            diffused through these treaties, the land ceded by the 1842 Treaty
            of La Pointe was now prepared to be exploited for financial gain.
          </p>
          <p>
            The University of Connecticut benefitted from a total of 9,144.95
            acres of land sold in Houghton county, an area extremely rich in
            copper deposits. $324.20 were paid for the land originally, and
            UConn raised $6,928.42 for its endowment. The lands taken from the
            Ojibwe were then exploited for profit in copper mining. Some of the
            largest copper mines in the world operated in this area,, like
            Calumet and Hecla which averaged 65-75 million tons of copper a
            year, culminating in 100 million pounds of copper in 1906. From
            1871-1916, the United States produced 23,323,474,177 pounds of
            copper, with Michigan never dipping below 21 percent of the copper
            production. The United States was by far the largest producer of
            copper during this period, and the copper mined in Michigan was a
            large portion of the U.S. output.
          </p>
        </collapsible-tab>
        <collapsible-tab
          style="bottom: 2em"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples of this Land</template>
          <p>
            The term “Ojibwe” denotes a number of Indigenous tribes that
            originally stewarded this parcel of land, and spanned across Ontario
            and Manitoba to Saskatchewan in Canada, and from Michigan,
            Wisconsin, Minnesota and North Dakota in the United States. These
            people are also referred to as Chippewa and Anishinaabe. Because of
            the drastic change of seasons in the region, the Ojibwe people were
            centered around the land and seasons, and moving freely during the
            changing seasons was necessary for their way of life. From the
            perspective of the United States, the Ojibwe first formally
            established ties with the Americans in 1837 through the Treaty of
            St. Peters. However, the Ojibwe had political relationships with
            outsiders for many years before that. By this time, the Ojibwe “had
            a long history of beneficial alliances with European-descended
            peoples, commencing with the French in the 1660s and, after the
            French defeat in the Seven Years War in 1763, with the British.”
            These alliances were “conducted within a framework largely derived
            from Native understandings”, and in in the earliest political
            contacts, the United States seemed to follow the this protocol. The
            first formal political conference between the Ojibwe and American
            representatives was in 1805 with the Zebulon M. Pike expedition.
            After the War of 1812, the United States again made efforts to
            establish friendly relations with the Indigenous people. The Ojibwe
            themselves dated the start of an actual alliance to the postwar
            years. Major problems seem to have began in 1825, after
            Commissioners William Clark and Lewis Cass assembled over 3,000
            representatives from numerous tribes at Prairie du Chien “with the
            object of promoting peace among the tribes of the northwest and
            establishing boundaries between each tribe.” It is after this treaty
            that the United States began to act as though it possessed authority
            over the Ojibwe. The tribes of this area had been warring for some
            time, although their disputes were not like those of nation-states,
            where war is conducted to advance political objectives like the
            control of resources and land. Nevertheless, in the 1825 meeting the
            United States suggested fixed boundaries where tribes could only
            hunt within the boundaries of another tribe with assent. The Treaty
            of Prairie du Chien did little to stop intertribal warfare, but it
            did establish a new type of relationship between the Ojibwe and
            American representatives and formally established the boundaries in
            the American mind and law, setting the people up for a future
            erosion of sovereignty and setting the land up for future
            partitioning and sale.
          </p></collapsible-tab
        >
      </div>
      <curved-border
        :color="'white'"
        :left="true"
        style="z-index: 100"
      ></curved-border>
    </div>
    <div
      class="
        section
        bg-lgct-white
        flex
        justify-center
        items-center
        relative
        overflow-hidden
      "
    >
      <stacked-card-horizontal class="w-75-l z-0" mainColor="bg-moon-gray">
        <template v-slot:gps> 40.3442 N 96.5325 W</template>
        <template v-slot:heading>Southern Pomo</template>
        <template v-slot:subtitle>Currently known as California</template>
        <template v-slot:plot><a href="https://www.landgrabu.org/lands/ca210110n0110w0sn010awhalfswct" target="_blank" class="underline">CA210110N0110W0SN010AW</a><i class="fa fa-external-link"></i></template>
        <p>
          On August 22, 1851, the United States government seized 91,966 acres
          by unratified treaty, co-signed Mas-su-ta-ka-ya, Po-mo, Sai-nell, and
          Yu-ki-as People. Of this land, Connecticut was granted two 80 acre
          parcels in 1862 and accepted by the university in 1892. Each parcel
          raised $60.61 for the university. Adjusting for 2021 inflation, that
          equates to $1759 per parcel.
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <land-today-tab
          style="bottom: 10em"
          class="z-0"
          :sitesObj="landTodayObjs[3]"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></land-today-tab
        >
        <collapsible-tab
          style="bottom: 6em"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Settler Appropriation and Uses</template>
          <p>
            Connecticut Land Grant scrip was redeemed in 1877 for two parcels in
            northern Sonoma County by John Comstock and Daniel Sink.
          </p>
          <p>
            Originally the homelands of the Southern Pomo people and the site of
            a village of ?iy.o.tok.o wi (‘at the lower field’), these parcels
            were close to a nearly 9,000 acre Mexican Rancheria, Rancho Rincon
            de Musalacon, granted by Governor Pio Pico to Francisco Berreyesa in
            1846. While the US agreed to honor the Mexican land grants when it
            took control of California following the Mexican-American War of
            1848, the US laid claim to these parcels and other California
            indigenous lands through a series of treaties negotiated in the
            early 1850s. As with treaties in other parts of the US, these
            treaties provided for minimal monetary compensation and small
            reservations of tribal lands. However, through the vigorous
            opposition of California’s senators, the Senate declined to ratify
            the treaties and the Native land rights were terminated through fiat
            with no monetary compensation or land reserves.
          </p>
          <p>
            The failure to ratify the treaties effectively endorsed the
            extra-judicial seizure of land by white settlers which was rampant
            in the Gold Rush period. This seizure was accompanied by a series of
            extermination campaigns which Benjamin Madley has characterized as
            an American Genocide. In what is now known as the Bloody Island
            Massacre, a large community of Pomo were surrounded and massacred by
            US Army forces on May 15, 1850. Madley estimates between 60 and 800
            Pomo were murdered in that attack, perhaps making it the largest
            settler killing of North American natives—larger than the murders of
            Lakota at Wounded Knee or of Pequot at Mystic.
          </p>
          <p>
            These parcels lay just to the northwest of the city of Cloverdale,
            which Daniel Sink had helped to found in 1872. Sink created a road
            on these lands, for which he charged travelers a toll to use, and
            later planted grapes. His son, William Sink would establish a winery
            in 1893, joining the burgeoning California wine industry.
            [https://soconews.org/cloverdale_reveille/opinion/columns/cloverdale-pioneers-daniel-sink/article_5f67d3c6-6c56-11e9-8101-575aba603257.html]
          </p>
        </collapsible-tab>
        <collapsible-tab
          style="bottom: 2em"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples of this Land</template>
          <p>
            The Pomo people have lived for millenia in what is today parts of
            the Northern California counties of Sonoma, Mendocino, and Lake.
            Prior to European contact, the Pomo lived in several culturally and
            linguistically distinct bands and tribes along the Pacific coast,
            redwood forests, Russian River valley, and Clear Lake areas. These
            parcels are located near the northern end of the Southern Pomo
            territory, close to the likely site of a village of ?iy.o.tok.o wi
            (‘at the lower field’). The foothills of the Russian River valley
            were rich in acorn oaks, buckeyes, small and large game, and other
            resources, and supported a flourishing population of 3,950 to 6,300
            Southern Pomo by the turn of the nineteenth century.
          </p>
          <p>
            Targeted by US settlers for extermination in the 19th century,
            including at the Bloody Island Massacre at Clear Lake on May 15,
            1850. The Pomo had previously survived expropriation and forced
            labor at the hands of Russian colonists at Fort Ross, the Spanish
            Mission system, and the Mexican rancherias. With encroachment and
            depredation, Pomo resisted, adapted, and endured, continuing to
            practice traditional arts, like basketweaving, and adopting new
            practices, like the Ghost Dance. These systematic efforts at
            displacement, assimilation, and/or extermination took a profound
            toll, with Pomo populations decimated and lands reduced by 99
            percent. Nevertheless, the Pomo people survived this attempted
            genocide, with several communities achieving Federal recognition in
            the 20th century.
          </p>
          <p>
            One such community is the Cloverdale Rancheria of Pomo Indians.
            First federally recognized in 1921, the tribe was “terminated” under
            the Rancheria Act of 1958. Thanks to the leadership of Pomo elder
            Tillie Harwick, the termination was overturned in 1983 and the
            Rancheria works to preserve, revive, and extend Pomo traditions
            including basketweaving and dance. Today including nearly 500
            members, the Cloverdale Rancheria provides key Tribal services,
            sustains and grows cultural traditions, and is working toward
            self-sufficiency and sovereignty in the Cloverdale area.
          </p></collapsible-tab
        >
      </div>
      <curved-border :color="'red'" style="z-index: 100"></curved-border>
    </div>
    <div class="section bg-lgct-red ph4">
      <h1 class="lgct-white f-subheadline mt0">Sources</h1>
      <div class="br4 bg-lgct-white lh-copy w-50-l tl pa4 center">
        <p>Tribes were identified using www.native-lands.ca</p>

<p class="b">Nebraska: </p>

<p>C. Mustful. “Resisting Removal: George Manypenny.” Colin Mustful, January 15, 2019. https://www.colinmustful.com/resisting-removal-george-manypenny/.
The Otoe-Missouria Tribe. “History.” Accessed October 7, 2021. https://www.omtribe.org/who-we-are/history/.
Nebraska Education on Location. “Otoe-Missouria Tribe,” May 12, 2015. https://nebraskaeducationonlocation.org/native-tribes/otoe-missouria-tribe/.
“Treaty of March 15, 1854 | Access Genealogy.” Accessed October 7, 2021. https://accessgenealogy.com/nebraska/treaty-of-march-15-1854.htm.</p>

<p class="b">Michigan: </p>
<p>Benedict, C. Harry. Red Metal :The Calumet and Hecla Story. Ann Arbor, 1952. http://hdl.handle.net/2027/wu.89046872255.</p>

<p>Horace J. Stevens (1908) The Copper Handbook, v.8, Houghton, Mich.: Horace J. Stevens, p.1457.</p>

<p>Horace J. Stevens (1902) The Copper Handbook, v.2, Houghton, Mich.: Horace J. Stevens, p.1457,1466.</p>

<p>Krause, David. “Henry Rowe Schoolcraft and the Native Copper of the Keweenaw.” Earth Sciences History 8, no. 1 (1989): 4–13.</p>

<p>Kugel, Rebecca. “‘In Religion and Other Things I Ought to Be the Main Leader of My People’:: The Ojibwe Reassess An Alliance; 1852–1882.” In To Be the Main Leaders of Our People, 101–38. A History of Minnesota Ojibwe Politics, 1825-1898. Michigan State University Press, 1998. http://www.jstor.org/stable/10.14321/j.ctt7zt8w1.7.
———. “‘They Show Their Disposition Pretty Plain’:: Civil and War Leadership in Symbiosis at Leech Lake, 1870–1900.” In To Be the Main Leaders of Our People, 167–98. A History of Minnesota Ojibwe Politics, 1825-1898. Michigan State University Press, 1998. http://www.jstor.org/stable/10.14321/j.ctt7zt8w1.10.
———. “‘[W]e Can Get Along Better Than You Think’:: The Ojibwe Adapt to Changing Times, 1880–1900.” In To Be the Main Leaders of Our People, 139–66. A History of Minnesota Ojibwe Politics, 1825-1898. Michigan State University Press, 1998. http://www.jstor.org/stable/10.14321/j.ctt7zt8w1.9.
———. “‘We Did Not Understand It So’:: Political Division Becomes a Resistance Strategy, 1838–1868.” In To Be the Main Leaders of Our People, 55–100. A History of Minnesota Ojibwe Politics, 1825-1898. Michigan State University Press, 1998. http://www.jstor.org/stable/10.14321/j.ctt7zt8w1.6.
———. “‘You Don’t Do Us Any Good at All by Being Here’:: The Uncertain Beginnings of the Ojibwe-American Alliance, 1825–1837.” In To Be the Main Leaders of Our People, 19–54. A History of Minnesota Ojibwe Politics, 1825-1898. Michigan State University Press, 1998. http://www.jstor.org/stable/10.14321/j.ctt7zt8w1.5.</p>

<p>Lankton, Larry. Cradle to Grave: Life, Work, and Death at the Lake Superior Copper Mines. Oxford University Press, 1993.</p>

<p>Sturgis, E. B.   The Mines handbook: An enlargement of the Copper HandBook; A Manual of the Mining Industry of North America. New York, N.Y. : Stevens Copper Handbook Co.</p>

<p class="b">California: </p>

<p>The Otoe-Missouria Tribe. “History.” Accessed October 7, 2021. https://www.omtribe.org/who-we-are/history/.
Wells, Kay. “Cloverdale Pioneers: Daniel Sink.” SoCoNews. Accessed October 7, 2021. https://soconews.org/cloverdale_reveille/opinion/columns/cloverdale-pioneers-daniel-sink/article_5f67d3c6-6c56-11e9-8101-575aba603257.html.
“Who We Are.” Accessed October 7, 2021. http://www.cloverdalerancheria.com/who-we-are.php#history.</p>

<p class="b">Montana: </p>
<p>“The Fort Shaw Boarding School | Native American Netroots.” Accessed October 7, 2021. http://nativeamericannetroots.net/diary/1241.</p>

<p>“Badger-Two Medicine – Blackfeet Nation.” Accessed October 7, 2021. https://blackfeetnation.com/badger-two-medicine/.</p>

<p>“History | University of Connecticut,” February 5, 2019. https://uconn.edu/about-us/history/.</p>

<p>Beck, Iko’tsimiskimaki. “List of Indian Boarding Schools in the United States.” The National Native American Boarding School Healing Coalition (blog). Accessed October 7, 2021. 
https://boardingschoolhealing.org/list/.</p>

<p>“Blackfeet Nation.” Accessed October 7, 2021. https://blackfeetnation.com/.</p>

<p>“Iinnii Buffalo Spirit Center – Blackfeet Nation.” Accessed October 7, 2021. https://blackfeetnation.com/iinnii-buffalo-spirit-center/.</p>

<p>Métis Nation of Ontario. “Métis Historic Timeline.” Accessed October 7, 2021. https://www.metisnation.org/culture-heritage/metis-timeline/.</p>

<p>Métis Nation of Ontario. “Métis Nation of Ontario | Culture and Heritage | Métis of Ontario.” Accessed October 7, 2021. https://www.metisnation.org/culture-heritage/.</p>

<p>Métis Nation of Ontario. “The Métis and the War of 1812.” Accessed October 7, 2021. https://www.metisnation.org/culture-heritage/metis-and-the-war-of-1812/.</p>
      </div>
    </div>
  </div>
</template>

<script>
import CurvedBorder from "../components/CurvedBorder.vue";
import StackedCardHorizontal from "../components/StackedCardHorizontal.vue";
import CollapsibleTab from "../components/CollapsibleTab.vue";
import ipsum from "../ipsum.js";
import RoundedCard from "../components/RoundedCard.vue";
import HomeLogo from "../components/HomeLogo.vue";
import LandTodayTab from '../components/LandTodayTab.vue';
export default {
  name: "Parcels",
  components: {
    StackedCardHorizontal,
    CurvedBorder,
    CollapsibleTab,
    RoundedCard,
    HomeLogo,
    LandTodayTab
  },
  data() {
    return {
      ipsum: ipsum,
      tabs: this.$children,
      activeTab: null,
      landTodayObjs: [
        {
          name: "Montana",
          sites: [
            {name: "Residential Land",img: require('../assets/Parcel Imgs/MontanaParcel/MontanaParcel.png')},]
        },
         {
          name: "Nebraska",
          sites: [
            {name: "Nebraska Wesleyan Campus",img: require('../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png'), link: "https://www.google.com/maps/@40.8376097,-96.6497008,3a,75y,303.47h,94t/data=!3m7!1e1!3m5!1shguwLJGDUi18DIj7SoguJw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DhguwLJGDUi18DIj7SoguJw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D160.32758%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"},
            {name: "Walgreens",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-walgreens.png'),link: "https://www.google.com/maps/@40.8378821,-96.6534696,3a,75y,147.32h,86.78t/data=!3m7!1e1!3m5!1sycZZ6bUOWQnkBbLRviSOrw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DycZZ6bUOWQnkBbLRviSOrw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D92.46353%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656"},
            {name: "Lincoln Police Dept Northeast Team Station",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-lincoln-pd.png'),link: "https://www.google.com/maps/@40.8372547,-96.6526069,3a,75y,169.98h,86.18t/data=!3m6!1e1!3m4!1seLwAoF7_oJot-DDlWT24cQ!2e0!7i16384!8i8192"},
            {name: "Ayers & Ayers, Inc. Construction Company",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska_ayers-ayers.png'), link: "https://www.google.com/maps/place/Makovicka+Physical+Therapy/@40.8372615,-96.652958,3a,75y,196.57h,91.24t/data=!3m7!1e1!3m5!1szaOIoeFH7z7od8x4WM2edQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DzaOIoeFH7z7od8x4WM2edQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D270.15237%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x8796bc10082b9e29:0xa9a96b9962053ade!8m2!3d40.8369281!4d-96.6533166"},
            {name: "Makovicka Physical Therapy",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-pt-makovicka.png'),link: "https://www.google.com/maps/place/Makovicka+Physical+Therapy/@40.837263,-96.6531987,3a,75y,183.91h,89.17t/data=!3m6!1e1!3m4!1sorCv5zVwhgT0WMjEhd07ew!2e0!7i16384!8i8192!4m5!3m4!1s0x8796bc10082b9e29:0xa9a96b9962053ade!8m2!3d40.8369281!4d-96.6533166"},
            {name: "United Methodist Church",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-methodistchurch.png'), link: "https://www.google.com/maps/@40.8393145,-96.651225,3a,75y,334.1h,100.38t/data=!3m6!1e1!3m4!1s11tX3_-QEIkTlmFlxKGukw!2e0!7i16384!8i8192"},
            {name: "Art Studio/Gallery",img: require('../assets/lgct-logo.png')},
            {name: "Beauty  and Tattoo Salons",img: require('../assets/lgct-logo.png')},
            {name: "Plumbing Business",img: require('../assets/lgct-logo.png')},
            {name: "Massage Studio - Empowered Healing",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-empoweredhealing.png'), link: "https://www.google.com/maps/@40.8398342,-96.6536387,3a,75y,140.58h,85.42t/data=!3m6!1e1!3m4!1sli-dUWNs-TdFalAhCF5x6A!2e0!7i16384!8i8192"},
            {name: "Automotive Shop",img: require('../assets/lgct-logo.png')},
            {name: "Sorority and Fraternity House",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-frat.png'),link: "https://www.google.com/maps/@40.840326,-96.649772,3a,75y,316.78h,86.68t/data=!3m7!1e1!3m5!1sdYIIbxQJkOveH6xB5kv0HA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DdYIIbxQJkOveH6xB5kv0HA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D169.75478%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656"},
            {name: "Chain Restaurants",img: require('../assets/lgct-logo.png')},
            {name: "Building Consultancy - Branch Pattern",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-branchpattern.jpeg'),link: "https://www.google.com/maps/@40.8409983,-96.6537131,3a,75y,81.36h,83.34t/data=!3m7!1e1!3m5!1szEdTrDQkwVYyqsXIPg_JvA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DzEdTrDQkwVYyqsXIPg_JvA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D67.79744%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"},
            {name: "Jeweler",img: require('../assets/Parcel Imgs/NebraskaParcel/nebraska-jewelers.png'),link: "https://www.google.com/maps/place/24%2F7+Commercial+Handyman+Services/@40.840104,-96.6536389,3a,75y,103.56h,84.31t/data=!3m6!1e1!3m4!1syfs3J7dm1LZPYxkCefKmVw!2e0!7i16384!8i8192!4m12!1m6!3m5!1s0x8796bc10082b9e29:0xa9a96b9962053ade!2sMakovicka+Physical+Therapy!8m2!3d40.8369281!4d-96.6533166!3m4!1s0x8796bc05791265df:0x260d76bcf1e92282!8m2!3d40.8399646!4d-96.6535517"}],
        },
        {
          name: "Michigan",
          sites: [
            {name: "Residential Land",img: require('../assets/Parcel Imgs/Michigan-02.png')},]
        },
          {
          name: "California",
          sites: [
            {name: "Residential Land",img: require('../assets/Parcel Imgs/CaliforniaParcel/California.png')},]
        },
      ],
    };
  },
  methods: {
    toggleTab(msg, e) {
      if (this.activeTab === e) {
        this.activeTab.showContent = !this.activeTab.showContent;
      } else {
        if (this.activeTab) {
          this.activeTab.showContent = false;
        }
        this.activeTab = e;
        this.activeTab.showContent = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lower {
  height: 28%;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>