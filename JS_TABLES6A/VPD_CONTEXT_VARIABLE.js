// VPD_CONTEXT_VARIABLE.js

window.VPD_CONTEXT_VARIABLE = {
  "tables": {
    "VPD_CONTEXT_VARIABLE": {
      "columns": {
        "VPD_CONTEXT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VPD_CONTEXT"
        },
        "CONTEXT_VAR_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
        },
        "CONTEXT_VAR_VALUE": {
          "type": "VARCHAR2(128)",
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
