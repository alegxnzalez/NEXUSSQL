// ALLOCATION_OB_LINE_D.js

window.ALLOCATION_OB_LINE_D = {
  "tables": {
    "ALLOCATION_OB_LINE_D": {
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
        "ALLOC_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOCATION_BASE"
        },
        "ALLOC_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OB_LINE"
        },
        "COST_DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE"
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE_LINEITEM"
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "foreign_key": "INVOICE_LINEITEM"
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE"
        },
        "COST_FN": {
          "type": "NUMBER()",
          "nullable": true
        },
        "COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SHIPMENT_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VOUCHER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE"
        }
      },
      "fk_tables": []
    }
  }
};
