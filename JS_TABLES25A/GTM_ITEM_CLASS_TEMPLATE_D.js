// GTM_ITEM_CLASS_TEMPLATE_D.js

window.GTM_ITEM_CLASS_TEMPLATE_D = {
  "tables": {
    "GTM_ITEM_CLASS_TEMPLATE_D": {
      "columns": {
        "GTM_ITEM_CLASS_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_ITEM_CLASS_TEMPLATE"
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
        },
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_CODE"
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
        "GTM_ITEM_CLASS_TEMPLATE_D_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Primary Key Gid Sequential column "
        },
        "GTM_ITEM_CLASS_TEMPLATE_D_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Xid Sequential column "
        },
        "TRADE_DIRECTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "E",
            "B"
          ],
          "info": "Trade Direction of the classification. "
        },
        "GTM_TARIFF_ROI_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TARIFF_ROI",
          "info": "Unique identifier for the tariff rules of interpretation used to justify classification "
        },
        "BINDING_RULING_EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective date of the binding ruling "
        },
        "BINDING_RULING_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Binding ruling number to justify classification "
        },
        "BINDING_RULING_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the binding rule expiration date. "
        },
        "GTM_PROD_CLASS_PURPOSE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_PURPOSE",
          "info": "Product Classification Purpose "
        },
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Classification code for an item."
        }
      },
      "fk_tables": []
    }
  }
};
