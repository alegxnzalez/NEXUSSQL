// PACKAGED_ITEM_CATEGORY.js

window.PACKAGED_ITEM_CATEGORY = {
  "tables": {
    "PACKAGED_ITEM_CATEGORY": {
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
        "CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CATEGORY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "REP_PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Representative packaged item."
        },
        "CUTOFF_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CUTOFF_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CUTOFF_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "CUTOFF_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CUTOFF_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CUTOFF_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        }
      },
      "fk_tables": [
        "PACKAGED_ITEM"
      ]
    }
  }
};
