// GENERAL_LEDGER_CODE.js

window.GENERAL_LEDGER_CODE = {
  "tables": {
    "GENERAL_LEDGER_CODE": {
      "columns": {
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "GENERAL_LEDGER_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "BUY_ORDER_GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_LOOKUP_KEY",
          "info": "Indicates the buy side lookup key to be used for assigning buy side GL codes to orders "
        },
        "SELL_ORDER_GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_LOOKUP_KEY",
          "info": "Indicates the sell side lookup key to be used for assigning sell side GL codes to orders "
        },
        "BUY_SHIP_GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_LOOKUP_KEY",
          "info": "Indicates the lookup key to be used for assigning GL codes to buy side shipments "
        },
        "SELL_SHIP_GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_LOOKUP_KEY",
          "info": "Indicates the lookup key to be used for assigning GL codes to sell side shipments "
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
        },
        "INVOICE_GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_LOOKUP_KEY",
          "info": "Indicates the invoice lookup key to be used for assigning invoice GL codes to invoice "
        },
        "BILL_GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_LOOKUP_KEY",
          "info": "Indicates the bill lookup key to be used for assigning bill GL codes to invoice"
        }
      },
      "fk_tables": [
        "ALLOCATION_OB_LINE_D",
        "ALLOCATION_ORDER_RELEASE_D",
        "ALLOCATION_OR_LINE_D",
        "GL_CODE_MAP",
        "INVOICE_LINEITEM",
        "LINE_APPROVE_TOLERANCE_DETAIL",
        "NFRC_RULE",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LINE",
        "SHIPMENT_COST",
        "SHIPMENT_INF_COST_D"
      ]
    }
  }
};
