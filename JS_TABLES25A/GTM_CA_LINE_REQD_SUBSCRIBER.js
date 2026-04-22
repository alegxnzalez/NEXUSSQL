// GTM_CA_LINE_REQD_SUBSCRIBER.js

window.GTM_CA_LINE_REQD_SUBSCRIBER = {
  "tables": {
    "GTM_CA_LINE_REQD_SUBSCRIBER": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "GTM_CAMPAIGN_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CA_LINE_REQDOC",
          "info": "Campaign line id "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CA_LINE_REQDOC",
          "info": "Required document type "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "Subscriber"
        }
      },
      "fk_tables": []
    }
  }
};
