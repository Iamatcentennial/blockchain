import React, {Component} from 'react';
import {Button, Form, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

import {Router} from '../../routes';


class CampaignNew extends Component{
    state={
        minimumContribution: '',
        errorMeassage:'',
        loading: false
    }

    // Event handler
    onSubmit= async (event)=> {
        // This will prevent from automatic submission


        event.preventDefault();
        this.setState({ loading: true, errorMeassage:'' });


        // When we call the send fuction from the browser, metamask
        // will calculate the gas value automatically and we do not need
        // to specify that value.
        try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
            from: accounts[0]
        });

        Router.pushRoute('/');

    }catch(err){
        this.setState({errorMeassage:err.message});
    }

    this.setState({loading: false});



    };

    render(){
        // error ={!!this.state.errorMeassage} here first exclamation will
        // enable the string to reurn the false boolean value  and second one
        // will convert it to opposite
        return (
            <Layout>
                <h3>Create a Campaign</h3>
            
                <Form onSubmit={this.onSubmit} error ={!!this.state.errorMeassage}>
                        <Form.Field>
                            <label>Minimum Contribution </label>
                            <Input label="wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            // whenever the user type something, onChange function will be triggered
                            // and will give us event object which will make the input component
                            // to rerender and show us the value that is typed.
                            onChange={event => this.setState({
                                minimumContribution: event.target.value
                            })}
                            />
                        </Form.Field>
                        
                        <Message error header="Oops!" content={this.state.errorMeassage}/>
                        <Button floated="left"
                        content="Create Campaign" loading={this.state.loading}
                        primary={true}
                        />
                   
                </Form>

    </Layout>
        )
    }
}

export default CampaignNew;