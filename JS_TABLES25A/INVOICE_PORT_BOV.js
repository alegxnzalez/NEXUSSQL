// INVOICE_PORT_BOV.js

window.INVOICE_PORT_BOV = {
  "tables": {
    "INVOICE_PORT_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INVOICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INVOICE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "NET_AMOUNT_DUE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "SHIPPER_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PORT_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "PORT_FUNCTION_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "PORT_LOCATION_ID": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "PORT_LOCATION_QUAL": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PORT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "PORT_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "PORT_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
