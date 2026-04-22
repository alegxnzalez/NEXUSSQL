// SKU_STATUS.js

window.SKU_STATUS = {
  "tables": {
    "SKU_STATUS": {
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU"
        },
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_VALUE"
        },
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STATUS_VALUE"
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
      "fk_tables": []
    }
  }
};
