const planets = {
  Tatooine: {
    long: 5.5153,
    lat: 22.8268,
    timezone: 0,
    idApi: 1,
    pictureInfo: "Tatooine",
    faction: "Hutt",
    creature: ["Bantha", "Dewback"],
    text: "Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.",
  },
  Nabooh: {
    long: 0.3401,
    lat: 46.5802,
    timezone: 0,
    idApi: 8,
    pictureInfo: "Nabooh",
    faction: "Empire",
    creature: ["Kaadu", "Opeeseakiller"],
    text: "An idyllic world close to the border of the Outer Rim Territories, Naboo is inhabited by peaceful humans known as the Naboo, and an indigenous species of intelligent amphibians called the Gungans. Naboo's surface consists of swampy lakes, rolling plains and green hills. Its population centers are beautiful -- Naboo's river cities are filled with classical architecture and greenery, while the underwater Gungan settlements are a beautiful display of exotic hydrostatic bubble technology.",
  },
  Coruscant: {
    long: 74.3141,
    lat: 31.5656,
    timezone: 5,
    idApi: 9,
    pictureInfo: "Coruscant",
    people: [13, 80],
    faction: "Empire",
    creature: ["Kouhun", "Tooka"],
    text: "Coruscant is the vibrant heart and capital of the galaxy during the age of the Empire, featuring a diverse mix of cultures and citizens spread over hundreds of levels. Once the home of the main Jedi Temple -- the central hub of Jedi training and learning for over a thousand generations and the repository of the Jedi Archives -- these traditions ended when the planet bore witness to Order 66.",
  },
  Kashyyyk: {
    long: -60.0257,
    lat: -3.117,
    timezone: -4,
    idApi: 14,
    pictureInfo: "Kashyyyk",
    people: [],
    faction: "Rebel",
    creature: ["Cancell", "Shyyyo"],
    text: "Kashyyyk is the Wookiee homeworld, covered in dense forest. While Wookiees build their homes in the planet's trees, they are not a primitive species, and Kashyyyk architecture incorporates sophisticated technology. One of the last battles of the Clone Wars was fought here under the leadership of Yoda, with Wookiees and clones battling the Separatist droid army -- until the Emperor issued Order 66, commanding the clones to slaughter all Jedi. Yoda survived, however, with the help of natives Chewbacca and Tarfful, who used a hidden shuttle to evacuate the Jedi Master from the planet.",
  },
  Hoth: {
    long: -18.0,
    lat: -77.0,
    timezone: +9,
    idApi: 4,
    pictureInfo: "Hoth",
    people: [13, 80],
    faction: "Rebel",
    creature: ["Tauntaun", "Wampa"],
    text: "Hoth is the sixth planet in the remote system of the same name, and was the site of the Rebel Alliance's Echo Base. It is a world of snow and ice, surrounded by numerous moons, and home to deadly creatures like the wampa.",
  },
  DeathStar: {
    long: 22.5384,
    lat: 5.6979,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
    text: "The DS-1 Orbital Battle Station was originally designed by the Geonosians before the Galactic Republic and later the Galactic Empire took over the project. However, the plans for the battle station were stolen by the Rebel Alliance from Scarif, leading to its destruction at the Battle of Yavin, but not before it unleashed its planet-destroying cannon on Alderaan, Jedha City, and Scarif."
  },
  Mustafar: {
    long: 22.5384,
    lat: 5.6979,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
    text: "Mustafar was a planet within the eponymous system of the Atravis sector, in the Outer Rim Territories. It was a small world situated in grid square L-19 of the Standard Galactic Grid, and it lay on the Tosste Spur trade route, off the Rimma Trade Route. A part of the Western Reaches, Mustafar was located 53,000 light-years from the galaxy's Core. Nourished by the power of the Bright Star artifact, it was once a lush garden world that thrived with life."
  },
  Endor: {
    long: 22.5384,
    lat: 5.6979,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
    text: "A remote moon in the Endor system of the Outer Rim Territories, Endor was covered in dense woodlands, tall mountains, and savannas, and home to the sentient Ewok, Dulok, and Yuzzum species. The semi-sentient Gorax also dwelled on the moon as well as the Wistie. Some of Endor's trees reached more than 1,000 meters in height. It contained a breathable atmosphere to humans and 8% surface water. It also had two suns: Endor I and Endor II."
  },
  Felucia: {
    long: 22.5384,
    lat: 5.6979,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
    text: "Felucia was a remote world in the Felucia system, overrun with thick, colorful, and humid jungle made up by a unique combination of fungi species. The jungle was punctuated with small farming villages populated by the planet's native Felucians, as well as occasional cities such as the capital, Kway Teow. Felucia was governed by the Commerce Guild, who represented the planet's corporate interests on the galactic stage."
  },
  Alderaan: {
    long: 22.5384,
    lat: 5.6979,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
    text: "From space, the planet of Alderaan, located in the star system of the same name, appeared as a blue-green orb enveloped in a white web of clouds. Its surface had vast bodies of water and was covered in snow-capped mountains, with patches of green grassy hills. Alderaan was known to the galaxy as 'the planet of beauty.' Alderaanians were very artistic and lived for this beauty, but the planet still hid treacherous cliffs and forgotten crevasses. Famous natural landmarks of Alderaan included the Cloudshape Falls, the Glarus Lagoons, and the Isatabith rain forest."
  },
};

export default planets;
