// INVOICE_SUMMARY_BOV.js

window.INVOICE_SUMMARY_BOV = {
  "tables": {
    "INVOICE_SUMMARY_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "FREIGHT_CHARGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "COMMERCIAL_UNIT_PRICE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PREPAID_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "INVOICE_TOTAL": {
          "type": "NUMBER(6)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        }
      },
      "fk_tables": []
    }
  }
};
