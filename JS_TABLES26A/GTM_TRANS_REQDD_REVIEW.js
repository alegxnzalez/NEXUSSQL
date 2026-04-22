// GTM_TRANS_REQDD_REVIEW.js

window.GTM_TRANS_REQDD_REVIEW = {
  "tables": {
    "GTM_TRANS_REQDD_REVIEW": {
      "description": "Reviewer details for a trade document revision",
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
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_REQD_DOC",
          "info": "The GID for the GTM trade transaction."
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_REQD_DOC",
          "info": "Required document type for the GTM trade transaction."
},
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_REQD_DOC",
          "info": "The GID for the document."
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the document reviewer."
},
        "STATE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "PENDING",
                    "ACCEPTED",
                    "DENIED"
          ],
          "info": "The review status of the document."
},
        "COMMENTS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Comments from the reviewer for the specific document."
}
      },
      "fk_tables": []
    }
  }
};