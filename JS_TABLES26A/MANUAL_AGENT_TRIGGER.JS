// MANUAL_AGENT_TRIGGER.js

window.MANUAL_AGENT_TRIGGER = {
  "tables": {
    "MANUAL_AGENT_TRIGGER": {
      "description": "Expose an agent as a UI action.",
      "columns": {
        "ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTION",
          "info": "UI action gid."
},
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AGENT",
          "info": "ID of the agent to be exposed."
},
        "ACTION_DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Description of the UI action. To be incorporated with online help."
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