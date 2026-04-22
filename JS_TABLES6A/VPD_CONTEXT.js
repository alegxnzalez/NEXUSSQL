// VPD_CONTEXT.js

window.VPD_CONTEXT = {
  "tables": {
    "VPD_CONTEXT": {
      "columns": {
        "VPD_CONTEXT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "VPD_CONTEXT_XID": {
          "type": "VARCHAR2(50)",
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
        "USER_ROLE",
        "VPD_CONTEXT_VARIABLE"
      ]
    }
  }
};
