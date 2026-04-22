// P_RULE_FAVOR_CARRIER.js

window.P_RULE_FAVOR_CARRIER = {
  "tables": {
    "P_RULE_FAVOR_CARRIER": {
      "columns": {
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_RULE_SET"
        },
        "VALUE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV_PROFILE"
        },
        "FAVOR_PERCENT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FAVOR_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FAVOR_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "FAVOR_AMOUNT_BASE": {
          "type": "NUMBER()",
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
