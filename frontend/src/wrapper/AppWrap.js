import {useContext} from 'react';
import { NavigationDots, SocialMedia } from '../components';
import SocialIcons from '../components/SocialIcons';
import { ThemeContext } from '../context'


const AppWrap = (Component, idName, classNames) => function HOC() {

  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode


  return (
    <div id={idName} className={`app__container ${classNames}`} >
      <SocialIcons/>
      <div className="app__wrapper app__flex" style={{ background: darkmode ? '#242424':'#000000'}}>
        <Component />

        <div className="copyright">
          <p className="p-text">@2021 MATJS</p>
          <p className="p-text">All rights reserved</p>
        </div>
        <div className='a'>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;