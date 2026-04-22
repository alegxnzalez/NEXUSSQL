// BUSINESS_MONITOR.js

window.BUSINESS_MONITOR = {
  "tables": {
    "BUSINESS_MONITOR": {
      "columns": {
        "BUSINESS_MONITOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BUSINESS_MONITOR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The title of the business monitor. "
        },
        "REFRESH_INTERVAL": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "If auto-refresh is ON, then the duration of time between refreshes.  The default value is 5 minutes."
        },
        "REFRESH_INTERVAL_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "REFRESH_INTERVAL_BASE": {
          "type": "NUMBER()",
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
        "BUSINESS_MONITOR_ACCESS",
        "BUSINESS_MONITOR_D"
      ]
    }
  }
};
