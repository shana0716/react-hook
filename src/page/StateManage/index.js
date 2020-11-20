import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="link">
        <Link to="/form">表单录入数据</Link>
        <Link to="/table">显示已录入的数据</Link>
      </div>
    </div>
  );
}

export default App;
