// SHIPMENT_REQDOC.js

window.SHIPMENT_REQDOC = {
  "tables": {
    "SHIPMENT_REQDOC": {
      "description": "Required document for a shipment",
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
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "The shipment GID for the document."
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "The required document type for the shipment."
},
        "NUM_REVISIONS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The number of document revisions generated."
},
        "REVIEW_STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "PREVIEW",
                    "IN REVIEW",
                    "FINAL"
          ],
          "info": "The status of the review of the document."
},
        "INSTRUCTIONS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The instruction associated with handling of the document."
}
      },
      "fk_tables": [
        "SHIPMENT_REQDOC_DOC",
        "SHIPMENT_REQDOC_REVIEWER",
        "SHIPMENT_REQDOC_STATUS",
        "SHIPMENT_REQDOC_SUBSCRIBER",
        "SHIPMENT_REQDOC_TEXT"
]
    }
  }
};