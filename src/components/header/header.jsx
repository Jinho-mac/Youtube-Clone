import React, { useCallback, useRef } from 'react';
import styles from './header.module.css';

const Header = ({ onSearch }) => {
  const inputRef = useRef();

  const passSearch = value => onSearch(value);

  const handleSubmit = e => {
    e.preventDefault();
    passSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  const resetPage = useCallback(() => window.location.reload(), []);

  return (
    <header className={styles.header}>
       <button className={styles.title} onClick={resetPage}>
         <i className="fab fa-youtube"></i>
         <span className={styles.titleText}> youtube</span>
       </button>
       <form className={styles.search} onSubmit={handleSubmit}>
         <input 
         type="text" 
         className={styles.searchInput} 
         placeholder=" Search Videos"
         ref={inputRef}
         />
         <button type="submit" className={styles.searchSubmit}>
          <i className="fas fa-search"></i>
         </button>
       </form>
       <ul className={styles.menu}>
         <li><i className="fas fa-bell"></i></li>
         <li><i className="fas fa-user-friends"></i></li>
         <li><i className="fas fa-question-circle"></i></li>
       </ul>
    </header>
  )
};

export default Header;