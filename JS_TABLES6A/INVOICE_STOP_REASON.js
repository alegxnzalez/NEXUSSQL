// INVOICE_STOP_REASON.js

window.INVOICE_STOP_REASON = {
  "tables": {
    "INVOICE_STOP_REASON": {
      "columns": {
        "INVOICE_STOP_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "INVOICE_STOP_REASON_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "INVOICE_STOP_REASON_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The description for the stop."
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
        "INVOICE_STOP"
      ]
    }
  }
};
