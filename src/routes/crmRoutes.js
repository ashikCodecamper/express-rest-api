import { addNewContact, getContacts } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get(getContacts)
    
    //post ENDPOINT
    .post(addNewContact);

    app.route('/contact/:contactId')
    .put((req, res) =>
    res.send('PUT request successful!!'))

    .delete((req, res) =>
    res.send('DELETE request successful!!'));
}

export default routes;