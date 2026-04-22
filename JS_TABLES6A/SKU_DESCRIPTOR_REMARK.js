// SKU_DESCRIPTOR_REMARK.js

window.SKU_DESCRIPTOR_REMARK = {
  "tables": {
    "SKU_DESCRIPTOR_REMARK": {
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_DESCRIPTOR"
        },
        "SKU_DESCRIPTOR_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_DESCRIPTOR"
        },
        "REMARK_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
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
      "fk_tables": []
    }
  }
};
