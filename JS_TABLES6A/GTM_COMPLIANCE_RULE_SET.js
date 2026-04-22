// GTM_COMPLIANCE_RULE_SET.js

window.GTM_COMPLIANCE_RULE_SET = {
  "tables": {
    "GTM_COMPLIANCE_RULE_SET": {
      "columns": {
        "GTM_COMPLIANCE_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_COMPLIANCE_RULE_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_REGIME"
        },
        "GTM_COMPLIANCE_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
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
      "fk_tables": [
        "GTM_COMPLIANCE_VALIDATION",
        "GTM_RULE_GROUP_SET_JOIN",
        "GTM_RULE_SET_RULE_JOIN"
      ]
    }
  }
};
