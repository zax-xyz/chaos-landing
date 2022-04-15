import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import styles from "./Campaign.module.scss";

const Campaign = ({ logo, active = false, transitionDelay = 0, ...props }) => {
  const status = active ? "pending" : "open";
  return (
    <CSSTransition
      appear={true}
      in={true}
      timeout={250 + transitionDelay}
      classNames={{
        appear: styles["fade-appear"],
        appearActive: styles["fade-appear-active"],
      }}
      style={{ transitionDelay: `${transitionDelay}ms` }}
    >
      <div className={styles.campaign} {...props}>
        <header className={styles.header}>
          <img src={logo} alt="logo" />
          <div className={styles.name}>
            <Bar className={styles.top} transitionDelay={transitionDelay} />
            <Bar className={styles.bottom} transitionDelay={transitionDelay + 150} />
          </div>
          <button className={styles[status]}>{status.toUpperCase()}</button>
        </header>
        <div className={styles.banner}></div>
        {active ? (
          <div className={styles.description}>
            <Bar className={styles.top} transitionDelay={transitionDelay + 300} />
            <Bar className={styles.middle} transitionDelay={transitionDelay + 450} />
            <Bar className={styles.bottom} transitionDelay={transitionDelay + 600} />
          </div>
        ) : null}
      </div>
    </CSSTransition>
  );
};

const Bar = ({ className, transitionDelay }) => (
  <div
    className={classNames(styles.bar, className)}
    style={{ transitionDelay: `${transitionDelay}ms` }}
  ></div>
);

export default Campaign;
