// GTM_ROO_RULE_TYPE.js

window.GTM_ROO_RULE_TYPE = {
  "tables": {
    "GTM_ROO_RULE_TYPE": {
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
        "GTM_ROO_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for rules of origin rule type. "
        },
        "GTM_ROO_RULE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the rules of origin rule type. "
        },
        "GTM_ROO_RULE_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The name given to the rules of origin rule type. "
        },
        "SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The short name given to the rule type. "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Code that is externally used to identify the rules of origin rule type. "
        },
        "GTM_FORMULA_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Identifies the formula expression GID corresponding to the rules of origin rule type. "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": [
        "GTM_ROO_RULE_CODE",
        "GTM_TA_ROO_FORMULA",
        "QF_RVC_METHOD"
      ]
    }
  }
};
