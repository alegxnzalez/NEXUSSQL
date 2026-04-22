// EXPL_SEVERITY.js

window.EXPL_SEVERITY = {
  "tables": {
    "EXPL_SEVERITY": {
      "columns": {
        "EXPL_SEVERITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "EXPL_SEVERITY_XID": {
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
        "EXPLANATION"
      ]
    }
  }
};
