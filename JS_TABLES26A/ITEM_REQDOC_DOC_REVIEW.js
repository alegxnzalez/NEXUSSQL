// ITEM_REQDOC_DOC_REVIEW.js

window.ITEM_REQDOC_DOC_REVIEW = {
  "tables": {
    "ITEM_REQDOC_DOC_REVIEW": {
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
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM",
          "info": "The GID for the item that is having the required document added, updated, or removed."
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "The GID for the document definition."
},
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT",
          "info": "The GID for the document instance."
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the document contact."
},
        "STATE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "PENDING",
                    "ACCEPTED",
                    "DENIED"
          ],
          "info": "Review info."
},
        "COMMENTS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Changes."
}
      },
      "fk_tables": []
    }
  }
};