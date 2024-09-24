export const projects = [
  {
    id: 1,
    url: "mama-group",
    title: "Mama Restaurant Group",
    elevator_pitch: "Built website(s) for restaurant group ",
    duration: "16 Weeks",
    description: `I came into this project late and had a good amount of code built out already. 
    Initially, this project was built in Vue but was done so without scalability in mind. Elements were hard coded
    that should have been components so my primary task was finalizing designs from Figma, as well as 
    making the code more scalable. Eventually this led to the project above, which was a full refactor of the code base. 
    `,
    team_size: ["Developer: Myself", "UI/UX Designer", "Art Director"],
    technologies: ["NodeJS", "Vue", "ReactIcon", "Sass", "Figma", "Mongo"],
    team: "Design Team(3)",
  },
  {
    id: 2,
    url: "vuniverse",
    title: "VUniverse",
    elevator_pitch:
      "Frontend Development for streaming service in React Native",
    duration: "20 Weeks",
    description: `Utlized Figma templates to create the frontend for a streaming service application with React-Native.
    I had no React-Native experience coming into this project, but using the documentation to teach myself, I was able to 
    get a final product pushed to the App and Google Play Store. Both were accepted and the app was live. My contract ended 
    before I got to see the finalized product, but this project taught me a lot about mobile development, as well as adopting 
    new technologies and how to approach learning a new framework/stack.
    `,
    team_size: ["Frontend: Myself", "Backend: Senior Developer"],
    technologies: ["ReactIcon", "Figma", "Sass"],
    team: "Dev Team(2)",
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
    team: "Dev Team(2)",
  },
  {
    id: 4,
    url: "operations-analytics",
    title: "Operations Analytics",
    elevator_pitch:
      "Metrics analysis and automation for Operations teams at DoorDash",
    duration: "4 Weeks",
    description: `Working closely with Local Operations teams at DoorDash, I wanted to take some of the manual
    tasks away from Operations Managers. I created an automated reporting system utilizing Django and SQL queries
    in Snowflake to visual metrics. By decreasing the time spent pulling, and visualizing metrics, OMs were 
    able to focus on what really mattered. This led to a roughly 30% positive shift in all metrics 
    across all sites.
    `,
    team_size: ["Developer(s): Myself"],
    technologies: ["Python", "SQL", "Snowflake", "Django"],
    team: "Solo",
  },
];

