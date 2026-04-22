// GTM_PROD_CLASS_CODE_UOM.js

window.GTM_PROD_CLASS_CODE_UOM = {
  "tables": {
    "GTM_PROD_CLASS_CODE_UOM": {
      "columns": {
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROD_CLASS_CODE"
        },
        "UOM_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "UOM_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "REPORTING_UOM": {
          "type": "VARCHAR2(128)",
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
      "fk_tables": []
    }
  }
};
