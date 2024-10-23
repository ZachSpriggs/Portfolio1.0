export const projects = [
  {
    id: 1,
    url: "mama-group",
    title: "Mama Restaurant Group",
    elevator_pitch: "Led development of restaurant based software",
    duration: "16 Weeks",
    description: `
    At Mama Restaurant Group, I led the development of our software with the end goal being to package it up as a SaaS template 
    for other restaurant groups. This ambitious goal required building scalable, packageable solutions 
    from the ground up. We utilized a P/MEVN stack, with Netlify for frontend and Heroku for backend deployment. A key 
    integration was Plasmic CMS, enabling restaurant managers to easily update information, including menu 
    items. Our previous solution was WordPress for a CMS, which ended up being cluttered and difficult to 
    navigate. I also developed a process to pull menu data from the Square API, manipulate it, and batch upload to our CMS, 
    streamlining operations and providing one source of truth for all of our restaurants.
    `,
    team_size: ["Developer: Myself", "UI/UX Designer", "Art Director"],
    technologies: ["NodeJS", "Vue", "ReactIcon", "Sass", "Figma", "Mongo"],
    team: "Design Team (3)",
    tech_stack: ["NodeJS, ", "Vue, ", "Figma, ", "Plasmic, ", "Mongo, ", "Postgres, ", "SCSS, ", "React, ", "WordPress"],
    pain_point: `
    Our original software, while functional for internal use, lacked the scalability and modularity required 
    for a SaaS product. This limitation posed a significant challenge to our goal of expanding our software offering 
    to other restaurant groups.
    `,
    solution: `
    To address this, we undertook a comprehensive restructuring of our codebase. We broke down the software into modular, 
    templated components, each designed with flexibility in mind. This approach allowed us to create dynamic sections that 
    could easily pull data from our CMS and adapt to custom designs for each client. The result was a highly adaptable system 
    that could be tailored to diverse restaurant group needs without sacrificing consistency or functionality.
    `,
    takeaway: `
    This project was a transformative experience in my development career. Diving deep into system architecture and design 
    principles fundamentally changed my approach to software development. It taught me to think beyond individual features 
    and consider the broader implications of scalability, modularity, and long-term maintainability. This shift in perspective 
    has profoundly influenced how I tackle complex development challenges, making me a more strategic and forward-thinking developer.
    `,
  },
  {
    id: 2,
    url: "vuniverse",
    title: "VUniverse",
    elevator_pitch:
      "Streaming service mobile application designed to organize streaming services",
    duration: "20 Weeks",
    description: 
    `
    I joined the VUniverse project midway through development, tasked with completing a mobile application designed to 
    organize streaming services. Despite having no prior React Native experience, I took on the challenge of finishing 
    the entire build. Leveraging Figma templates as a starting point, I had to deep dive into React Native documentation, 
    while using a udemy course, and specific video tutorials to rapidly build the necessary skills to finish the project.
    Through persistent effort and quick learning, I successfully developed the finished that was approved and launched 
    on both the App Store and Google Play Store. This project not only expanded my technical skills but also demonstrated 
    my ability to adapt quickly and deliver under pressure.
    `,
    team_size: ["Frontend: Myself", "Backend: Senior Engineer"],
    technologies: ["ReactIcon", "Figma", "Sass"],
    tech_stack: ["React-Native, ", "Figma, ", "Expo"],
    team: "Dev Team (2)",
    pain_point: 
    `
    When I joined the team, the project was at a critical tipping point. Half complete and lacking documentation from
    the previous dev team, the app was in a rough spot. My main task was to comprehend the existing codebase, complete
    the build, and manage deployment. For VUniverse, this was a very tough position to be in. A half finished product 
    and a small dev team would prove to be a challenge, but through strong documentation, consistent communication,
    and adaptability, we were able to deliver a beautiful and functional product that went to market. 
    `,
    solution: 
    `
    To develop a solid foundation, I took a quick React-Native crash course. Supplementing the documentation and targeted
    video tutorial proved to be beneficial as I was quickly up to speed and able to start producing features within the 
    first week. We leveraged high quality Figma templates to expedite frontend development, allowing me to focus on core
    functionality and integration with the backend. This approach allowed me to efficiently complete the project, all while 
    learning mobile development and a new tech stack all on the fly. 
    `,
    takeaway: 
    `
    This project was a truly pivotal moment in my development career, pushing me well outside of my comfort zone. While I had 
    experience with web development, creating a cross-platform mobile application presented me with a new set of challenges. 
    It allowed me to prove to myself that I'm adaptable, which is crucial for being in this field. The entire experience of 
    taking a half finished project to completion, deploying to an app store, and seeing the user base grow was incredibly 
    rewarding and something I'll always be proud of. Not only did this project boost my technical skills, it also boosted 
    my confidence in tackling unfamiliar technologies, and ability to quickly ship features.
    `,
  },
  {
    id: 3,
    url: "fundstory",
    title: "FundStory",
    elevator_pitch: "Financial Planning and Analysis software for Founders",
    duration: "24 Weeks",
    description: 
    `
    FundStory was a Financial Planning and Analysis software for startup founders to gain access to non-dillutive capital. 
    We offered clients dashboards, charts, and a history of their financial journey to get funding. Our primary focus was on 
    pre-funding, funding, and post-funding. Each stage unlocked a new selection of features which was designed to guide them 
    and offer insights into what they needed to accomplish to get to the next stage. We also had a lender CRM which was focused 
    on matching lenders to founders based on specific criteria using an in-house algorithm.
    `,
    team_size: ["Full Stack: Myself", "Full Stack: Senior Engineer"],
    technologies: ["NodeJS", "ReactIcon", "Mongo", "Figma", "Sass", "Python"],
    tech_stack: ["NodeJS, ", "Mongo, ", "Postgres, ", "SCSS, ", "React, ", "Redux"],
    team: "Dev Team (2)",
    pain_point: 
    `
    The biggest pain point of our user base was they wanted specific features to help them better understand what they were 
    doing correctly, and incorrectly. These features included new charts to track MRR, ARR, current spending, and more. 
    The insights we offered were automated based on goals, financial history, and projections. For our lenders, they needed a 
    more robust solution to quickly vett which founders they would like to work with. 
    `,
    solution: 
    `
    Our team quickly developed the feature set needed to improve our user's experience in our software. Everything from new charts,
    new insights, improved UI/UX designs, to new feature sets for our lenders to access. Our algorithms were able to effectively match
    lenders to quality founders at the ideal stage in their funding journey. 
    `,
    takeaway: 
    `
    The key takeaway for me was how to iterate quickly. Since we we're a small startup and working directly with founders/lenders to 
    offer a robust feature set, we met with them on a weekly basis. They would regularly request new features early and in the week 
    and we would often ship said features by the end of the week. Having to deep dive a feature request, working through integration, and 
    how to solve the problem, was instrumental in my ability to solve complex problems. What we were doing was also fairly niche, so going 
    to stack overflow or googling could only solve so many problems. A lot of what we did required outside-the-box thinking. I'm forever 
    grateful for my experience at FundStory because of how much I was able to learn. 
    `,
  },
  {
    id: 4,
    url: "operations-analytics",
    title: "Operations Analytics",
    elevator_pitch:
      "Data analysis and process automation for operations teams at DoorDash",
    duration: "2 Weeks",
    description: 
    `
    Leveraged SQL, Python, Snowflake, and Sigma dashboards to automate fridge and freezer allocation at DashMart sites. I worked with 
    multiple members of the data, and operations team for this project. We had to go through and gather measurements of each fridge, and 
    freezer in one site. Due to poor allocation of products, this site was experiencing significant shrink because the cold products had nowhere
    to be stored. Our goal was to use python to automate the process of determining where to place products in each fridge and freezer to maximize
    storage space.
    `,
    team_size: ["Developer(s): Myself", "Data Team: Multiple", "Operations Team: Multiple"],
    technologies: ["Python", "SQL", "Snowflake"],
    tech_stack: ["Python, ", "SQL, ", "Snowflake, ", "Sigma"],
    team: "Solo",
    pain_point: 
    `
    The primary issue was this site was shrinking out over $10,000 worth of perishable products every week due to poor space allocation. Losing ~$500k per year
    isn't a good thing for any company so we were determined to resolve this issue. Not only was shrink a major problem, but the products were crowding
    space in the warehouse which was causing carryover effects on other products, as well as making the warehouse difficult to navigate with pallets everywhere.
    `,
    solution: 
    `
    Our team was called in to try to resolve this issue. We had never faced a challenge like this before, but we sat down and started brainstorming. Our solution
    was to take measurements of each fridge and freezer. Based on the dimensions, we were able to determine exactly how much space could be utilized within our 
    constraints (only 80% of each unit could be used, with a minimum of 12 inches clearance on the top shelf). We used SQL to pull down product dimensions for each
    perishable product in the warehouse and wrote a few algorithms in Python to calculate how many products could fit on each shelf. These algorithms also 
    automated the process of determining where to put each product. After this work was complete, we went through and started shifting products around. 
    Our code worked perfectly and we were able to move all products into the correct spot. Not only did we reduce shrink from ~$10k per month down to less than $1k
    a month, we also cleared space throughout the entire warehouse. We were able to reuse these calculations for the entire warehouse and open up over 500 sq ft of 
    additional usable space. This system was adopted by multiple sites after we completed it, drastically reducing shrink at each site, as well as opening up more 
    usable space which allowed new products to be acquired which ultimately led to increased sales.
    `,
    takeaway: 
    `
    Approaching a problem with an unknown solution with our team proved to be a challenge. However, we were able to use a data-driven approach to resolve the issues
    at hand. This solution had multiple ripple effects by creating multiple positive downstream effects. This project also solidified my ability to work cross-functionally
    and approach problems from multiple angles at the same time. Not only did we solve the main problem, we solved a few secondary and tertiary problems, while creating
    a resuable solution that was adopted by multiple sites with great success. 
    `,
  },
];
