import Header from './pages/home/Header'
import './style/global.css'
function App() {
  
  const icons = {
    ds: iconDS,
    aot: iconAOT,
    cm: iconCM,
    tg: iconTG,
    jk: iconJK
  }; 
 

  return (
    <>
    <Header iDS={icons.ds} iAOT={icons.aot} iCM={icons.cm} iTG={icons.tg} iJK={icons.jk}/>
     
    </>
  )
}

export default App
