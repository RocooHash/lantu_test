import styles from './index.css';
import {Link} from "umi";

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
        <Link to="/a">Users Page</Link>
    </div>
  );
}
