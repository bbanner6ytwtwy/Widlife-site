const img =[
  "https://images.unsplash.com/photo-1607274134639-043342705e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1541804536-78217d100fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1605477899141-ac050a727db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJoaW5vfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
]
const people = [
  {
    img:"https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwZ3V5JTIwbXVzY2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name:"Bartholomew Puck Puckingham",
    description: "Director of Animal Shenanigans",
    contact: ["Email: bartythepuck@zooantics.com",
      "Phone: +1 (555) PUCK-ROFL",
      "Twitter: @ShenaniganMasterBarty",
      "Instagram: @PuckinhamBarty"],
    Position:"Bartholomew Puck Puckingham, the Director of Animal Shenanigans, brings his mischievous nature and knack for orchestrating hilarious pranks to create a joyous and entertaining atmosphere in the zoo."
  },
  {
    img:"https://images.unsplash.com/photo-1675379067601-252f63636654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdCUyMGd1eSUyMG11c2NsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name:"Percival Quince Quinceworthy",
    description: "Chief Feeding Ninja",
    contact: ["Email: percivalninja@zooantics.com",
    "Phone: +1 (555) NINJA-FOOD",
    "Twitter: @FeedingNinjaPercy",
    "Instagram: @QuinceworthyNinja"],
    Position:"Percival Quince Quinceworthy, the Chief Feeding Ninja, showcases his lightning-fast reflexes and ninja-like precision as he navigates through the zoo, delivering meals with agility and ensuring the animals' taste buds are delighted."
  },
  {
    img:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZlcnklMjBjdXRlJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name:"Prudence Rosalind Rosalindsworth",
    description: "Ambassador of Cuteness",
    contact: ["Email: prudencethecutie@zooantics.com",
    "Phone: +1 (555) CUTE-ZOO4U",
    "Twitter: @CutenessAmbassadorPrue",
    "Instagram: @RosalindsworthPrudence"],
    Position:"Prudence Rosalind Rosalindsworth, the Ambassador of Cuteness, captivates visitors with her virtuous charm and a collection of adorable baby animals. With her delightful presence, she spreads cuteness and brings smiles to the faces of everyone in the zoo."
  },
  {
    img:"https://images.unsplash.com/photo-1558036577-c22c5a5dd6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHZlcnklMjBjdXRlJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name:"Felicity Genevieve Genevieveborough",
    description: "zookeeper",
    contact: ["Email: felicityzookeeper@zooantics.com",
    "Phone: +1 (555) ZOO-KEEP1",
    "Twitter: @FierceKeeperFelicity",
    "Instagram: @GenevieveboroughZooKeeper"],
    Position:"Felicity Genevieve Genevieveborough takes on the role of a zookeeper, dedicated to the care and well-being of the animals. Her contacts reflect her passion and commitment to her profession, with a touch of elegance and uniqueness in her name."
  }
]
const imgs = [
    {
      url:  "https://images.unsplash.com/photo-1555677284-6a6f971638e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3dsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      g: "grayscale hover:grayscale-0",
      opi: 0.5,
      opl: 1
    },
    {
      url:  "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFiYml0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      g: "hover:grayscale ",
      opi: 1,
      opl: 0.5
    },
    {
      url:  "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      g: "grayscale hover:grayscale-0",
      opi: 0.5,
      opl: 1
    },
    {
      url:  "https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGN1dGUlMjBhbmltYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      g: "hover:grayscale",
      opi: 1,
      opl: 0.5
    },
    {
      url:  "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGN1dGUlMjBhbmltYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      g: "grayscale hover:grayscale-0",
      opi: 0.5,
      opl: 1
    },
    {
      url:  "https://images.unsplash.com/photo-1570288685280-7802a8f8c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGN1dGUlMjBhbmltYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      g: "hover:grayscale ",
      opi: 1,
      opl: 0.5
    }
];
export {imgs, img, people}