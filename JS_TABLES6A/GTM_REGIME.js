// GTM_REGIME.js

window.GTM_REGIME = {
  "tables": {
    "GTM_REGIME": {
      "columns": {
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_REGIME_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        },
        "CATEGORY": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "COMPLIANCE",
            "CUSTOMS",
            "TAX"
          ]
        },
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE"
        },
        "EFFECTIVE_FROM": {
          "type": "DATE",
          "nullable": true
        },
        "EFFECTIVE_TO": {
          "type": "DATE",
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
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE"
        },
        "DEFAULT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "OVERRIDE_EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE"
        },
        "EXCHANGE_RATE_TOLERANCE": {
          "type": "NUMBER()",
          "nullable": true
        }
      },
      "fk_tables": [
        "GTM_COMPLIANCE_RULE_SET",
        "GTM_CONTROL_TYPE",
        "GTM_DECLARATION_TYPE",
        "GTM_JURISDICTION",
        "GTM_LICENSE",
        "GTM_REGIME_DOCUMENT_DEF",
        "GTM_REGISTRATION",
        "GTM_RULE_RESTRICTION",
        "GTM_TR_BASE_AMOUNT",
        "GTM_TR_REPORTING",
        "GTM_TYPE"
      ]
    }
  }
};
