// TRANSACTIONAL_EVENT_CONTACT.js

window.TRANSACTIONAL_EVENT_CONTACT = {
  "tables": {
    "TRANSACTIONAL_EVENT_CONTACT": {
      "columns": {
        "TRANSACTIONAL_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRANSACTIONAL_EVENT",
          "info": "The GID for the transactional event. Transactional Events provide a simplified mechanism for you to register interest in an event for a specific business object, just for this one transaction.\nFor example: Michael Smith needs to be notified if the shipment costs change on Shipment 1004.\nThe buyer, Will Mathers, needs to be notified if the dates change on order Release 2293-09.\nThe Finance Manager needs to be notified if the cost changes on Invoice PM955830.\nA transactional event is a pre-selected, pre-parameterized event or set of events, which defines a phase in the life-cycle of a business object. You register interest in the phase on the business object.\nFor example, buyers may have interest if the dates or quantities change on their purchase orders. However, they do not want to know every time there is a change, only on specific purchase orders. To accomplish this:\nDefine a Transactional Event ID called IMPORTANT DATE OR QUANTITY CHANGES.\nSelect the Type ORDER RELEASE.\nUse the event, as defined in the Subject field, ORDER - DATES MODIFIED.\nLeave the Restrictions field blank. If, though, you wanted to limit this to events brought in via integration only, then you would enter INTEGRATION here. You can select multiple restrictions at once if necessary.\nSave this line, and create another for the Subject ORDER - QUANTITIES MODIFIED.\nThe buyers can then pick IMPORTANT DATE OR QUANTITY CHANGES form a list of Transactional E "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the contact. "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication method ID identifies the preferred communication method for this contact. If you do not select a communication method for this contact, the choice of communication method is delegated to the communication method records associated with each event. The system selects the highest-ranked communication method from the supported methods at the time of notification. The system looks at all parties involved in a shipment to ensure that a common method of communication exists when sending notification. For example, it checks to make sure that the service provider can send faxes and that the corporation can receive them. "
        },
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "The GID for the stylesheet profile to use for this transactional event. "
        },
        "AS_INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The GID for the acting as involved party qualifier. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
