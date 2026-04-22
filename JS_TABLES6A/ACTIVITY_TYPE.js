// ACTIVITY_TYPE.js

window.ACTIVITY_TYPE = {
  "tables": {
    "ACTIVITY_TYPE": {
      "columns": {
        "ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ACTIVITY_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
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
        "DM_RULE_D",
        "DM_TRANSACTION",
        "SPECIAL_SERVICE"
      ]
    }
  }
};
