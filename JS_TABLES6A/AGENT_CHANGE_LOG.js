// AGENT_CHANGE_LOG.js

window.AGENT_CHANGE_LOG = {
  "tables": {
    "AGENT_CHANGE_LOG": {
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
        "AGENT_CHANGE_REASON": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Reason for the change "
        },
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AGENT",
          "info": "Agent changed "
        },
        "AGENT_CHANGE_LOG_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "GUID for agent change log"
        }
      },
      "fk_tables": []
    }
  }
};
