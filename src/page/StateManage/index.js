import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{padding:20}}>

      <div className="content-box">
        <p className="white">
          1. 使用context的createContext和useContext做数据的向下传递和获取
        </p>
        <p className="white">
          2. 使用hooks的useReducer做逻辑状态的管理，和数据修改的监听
        </p>
      </div>

      <div className="link" style={{padding:20}}>
        <Link to="/form">表单录入数据</Link>
        <Link to="/table">显示已录入的数据</Link>
      </div>

    </div>
  );
}

export default App;
