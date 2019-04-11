import classNames from 'classnames';
import styles from './Footer.scss';

export default props => (
    <footer className={classNames(styles.footer)}>
        <div className={styles['nav-toggle']} onClick={props.toggleAction}>
            <svg viewBox="0 0 64 64">
                <path d="M16,20.5 L48,20.5" strokeWidth="2" stroke="#ffffff" />
                <path
                    d="M16,43.5 L48,43.5"
                    strokeWidth="2"
                    stroke="#ffffff"
                    transform="translate(32.000000, 43.500000) scale(-1, 1) translate(-32.000000, -43.500000) "
                />
                <path
                    d="M16,31.5 L48,31.5"
                    strokeWidth="2"
                    stroke="#ffffff"
                    transform="translate(32.000000, 31.500000) scale(-1, 1) translate(-32.000000, -31.500000) "
                />
            </svg>
        </div>
    </footer>
);
