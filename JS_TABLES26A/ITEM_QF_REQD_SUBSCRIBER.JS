// ITEM_QF_REQD_SUBSCRIBER.js

window.ITEM_QF_REQD_SUBSCRIBER = {
  "tables": {
    "ITEM_QF_REQD_SUBSCRIBER": {
      "description": "A subscriber for an item qualification required document",
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
        "ITEM_QF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_QF_REQDOC",
          "info": "Item qualification id"
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_QF_REQDOC",
          "info": "Required document type"
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