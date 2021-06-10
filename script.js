const countries = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Bali', 'Belarus', 'Belgium', 'Bosnia', 'Brazil', 'Bulgaria', 'Canada', 'China', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Japan', 'Jermacia', 'Kazakhstan', 'Kenya', 'Kosovo', 'Liechtenstein', 'Latvia', 'Lithuania', 'Luxemburg', 'Macedonia', 'Malta', 'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'Serbia', 'Slovakia', 'Slovinia', 'South africa', 'Spain', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United Kingdom', 'United States', 'Vatican City'];
const activities = ['Rock Climbing', 'Snowboarding', 'Surfing', 'Shark Wrestling', 'Horse Riding', 'Motorcross', 'Stamp Collecting', 'Bungee Jumping', 'Skydiving', 'Scuba Diving', 'Snake Singing', 'Skiing', 'Base Jumping', 'Rhino Rangerling', 'Hiking', 'Drinking until you wet your pants', 'Sandcastle Scupltor', 'Dolphin Grooming', 'Skateboarding'];
const transport = ['Plane', 'Boat', 'Car', 'Motorbike', 'Truck', 'By Foot', 'Hitch Hiking', 'Unicycle', 'Row Boat', 'Camel', 'Hot Air Balloon', 'Horseback', 'Penny-fathing', 'Train', 'Elephant'];

const randomString = arr => {
    let randomIndex = Math.floor(Math.random() * arr.length -1);
    let stringIndex = arr[randomIndex];
        return stringIndex;
};

const adventureImpossible = () => {
    let country1 = randomString(countries);
    let country2 = randomString(countries);
    let activity = randomString(activities);
    let transportMethod = randomString(transport);
        if (country1 === country2) {
            country2 = randomString(countries);
        };
    console.log(`Travel from ${country1} to ${country2} to participate in ${activity}. Your means of transport is ${transportMethod}. GOOD LUCK!!!`);
};
adventureImpossible();
