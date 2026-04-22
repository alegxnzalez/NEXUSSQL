// GTM_TYPE_CODE.js

window.GTM_TYPE_CODE = {
  "tables": {
    "GTM_TYPE_CODE": {
      "columns": {
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE"
        },
        "GTM_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true
        },
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE"
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
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
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Column to store  external code for gtm_type_code"
        }
      },
      "fk_tables": [
        "GTM_BOND",
        "GTM_COMPLIANCE_RULE_TYPE_CODE",
        "GTM_CRULE_PARTY_TYPE_CODE",
        "GTM_LICENSE_CODE_OPTION",
        "GTM_LICENSE_TYPE_CODE",
        "GTM_PARTY_CODE",
        "GTM_STRUCTURE_TYPE_CODE",
        "GTM_TRANSACTION_CODE",
        "GTM_TRANS_LINE_CODE",
        "GTM_TR_ITEM_STRUCTURE_CODE",
        "GTM_TYPE_CODE_PROFILE_D"
      ]
    }
  }
};
