import React from 'react';

const SidebarMenu = () => {
    return (
        <div className="ui left demo vertical thin inverted sidebar labeled icon menu overlay" style={{paddingTop: '40px', backgroundColor: '#db1d1d', zIndex: 3000}}>
            <a href="foo" className="item">
                <i className="home icon"></i>
                Home
            </a>
            <a href="foo" className="item">
                <i className="block layout icon"></i>
                Topics
            </a>
            <a href="foo" className="item">
                <i className="users icon"></i>
                Audience              
            </a>
        </div>
    )
}

export default SidebarMenu;