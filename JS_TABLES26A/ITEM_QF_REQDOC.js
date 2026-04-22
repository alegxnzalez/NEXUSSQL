// ITEM_QF_REQDOC.js

window.ITEM_QF_REQDOC = {
  "tables": {
    "ITEM_QF_REQDOC": {
      "description": "Required document for an item qualification",
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
        "ITEM_QF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_QF",
          "info": "The GID for the item qualification."
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "The GID for the required document type."
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
          "info": "The review status of the required document."
},
        "INSTRUCTIONS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Free-form field to hold document attributes. E.g. a document could be denoted as required or optional."
}
      },
      "fk_tables": [
        "ITEM_QF_REQD_DOC",
        "ITEM_QF_REQD_REVIEWER",
        "ITEM_QF_REQD_STATUS",
        "ITEM_QF_REQD_SUBSCRIBER"
]
    }
  }
};