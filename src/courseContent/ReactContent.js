export const reactIntro = {
  title: "React Introduction",
  para1:
    "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.",
  para2: "React components are JavaScript functions that return markup:",
};

export const note1 = {
  notePara1:
    "To display code as an image in React.js, you can utilize a library like react-syntax-highlighter. This library allows you to highlight code snippets with syntax highlighting and render them as images.",
};

export const reactPara2 = {
  para1:
    "Now that you’ve declared MyButton, you can nest it into another component:",
};

export const reactPara3 = {
  para1:
    "The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience.",
  para2:
    "JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper.",
  para3:
    "You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:",
};

export const reactPara4 = {
  title: "Using Hooks",
  para1:
    "Functions starting with use are called Hooks. useState is a built-in Hook provided by React. You can also write your own Hooks by combining the existing ones.",
  para2:
    "Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks).",
};

export const reactPara5 = {
    heading: "You can use React without a framework, but there are few demerits: ",
  title1: "Learning curve",
  para1:
    "React is a UI library, not a full-featured framework, so it requires in-depth knowledge to integrate it into an MVC framework.",
  title2: "No standard approach",
  para2:
    "React doesn't have a standard or recommended way to develop applications, so developers can choose their own methodologies. This can lead to complications and delays.",
  title3: "Documentation",
  para3:
    "Some developers find React's documentation lacking in depth and detailed explanations.",
  title4: "Advanced JavaScript",
  para4:
    "React's advanced features often exploit complex aspects of JavaScript, which can be challenging for developers.",
  title5: "Not ideal for certain apps",
  para5:
    "React might not be the best choice for apps like games or creative apps that are demanding. This is because React uses a Virtual DOM, which is a layer that helps make unoptimized DOM manipulations faster.",
  conclusion:
    "If you're building a new app or site fully with React, it's recommended to use a framework. Using a framework can help you spend more time building products and less time connecting tools. It can also make it easier to onboard and train new developers.",
};
