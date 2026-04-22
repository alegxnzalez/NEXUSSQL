// INCO_TERM.js

window.INCO_TERM = {
  "tables": {
    "INCO_TERM": {
      "columns": {
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "INCO_TERM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "INCO_TERM_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the INCO term."
        },
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
        }
      },
      "fk_tables": [
        "COMMERCIAL_INVOICE",
        "CONSOL",
        "GTM_COMPLIANCE_RULE",
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_LINE",
        "INCO_TERM_PROFILE_D",
        "INVOICE",
        "OB_ORDER_BASE",
        "ORDER_RELEASE",
        "QUOTE",
        "TEXT_TEMPLATE_PROFILE"
      ]
    }
  }
};
