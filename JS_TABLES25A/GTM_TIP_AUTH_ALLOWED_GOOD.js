// GTM_TIP_AUTH_ALLOWED_GOOD.js

window.GTM_TIP_AUTH_ALLOWED_GOOD = {
  "tables": {
    "GTM_TIP_AUTH_ALLOWED_GOOD": {
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
        "GTM_TIP_AUTHORIZATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_AUTHORIZATION",
          "info": "Trade Incentive Program Authorization GID "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description "
        },
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "Item GID "
        },
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Classification Code "
        },
        "QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allowed Goods Quantity "
        },
        "QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Allowed Goods Quantity Units of Measure Code "
        },
        "QUANTITY_BALANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allowed Goods Quantity Balance "
        },
        "QUANTITY_BALANCE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Allowed Goods Quantity Balance Units of Measure Code "
        },
        "VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allowed Goods Value in Currency "
        },
        "VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allowed Goods Value in Base Units "
        },
        "VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Allowed Goods Value Currency GID "
        },
        "VALUE_BALANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allowed Goods Value Balance in Currency "
        },
        "VALUE_BALANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allowed Goods Value Balance in Base Units "
        },
        "VALUE_BALANCE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Allowed Goods Value Balance Currency GID"
        }
      },
      "fk_tables": [
        "GTM_TIP_AUTH_AG_POSTING"
      ]
    }
  }
};
