// AUDIT_CONTROL.js

window.AUDIT_CONTROL = {
  "tables": {
    "AUDIT_CONTROL": {
      "columns": {
        "AUDIT_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOMAIN"
        },
        "IS_AUDIT_ON": {
          "type": "CHAR(1)",
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
      "fk_tables": [
        "AUDIT_OBJECT_CONTROL",
        "GTM_AUDIT_CONTROL_SERVICE"
      ]
    }
  }
};
