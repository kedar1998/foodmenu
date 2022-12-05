import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  
  const allcategories = ['all', ...new Set(items.map((item) => item.category))]

  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCategories] = useState(allcategories);

  

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItem(items)
      return ;
    }
    const newitems = items.filter((item) => item.category === category);

    setMenuItem(newitems)
  }

  return <main>
  <section className='menu section'>
    <div className='title'>
      <h2>Our Menu</h2>
      <div className='underline'></div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItem}/>
  </section>
  </main>;
}

export default App;
