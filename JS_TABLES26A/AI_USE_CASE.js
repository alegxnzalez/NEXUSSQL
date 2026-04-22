// AI_USE_CASE.js

window.AI_USE_CASE = {
  "tables": {
    "AI_USE_CASE": {
      "description": "A specific use case for generative AI in the system.",
      "columns": {
        "AI_USE_CASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Use Case GID."
},
        "AI_USE_CASE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Default prompt to use with the use case, when no audience prompt is available."
},
        "DEFAULT_AI_PARAM_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AI_PARAMETER_PROFILE",
          "info": "The default parameter profile the applies to this use case. This can be overridden by user preference or explicit user selection."
},
        "DEFAULT_AI_PROMPT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AI_PROMPT",
          "info": "The default use case prompt. This may be overridden for specific audiences."
},
        "DEFAULT_AI_GUARDRAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The default guardrail for prompts and chats."
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation label for the use case."
},
        "IS_FOR_CHAT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the use case is designed for an interactive chat. Otherwise, it is designed for a single response."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the record cannot be edited, though it's audiences and outputs may be editable."
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
        "IS_AGENTIC": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if the use case invokes an agentic AI agent."
}
      },
      "fk_tables": [
        "AI_USE_CASE_AGENT",
        "AI_USE_CASE_AUDIENCE",
        "AI_USE_CASE_OUTPUT"
]
    }
  }
};