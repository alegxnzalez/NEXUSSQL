// DEPENDENCY_SERVICE.js

window.DEPENDENCY_SERVICE = {
  "tables": {
    "DEPENDENCY_SERVICE": {
      "columns": {
        "DEPENDENCY_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A global unique identifier for the dependency service. "
        },
        "DEPENDENCY_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier for the dependency service. "
        },
        "DEPENDENCY_SERVICE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The description of the dependency service.  For example, Sequence."
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
        "DEPENDENCY_SERVICE_D",
        "MONITOR_AGENT_LINK"
      ]
    }
  }
};
