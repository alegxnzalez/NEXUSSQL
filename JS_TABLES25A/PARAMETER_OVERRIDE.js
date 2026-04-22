// PARAMETER_OVERRIDE.js

window.PARAMETER_OVERRIDE = {
  "tables": {
    "PARAMETER_OVERRIDE": {
      "columns": {
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
        },
        "PARAMETER_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PARAMETER_OVERRIDE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        }
      },
      "fk_tables": [
        "LNM_SCENARIO",
        "PARAMETER_OVERRIDE_D"
      ]
    }
  }
};
