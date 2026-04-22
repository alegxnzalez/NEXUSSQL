// GTM_TYPE.js

window.GTM_TYPE = {
  "tables": {
    "GTM_TYPE": {
      "columns": {
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CATEGORY"
        },
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGIME"
        },
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE"
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
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
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "TRADE_TRANSACTION",
            "TRADE_ITEM_STRUCTURE",
            "CONTACT",
            "BOND",
            "ALL"
          ],
          "info": "Object Type for the User Defined Type. "
        },
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Column to store external code  for gtm_type"
        }
      },
      "fk_tables": [
        "GTM_TYPE_CODE",
        "GTM_TYPE_D"
      ]
    }
  }
};
