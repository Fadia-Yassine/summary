import { useState } from 'react'
import './sass/App.sass'

import Info from './components/info';
import Plan from './components/plan';
import Add from './components/add';
import Thank from './components/thank';
import Summary from './components/summary'

function App() {
  let [count,setCount] = useState(1);

  function next() {
    setCount(count+1);
    if(count == 5){
      document.getElementsByTagName('.btn').style.display = "none";
    }
  }

  return (
    <div>
      {/* Mon affichage de base */}
      <div className='grandeDiv'>
        <div className='sommaire'>
          <div className='affichageSommaire'>
            <div>
              <button className="button">1</button>
            </div>
            <div className='texteSommaire'>
              <div className='gris'>
                step 1
              </div>
              your info
            </div>
          </div>
          <div className='affichageSommaire'>
            <div>
              <button className='buttonDeBase'>2</button>
            </div>
            <div className='texteSommaire'>
              <div className='gris'>
                step 2
              </div>
              select plan
            </div>
          </div>
          <div className='affichageSommaire'>
            <div>
              <button className='buttonDeBase'>3</button>
            </div>
            <div className='texteSommaire'>
              <div className='gris'>
                step 3
              </div>
              add-ons
            </div>
          </div>
          <div className='affichageSommaire'>
            <div>
              <button className='buttonDeBase'>4</button>
            </div>
            <div className='texteSommaire'>
              <div className='gris'>
                step 4
              </div>
              summary
            </div>
            <button className='btn' onClick={next}>Next Step</button>
          </div>
        </div>

        {/* Petite div qui va changer grâce à mon affichage conditionnel */}
        <div id='divDeux'>
          <div>
            {count== 1? <Info/> : count== 2? <Plan/> : count== 3? <Add/> : count== 4? <Summary />  : <Thank/>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
