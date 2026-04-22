// AI_GUARDRAIL.js

window.AI_GUARDRAIL = {
  "tables": {
    "AI_GUARDRAIL": {
      "description": "Guardrails for AI prompts and chat requests.",
      "columns": {
        "AI_GUARDRAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Guardrail GID."
},
        "AI_GUARDRAIL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "AI Guardrail XID."
},
        "PROMPT_FRAGMENT": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "Prompt fragment that defines the guardrail within a prompt macro. This is also appended to each chat request."
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation label for the guardrail type."
},
        "ORM_RELEASE": {
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
}
      },
      "fk_tables": [
        "AI_USE_CASE_AUDIENCE"
]
    }
  }
};