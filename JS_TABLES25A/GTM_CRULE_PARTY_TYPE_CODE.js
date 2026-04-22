// GTM_CRULE_PARTY_TYPE_CODE.js

window.GTM_CRULE_PARTY_TYPE_CODE = {
  "tables": {
    "GTM_CRULE_PARTY_TYPE_CODE": {
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
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE"
        },
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TYPE_CODE"
        },
        "GTM_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "foreign_key": "GTM_TYPE_CODE"
        },
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "INVOLVED_PARTY_QUAL"
        },
        "GTM_CRULE_PARTY_TC_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        }
      },
      "fk_tables": []
    }
  }
};
