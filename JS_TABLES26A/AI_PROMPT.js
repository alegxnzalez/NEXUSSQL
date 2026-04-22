// AI_PROMPT.js

window.AI_PROMPT = {
  "tables": {
    "AI_PROMPT": {
      "description": "AI Prompt for use with AI use cases and audiences.",
      "columns": {
        "AI_PROMPT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Prompt GID."
},
        "AI_PROMPT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "AI Prompt XID."
},
        "PROMPT": {
          "type": "CLOB",
          "nullable": true,
          "info": "Full, formatted text of the prompt."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "H"
          ]
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
        "AI_AGENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AI_AGENT_TYPE",
          "info": "For an agentic prompt, defines the type of agent the prompt can apply to."
}
      },
      "fk_tables": [
        "AI_AGENT",
        "AI_USE_CASE",
        "AI_USE_CASE_AUDIENCE"
]
    }
  }
};