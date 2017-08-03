const user = {
  name: "Deja Vu",
  location: "Detroit, Michigan",
  occupations: ['Electrical Engineer', 'Continuous Improvement Manager', 'Reliability Engineer', 'Full Stack Developer'],
  hobbies: [
    {
      name: "Basketball",
      type: "Sport"
    },
    {
      name: "Running",
      type: "Exercise"
    },
    {
      name: "Investment Analysis",
      type: "Reading"
    }
  ],
  family: [
    {
      name: "Katherine",
      relation: "spouse",
      gender: "female"
    },
    {
      name: "Warren Buffet",
      relation: "The Big Pappi",
      gender: "male"
    },{
      name: "Isaac Newton",
      relation: "Grandpappi",
      gender: "male"
    }
  ],
  restaurants: [
    {
      name: "Eddie V's Prime Seafood and Steak",
      type: "luxury",
      rating: 10
    },
    {
      name: "Fisherman's Market - Seafood",
      type: "classic",
      rating: 7
    },
    {
      name: "Fogo De Chao",
      type: "Buffet",
      rating: 8
    }
  ]
}
module.exports = {
    user: user
}

