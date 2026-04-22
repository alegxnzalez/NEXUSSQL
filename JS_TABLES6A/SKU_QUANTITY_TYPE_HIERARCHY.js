// SKU_QUANTITY_TYPE_HIERARCHY.js

window.SKU_QUANTITY_TYPE_HIERARCHY = {
  "tables": {
    "SKU_QUANTITY_TYPE_HIERARCHY": {
      "columns": {
        "SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_QUANTITY_TYPE"
        },
        "CHILD_SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_QUANTITY_TYPE"
        },
        "SKU_QUANT_TYPE_HIER_SEQ": {
          "type": "NUMBER(2)",
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
