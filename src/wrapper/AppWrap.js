
import {NavigationDots,SocialMedia} from "../components"

const AppWrap = (Component,idName,classNames) =>function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`} >
      


        <div className='app__wrapper app__flex'>
            <Component/>
        
        <SocialMedia/>

            <div className="copyright">
                <p className='p-text'>@2023 ROBIN</p>
                <p className='p-text'>All Right Reserved</p>
            </div>
        </div>
            <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap