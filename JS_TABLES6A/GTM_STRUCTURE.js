// GTM_STRUCTURE.js

window.GTM_STRUCTURE = {
  "tables": {
    "GTM_STRUCTURE": {
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
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM_STRUCTURE_GID contains the unique identifier for the trade item structure. "
        },
        "GTM_STRUCTURE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM_STRUCTURE_XID contains the XID unique identifier for the trade item structure. "
        },
        "GTM_STRUCTURE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "GTM_STRUCTURE_NAME contains text for the name of the trade item structure "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "DESCRIPTION contains text for the description of the trade item structure "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "When N, indicates trade item structure is inactive and should not be used by the algorithm. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Effective Date of this trade item structure "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Expiration Date of this trade item structure "
        },
        "SOURCE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "E",
            "I"
          ],
          "info": "source of this trade item structure. Its it created within GTM or imported from out system. "
        },
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "Trade Item ID, this represents the trade item for which this structure is defined. "
        },
        "TRADE_DIRECTION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
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
        "DEFAULT_COUNTRY_OF_ORIGIN": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Default country of origin. Any component that doesn?t have country of origin specified will use this value as country of origin"
        },
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_CODE"
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        }
      },
      "fk_tables": [
        "GTM_STRUCTURE_COMPONENT",
        "GTM_STRUCTURE_INVOLVED_PARTY",
        "GTM_STRUCTURE_REFNUM",
        "GTM_STRUCTURE_REMARK",
        "GTM_STRUCTURE_TYPE_CODE",
        "GTM_STRUCTURE_VALUE",
        "ITEM_ORIGIN"
      ]
    }
  }
};
