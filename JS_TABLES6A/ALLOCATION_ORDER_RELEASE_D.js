// ALLOCATION_ORDER_RELEASE_D.js

window.ALLOCATION_ORDER_RELEASE_D = {
  "tables": {
    "ALLOCATION_ORDER_RELEASE_D": {
      "columns": {
        "ALLOC_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOCATION_BASE"
        },
        "ALLOC_COST_SEQNO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORDER_RELEASE"
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
          "nullable": false
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "GL code for the allocation order release record. "
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
          "nullable": true,
          "info": "functional currency amount for cost "
        },
        "COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "COST_TYPE_GID": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "cost type for this allocation record "
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
        "SHIPMENT_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Shipment cost seq no would be stored if we perform allocation based on shipment "
        },
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Voucher/Bill line item seq no would be stored if we perform allocation based on voucher or bill "
        },
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Invoice/Bill Gid would be stored in this field if allocation is done based on Invoice or Bill "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Shipment  Gid would be stored in this field if allocation is done based on  shipment "
        },
        "VOUCHER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Voucher  Gid would be stored in this field if allocation is done based on voucher"
        }
      },
      "fk_tables": []
    }
  }
};
