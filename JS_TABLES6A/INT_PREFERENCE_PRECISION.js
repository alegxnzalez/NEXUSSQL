// INT_PREFERENCE_PRECISION.js

window.INT_PREFERENCE_PRECISION = {
  "tables": {
    "INT_PREFERENCE_PRECISION": {
      "columns": {
        "INT_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INT_PREFERENCE"
        },
        "UOM_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PREFERENCE"
        },
        "UOM_PREFERENCE_VALUE": {
          "type": "VARCHAR2(512)",
          "nullable": false,
          "key_value": true
        },
        "PRECISION": {
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
