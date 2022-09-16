import { Suspense,lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../css/app.css';
const Spinner = lazy(()=>import('./Spinner'));
const About = lazy(()=>import('../pages/About'));
const Home = lazy(()=>import('../pages/Home'));
const HT =lazy(()=>import('../pages/HT'));

const App = () => {
  return (
    <div className="app">
      <div className='app-container'>
      <Suspense fallback={<Spinner/>}>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/ht' element={<HT/>}/>
          </Routes>
      </Suspense>
      </div>
    </div>
  );
}

export default App;
