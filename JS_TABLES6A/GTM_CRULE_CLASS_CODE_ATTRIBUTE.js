// GTM_CRULE_CLASS_CODE_ATTRIBUTE.js

window.GTM_CRULE_CLASS_CODE_ATTRIBUTE = {
  "tables": {
    "GTM_CRULE_CLASS_CODE_ATTRIBUTE": {
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
        "ATTRIBUTE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE"
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
        },
        "GTM_CRULE_CLASS_CODE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        }
      },
      "fk_tables": []
    }
  }
};
