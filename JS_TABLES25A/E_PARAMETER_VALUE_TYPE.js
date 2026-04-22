// E_PARAMETER_VALUE_TYPE.js

window.E_PARAMETER_VALUE_TYPE = {
  "tables": {
    "E_PARAMETER_VALUE_TYPE": {
      "columns": {
        "PARAMETER_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PARAMETER_VALUE_TYPE_XID": {
          "type": "VARCHAR2(50)",
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
      "fk_tables": [
        "E_PARAMETER"
      ]
    }
  }
};
