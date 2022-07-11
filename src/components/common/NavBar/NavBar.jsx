import React from 'react';
import './NavBar.css';

function NavBar (props) {

    const AllListMenu = props.AllMenu;
    const setList = props.setList;
    const Menu = props.menu;

    console.log(AllListMenu);
    console.log(Menu);

    const filterAll = () => {
        let Allmenu = Menu.filter(menu => menu);
        setList(Allmenu);
        console.log('cao');
    } 
    const categoryMenu = (item) => {
        let category = Menu.filter(menu => menu.category === item);
        setList(category);
        console.log(category);
    }

    return(
        <div className='container'>
            <div className='header'>
                <h1>Our Menu</h1>
                <div className='border'></div>
                <ul className='ul-menu'>
                    <a><li onClick={filterAll}>All</li></a>
                    <a><li onClick={() => categoryMenu("breakfast")}>Breakfast</li></a>
                    <a><li onClick={() => categoryMenu("lunch")}>Lunch</li></a>
                    <a><li onClick={() => categoryMenu("shakes")}>Shakes</li></a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;