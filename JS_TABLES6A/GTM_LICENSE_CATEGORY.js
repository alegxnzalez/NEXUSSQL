// GTM_LICENSE_CATEGORY.js

window.GTM_LICENSE_CATEGORY = {
  "tables": {
    "GTM_LICENSE_CATEGORY": {
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
        "LICENSE_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LICENSE_CATEGORY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LICENSE_CATEGORY_NAME": {
          "type": "VARCHAR2(225)",
          "nullable": true
        },
        "LICENSE_CATEGORY_DESCRIPTION": {
          "type": "VARCHAR2(225)",
          "nullable": true
        }
      },
      "fk_tables": [
        "GTM_LICENSE",
        "GTM_LICENSE_TYPE"
      ]
    }
  }
};
