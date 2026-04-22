// GTM_TR_PARTY_SCREEN.js

window.GTM_TR_PARTY_SCREEN = {
  "tables": {
    "GTM_TR_PARTY_SCREEN": {
      "columns": {
        "GTM_TR_PARTY_SCREEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the party screening record associated with the GTM trade transaction."
},
        "GTM_TR_PARTY_SCREEN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the party screening record associated with the GTM trade transaction."
},
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line."
},
        "GTM_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for party associated with the GTM trade transaction line."
},
        "IS_PASSED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "The restricted party screening status for a party associated with the GTM trade transaction line."
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
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The contact GID."
}
      },
      "fk_tables": []
    }
  }
};