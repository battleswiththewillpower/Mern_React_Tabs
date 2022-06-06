//child
import React, { useState } from "react"


const Main = (props) => {
    console.log(props)

    const [selectedTab, setSelectedTab] = useState(1)
    
  return (
    <div style={{marginTop: 40}}>
        <header>
       {
           props.tabItems.map((tab, i) => {
               const tabStyles = {
                padding: 20, 
                marginRight: 20, 
                border:"1px solid orange"
               }

               if (selectedTab === i) {
                   tabStyles.backgroundColor = "Turquoise";
                   tabStyles.color = "white";
               }
               return ( <span
               key={i} 
               onClick={(e) => {
                   setSelectedTab(i);
               }}
               style={tabStyles}>{tab.header}
                </span>
            )
           })
       }
       </header>
       <main style={{marginTop: 30}}>
           <h2 style={{
               padding: 50, 
                // width: 300,
                height: '300',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                
   
                border:"1px solid orange"}}>{props.tabItems[selectedTab].content}</h2>
       </main>
    </div>
  )
}

export default Main
