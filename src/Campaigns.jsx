import { CSSTransition } from "react-transition-group";
import { forwardRef } from "react";

import styles from "./Campaigns.module.scss";

import Campaign from "./Campaign";

import csesoc from "./CSESoc_logo.jpeg";
import compclub from "./compclub.png";

const Campaigns = forwardRef((_, ref) => {
  return (
    <div className={styles.container}>
      <aside ref={ref}>
        <section>
          <CSSTransition appear={true} in={true} timeout={250} classNames="b">
            <h1 style={{ width: 275 }}></h1>
          </CSSTransition>
          <div className={styles.row}>
            <Campaign logo={csesoc} active={true} />
            <Campaign logo={compclub} active={true} transitionDelay={200} />
          </div>
        </section>
        <section>
          <CSSTransition appear={true} in={true} timeout={250} classNames="b">
            <h1 style={{ width: 325, transitionDelay: "400ms" }}></h1>
          </CSSTransition>
          <div className={styles.row}>
            <Campaign logo={compclub} transitionDelay={600} />
            <Campaign logo={csesoc} transitionDelay={800} />
          </div>
        </section>
      </aside>
    </div>
  );
});

export default Campaigns;
