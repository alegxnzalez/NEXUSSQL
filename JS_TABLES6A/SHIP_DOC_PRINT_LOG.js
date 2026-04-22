// SHIP_DOC_PRINT_LOG.js

window.SHIP_DOC_PRINT_LOG = {
  "tables": {
    "SHIP_DOC_PRINT_LOG": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "PRINT_LOG_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "DOC_TYPE": {
          "type": "VARCHAR2(3)",
          "nullable": false,
          "values": [
            "BL",
            "PL"
          ]
        },
        "PRINT_TIME": {
          "type": "DATE",
          "nullable": false
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
      "fk_tables": []
    }
  }
};
