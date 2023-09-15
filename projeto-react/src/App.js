import { useState } from 'react';
import AppRoutes from './routes';

function App() {

  const [news, setNews] = useState([])

  return (
      <AppRoutes news={news} setNews={setNews}/>
  );
}

export default App;
