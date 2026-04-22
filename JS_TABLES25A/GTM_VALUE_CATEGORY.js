// GTM_VALUE_CATEGORY.js

window.GTM_VALUE_CATEGORY = {
  "tables": {
    "GTM_VALUE_CATEGORY": {
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
        "GTM_VALUE_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Value Category ID "
        },
        "GTM_VALUE_CATEGORY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Value Category ID "
        },
        "GTM_VALUE_CATEGORY_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Value Category Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Value Category Description"
        }
      },
      "fk_tables": [
        "GTM_VALUE_TYPE"
      ]
    }
  }
};
