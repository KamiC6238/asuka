import "@/App.css";
import { Toolbar, Editor } from '@/widgets';

function App() {
  return (
    <div className='flex-col w-[600px] h-[600px] flex-center absolute-center'>
      <Toolbar />
      <Editor />
    </div>
  );
}

export default App;
