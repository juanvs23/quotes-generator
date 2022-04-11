
import { ChildrenLayout } from "../interfaces/components";
import Footer from "./footer";
import GetRandom from "./GetRandom";
import {Helmet} from "react-helmet";

const Layout=({children,title}:ChildrenLayout)=>{
    return (
   <>
   <Helmet >
   <title>{title}</title>
   </Helmet>
    <div className="p-9 min-h-1 ">
        <GetRandom  />
        <div  className="max-w-3xl mx-auto">
            {children}
        </div>
     <Footer />   
    </div>
   </>
    )
}
export default Layout