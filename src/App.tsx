import Header from './pages/home/Header'
import './style/global.css'
import iconDS from './assets/img/demon_slayer_icon.png'
import iconAOT from './assets/img/aot_icon.png'
import iconCM from './assets/img/chainsaw_man_icon.png'
import iconTG from './assets/img/tg.png'
import iconJJK from './assets/img/jjk.png'
import { useState } from 'react'


function App() {

  const icons = {
    ds: iconDS,
    aot: iconAOT,
    cm: iconCM,
    tg: iconTG,
    jjk: iconJJK
  }; 

  const [enterPage, setEnterPage] = useState<boolean>(false)
 

  return (
    <>
    <Header iDS={icons.ds} iAOT={icons.aot} iCM={icons.cm} iTG={icons.tg} iJJK={icons.jjk}/>
    <div id='area_enter'>
      <button onClick={() => setEnterPage(true)} id='btn_enter'>ENTRAR</button>
    </div>

    
    </>
  )
}

export default App
