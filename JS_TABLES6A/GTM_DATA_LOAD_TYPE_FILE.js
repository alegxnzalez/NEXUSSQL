// GTM_DATA_LOAD_TYPE_FILE.js

window.GTM_DATA_LOAD_TYPE_FILE = {
  "tables": {
    "GTM_DATA_LOAD_TYPE_FILE": {
      "columns": {
        "GTM_DATA_LOAD_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DATA_LOAD_TYPE"
        },
        "SEQUENCE_NO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
        },
        "FILE_NAME_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "IS_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
