import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../actions';

import icono from '../icono.png';

class Header extends Component {

    onSignOut = () => {
        window.gapi.auth2.getAuthInstance().signOut()
    }

    showSidebar = () => {
        window.$('.ui.labeled.icon.sidebar')
        .sidebar('toggle');
      
    }

    render() {
       // this.props.signOut()
       console.log(this.props)
        return this.props.isLoggedIn === true ? (
            <div className="ui secondary pointing menu headerApp" style={{ backgroundColor: '#DB1D1D', position: 'relative', marginTop: '0px!important', marginBottom: 0 }}>
                <div onClick={this.showSidebar} style={{position: 'relative', borderRight: '2px solid rgba(34,36,38,.15)', width: '45px', cursor: 'pointer'}}>
                    <i className="bars icon large inverted" style={{padding: '12px 0px 12px 12px'}}></i>
                </div>
                <div style={{ margin: '0 auto', paddingTop: '4px' }}>
                <Link to="/">
                <img src={icono} alt="logo ispanskijshuanom" />
                </Link>    
                </div>
                <div onClick={this.onSignOut}>
                    <Link to='/login' className="item">
                    Logout
                    </Link>
                </div>
            </div>
        ) : (
            <div className="ui secondary pointing menu headerApp" style={{ backgroundColor: '#DB1D1D', position: 'relative' }}></div>
        );
    }

}

const mapStateToProps = (state) => {
    return { isLoggedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signOut })(Header);