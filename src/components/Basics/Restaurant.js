import React,{useState} from 'react'
import '../Basics/style.css'
import Menu from '../menuApi'
import Menucard from './Menucard';

const uniqueList = [...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All",]


const Restaurant = () => {

    const[menuData,setMenuData] = useState(Menu);
    const[menuList,setMenuList] = useState(uniqueList);
    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu)
            return;
        }
        const updatedData = Menu.filter((curElem)=>{
              return curElem.category === category;
        })
        setMenuData(updatedData);
    }
   
  return (
    <> 
<nav className='navbar'>
        <div className='btn-group'>
            {menuList.map((curElem)=>{
                return(
                    <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>        
                )
            })}
        </div>
    </nav> 
    <Menucard menuData={menuData} />
    </>
  )
}

export default Restaurant