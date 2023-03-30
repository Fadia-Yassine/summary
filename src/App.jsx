import { useState } from 'react'
import './sass/App.sass'

import Info from './components/info';
import Plan from './components/plan';
import Add from './components/add';
import Thank from './components/thank';
import Summary from './components/summary'

function App() {
  //creation de variable.
  //counter pour le bouton a affichage conditionnel.

  let [count,setCount] = useState(1);
  let [currentpage,setCurrentpage] = useState(<Info/>)

  // cette fonction permet d incrementer pour changer l'affichage via le bouton.


  function next() {
    setCount(count+1);
    console.log(count);

    if (count == 1) {
      setCurrentpage(<Info />)
    }

    else if (count == 2) {
      setCurrentpage(<Plan/>)
    }

    else if (count == 3) {
      setCurrentpage(<Add/>)
    }

    else if (count == 4) {
      setCurrentpage(<Summary />)
    }
    
    else {
      setCurrentpage(<Thank />)
    }
  }

  //debut d affichage
  return (
    <div>
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
        <div id='divDeux'>
          <div>
            {currentpage}
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
