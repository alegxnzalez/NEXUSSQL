// GTM_ROO_RULE_CODE_DESC.js

window.GTM_ROO_RULE_CODE_DESC = {
  "tables": {
    "GTM_ROO_RULE_CODE_DESC": {
      "columns": {
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
        "GTM_ROO_RULE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ROO_RULE_CODE",
          "info": "The GID for rules of origin rule code. "
        },
        "GTM_LANGUAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LANGUAGE",
          "info": "The GID for language. "
        },
        "TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Description field."
        }
      },
      "fk_tables": []
    }
  }
};
