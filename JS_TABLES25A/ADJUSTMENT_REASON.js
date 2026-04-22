// ADJUSTMENT_REASON.js

window.ADJUSTMENT_REASON = {
  "tables": {
    "ADJUSTMENT_REASON": {
      "columns": {
        "ADJUSTMENT_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the adjustment reason. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ADJUSTMENT_REASON_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the adjustment reason. Is used for creating the GID "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Description of the adjustment reason."
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
        "DM_TRANSACTION_LINEITEM",
        "INVOICE_LINEITEM",
        "SHIPMENT_ACCESSORIAL",
        "SHIPMENT_AGENT_RSP",
        "SHIPMENT_COST",
        "SHIPMENT_INF_COST_D",
        "SHIPMENT_SPECIAL_SERVICE",
        "VOUCHER",
        "VOUCHER_INVOICE_LINEITEM_JOIN"
      ]
    }
  }
};
