// GTM_QUANTITY_TYPE.js

window.GTM_QUANTITY_TYPE = {
  "tables": {
    "GTM_QUANTITY_TYPE": {
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
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_QUANTITY_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_QUANTITY_TYPE_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "QUANTITY_TYPE_CATEGORY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Column to add Quantity Qualifier Type. This column will have have values like \"WEIGHT,VOLUME,DISTANCE,QUANTITY\". These types will be used to filter out appropriate quantity UOMs while defining quanity values in any of the quantity Grids."
        },
        "TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": false
        }
      },
      "fk_tables": [
        "GTM_LICENSE_CODE_OPTION",
        "GTM_LICENSE_LINE",
        "GTM_REGISTRATION_QUANTITY",
        "GTM_STR_COMPONENT_QUANTITY",
        "GTM_TRANSACTION_QUANTITY",
        "GTM_TRANS_LINE_LICENSE",
        "GTM_TRANS_LINE_QUANTITY",
        "GTM_TRANS_LINE_REFERENCE",
        "GTM_TRANS_LINE_REPORT_QUANTITY"
      ]
    }
  }
};
