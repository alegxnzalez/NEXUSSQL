// CLAIM_LINE_ITEM_PACKAGE_STATUS.js

window.CLAIM_LINE_ITEM_PACKAGE_STATUS = {
  "tables": {
    "CLAIM_LINE_ITEM_PACKAGE_STATUS": {
      "columns": {
        "CLAIM_LINE_PACKAGE_STATUS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Id for package status on a claim line item. These may be PUBLIC data shippped with GC3 along with user defined values "
        },
        "CLAIM_LINE_PACKAGE_STATUS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Xid for package status "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Description of the package status id or code"
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
        "CLAIM_LINE_ITEM"
      ]
    }
  }
};
