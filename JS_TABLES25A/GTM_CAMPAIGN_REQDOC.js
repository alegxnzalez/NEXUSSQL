// GTM_CAMPAIGN_REQDOC.js

window.GTM_CAMPAIGN_REQDOC = {
  "tables": {
    "GTM_CAMPAIGN_REQDOC": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "GTM_CAMPAIGN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CAMPAIGN",
          "info": "The GID for the GTM campaign. "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "Required document type for the GTM campaign. "
        },
        "NUM_REVISIONS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of document revisions generated. "
        },
        "REVIEW_STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "PREVIEW",
            "IN REVIEW",
            "FINAL"
          ],
          "info": "The review status of the required document. "
        },
        "INSTRUCTIONS": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Free-form field to hold document attributes. E.g. a document could be denoted as required or optional."
        }
      },
      "fk_tables": [
        "GTM_CAMPAIGN_REQD_DOC",
        "GTM_CAMPAIGN_REQD_REVIEWER",
        "GTM_CAMPAIGN_REQD_STATUS",
        "GTM_CAMPAIGN_REQD_SUBSCRIBER",
        "GTM_CAMPAIGN_REQD_TEXT"
      ]
    }
  }
};
