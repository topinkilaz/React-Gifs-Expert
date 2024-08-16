import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid} from './components';



export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One punch' ])

    const onAddCategory=(newCategory)=>{

      if (categories.includes(newCategory)) return;
     
      setcategories([newCategory, ...categories])
    }
    
  return (
    <>
    {/* TITULO */}
    <h1>gif expert app</h1>
    {/*Input */}
    
    <AddCategory 
    onNewCategory={event=>onAddCategory(event)}
    //setcategories={setcategories}
    />
   
        {categories.map((category)=>(
          <GifGrid key={category} category={category}/>
      
        ))}
   
    </>
  )
}
