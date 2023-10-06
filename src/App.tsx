import "@/App.css";
import { Toolbar, Editor } from '@/components';

function App() {
  return (
    <div className='flex-col w-[600px] h-[600px] flex-center absolute-center'>
      <Toolbar />
      <Editor />
    </div>
  );
}

export default App;


/**
 * TODO
 * 1. 文件的增删改查
 * 2. toolbar UI 组件的开发
 * 3. 支持编译和运行 JavaScript & TypeScript
 */