const express = require("express");
const app = express();

app.use(require("cors")());

const port = process.env.PORT || 3000;

const DATA = {
  facts: [
    "Male humpback whales found in U.S. waters sing complex songs in winter breeding areas in waters near Hawaii, in the Caribbean, and elsewhere that can last up to 20 minutes and be heard miles away.",
    "The blue whale is the largest animal that ever lived and can grow to 90 or more feet and weigh as much as 24 elephants! That’s more than 330,000 pounds (150,000 kg).",
    "Some species of whales are among the longest lived mammals. Scientists estimate bowhead whales (a baleen whale found in the Arctic) can live for more than 200 years, and killer whales (a toothed whale found in various habitats worldwide) can live for more than 100 years.",
    "Killer whales are highly social and often travel in groups that are matrifocal—a family unit focused or centered on the mother.",
    'Beluga whales have flexible necks, allowing them to move their heads. Their complex communication repertoire of whistles, clicks, and chirps has prompted the nickname "canaries of the sea."',
    "Gray whales make one of the longest annual migrations of any mammal: they travel about 10,000 miles (16,000 km) round trip!",
    "The minke whale is the smallest baleen whale in North American waters.",
    "North Atlantic right whales gather small organisms near the water surface, straining seawater with their long baleen plates. The whales’ surface feeding behavior and buoyancy make them vulnerable to collisions.",
    "Sperm whales were almost driven to extinction by commercial whalers who sought the whales’ blubber and the unique oil derived from the “spermaceti organ” found in their massive heads. The spermaceti organ is a key part of their echolocation system.with ships.",
    "In 2014, a Cuvier’s beaked whale made the deepest and longest dive ever recorded for a cetacean when it reached a depth of 1.9 miles (2,992 m) and stayed submerged for more than 2 hours.",
  ],
  attribution:
    "NOAA Fisheries. (2017, February 13). 10 Wonderful Whale Facts. https://www.fisheries.noaa.gov/feature-story/10-wonderful-whale-facts",
};

app.get("/", (req, res) => {
  res.send("Hello from Whale Facts 🐳");
});

app.get("/fact", (req, res) => {
  res.send({
    fact: DATA.facts[Math.floor(Math.random() * DATA.facts.length)],
    attribution: DATA.attribution,
  });
});

app.listen(port, () => {
  console.log(`🐳 Whale Facts listening on port ${port}`);
});
