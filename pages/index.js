import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link } from '../routes';

class CampaignIndex extends Component { 

    // In nextjs, ComponentDidMount() will not be called, thats 
    // getInitialProps() method is used by nextjs to get the 
    //  initial data before rendering the components by calling
    // the render() method. That is why getInitialProps() is declared
    // static because this method is called even before creating
    // the instance of actual component.
    // In that way, if javascript is disabled on the browser side,
    // server side rendering always takes place
   
    static async getInitialProps(){
        const campaigns = await factory.methods
       .getDeployedCampaign().call();
        //Will return an array of campaigns 
       return {campaigns };
    }
  
    renderCampaigns(){
        // A map() function works like this:
        // a funtion is passed in map and that function 
        // will be call for every item in the campaign array.
        // Whatever will be returned that will be assigned to the
        // items.
//Array.prototype.map() :map calls a provided callback function once for each element 
//in an array, in order, and constructs a new array from the 
//results. callback is invoked only for indexes of the array 
//which have assigned values, including undefined.

        const items = this.props.campaigns.map(address =>{
           
           // here curly braces after return indicate that it 
           // will return an object which will have three properties.
            return {
                header: address,
            description :(
                <Link route={`/campaigns/${address}`}>
                  <a>View Campaign</a>
                 </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items = {items} />;
    }

    

    render(){
        return( 
            // Whatever we are passing inside the layout, it will
            // be child for layout and be substituted in place of
            // props.children in layout file.
        <Layout>
            <div>
           
            <h3>Open Campaigns</h3>
           <Link route="campaigns/new">
           <a>
                <Button floated="right"
                content="Create Campaign"
                icon="add circle"
                primary={true}
                />
            </a>
            </Link>
             {this.renderCampaigns()}
            </div>
        </Layout>
        );
    }
}

export default CampaignIndex;