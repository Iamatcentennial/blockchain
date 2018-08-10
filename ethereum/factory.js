import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';
// JSON.parse will parse the file to create
//ABI needed by the web3.theContract
//constructor.
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xed9F5a36Bf6044e45a33347F30f908Aa12065Cdd'
);

export default instance;