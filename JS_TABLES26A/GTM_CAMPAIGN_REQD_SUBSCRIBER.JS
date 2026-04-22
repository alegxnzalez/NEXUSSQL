// GTM_CAMPAIGN_REQD_SUBSCRIBER.js

window.GTM_CAMPAIGN_REQD_SUBSCRIBER = {
  "tables": {
    "GTM_CAMPAIGN_REQD_SUBSCRIBER": {
      "description": "A subscriber for a campaign requirement document",
      "columns": {
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
},
        "GTM_CAMPAIGN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CAMPAIGN_REQDOC",
          "info": "The GID for the GTM campaign."
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CAMPAIGN_REQDOC",
          "info": "Required document type for the GTM campaign."
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the document reviewer."
}
      },
      "fk_tables": []
    }
  }
};