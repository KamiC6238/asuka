import { Toolbar, Editor } from './widgets';
import "./App.css";

function App() {
  // const createFile = async () => {
  //   const code = getCode();
  //   const url = makeUrl("create");
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ code, filename: 'test.js' }),
  //   });

  //   const data = await res.text();
  //   console.log(data);
  // };

  // const updateFile = () => {};

  // const deleteFile = () => {};

  // const run = async () => {
  //   const url = makeUrl("run");
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ filename: 'test.js' }),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // }

  return (
    <div className='flex-center flex-col w-[600px] h-[600px] absolute-center'>
      <Toolbar />
      <Editor />
    </div>
  );
}

export default App;
