// DATA_INFO_DETAIL.js

window.DATA_INFO_DETAIL = {
  "tables": {
    "DATA_INFO_DETAIL": {
      "columns": {
        "DATA_INFO_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_INFO"
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(250)",
          "nullable": false,
          "key_value": true
        },
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "UOM_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "BEFORE_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "AFTER_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
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
