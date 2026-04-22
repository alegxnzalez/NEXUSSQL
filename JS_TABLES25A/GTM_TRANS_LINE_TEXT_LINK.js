// GTM_TRANS_LINE_TEXT_LINK.js

window.GTM_TRANS_LINE_TEXT_LINK = {
  "tables": {
    "GTM_TRANS_LINE_TEXT_LINK": {
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
        "GTM_TRANS_LINE_TEXT_LINK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the link between the GTM trade transaction line and the associated text template. "
        },
        "GTM_TRANS_LINE_TEXT_LINK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the link between the GTM trade transaction line and the associated text template. "
        },
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line. "
        },
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRANS_REQD_TEXT",
          "info": "The GID for the GTM trade transaction. "
        },
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRANS_REQD_TEXT",
          "info": "The GID for the document type associated with the GTM trade transaction line text template. "
        },
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRANS_REQD_TEXT",
          "info": "The GID for the text template associated with the GTM trade transaction line. "
        },
        "TEXT_OVERRIDE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Transactional override for the template on the specific document "
        },
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for the GTM compliance rule set group used to assign a text template to a trade transaction line. "
        },
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the GTM compliance rule used to assign a text template to a trade transaction line."
        }
      },
      "fk_tables": []
    }
  }
};
