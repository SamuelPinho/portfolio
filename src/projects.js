export const projects = [
  {
    projectName: 'Financês',
    projectDescription:
      'Financial web app to handle my finances that were previoulsy managed through a google sheet.',
    projectList: [
      'Used firestore to be my database',
      'Authentication throught firebase with HOC to handle the auth user',
      'Full table cell editable connected to Firebase and with Redux'
    ],
    githubLink: 'https://github.com/SamuelPinho/finances',
    demoLink: 'https://finances-a37195.netlify.com',
    gifSrc: './assets/finances.gif',
    utilized: ['React', 'Redux', 'Firebase Firestore', 'Firebase Authentication']
  },
  {
    projectName: 'React Todo',
    projectDescription:
      'Webapp that I created to serve as an example to a series of 3 articles that was posted on a <a target="_blank" rel="noopener noreferrer" href="https://medium.com/trainingcenter/construindo-uma-aplica%C3%A7%C3%A3o-full-stack-com-react-c1a64db6fc94?source=friends_link&sk=ae6f3bc0ab13a58dbf5b2834843e5712">brazilian Medium page.</a>',
    projectList: [
      'Used MongoLab to be my database',
      'Created an Rest API to serve data to my frontend',
      'Frontend developed with React and Redux fetching data throught Axios'
    ],
    githubLink: 'https://github.com/SamuelPinho/react-todo-bulma',
    demoLink: 'https://react-todo-bulma.netlify.com/',
    gifSrc: './assets/react-todo-bulma.gif',
    utilized: ['React', 'Redux', 'NodeJs', 'Express', 'MongoLab', 'Mongoose', 'Axios']
  },
  {
    projectName: 'React Firebase Auth Boilerplate',
    projectDescription:
      'React boilerplate created to provide firebase authentication and firestore already configured for use with Redux to handle user sessions',
    projectList: [
      'Used Firebase for user authentication',
      'Creates a firestore database to handle user data',
      'Utilized Redux to handle user sessions',
      'Uses HOC to route authorization alongside with redux'
    ],
    githubLink: 'https://github.com/SamuelPinho/react-firebase-auth-boilerplate',
    utilized: ['React', 'Firebase', 'Firestore', 'Redux', 'HOC', 'React router']
  },
  {
    projectName: 'E-Commerce of Books',
    projectDescription: 'Website created to be my final work for my graduation.',
    projectList: [
      'Developed with ASP .Net Core following MVC pattern',
      'Created frontend with csHtml',
      'Used Command, Facade, Strategy, DAO and Factory GoF design patterns',
      'Fully working E-Commerce with authentication and role based page'
    ],
    githubLink: 'https://github.com/SamuelPinho/books-ecommerce',
    gifSrc: './assets/e-commerce.gif',
    utilized: ['ASP .Net Core 2.0', 'PostgreSQL', 'MVC', 'Chart.Js', 'GoF Dessing Patterns']
  }
];
