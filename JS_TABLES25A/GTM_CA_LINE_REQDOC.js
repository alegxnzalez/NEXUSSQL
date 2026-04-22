// GTM_CA_LINE_REQDOC.js

window.GTM_CA_LINE_REQDOC = {
  "tables": {
    "GTM_CA_LINE_REQDOC": {
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
          "foreign_key": "GTM_CAMPAIGN_LINE",
          "info": "Campaign line id "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "Required document type. "
        },
        "NUM_REVISIONS": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Number of document revisions generated"
        },
        "REVIEW_STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "PREVIEW",
            "IN REVIEW",
            "FINAL"
          ]
        },
        "INSTRUCTIONS": {
          "type": "VARCHAR2(200)",
          "nullable": true
        }
      },
      "fk_tables": [
        "GTM_CA_LINE_REQD_DOC",
        "GTM_CA_LINE_REQD_REVIEWER",
        "GTM_CA_LINE_REQD_STATUS",
        "GTM_CA_LINE_REQD_SUBSCRIBER",
        "GTM_CA_LINE_REQD_TEXT"
      ]
    }
  }
};
