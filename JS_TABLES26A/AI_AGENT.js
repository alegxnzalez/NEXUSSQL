// AI_AGENT.js

window.AI_AGENT = {
  "tables": {
    "AI_AGENT": {
      "description": "An agentic AI agent instance.",
      "columns": {
        "AI_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Agentic AI agent GID."
},
        "AI_AGENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Agentic AI agent XID."
},
        "AGENT_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Agentic AI agent, or agent team, name for REST invocation."
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation GID for the agent for user drop-downs."
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
          "nullable": false,
          "foreign_key": "AI_AGENT_TYPE",
          "info": "Type of agent, to determine valid initial prompts for an agentic conversation."
},
        "AI_AGENTIC_LINK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AI_AGENTIC_LINK",
          "info": "Linkage to the agentic AI instance holding the agent."
},
        "AI_PROMPT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AI_PROMPT",
          "info": "The initial prompt used to start an agentic conversation."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if the agent is staged and cannot be removed."
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "H"
          ]
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AI_AGENT_ENTRY_POINT",
        "AI_USE_CASE_AGENT"
]
    }
  }
};