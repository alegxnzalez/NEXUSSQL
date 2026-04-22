// AI_PARAMETER_PROFILE.js

window.AI_PARAMETER_PROFILE = {
  "tables": {
    "AI_PARAMETER_PROFILE": {
      "description": "Parameter profile for generative AI. This includes Cohere-specific parameters.",
      "columns": {
        "AI_PARAMETER_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Parameter Profile GID."
},
        "AI_PARAMETER_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "AI Parameter Profile XID."
},
        "FREQUENCY_PENALTY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on their frequency in the generated text so far."
},
        "MAX_TOKENS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The maximum number of output tokens that the model will generate for the response."
},
        "PRESENCE_PENALTY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "To reduce repetitiveness of generated tokens, this number penalizes new tokens based on whether they have appeared in the generated text so far."
},
        "SAFETY_MODE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "Contextual",
                    "Off",
                    "Strict"
          ],
          "info": "Safety mode: Adds a safety instruction for the model to use when generating responses."
},
        "SEED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "If specified, the backend will make a best effort to sample tokens deterministically, so that repeated requests with the same seed and parameters yield the same result."
},
        "TEMPERATURE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "A number that sets the randomness of the generated output."
},
        "TOP_K": {
          "type": "NUMBER",
          "nullable": false,
          "info": "A sampling method in which the model chooses the next token randomly from the top k most likely tokens."
},
        "TOP_P": {
          "type": "NUMBER",
          "nullable": false,
          "info": "If set to a probability 0.0 < p < 1.0, it ensures that only the most likely tokens, with total probability mass of p, are considered for generation at each step."
},
        "IS_ECHO": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Whether or not the prompt should be echoed in the AI respons."
},
        "IS_STREAM": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, results should be streamed back to the user."
},
        "SUMMARY_FORMAT": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "Auto",
                    "Bullets",
                    "Paragraph"
          ],
          "info": "Format for AI summarizations."
},
        "SUMMARY_LENGTH": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "Auto",
                    "Long",
                    "Medium",
                    "Short"
          ],
          "info": "Length for AI summarizations."
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation label for the parameter profile."
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
        "AI_USE_CASE"
]
    }
  }
};