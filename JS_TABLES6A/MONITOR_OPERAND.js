// MONITOR_OPERAND.js

window.MONITOR_OPERAND = {
  "tables": {
    "MONITOR_OPERAND": {
      "columns": {
        "MONITOR_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "MONITOR_OPERAND_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "MONITOR_OPERAND_NAME": {
          "type": "VARCHAR2(120)",
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
        "MONITOR_OPERAND_D"
      ]
    }
  }
};
