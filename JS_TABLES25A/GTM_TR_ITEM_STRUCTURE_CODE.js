// GTM_TR_ITEM_STRUCTURE_CODE.js

window.GTM_TR_ITEM_STRUCTURE_CODE = {
  "tables": {
    "GTM_TR_ITEM_STRUCTURE_CODE": {
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
        "GTM_TR_ITEM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TR_ITEM_STRUCTURE",
          "info": "Identifies the Transaction Item Structure Id "
        },
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "User Defined Type Id "
        },
        "GTM_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "User Defined Code"
        }
      },
      "fk_tables": []
    }
  }
};
