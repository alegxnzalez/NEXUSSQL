// SETTING_ACTION_ACCESS.js

window.SETTING_ACTION_ACCESS = {
  "tables": {
    "SETTING_ACTION_ACCESS": {
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
        "USER_ACCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "USER_ACCESS"
        },
        "SETTING_ACTION_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        }
      },
      "fk_tables": []
    }
  }
};
