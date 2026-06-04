export enum typs {
    app,
    web,
    game,
}


export const projects = [
    {
        typ: typs.app,
        title: "Mashaaer App",
        description:
            "Mashaaer is a social media application that combines modern app design with the discussion-focused nature of classic online forums, emphasizing meaningful content and conversations over visual appearance.",
        tech: ["ReactNaive", "NestJS", "PostgreSQL"],
        cover: "/projects/mashaaer/mapp.png",
        images: [
            "/projects/mashaaer/mapp.png",
            "/projects/mashaaer/ss8.png",
            "/projects/mashaaer/s77.png",
            "/projects/mashaaer/s4.png",
            "/projects/mashaaer/ss5.png",
            "/projects/mashaaer/ss1.png",
        ],
        link: "https://drive.google.com/file/d/1k4mpFu6iI00uE9VThoc60FiBT-Jr-NcK/view?usp=sharing",
        button: "/butt/web.png",
    },
    {
        typ: typs.web,
        title: "Personal Address Code",
        description:
            "A PAC is a personal address for a location,\nas simple as a phone number.\n🔹 Generated from geolocation\n🔹 Saved and shared manually\n🔹 Anyone who enters the code → goes directly to the location",
        tech: ["React", ".Net", "MySQL"],
        cover: "/projects/pac/pac.jpg",
        images: [
            "/projects/pac/pac.jpg",
            "/projects/pac/p1.png",
            "/projects/pac/p2.png",
            "/projects/pac/p3.png",
            "/projects/pac/p4.jpg",
        ],
        link: "https://personaladdresscodepac.vercel.app/",
        button: "/butt/web.png",
    },
    /* {
       typ: typs.web,
       title: "Rahibeen Studio",
       description:
         "In the vibrant heart of Riyadh, amidst its alleys and markets, the spark of ( Raheebeen Studio ) was ignited, a dream that brings together every gamer who adores the authentic Arab culture along with a passion for modern technology",
       tech: ["Next.js"],
       cover: "/projects/afresho/a1.png",
       images: [
         "/projects/afresho/a1.png",
         "/projects/afresho/a2.png",
         "/projects/afresho/a3.png",
         "/projects/afresho/a4.png",
       ],
       link: "https://raheebeen.com/en/",
       button: "/butt/web.png",
     },*/
    {
        typ: typs.web,
        title: "Rewayati",
        description:
            "A website specializing in creating novels, where you can create a set of subheadings to build a structured novel, and others can read each other's novels.",
        tech: ["Next.js", "Nest.js", "PostgreSQL"],
        cover: "/rewayat/r1.png",
        images: [
            "/rewayat/r1.png",
            "/rewayat/r2.png",
            "/rewayat/r3.png",
            "/rewayat/r4.png",
        ],
        link: "https://github.com/MrBabker/Rewayati_Front",
        button: "/butt/git.png",
    },
    {
        typ: typs.web,
        title: "solutions-groups",
        description:
            "Our company specializes in providing comprehensive educational services for students and researchers. We assist students in choosing suitable majors, preparing application files, applying to local and international universities, and recommending appropriate scholarships for each student.",
        tech: ["HTML", "CSS", "JavaScript"],
        cover: "/solution/s2.png",
        images: [
            "/solution/s2.png",
            "/solution/s1.png",
            "/solution/s3.png",
            "/solution/s4.png",
            "/solution/s5.png",
        ],
        link: "https://solutions-groups.com/index.html",
        button: "/butt/web.png",
    },
    /* {
       typ: typs.web,
       title: "ZERO9 Store",
       description:
         "A comprehensive online store selling electronic devices such as phones, laptops, and computers.",
       tech: ["Next.js", "Nest.js", "PostgreSQL"],
       cover: "/zstore/z1.png",
       images: [
         "/zstore/z1.png",
         "/zstore/z2.png",
         "/zstore/z3.png",
         "/zstore/z4.png",
         "/zstore/z5.png",
         "/zstore/z6.png",
       ],
       link: "https://zero9store-001-site1.site4future.com/",
       button: "/butt/web.png",
     },*/
    {
        typ: typs.game,
        title: "Tactical Warfare",
        description:
            "The tactical war game is a strategic game with a classic perspective system and an enhanced artistic style, featuring an exciting story about a war between two forces, both human, but one group comes from a parallel planet to Earth after the destruction of their planet, seeking a new home.",
        tech: ["Unity3D", "Photon"],
        cover: "/warfare/t1.jpg",
        images: [
            "/warfare/t1.jpg",
            "/warfare/tt2.jpg",
            "/warfare/tt3.jpg",
            "/warfare/tt4.jpg",
            "/warfare/tt5.jpg",
            "/warfare/tt6.jpg",
        ],
        link: "https://store.steampowered.com/app/2599770/Tactical_Warfare/",
        button: "/butt/steam.png",
    },
    {
        typ: typs.game,
        title: "TVs: The Awakening",
        description:
            "TVs is a single player platformer game, focuses on a journey of a tv character called “u” who needs to drive his way on strange events to solve mysterious puzzles till he finds the truth. ",
        tech: ["Unity3D"],
        cover: "/tv/v1.jpg",
        images: [
            "/tv/v1.jpg",
            "/tv/v2.jpg",
            "/tv/v3.jpg",
            "/tv/v4.jpg",
            "/tv/v5.jpg",
            "/tv/v6.jpg",
        ],
        link: "https://store.steampowered.com/app/2063050/TVs_The_Awakening/",
        button: "/butt/steam.png",
    },
    {
        typ: typs.game,
        title: "SUBS",
        description:
            "Social Climb is a simple yet challenging precision platformer. You play as a young dreamer who wants to become an internet star, starting his journey from his bedroom and his personal computer, chasing the dream of reaching 10 million subscribers.",
        tech: ["Unity3D"],
        cover: "/subs/u1.png",
        images: [
            "/subs/u1.png",
            "/subs/u2.jpg",
            "/subs/u3.jpg",
            "/subs/u3.jpg",
            "/subs/u4.jpg",
            "/subs/u5.jpg",
            "/subs/u6.jpg",
        ],
        link: "https://store.steampowered.com/app/3784950/SUBS/",
        button: "/butt/steam.png",
    },
    {
        typ: typs.game,
        title: "Fighters",
        description:
            "A casual fighting game featuring well-known fighters. This game offers fast-paced, action-packed battles between iconic characters from various universes.",
        tech: ["Unity3D"],
        cover: "/drg/d1.jpg",
        images: [
            "/drg/d1.jpg",
            "/drg/d2.png",
            "/drg/d3.png",
            "/drg/d4.png",
            "/drg/d5.png",
            "/drg/d6.png",
            "/drg/d7.png",
        ],
        link: "https://mbabker.itch.io/fighters",
        button: "/butt/itch.png",
    },
    {
        typ: typs.game,
        title: "Afrsho",
        description:
            "Team up, fight in PvP battles, unlock characters & mini-games. Fun, fast & free! Afrsho is the ultimate PvP squad battle game! Build your dream team from unique characters and crush your enemies in real-time fights.",
        tech: ["Unity3D"],
        cover: "/afr/af1.jpeg",
        images: [
            "/afr/af1.jpeg",
            "/afr/af2.png",
            "/afr/af3.png",
            "/afr/af4.png",
            "/afr/af5.png",
        ],
        link: "https://play.google.com/store/apps/details?id=sa.naphora.afrsho&pli=1",
        button: "/butt/ply.png",
    },
    {
        typ: typs.web,
        title: "EPICO online gaming platform",
        description:
            "An online gaming platform that provides players with a unified experience through a comprehensive system of accounts, points, achievements, and levels. Users earn points by participating in various games across the platform, allowing them to compete on global leaderboards, unlock rewards, and achieve new milestones as they progress.",
        tech: ["Next.js", ".Net", "PostgreSQL"],
        cover: "/projects/epico/1.png",
        images: [
            "/projects/epico/1.png",
            "/projects/epico/2.png",
            "/projects/epico/3.png",
            "/projects/epico/4.png",
            "/projects/epico/5.png",
            '/projects/epico/6.png',
        ],
        link: "https://epico-eight.vercel.app/",
        button: "/butt/web.png",
    },
    {
        typ: typs.app,
        title: "EPICO online gaming mobile app",
        description:
            "EPICO is a gaming platform that rewards players for their gaming activity and achievements. Earn points by playing your favorite games, increase your score, and progress through unique rank levels. Compare your performance with other players, track your achievements, and see where you stand on the leaderboards.",
        tech: ["Flutter", ".Net", "PostgreSQL"],
        cover: "/projects/epico/epc-07.png",
        images: [
             "/projects/epico/epc-07.png",
            "/projects/epico/epc-04.png",
            "/projects/epico/epc-05.png",
            "/projects/epico/epc-06.png",

        ],
        link: "https://play.google.com/store/apps/details?id=com.smile.epico",
        button: "/butt/ply.png",
    },
];