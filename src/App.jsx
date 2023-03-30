import { useState } from 'react'
import './sass/App.sass'

import Info from './components/info';
import Plan from './components/plan';
import Add from './components/add';
import Thank from './components/thank';
import Summary from './components/summary'

function App() {
  //variable qui va aider mon bouton a changer de page
  let [count,setCount] = useState(1);

  //la fonction qui va faire fonctionner mon bouton pour mon changement de page
  function next() {
    setCount(count+1);
    if(count === 4){
      document.getElementById('btn').style = "display: none";
      document.getElementById('prev').style = "display: none";
    }
  }
console.log(count)
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
            {/* affichage conditionnel et fonction flecher pour mon bouton décrémenter */}
            {count > 1? <button id='prev' onClick={()=>{
              setCount(count-1);
            }}>Go Back</button> : "" }
            <button id='btn' onClick={next}>Next Step</button>
          </div>
        </div>

        {/* Petite div qui va changer grâce à mon affichage conditionnel */}
        <div id='divDeux'>
          <div>
            {/* Mon affichage conditionnel */}
            {count== 1? <Info/> : count== 2? <Plan/> : count== 3? <Add/> : count== 4? <Summary />  : <Thank/>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
