// MONITOR_BUSINESS_FUNCTION.js

window.MONITOR_BUSINESS_FUNCTION = {
  "tables": {
    "MONITOR_BUSINESS_FUNCTION": {
      "columns": {
        "MONITOR_BUSINESS_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "MONITOR_BUSINESS_FUNCTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "MONITOR_BUSINESS_FUNCTION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "BUSINESS_FUNCTION_CLASS": {
          "type": "VARCHAR2(255)",
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "MONITOR_AGENT_LINK"
      ]
    }
  }
};
