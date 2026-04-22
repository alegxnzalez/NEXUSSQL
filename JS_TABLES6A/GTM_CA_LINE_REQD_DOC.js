// GTM_CA_LINE_REQD_DOC.js

window.GTM_CA_LINE_REQD_DOC = {
  "tables": {
    "GTM_CA_LINE_REQD_DOC": {
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
          "foreign_key": "GTM_CA_LINE_REQDOC",
          "info": "Campaign line id. "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CA_LINE_REQDOC",
          "info": "Required document type. "
        },
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT",
          "info": "Document instance "
        },
        "DOCUMENT_REVISION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Document revision count "
        },
        "REVIEW": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "PENDING",
            "ACCEPTED",
            "DENIED"
          ],
          "info": "Document review state "
        },
        "ANNOTATIONS": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "Document revision annotations "
        },
        "DOCUMENT_CMS_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "The document name used to identify a set of revisions (versions) for a CMS."
        }
      },
      "fk_tables": [
        "GTM_CA_LINE_REQDD_REVIEW"
      ]
    }
  }
};
