// QF_RVC_METHOD.js

window.QF_RVC_METHOD = {
  "tables": {
    "QF_RVC_METHOD": {
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
        "QF_RVC_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique regional value content method id across all domains. "
        },
        "QF_RVC_METHOD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Unique regional value content method id in a particular domain. "
        },
        "QF_RVC_METHOD_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Regional value content method name. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "GTM_FORMULA_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Identifies the formula expression GID corresponding to the regional value content method. "
        },
        "GTM_ROO_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_ROO_RULE_TYPE",
          "info": "Indicates the rules of origin's regional value content type "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": [
        "GTM_CAMPAIGN_LINE",
        "GTM_TA_RVC_METHOD",
        "GTM_TRANS_LINE_QF",
        "ITEM_QF"
      ]
    }
  }
};
