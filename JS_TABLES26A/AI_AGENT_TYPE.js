// AI_AGENT_TYPE.js

window.AI_AGENT_TYPE = {
  "tables": {
    "AI_AGENT_TYPE": {
      "description": "Type of agent to limit valid initial promts to use in an agentic conversation.",
      "columns": {
        "AI_AGENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Agent Type ID."
},
        "AI_AGENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
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
        "AI_AGENT",
        "AI_PROMPT"
]
    }
  }
};