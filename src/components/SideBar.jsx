import Icon0 from "../assets/sidebar/Icon0.svg"
import Icon1 from "../assets/sidebar/Icon1.svg"
import Icon2 from "../assets/sidebar/Icon2.svg"
import Icon3 from "../assets/sidebar/Icon3.svg"
import Icon4 from "../assets/sidebar/Icon4.svg"


const SideBar = () => {
  return (
    <div className='w-12 bg-[#333333] flex flex-col items-center gap-6 py-3'>
        <img src={Icon0} alt="Archivos" className="w-6"/>
        <img src={Icon1} alt="Archivos" className="w-6"/>
        <img src={Icon2} alt="Archivos" className="w-6"/>
        <img src={Icon3} alt="Archivos" className="w-6"/>
        <img src={Icon4} alt="Archivos" className="w-6"/>
    </div>
  )
}

export default SideBar