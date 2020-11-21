import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="link" style={{fontSize:20,padding:40,lineHeight:'40px'}}>
      <Link to="/contextDemo">contextDemo</Link>
      <Link to="/hooksDemo">hooksDemo</Link>
      <Link to="/reduxDemo">reduxDemo</Link>
      <Link to="/stateManage">stateManage</Link>
    </div>
  );
}

export default App;
