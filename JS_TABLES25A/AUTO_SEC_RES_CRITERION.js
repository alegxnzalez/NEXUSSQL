// AUTO_SEC_RES_CRITERION.js

window.AUTO_SEC_RES_CRITERION = {
  "tables": {
    "AUTO_SEC_RES_CRITERION": {
      "columns": {
        "AUTO_SEC_RES_CRITERION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "AUTO_SEC_RES_CRITERION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "OBJECT_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "FIELD_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DATA_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_VALUE": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "MAX_VALUE": {
          "type": "NUMBER(10)",
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
      "fk_tables": [
        "AUTO_SEC_RES_PROFILE_D"
      ]
    }
  }
};
