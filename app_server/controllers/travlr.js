const trips = [
    {
        name: "Weekend in Boston",
        length: "3 nights",
        resort: "Harbor View Inn",
        perPerson: "$650",
        image: "images/boston.jpg",
        description: "A short city trip with food, history, and waterfront views."
    },
    {
        name: "Mountain Trip to Denver",
        length: "5 nights",
        resort: "Rocky Point Lodge",
        perPerson: "$980",
        image: "images/denver.jpg",
        description: "A relaxing trip with mountain scenery, hiking, and fresh air."
    },
    {
        name: "Beach Stay in Miami",
        length: "4 nights",
        resort: "Sunny Coast Resort",
        perPerson: "$875",
        image: "images/miami.jpg",
        description: "A warm beach vacation with shopping, food, and ocean views."
    }
];

// Home page
module.exports.home = (req, res) => {
    res.render('home', { title: 'Travlr Getaways' });
};

// Travel page
module.exports.travel = (req, res) => {
    res.render('index', { title: 'Travel', trips: trips });
};