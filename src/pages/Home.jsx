import Card from "../componentes/Card"
import Ecommmerce from "../componentes/E-commerceNavbar"
import Navbar from "../componentes/Navbar"






function Home(){
    return(
        <>
        <Navbar/>
        {/* <Ecommmerce/> */}
        <div className="flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        


        
        
        
        
        </>
    )
}

export default Home