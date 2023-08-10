import styles from './styles';

import { Navbar  , Hero , Stats , Billing , CardDeal , Business , Client , 
  CTA , Footer , Testimonals } from './components';

const App = () =>  (
    <div className='bg-primary w-full overflow-hidden' >
     <div className={`${styles.paddingX} ${styles.flexCenter}`} >
       <div className={`${styles.boxWidth}`}>
         <Navbar />
       </div>
     </div>

     <div className={`bg-primary ${styles.flexStart}`} >
       <div className={` ${styles.boxWidth}`} >
         <Hero />
       </div>
     </div>

     <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`} >
       <div className={` ${styles.boxWidth}`} >
         <Stats />
         <Business />
         <Billing />
         <CardDeal />
         <Testimonals />
         <Client />
         <CTA />
         <Footer />
       </div>
     </div>


    </div>
  );


export default App