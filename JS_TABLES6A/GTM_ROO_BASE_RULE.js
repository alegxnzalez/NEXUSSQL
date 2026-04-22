// GTM_ROO_BASE_RULE.js

window.GTM_ROO_BASE_RULE = {
  "tables": {
    "GTM_ROO_BASE_RULE": {
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
        "GTM_RULES_OF_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_RULES_OF_ORIGIN",
          "info": "The GID for rules of origin. "
        },
        "EXPRESSION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The expression for rules of origin base rule. "
        },
        "GTM_ROO_BASE_RULE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The rules of origin base rule type can be any of the values: Demin, Sets or MinOps. "
        },
        "SEQUENCE_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number."
        }
      },
      "fk_tables": []
    }
  }
};
