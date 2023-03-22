import { useState } from 'react'
import './sass/App.sass'
import Plan from './components/plan';

function App() {
  const un = 1;
  const deux = 2;
  const trois = 3;
  const quatre = 4;
  function next (){
    
  }
  return (
    <div>
      <div className='grandeDiv'>
        <div className='sommaire'>
          <div className='affichageSommaire'>
            <div>
              <button>{un}</button>
            </div>
            <div className='texteSommaire'> 
              <div className='gris'>
                step {un}
              </div>
              your info
            </div>
          </div>
          <div className='affichageSommaire'>
            <div>
              <button>{deux}</button>
            </div>
            <div className='texteSommaire'> 
              <div className='gris'>
                step {deux}
              </div>
              select plan
            </div>
          </div>
          <div className='affichageSommaire'>
            <div>
              <button>{trois}</button>
            </div>
            <div className='texteSommaire'> 
              <div className='gris'>
                step {trois}
              </div>
              add-ons
            </div>
          </div>
          <div className='affichageSommaire'>
            <div>
              <button>{quatre}</button>
            </div>
            <div className='texteSommaire'> 
              <div className='gris'>
                step {quatre}
              </div>
              summary
            </div>
            <button  className='btn' onClick={next}>Next Step</button>
          </div>
        </div>
        <div id='divDeux'>
          <div>
            <Plan />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
