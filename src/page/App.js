import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="link">
      <Link to="/contextDemo">contextDemo</Link>
      <Link to="/hooksDemo">hooksDemo</Link>
      <Link to="/reduxDemo">reduxDemo</Link>
      <Link to="/stateManage">stateManage</Link>
    </div>
  );
}

export default App;
