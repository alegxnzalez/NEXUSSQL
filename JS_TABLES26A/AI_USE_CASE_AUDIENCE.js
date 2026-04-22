// AI_USE_CASE_AUDIENCE.js

window.AI_USE_CASE_AUDIENCE = {
  "tables": {
    "AI_USE_CASE_AUDIENCE": {
      "description": "AI prompt instructions for a use case and audience.",
      "columns": {
        "AI_USE_CASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AI_USE_CASE",
          "info": "AI Use Case GID."
},
        "AI_AUDIENCE_GID": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AI_AUDIENCE",
          "info": "Audience GID available for this use case."
},
        "AI_PROMPT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AI_PROMPT",
          "info": "Full alternate prompt for the audience."
},
        "AI_GUARDRAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AI_GUARDRAIL",
          "info": "Alternate guardrail for the audience."
},
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if this is the default audience for the use case."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the assignment of the audience to the use case is not editable."
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
}
      },
      "fk_tables": []
    }
  }
};