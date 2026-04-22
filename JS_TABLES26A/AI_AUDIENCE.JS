// AI_AUDIENCE.js

window.AI_AUDIENCE = {
  "tables": {
    "AI_AUDIENCE": {
      "description": "The audience for an AI query.",
      "columns": {
        "AI_AUDIENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Audience GID."
},
        "AI_AUDIENCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "AI Audience XID."
},
        "PROMPT_FRAGMENT": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "Prompt fragment that defines the audience within a prompt macro."
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation label for the audience type."
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
      "fk_tables": [
        "AI_USE_CASE_AUDIENCE"
]
    }
  }
};