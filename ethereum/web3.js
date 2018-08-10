import Web3 from 'web3';

// create a web3 instance by passing the current provider from
// the metamask.
// In the statement below, the global variable window is 
//const web3 = new Web3(window.web3.currentProvider);

let web3;
// If condition checks whether we are running on the browser
// or on server
// it is window on browser and undefined on server

if(typeof window !== 'undefined' && typeof window.web3 !=='undefined'){
// We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}
else{
    // WE are on the server or the user is not running metamask

    //We will make our own provider
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/Wu5MCoiVAWT9dhQsHGqP'
    );
    
    web3 = new Web3(provider);
}

export default web3;