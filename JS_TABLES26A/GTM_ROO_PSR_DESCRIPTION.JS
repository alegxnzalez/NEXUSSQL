// GTM_ROO_PSR_DESCRIPTION.js

window.GTM_ROO_PSR_DESCRIPTION = {
  "tables": {
    "GTM_ROO_PSR_DESCRIPTION": {
      "description": "Captures rules of origin - product specific rule description or text in different languages.",
      "columns": {
        "GTM_RULES_OF_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ROO_PSR",
          "info": "The rules of origin ID."
},
        "SEQUENCE_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ROO_PSR",
          "info": "Sequence Number."
},
        "GTM_LANGUAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LANGUAGE",
          "info": "Language ID."
},
        "TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Description field."
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