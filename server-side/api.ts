import MyService from './my.service'
import JavascriptService from './my.javascript.service.js'
import { Client, Request } from '@pepperi-addons/debug-server'

// add functions here
// this function will run on the 'api/foo' endpoint
// the real function is runnning on another typescript file
export async function foo(client: Client, request: Request) {

    /* string uri = string.Empty;                
uri = "/" + m_transitionTypes[transition.GetType()] + "/" + transition.GetObjectID().ID;
message.Data = new Data
                {
                    ID = transition.GetObjectID().ID,               
                    URI = uri,
                    ExternalID = transition.GetExternalId()
                };
                */
               // need to make one api call to get the ATD and external ID 
    const service = new MyService(client);
    let obj;
    let str = 'InternalID=' + request.body.ObjectID;
    if(request.body.Type = 'transactions')
    {
        obj = await service.papiClient.transactions.get(request.body.ObjectID);
        obj = await service.papiClient.transactions.find({where:'InternalID=' + request.body.ObjectID, fields:['Type','ExternalID']})
   //find({where:'InternalID=${request.body.ObjectID}'})

    }
    let oldURI = "/" + "m_transitionTypes[transition.GetType()]" + "/" + request.body.ObjectID;
    let webhookOldData = {
        ID: 2,
        URI: oldURI,
        ExternalID: ''
    };

    // call ipaas
    const res = {test:"good test"};//await service.papiClient.apiCall()
    return res;
};

// this function will run on api/js_foo endpoint
// note that the code here is running from a javascript file
export async function js_foo(client: Client, request: Request) {
    return JavascriptService.js_foo(client, request);
}
