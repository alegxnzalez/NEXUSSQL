// SKU_DESCRIPTOR.js

window.SKU_DESCRIPTOR = {
  "tables": {
    "SKU_DESCRIPTOR": {
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU"
        },
        "SKU_DESCRIPTOR_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "SKU_DESCRIPTOR_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "SKU_DESCRIPTOR_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SKU_DESCRIPTOR_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PARENT_SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PARENT_SKU_DESCRIPTOR_SEQ": {
          "type": "NUMBER()",
          "nullable": true
        },
        "XML": {
          "type": "CLOB",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": true
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
        "SKU_DESCRIPTOR_REMARK"
      ]
    }
  }
};
