// RATE_FACTOR_RULE.js

window.RATE_FACTOR_RULE = {
  "tables": {
    "RATE_FACTOR_RULE": {
      "columns": {
        "RATE_FACTOR_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "RATE_FACTOR_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "RATE_FACTOR_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_FACTOR_SOURCE"
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ACCESSORIAL_CODE"
        },
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ACCESSORIAL_COST"
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
        "RATE_FACTOR_RULE_DETAIL",
        "RATE_FACTOR_RULE_JOIN"
      ]
    }
  }
};
