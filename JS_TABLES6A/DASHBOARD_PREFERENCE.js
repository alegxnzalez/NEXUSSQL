// DASHBOARD_PREFERENCE.js

window.DASHBOARD_PREFERENCE = {
  "tables": {
    "DASHBOARD_PREFERENCE": {
      "columns": {
        "PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PREFERENCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DASHBOARD_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": false
        },
        "DASHBOARD_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "info": "The physical name of the dashboard from OBI EE."
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
