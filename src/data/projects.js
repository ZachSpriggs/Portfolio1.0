export const projects = [
  {
    id: 1,
    url: "mama-group",
    title: "Mama Restaurant Group",
    elevator_pitch: "Led development of restaurant based software",
    duration: "16 Weeks",
    description: `
    At Mama Restaurant Group, I led the development of internal software with the vision of transforming it into a 
    SaaS template for other restaurant groups. This ambitious goal required building scalable, packageable solutions 
    from the ground up. We employed a MEVN stack, with Netlify for frontend and Heroku for backend deployment. A key 
    innovation was integrating Plasmic CMS, enabling restaurant managers to easily update information, including menu 
    items. I also developed a process to pull menu data from the Square API, manipulate it, and batch upload to our CMS, 
    streamlining operations across all our restaurants.
    `,
    team_size: ["Developer: Myself", "UI/UX Designer", "Art Director"],
    technologies: ["NodeJS", "Vue", "ReactIcon", "Sass", "Figma", "Mongo"],
    team: "Design Team(3)",
    tech_stack: ["NodeJS", "Vue", "Figma", "Plasmic", "Mongo", "Postgres", "SCSS", "React", "WordPress"],
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
    description: `Utlized Figma templates to create the frontend for a streaming service application with React-Native.
    I had no React-Native experience coming into this project, but using the documentation to teach myself, I was able to 
    get a final product pushed to the App and Google Play Store. Both were accepted and the app was live. My contract ended 
    before I got to see the finalized product, but this project taught me a lot about mobile development, as well as adopting 
    new technologies and how to approach learning a new framework/stack.
    `,
    team_size: ["Frontend: Myself", "Backend: Senior Developer"],
    technologies: ["ReactIcon", "Figma", "Sass"],
    tech_stack: ["React-Native", "Figma", "Expo"],
    team: "Dev Team(2)",
    pain_point: `This app was only half complete when I came onto the team. The previous dev team had left and they made 
    no documentation during their work. I had to finish the entire mobile build, finalize backend connections, and deploy to the 
    app and google play store.`,
    solution: `With zero react-native experience, I had to take a react-native course to learn the basics. My background
    in react made it pretty easy to pick up. I was able to take advantage of quality figma templates to build the frontend.`,
    takeaway: `While I am familiar with a few different frameworks, it was an amazing experience to tackle a new challenge 
    of building a mobile application. I'd built a small Android app prior to this, but this was entirely different. `,
  },
  {
    id: 3,
    url: "fundstory",
    title: "FundStory",
    elevator_pitch: "Financial Planning and Analysis software for Founders",
    duration: "24 Weeks",
    description: `Built out FP&A software that allowed startup founders to track their funding 
    progress, monthly recurring revenue, etc. and provide insights into next steps to raise 
    the next seed round. This was a full stack MERN project, using Redux for state management, 
    as well as Python to automate some of the daily tasks. 
    `,
    team_size: ["Full Stack: Myself", "Full Stack: Senior Engineer"],
    technologies: ["NodeJS", "ReactIcon", "Mongo", "Figma", "Sass", "Python"],
    tech_stack: ["NodeJS", "Mongo", "Postgres", "SCSS", "React", "Redux"],
    team: "Dev Team(2)",
    pain_point: ``,
    solution: ``,
    takeaway: ``,
  },
  {
    id: 4,
    url: "operations-analytics",
    title: "Operations Analytics",
    elevator_pitch:
      "Metrics analysis and automation for Operations teams at DoorDash",
    duration: "20 Weeks",
    description: `Working closely with Local Operations teams at DoorDash, I wanted to take some of the manual
    tasks away from Operations Managers. I created an automated reporting system utilizing Django and SQL queries
    in Snowflake to visual metrics. By decreasing the time spent pulling, and visualizing metrics, OMs were 
    able to focus on what really mattered. This led to a roughly 30% positive shift in all metrics 
    across all sites.
    `,
    team_size: ["Developer(s): Myself"],
    technologies: ["Python", "SQL", "Snowflake", "Django"],
    tech_stack: ["Python", "SQL", "Snowflake", "Django", "Sigma"],
    team: "Solo",
    pain_point: ``,
    solution: ``,
    takeaway: ``,
  },
];
