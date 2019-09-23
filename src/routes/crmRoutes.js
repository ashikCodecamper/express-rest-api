import { 
    addNewContact,
    getContacts,
    getContactsWithId,
    updateContact,
    deleteContact,
 } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get(getContacts)
    
    //post ENDPOINT
    .post(addNewContact);

    app.route('/contact/:contactId')
    .get(getContactsWithId)
    .put(updateContact)

    .delete(deleteContact);
}

export default routes;