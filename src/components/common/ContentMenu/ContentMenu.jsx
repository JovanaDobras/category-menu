import React from 'react';
import './ContentMenu.css';
import NavBar  from '../NavBar/NavBar.jsx';

function ContentMenu (props) {
    const setList = props.setList;
    const AllMenu = props.listMenu;
    const Menu = props.menu;

    return(
        <><NavBar AllMenu={AllMenu} setList={setList} menu={Menu} />
        <div className='container grid'>
            {AllMenu.map((listMenu, index) => {
                return (
                    <div className='food-all' key={index}>
                        <div className='img'><img src={listMenu.img}></img></div>
                        <div className='right-menu'>
                            <div className='title-price'>
                                <h2>{listMenu.title}</h2>
                                <p>${listMenu.price}</p>
                            </div>
                            <p className='desc'>{listMenu.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div></>
    )
}

export default ContentMenu;