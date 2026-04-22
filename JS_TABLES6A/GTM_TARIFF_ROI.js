// GTM_TARIFF_ROI.js

window.GTM_TARIFF_ROI = {
  "tables": {
    "GTM_TARIFF_ROI": {
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
        "GTM_TARIFF_ROI_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Tariff rules of interpretation ID(PK) "
        },
        "GTM_TARIFF_ROI_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Tariff rules of interpretation XID "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product classification type(FK) on Table GTM_PROD_CLASS_TYPE "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Tariff rules of interpretations external code "
        },
        "RULE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Tariff rules of interpretations rule code "
        },
        "REFERENCE_URL": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Reference Url for rule "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Basic description of the rule "
        },
        "EXPLANATION": {
          "type": "CLOB",
          "nullable": true,
          "info": "Detailed explanation of the rule(Clob data)"
        }
      },
      "fk_tables": [
        "GTM_ITEM_CLASSIFICATION",
        "GTM_ITEM_CLASS_TEMPLATE_D"
      ]
    }
  }
};
