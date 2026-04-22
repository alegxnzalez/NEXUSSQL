// GTM_PROD_CLASS_TYPE.js

window.GTM_PROD_CLASS_TYPE = {
  "tables": {
    "GTM_PROD_CLASS_TYPE": {
      "columns": {
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_PROD_CLASS_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CLASSIFICATION_CATEGORY": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_CATEGORY"
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        },
        "GTM_CONTENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTENT_TYPE"
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
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version."
        }
      },
      "fk_tables": [
        "GTM_CAMPAIGN",
        "GTM_CAMPAIGN_LINE",
        "GTM_CLASS_CODE_MAPPING",
        "GTM_COMPLIANCE_RULE",
        "GTM_COMP_RULE_VALUE",
        "GTM_CRULE_CLASS_CODE_ATTRIBUTE",
        "GTM_ITEM_CLASSIFICATION",
        "GTM_ITEM_CLASS_TEMPLATE_D",
        "GTM_PC_SERVICE_PARAMETER",
        "GTM_PRODUCT_GROUP_D_CODE",
        "GTM_PROD_CLASS_CODE",
        "GTM_REGISTRATION",
        "GTM_STRUCTURE",
        "GTM_STRUCTURE_COMPONENT",
        "GTM_TARIFF_CODE",
        "GTM_TARIFF_CODE_PROFILE",
        "GTM_TARIFF_RATE",
        "GTM_TARIFF_ROI",
        "GTM_TIP_AUTHORIZATION",
        "GTM_TIP_INVENTORY",
        "GTM_TIP_INV_MOVEMENT",
        "GTM_TIP_RULE",
        "GTM_TRADE_INCENTIVE_PROGRAM",
        "GTM_TRADE_PREFERENCE",
        "GTM_TRANSACTION_LINE",
        "GTM_TRANS_LINE_QF",
        "GTM_TRANS_LINE_REPORT_QUANTITY",
        "GTM_TR_ITEM_STRUCTURE",
        "GTM_TR_PROD_CLASSIFICATION",
        "GTM_TR_REQD_CLASSIFICATION",
        "ITEM_QF"
      ]
    }
  }
};
