import Layout from '../components/js/layout';
import { useEffect, useState, useRef } from "react";
import design3Styles from '../styles/design3.module.scss';
import { gsap } from "gsap";


export default function design2() {
  const [scrollBarCreated, setScrollBarCreated] = useState(false);
  const scroller = useRef();
  const bodyScrollBar = useRef();
  
  const boxRef = useRef();
    useEffect(() => {
      gsap.to(boxRef.current, { rotation: "+=360" });
    });

  return (
    <Layout>
      <img
          src="/images/3/main.png" 
          className={design3Styles.main}
      />
      

      <div className={design3Styles.nft}>
        <div  className={`${design3Styles.absolute} ${design3Styles.scroller}`}>
          <img
            src="/images/3/nft2.png" 
            className={`${design3Styles.slide2} ${design3Styles.slide}`}
          />
        </div>
        <div className={design3Styles.absolute}>
          <img
            src="/images/3/nft3.png" 
            className={`${design3Styles.slide3} ${design3Styles.slide}`}
          />
        </div>
        <div className={design3Styles.absolute}>
          <img 
            ref={boxRef}
            src="/images/3/nft1.png" 
            className={`${design3Styles.slide1} ${design3Styles.slide}`}
          /> 
        </div>
      </div> 
    </Layout>
  );
}
