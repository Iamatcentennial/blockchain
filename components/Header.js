import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link } from '../routes';


export default () =>{
    return (
// whenever we want to put some jsx with an object, we will use
// two pair of braces. On for jsx and other for object
        <Menu style={{marginTop: '15px' }}>
            <Link route="/">
            <a className="item">CrowdCoin
            </a>
            </Link>
            <Menu.Menu position="right">
            <Link route="/">
            <a className="item">Campaigns
            </a>
            </Link>
            <Link route="campaigns/new">
            <a className="item"> +
            </a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
}