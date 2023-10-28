import type {Component} from 'solid-js';

import styles from '../../assets/App.module.css';
const Home: Component = () => {
    return (
        <div class={styles.App}>
            Home-123
            <a class="btn btn-primary" href="#" role="button">Link</a>
        </div>
    );
};

export default Home;
