import {GetContextData} from '../context';
import Children from './children';
import {Link} from 'react-router-dom';
import Others from './others';

function App() {
  const context = GetContextData();
  const {dispath, data} = context;
  const changeBtn = () => {
    dispath({type:'add',payload:{name:'shana'}})
  }
  return (
    <div>
      app.js=====》
      {data.name}
      <button onClick={changeBtn}>change</button>
      <Children></Children>
      <Link to='/children'>children</Link>
      <Others></Others>
    </div>
  );
}

export default App;
