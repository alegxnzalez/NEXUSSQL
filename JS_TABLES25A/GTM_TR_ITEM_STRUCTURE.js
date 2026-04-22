// GTM_TR_ITEM_STRUCTURE.js

window.GTM_TR_ITEM_STRUCTURE = {
  "tables": {
    "GTM_TR_ITEM_STRUCTURE": {
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
          "info": "Unique ID to represent a transaction Line Item Struture. "
        },
        "GTM_TR_ITEM_STRUCTURE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "contains the XID unique identifier for the transaction line item structure. "
        },
        "GTM_TR_ITEM_STRUCTURE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "contains text for the name of the transaction Line item structure "
        },
        "TRADE_DIRECTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "I",
            "E"
          ],
          "info": "Trade Direction. Used to define import, export or both specific structure "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product Classification Type ID Used to define product classification type specific structure "
        },
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_CODE",
          "info": "Product Classification Code  Used to define product classification code specific structure "
        },
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GTM_STRUCTURE_GID contains the unique identifier for the trade item structure.  This field will be automatically populated when the struture gets assigned automatically. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "DESCRIPTION contains text for the description of the trade item structure "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Column indicates whether the transaction structure has been marked for purge. "
        },
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Classification code for an item."
        }
      },
      "fk_tables": [
        "GTM_TRANSACTION_LINE",
        "GTM_TR_ITEM_STRUCTURE_CODE",
        "GTM_TR_ITEM_STRUCTURE_REFNUM",
        "GTM_TR_ITEM_STRUCTURE_REMARK",
        "GTM_TR_STRUC_MATCH_RULE_DETAIL"
      ]
    }
  }
};
