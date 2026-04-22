// COMPLEX_EXPRESSION_DETAIL.js

window.COMPLEX_EXPRESSION_DETAIL = {
  "tables": {
    "COMPLEX_EXPRESSION_DETAIL": {
      "columns": {
        "COMPLEX_EXPRESSION_D_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "COMPLEX_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMPLEX_EXPRESSION"
        },
        "SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION"
        },
        "THRESHOLD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "THRESHOLD"
        },
        "ATTRIBUTE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ATTRIBUTE_RULE"
        },
        "EXPRESSION_TEXT": {
          "type": "VARCHAR2(1000)",
          "nullable": true
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
