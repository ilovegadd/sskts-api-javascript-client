import { Service } from '../service';
export interface IPresavedCreditCardRaw {
    cardNo: string;
    cardPass?: string;
    expire: string;
    holderName: string;
}
export interface IPresavedCreditCardTokenized {
    token: string;
}
export declare type ISearchCardResult = any;
export declare type IContacts = {
    givenName: string;
    familyName: string;
    telephone: string;
};
export declare enum TypeOfGood {
    Reservation = "Resevation",
}
/**
 * person service
 *
 * @class PersonService
 */
export declare class PersonService extends Service {
    /**
     * retrieve user contacts
     */
    getContacts(params: {
        /**
         * person id
         * basically specify 'me' to retrieve contacts of login user
         */
        personId: string;
    }): Promise<IContacts>;
    /**
     * update contacts
     */
    updateContacts(params: {
        /**
         * person id
         * basically specify 'me' to retrieve contacts of login user
         */
        personId: string;
        /**
         * contacts
         */
        contacts: IContacts;
    }): Promise<void>;
    /**
     * find credit cards
     */
    findCreditCards(params: {
        /**
         * person id
         * basically specify 'me' to retrieve contacts of login user
         */
        personId: string;
    }): Promise<ISearchCardResult[]>;
    /**
     * add a credit card
     * @return {Promise<ISearchCardResult>} successfully created credit card info
     */
    addCreditCard(params: {
        /**
         * person id
         * basically specify 'me' to retrieve contacts of login user
         */
        personId: string;
        /**
         * credit card info
         */
        creditCard: IPresavedCreditCardRaw | IPresavedCreditCardTokenized;
    }): Promise<ISearchCardResult>;
    /**
     * search ownerships of reservations
     */
    searchReservationOwnerships(params: {
        /**
         * person id
         * basically specify 'me' to retrieve contacts of login user
         */
        personId: string;
    }): Promise<ISearchCardResult[]>;
}
