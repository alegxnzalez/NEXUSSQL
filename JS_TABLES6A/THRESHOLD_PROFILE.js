// THRESHOLD_PROFILE.js

window.THRESHOLD_PROFILE = {
  "tables": {
    "THRESHOLD_PROFILE": {
      "columns": {
        "THRESHOLD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "THRESHOLD_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "THRESHOLD_PROFILE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": true
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
        "DOMAIN_SETTING",
        "THRESHOLD_PROFILE_D"
      ]
    }
  }
};
