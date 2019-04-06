import classNames from 'classnames';
import styles from './Footer.scss';

export default props => (
    <footer className={classNames(styles.footer)}>
        <button onClick={props.toggleAction}>Menu</button>
    </footer>
);
