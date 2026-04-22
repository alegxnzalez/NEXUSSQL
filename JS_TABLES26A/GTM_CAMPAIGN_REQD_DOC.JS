// GTM_CAMPAIGN_REQD_DOC.js

window.GTM_CAMPAIGN_REQD_DOC = {
  "tables": {
    "GTM_CAMPAIGN_REQD_DOC": {
      "description": "A document revision for a campaign required document",
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
          "info": "The GID for the required document type."
},
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT",
          "info": "The GID for the document instance."
},
        "DOCUMENT_REVISION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The revision count for the document."
},
        "REVIEW": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
                    "PENDING",
                    "ACCEPTED",
                    "DENIED"
          ],
          "info": "The review status of the required document."
},
        "ANNOTATIONS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Annotations for a document revision."
},
        "DOCUMENT_CMS_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "The document name used to identify a set of revisions (versions) for a CMS."
}
      },
      "fk_tables": []
    }
  }
};