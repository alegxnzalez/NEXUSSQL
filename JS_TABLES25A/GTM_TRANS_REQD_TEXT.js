// GTM_TRANS_REQD_TEXT.js

window.GTM_TRANS_REQD_TEXT = {
  "tables": {
    "GTM_TRANS_REQD_TEXT": {
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
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_REQDOC",
          "info": "The GID for the GTM trade transaction. "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_REQDOC",
          "info": "Required document type for the GTM trade transaction. "
        },
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TEXT_TEMPLATE",
          "info": "The GID for the text template associated with the GTM trade transaction line. "
        },
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line. "
        },
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The compliance rule used to assign the text template to the GTM trade transaction. "
        },
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The compliance rule set group used to assign the text template to the GTM trade transaction. "
        },
        "TEXT_OVERRIDE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Transactional override for the template on the specific document."
        }
      },
      "fk_tables": [
        "GTM_TRANS_LINE_TEXT_LINK"
      ]
    }
  }
};
