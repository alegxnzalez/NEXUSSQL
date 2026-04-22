// GTM_PRODUCT_GROUP.js

window.GTM_PRODUCT_GROUP = {
  "tables": {
    "GTM_PRODUCT_GROUP": {
      "columns": {
        "GTM_PRODUCT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_PRODUCT_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE"
        },
        "PRODUCT_GROUP_NAME": {
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
        "GTM_COMPLIANCE_RULE",
        "GTM_PRODUCT_GROUP_D_CODE",
        "GTM_PRODUCT_GROUP_D_GROUP"
      ]
    }
  }
};
