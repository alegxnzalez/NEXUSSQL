// AI_OUTPUT.js

window.AI_OUTPUT = {
  "tables": {
    "AI_OUTPUT": {
      "description": "The output of an AI query.",
      "columns": {
        "AI_OUTPUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Output GID."
},
        "AI_OUTPUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "AI Output XID."
},
        "PROMPT_FRAGMENT": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "Prompt fragment that defines the output within a prompt macro."
},
        "MIME_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The MIME type of prompt output."
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation label for the output type."
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
        "AI_USE_CASE_OUTPUT"
]
    }
  }
};