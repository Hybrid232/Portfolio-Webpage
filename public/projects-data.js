// Project data for the portfolio. Add, remove, or reorder projects here;
// project.js imports this list and renders the cards from it.
//
// Optional fields per project:
//   video:     { src: embed URL, page: public URL to watch it, title } - shown as the first modal slide
//   itchEmbed: { src: itch.io widget URL, height } - rendered inside the card
export const projects = [
  {
    title: "That's No Deer",
    section: "Personal Projects",
    tags: ["Unity", "C#", "Game Design", "Survival Horror"],
    description: "A first-person survival horror game I made solo in Unity. After crashing your car into something in the forest, you step out to investigate and have to outsmart what is hunting you in the dark using stealth, timed flashlight stuns, and hiding spots.",
    points: ["Solo developer: design, programming, and level building.", "Built the stealth, flashlight-stun, and hiding mechanics in C#.", "Started in March 2025, picked back up in July 2026, and released on itch.io."],
    video: {
      src: "https://www.youtube.com/embed/dbSgrhJIbiI",
      page: "https://www.youtube.com/watch?v=dbSgrhJIbiI",
      title: "That's No Deer trailer"
    },
    imageModal: ["./images/personal-projects/TND/TND-Icon.png",
      "./images/personal-projects/TND/TND-SC1.jpg",
      "./images/personal-projects/TND/TND-SC2.jpg",
      "./images/personal-projects/TND/TND-SC3.jpg",
      "./images/personal-projects/TND/TND-SC4.jpg",
      "./images/personal-projects/TND/TND-SC5.jpg",
    ],
    itchEmbed: {
      src: "https://itch.io/embed/5210870?linkback=true&border_width=5&bg_color=000000&fg_color=ffffff&link_color=cd064a&border_color=662f2f",
      height: 175
    },
    links: ["https://glass-top-hat-games.itch.io/thats-no-deer",
      "https://www.youtube.com/watch?v=dbSgrhJIbiI"],
    linkImgs: ["./images/icons/itchio.png", "./images/icons/youtube-img.png"]
  },

  {
    title: "Messaging Candy Bar Links",
    section: "Personal Projects",
    tags: ["HTML", "CSS", "Work Project"],
    description: "A self-initiated work project designed to create a centralized hub for the applications our team uses most frequently, improving accessibility and workflow efficiency.",
    points: ["Took initiative in my job to work on this project.", "Understood more about how Team Dynamix works with HTML & CSS."],
    imageModal: ["./images/personal-projects/TD/candy-td.png"],
    links: ["https://github.com/Hybrid232/Tier_3_Candy"],
    linkImgs: ["./images/icons/Github.png"]
  },

  {
    title: "The Subway Nightmare",
    section: "Personal Projects",
    tags: ["Unity", "C#", "Game Design"],
    description: "My first horror game I developed away from school. I used Unity for the game engine, and C# for the programming language.",
    points: ["Completed in 2 months.", "Taught me it is possible to create a good game with a close deadline", "Over 200 views & 70 downloads."],
    imageModal: ["./images/personal-projects/SN/SNGame.png",
      "./images/personal-projects/SN/sn-mod1.png",
      "./images/personal-projects/SN/sn-mod2.png",
      "./images/personal-projects/SN/sn-mod3.png",
      "./images/personal-projects/SN/sn-mod4.png",
    ],
    itchEmbed: {
      src: "https://itch.io/embed/1712110?linkback=true&bg_color=410000&fg_color=ffffff&link_color=970010&border_color=333333",
      height: 167
    },
    links: ["https://glass-top-hat-games.itch.io/the-subway-nightmare",
      "https://www.youtube.com/watch?v=976bjylyqRA&t=5s"],
    linkImgs: ["./images/icons/itchio.png", "./images/icons/youtube-img.png"]
  },

  {
     title: "CubeRunner Deluxe",
     section: "Personal Projects",
     tags: ["Unity", "C#", "Game Design", "Highschool Project"],
     description: "I developed this game over my senior year of high school as my senior project. It's a better version of the previous Cuberunner game I made my junior year.",
     points: ["Features multiple worlds with levels in them.", "Taught me how to utilize my time between this project and school.", "Learned how to improve apon previous projects."],
     imageModal: ["./images/personal-projects/CRD/CRDGame.png",
      "./images/personal-projects/CRD/cdr-mod1.png",
      "./images/personal-projects/CRD/cdr-mod2.png",
      "./images/personal-projects/CRD/cdr-mod3.png",
     ],
     itchEmbed: {
       src: "https://itch.io/embed/1235617?border_width=5&bg_color=e4ff67&fg_color=327345&link_color=ff2a2a&border_color=9dbd9a",
       height: 175
     },
     links: ["https://glass-top-hat-games.itch.io/cuberunner-deluxe"],
     linkImgs: ["./images/icons/itchio.png"]
  },





  {
    title: "Paint Pal",
    section: "Class Projects",
    tags: ["React Native"],
    description: "Used react native for the first time to make a mobile painting app.",
    points: ["Learned basics of react language", "Custom drawing colors for user to choose from", "Has a gallary but ran out of time to get that feature to work"],
    imageModal: ["./images/class-projects/paint-pal/derpy-doo.jpg",
      "./images/class-projects/paint-pal/pp-main.png",
      "./images/class-projects/paint-pal/pp-draw.png"
    ],
    links: ["https://github.com/Hybrid232/PaintPal.git"],
    linkImgs: ["./images/icons/Github.png"]
  },
  {
    title: "Beedle's Web Shop",
    section: "Class Projects",
    tags: ["HTML", "CSS", "JavaScript", "Node.js",],
    description: "Little Ecommerce project learning how to use Google Firebases' Database.",
    points: ["Database work for each of the items", "Learned more on how JavaScript works with firebase.", "Understanding the inner workings of backend development."],
    imageModal: ["./images/class-projects/beedles-web-shop/beedles-web-shop-main.png",
      "./images/class-projects/beedles-web-shop/bws-items.png",
      "./images/class-projects/beedles-web-shop/bws-stash.png"
    ],
    links: ["https://github.com/Hybrid232/Beedle-s-Web-Shop.git",
      "https://test-beb80.web.app/index.html"],
    linkImgs: ["./images/icons/Github.png", "./images/icons/link.png"]
  },

  {
    title: "Tanks Alot",
    section: "Class Projects",
    tags: ["Python", "Networking", "Game Design"],
    description: "Utilizing Python sockets and Pygame to create a networking tank game that connects to local LAN.",
    points: ["Multiplayer tank combat", "LAN socket networking", "Custom physics & collision"],
    imageModal: ["./images/class-projects/tanks-alot/ta-p1game.png",
      "./images/class-projects/tanks-alot/ta-p2game.png",
      "./images/class-projects/tanks-alot/ta-p4game.png",
      "./images/class-projects/tanks-alot/ta-menu.png"
    ],
    links: ["https://github.com/Hybrid232/TankNetworkGame.git"],
    linkImgs: ["./images/icons/Github.png"]
  },

  {
    title: "TriviaTime",
    section: "Class Projects",
    tags: ["HTML", "JavaScript", "Node.js", "API's"],
    description: "A trivia game that uses an online trivia API to pull random trivia questions.",
    points: ["Learned how to use Node.js for the backend.", "Understood more about the purpose of API's and how they work.", "Refresher on combining HTML, CSS, & JavaScript."],
    imageModal: ["./images/class-projects/trivia-time/TriviaTime.png",
      "./images/class-projects/trivia-time/tt-question.png",
      "./images/class-projects/trivia-time/tt-answers.png"
    ],
    links: ["https://github.com/Hybrid232/TriviaTime.git"],
    linkImgs: ["./images/icons/Github.png"]

  },



  {
    title: "RUNMAN",
    section: "Team Projects",
    tags: ["React", "Vue", "Node.js", "AWS"],
    description: "Modern music streaming has made listening effortless, yet playlists have become sterile, automated lists with zero personality. For iHack 2026 (Theme: Re-Inventing the Past, Category: Innovating Yesterday), we asked a simple ''what if'': What if the Sony Walkman hadn't faded into nostalgia, and instead grew alongside modern technology to shape how digital music libraries work today? The Walkman walked so Runman could run—bringing back the fun, visual style, and personal touch of making and sharing real mixtapes.",
    points: ["My focus was the React and Library page.", "Created the way for users to customize cassettes, library drawer, drag, drop, and rotate of cassettes, and the Runman player that plays the cassette audio."],
    video: {
      src: "https://player.vimeo.com/video/1246914680?h=6fb3900648",
      page: "https://vimeo.com/1246914680",
      title: "RUNMAN hackathon demo"
    },
    imageModal: ["./images/team-projects/RM/RUNMAN-Logo.jpeg",
      "./images/team-projects/RM/LandingPage.png",
      "./images/team-projects/RM/LibraryPage.png",
      "./images/team-projects/RM/ExplorePage.png",
      "./images/team-projects/RM/AccountPage.png",
    ],
    links: ["https://github.com/Hybrid232/RUNMAN",
      "https://vimeo.com/1246914680"
    ],
    linkImgs: ["./images/icons/Github.png", "./images/icons/link.png"]
  },


  {
    title: "Iron Age Beasts",
    section: "Team Projects",
    tags: ["Godot", "C#", "Game Dev"],
    description: "Team of 5 friends, working on a Zelda Souls Like game. Utilizing godot and C# for the language. We presented this at the BYU-Idaho Game Dev Expo and won 1st place, as well as the award for best game design.",
    points: ["3 Programmers, 1 Sound Lead, 1 Art Lead", "My tasks are to keep lead the meetings we have, and to work on player/enviorment quality", "The team plans on publishing this project on steam when we get it ready for that"],
    video: {
      src: "https://www.youtube.com/embed/-gcB-f1oBuw",
      page: "https://youtu.be/-gcB-f1oBuw",
      title: "Iron Age Beasts video"
    },
    imageModal: ["./images/team-projects/IAB/IAB-Page.png",
      "./images/team-projects/IAB/IronAgeBeasts.png",
      "./images/team-projects/IAB/iab-mod1.png",
      "./images/team-projects/IAB/iab-mod2.png",
      "./images/team-projects/IAB/iab-mod3.png",
      "./images/team-projects/IAB/iab-mod4.png",
      "./images/team-projects/IAB/iab-team.jpg",
      "./images/team-projects/IAB/iab-certif.jpg",
    ],
    links: ["https://github.com/Hybrid232/Iron-Age-Beasts.git",
      "https://youtu.be/-gcB-f1oBuw"
    ],
    linkImgs: ["./images/icons/Github.png", "./images/icons/youtube-img.png"]
  },

  {
    title: "Trash Talk",
    section: "Team Projects",
    tags: ["Kotlin", "Google Firebase", "Android Studio", "UVU Hackathon"],
    description: "This app combines fantasy football & doing your chores with your roommates! It was a Hackathon project that was completed in 24 hours.",
    points: ["Team of 3 friends.", "Adapted to leaning some new software we had not used before such as Android Studio.", "Even though we did not win, we had a great amount of fun presenting and wokring on this."],
    imageModal: ["./images/team-projects/TT/tt-main.jpg",
      "./images/team-projects/TT/tt-account.jpg",
      "./images/team-projects/TT/tt-num-page.jpg",
      "./images/team-projects/TT/tt-settings.jpg",
      "./images/team-projects/TT/tt-comp-items.jpg",
    ],
    links: ["https://github.com/Hybrid232/TrashTalk"
    ],
    linkImgs: ["./images/icons/Github.png", "./images/icons/youtube-img.png"]
  },
  {
    title: "Capture thee Flaginator",
    section: "Team Projects",
    tags: ["Semester long project", "JSON", "Phaser", "Leaflet.js", "Photon"],
    description: "Group of 6 people developing a networking Capture the Flag game. Utilized, Phaser and Photon for the game, and JavaScript for the code. We also made a program that could draw lines on a map, so the game map is the entire Science and Technology building at BYU-I.",
    points: ["Mainly Used JavaScript. Leafelet for the map drawing.", "Phaser was used for the gameplay, Photon was used for the networking.", "I was tasked to maintain the Github, as well as learning how to use Photon."],
    imageModal: ["./images/team-projects/CTF/capture-the-flaginator.png"],
    links: ["https://github.com/Hybrid232/Class-Findinator"],
    linkImgs: ["./images/icons/Github.png"]

  }

]
