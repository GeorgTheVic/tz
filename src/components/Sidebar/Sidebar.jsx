import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Sidebar.module.scss';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
  const [isLeft, setIsLeft] = useState(false);

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened(v => !v);
    setIsShowed(s => !s);
    setIsLeft(l => !l);
  };

  const containerClassnames = classnames(styles.sidebar, {
    [styles.opened]: isOpened,
    [styles.closed]: !isOpened
  });

  const containerClassnamesLink = classnames(styles.link__text, {
    [styles.showed]: isShowed,
    [styles.hidden]: !isShowed
  });

  const containerClassnamesArrow = classnames(styles.arrow, {
    [styles.left]: isLeft,
    [styles.right]: !isLeft
  });

  return (
    <div className={containerClassnames}>
      <div className={styles.circle}>
        <span className={`${styles.circle__item} ${styles.circle__red}`}></span>
        <span className={`${styles.circle__item} ${styles.circle__yellow}`}></span>
        <span className={`${styles.circle__item} ${styles.circle__green}`}></span>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo__img} src={logo} alt="TensorFlow logo" />
        <span className={`${styles.logo__text} ${containerClassnamesLink}`} >TensorFlow</span>
        <div className={containerClassnamesArrow} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />

          <span className={styles.description}>shrink</span>
        </div>
      </div>
      <div>
        {
          routes.map(route => (
            <div className={styles.link}
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span className={containerClassnamesLink}>{route.title}</span>
            </div>
          ))
        }
      </div>
      <div className={styles.sidebar__bottom}>
        {
          bottomRoutes.map(route => (
            <div className={styles.link}
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span className={containerClassnamesLink}>{route.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
