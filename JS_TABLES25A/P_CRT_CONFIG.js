// P_CRT_CONFIG.js

window.P_CRT_CONFIG = {
  "tables": {
    "P_CRT_CONFIG": {
      "columns": {
        "P_CRT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "P_CRT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
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
        "RATE_LOAD_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_LOAD_CONFIG"
        }
      },
      "fk_tables": [
        "P_BID_ROUND",
        "P_CRT_CONFIG_D",
        "P_CRT_CONFIG_LANE_D",
        "P_CRT_CONFIG_PROJECT_D"
      ]
    }
  }
};
