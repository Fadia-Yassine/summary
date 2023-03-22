import { useState } from 'react'
import './sass/App.sass'

function App() {

  return (
    <div>
      <div className='grandeDiv'>
        <div className='sommaire'>
          <div className='affichageSommaire'>
            <div>
              <button>1</button>
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
              <button>2</button>
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
              <button>3</button>
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
              <button>4</button>
            </div>
            <div className='texteSommaire'> 
              <div className='gris'>
                step 4
              </div>
              summary
            </div>
          </div>
        </div>
        <div id='divDeux'>
          <div>
            <button>Next Step</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
