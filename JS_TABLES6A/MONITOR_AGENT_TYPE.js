// MONITOR_AGENT_TYPE.js

window.MONITOR_AGENT_TYPE = {
  "tables": {
    "MONITOR_AGENT_TYPE": {
      "columns": {
        "MONITOR_AGENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique global identifier for the monitor agent type. "
        },
        "MONITOR_AGENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier for the monitor agent type. "
        },
        "MONITOR_AGENT_TYPE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The description of the agent type."
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
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
        "MONITOR_AGENT"
      ]
    }
  }
};
