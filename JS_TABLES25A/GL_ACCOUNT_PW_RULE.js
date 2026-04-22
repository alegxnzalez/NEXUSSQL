// GL_ACCOUNT_PW_RULE.js

window.GL_ACCOUNT_PW_RULE = {
  "tables": {
    "GL_ACCOUNT_PW_RULE": {
      "columns": {
        "GL_ACCOUNT_POLICY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_ACCOUNT_POLICY",
          "info": "The account policy for which this rule is defined. "
        },
        "PW_RULE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the password  rule itself. "
        },
        "PW_RULE_EXPLANATION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The explanation for the password rule."
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
