
import { ChildrenLayout } from "../interfaces/components";
import Footer from "./footer";
import GetRandom from "./GetRandom";

import { motion } from 'framer-motion'
import { HelmetProvider,Helmet } from "react-helmet-async";


const Layout=({children,title}:ChildrenLayout)=>{
    return (
   <HelmetProvider >
   <Helmet >
   <title>{title}</title>
   </Helmet>
    <div className="p-9 min-h-1 ">
        <GetRandom  />
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay: 0,duration:0.5 }}

          className="max-w-3xl mx-auto">
            {children}
        </motion.div>
     <Footer />   
    </div>
   </HelmetProvider>
    )
}
export default Layout