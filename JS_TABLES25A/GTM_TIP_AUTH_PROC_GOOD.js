// GTM_TIP_AUTH_PROC_GOOD.js

window.GTM_TIP_AUTH_PROC_GOOD = {
  "tables": {
    "GTM_TIP_AUTH_PROC_GOOD": {
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
        "QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "quantity value "
        },
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "uom code "
        },
        "CURRENCY_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "currency value"
        },
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        }
      },
      "fk_tables": []
    }
  }
};
