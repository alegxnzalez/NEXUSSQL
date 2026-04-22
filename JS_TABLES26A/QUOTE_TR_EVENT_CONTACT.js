// QUOTE_TR_EVENT_CONTACT.js

window.QUOTE_TR_EVENT_CONTACT = {
  "tables": {
    "QUOTE_TR_EVENT_CONTACT": {
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE",
          "info": "The GID for the quote."
},
        "TRANSACTIONAL_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRANSACTIONAL_EVENT",
          "info": "The GID for the transactional event. Transactional Events provide a simplified mechanism for you to register interest in an event for a specific business object, just for this one transaction.  For example: Michael Smith needs to be notified if the shipment costs change on Shipment 1004. The buyer, Will Mathers, needs to be notified if the dates change on order Release 2293-09. The Finance Manager needs to be notified if the cost changes on Invoice PM955830. A transactional event is a pre-selected, pre-parameterized event or set of events, which defines a phase in the life-cycle of a business object. You register interest in the phase on the business object. For example, buyers may have interest if the dates or quantities change on their purchase orders. However, they do not want to know every time there is a change, only on specific purchase orders. To accomplish this: Define a Transactional Event ID called IMPORTANT DATE OR QUANTITY CHANGES. Select the Type ORDER RELEASE. Use the event, as defined in the Subject field, ORDER - DATES MODIFIED. Leave the Restrictions field blank. If, though, you wanted to limit this to events brought in via integration only, then you would enter INTEGRATION here. You can select multiple restrictions at once if necessary. Save this line, and create another for the Subject ORDER - QUANTITIES MODIFIED. The buyers can then pick IMPORTANT DATE OR QUANTITY CHANGES form a list of Transactional Events on specific purchase orders. Transactional Events are available on the following managers: Order Base and Order Release Invoice and Bill Job Buy Shipment, Sell Shipment, and Shipment Group You can also define Transactional Events in the Contact Manager. This allows you to register a contact for several events, rather than having to add that contact to each specific event."
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the contact."
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "The GID for the contact."
},
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "The GID for the stlyesheet to use with the event."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
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