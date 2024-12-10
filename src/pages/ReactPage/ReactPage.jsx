import React from "react";
import "./ReactPage.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { note1, reactIntro, reactPara2, reactPara3, reactPara4, reactPara5 } from "../../courseContent/ReactContent";



const ReactPage = () => {
  const belowpara2 = `function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }`;

  const inNotepara1 = `import SyntaxHighlighter from 'react-syntax-highlighter';
  import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
  `;

  const inpara2 = `import React from "react";
  
  const ReactCode = () => {
    function MyButton() {
      return (
        <>
          <h1>Hello I am button...😊</h1>
          <button>Click Me!</button>
        </>
      );
    }
  
    return (
      <>
        <h1>Hello Button!</h1>
        <MyButton />
      </>
    );
  };
  
  export default ReactCode;
  `;

  const inpara4_1 = `import React, { useState } from "react";
  import MyButton from "./MyButton";
  
  const ReactCode = () => {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div style={{ margin: "5vw" }}>
        <p>Hello, welcome in React Code!</p>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    );
  };
  
  export default ReactCode;
  `;

  const inpara4_2 = `import React from "react";
  
  const MyButton = ({ count, onClick }) => {
    return (
      <>
        <p>Welcome in MyButton!</p>
        <button onClick={onClick}>Click {count} Me!</button>
      </>
    );
  };
  
  export default MyButton;
  `;

  return (
    <>
      <div id="react-head">React Short Note</div>
      <div id="react-body">
        <div id="reactpara-1">
          <h1>{reactIntro.title}</h1>
          <p>{reactIntro.para1}</p>
          <p>{reactIntro.para2}</p>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            id="reactPara1-syn"
          >
            {belowpara2}
          </SyntaxHighlighter>
        </div>
        <div id="notePara1">
          <p>
            <strong>Note:</strong>
            {note1.notePara1}
          </p>
          <SyntaxHighlighter id="reactPara1-syn">
            npm install react-syntax-highlighter@latest
          </SyntaxHighlighter>
          <p>To use this in your code export it like:</p>
          <SyntaxHighlighter id="reactPara1-syn">
            {inNotepara1}
          </SyntaxHighlighter>
        </div>
        <div id="reactPara2">
          <h4>{reactPara2.para1}</h4>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            id="reactPara1-syn"
          >
            {inpara2}
          </SyntaxHighlighter>
        </div>
        <div id="reactPara3">
          <em>{reactPara3.para1}</em>
          <p>{reactPara3.para2}</p>
          <p>{reactPara3.para3}</p>
        </div>
        <div id="reactPara4">
          <h1>{reactPara4.title}</h1>
          <p>{reactPara4.para1}</p>
          <p>{reactPara4.para2}</p>
          <h4>
            Using props here: will click any one of buttons the all buttons get
            updated simultaneously.{" "}
          </h4>
          <div id="para4-syn">
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              id="reactPara1-syn"
            >
              {inpara4_1}
            </SyntaxHighlighter>
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              id="reactPara1-syn"
            >
              {inpara4_2}
            </SyntaxHighlighter>
          </div>
        </div>
        <div id="reactPara5">
          <h1>{reactPara5.heading}</h1>
          <h3><u>{reactPara5.title1}</u></h3>
          <p>{reactPara5.para1}</p>
          <h3><u>{reactPara5.title2}</u></h3>
          <p>{reactPara5.para2}</p>
          <h3><u>{reactPara5.title3}</u></h3>
          <p>{reactPara5.para3}</p>
          <h3><u>{reactPara5.title4}</u></h3>
          <p>{reactPara5.para4}</p>
          <h3><u>{reactPara5.title5}</u></h3>
          <p>{reactPara5.para5}</p>
          <em>{reactPara5.conclusion}</em>
        </div>
      </div>
    </>
  );
};

export default ReactPage;
