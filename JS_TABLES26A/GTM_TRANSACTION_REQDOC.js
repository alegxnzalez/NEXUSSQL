// GTM_TRANSACTION_REQDOC.js

window.GTM_TRANSACTION_REQDOC = {
  "tables": {
    "GTM_TRANSACTION_REQDOC": {
      "description": "Required document for a trade",
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
          "foreign_key": "GTM_TRANSACTION",
          "info": "The GID for the GTM trade transaction."
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "Required document type for the GTM trade transaction."
},
        "NUM_REVISIONS": {
          "type": "NUMBER",
          "nullable": false,
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
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for the compliance rule set group."
},
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the compliance rule."
},
        "INSTRUCTIONS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Free-form field to hold document attributes. E.g. a document could be denoted as required or optional."
}
      },
      "fk_tables": [
        "GTM_TRANS_LINE_REQDOC_LINK",
        "GTM_TRANS_REQD_DOC",
        "GTM_TRANS_REQD_REVIEWER",
        "GTM_TRANS_REQD_STATUS",
        "GTM_TRANS_REQD_SUBSCRIBE",
        "GTM_TRANS_REQD_TEXT"
]
    }
  }
};