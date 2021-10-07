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
      <stacked-card-horizontal class="w-75-l z-0">
        <template v-slot:gps> 46.5 N 93.9 W </template>
        <template v-slot:heading><div>Minnesota People (needed)</div></template>
        <template v-slot:subtitle>Currently known as Minnesota</template>
        <template v-slot:plot>MN051360N0260w0sn250</template>
        <p>
          Need text here (On March 15, 1854 under Treaty No. 265 was signed by
          the United States government and the Otoe and Missouria People, ceding
          thousands of acres of Native land to the US Government to create land
          parcels that would eventually become part of the land used in the
          Morrill Act. One particular land parcel was 160 acres in size and cost
          the United States $20.67. The land ceded was granted to the University
          of Connecticut in 1862, which made a return of six times the original
          price - $121.22 was raised for the university from this one parcel of
          land. Today, residential homes and Currently known as Nebraska
          Wesleyan University sit on this parcel.)
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <collapsible-tab
          style="bottom: 10em"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 6em"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Settler Appropriation and Uses</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 2em"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples of this Land</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
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
        <template v-slot:heading
          ><div>Jiwere (Otoe-Missouria),</div>
          <div>Pâri (Pawnee),</div>
          <div>Očhéthi Šakówiŋ Land</div></template
        >
        <template v-slot:subtitle>Currently known as Nebraska</template>
        <template v-slot:plot>NE060100N0070E0SN170ANECT</template>
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
        <collapsible-tab
          style="bottom: 10em"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></collapsible-tab
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
        <template v-slot:plot>MI190540N0340W0SN3500ANWCT</template>
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
        <collapsible-tab
          style="bottom: 10em"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template>
          This parcel counts for 160 acres of the 9144.95 in Houghton County,
          Michigan. This parcel is part of a group of six parcels tied to
          Connecticut in Chassell, Michigan. The area is mostly forested, but
          has a few private homes off of Upper Massie Road.
        </collapsible-tab>
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
        <template v-slot:heading>Southern Pomo Land</template>
        <template v-slot:subtitle>Currently known as California</template>
        <template v-slot:plot>CA210110N0110W0SN010AW</template>
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
        <collapsible-tab
          style="bottom: 10em"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></collapsible-tab
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
        <template v-slot:gps>45°27’34’’N 112°16’10’’W</template>
        <template v-slot:heading><div>Native People Inhabiting the Land: </div><div>Niitsítpiis-stahkoii ᖹᐟᒧᐧᐨᑯᐧ ᓴᐦᖾᐟ (Blackfoot / Niitsítapi ᖹᐟᒧᐧᒣᑯ) </div>
<div>Michif Piyii (Métis) Apsaalooké (Crow) Salish Kootenai (Flathead) Očhéthi Šakówiŋ </div>
</template>
        <template v-slot:subtitle>Currently known as Montana - Madison County</template>
        <template v-slot:plot>MT200040S0050W0SN300AS1/2NWCT</template>
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
        <collapsible-tab
          style="bottom: 10em"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></collapsible-tab
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
  </div>
</template>

<script>
import CurvedBorder from "../components/CurvedBorder.vue";
import StackedCardHorizontal from "../components/StackedCardHorizontal.vue";
import CollapsibleTab from "../components/CollapsibleTab.vue";
import ipsum from "../ipsum.js";
import RoundedCard from "../components/RoundedCard.vue";
import HomeLogo from "../components/HomeLogo.vue";
export default {
  name: "Vignettes",
  components: {
    StackedCardHorizontal,
    CurvedBorder,
    CollapsibleTab,
    RoundedCard,
    HomeLogo,
  },
  data() {
    return {
      ipsum: ipsum,
      tabs: this.$children,
      activeTab: null,
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