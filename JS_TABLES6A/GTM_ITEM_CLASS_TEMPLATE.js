// GTM_ITEM_CLASS_TEMPLATE.js

window.GTM_ITEM_CLASS_TEMPLATE = {
  "tables": {
    "GTM_ITEM_CLASS_TEMPLATE": {
      "columns": {
        "GTM_ITEM_CLASS_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_ITEM_CLASS_TEMPLATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ITEM_CLASS_TEMPLATE_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
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
        }
      },
      "fk_tables": [
        "GTM_ITEM_CLASS_TEMPLATE_D"
      ]
    }
  }
};
