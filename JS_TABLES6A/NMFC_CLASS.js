// NMFC_CLASS.js

window.NMFC_CLASS = {
  "tables": {
    "NMFC_CLASS": {
      "columns": {
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "NMFC_CLASS_GID contains the National Motor Freight Classification (NMFC) class for the item being shipped. "
        },
        "NMFC_CLASS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "NMFC_CLASS_XID contains the unique external identifier for the National Motor Freight Classification (NMFC) class of the item being shipped. "
        },
        "NMFC_CLASS_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "NMFC_CLASS_NAME contains the National Motor Freight Classification (NMFC) name of the item being shipped."
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
        "NMFC_CLASS_CODE": {
          "type": "VARCHAR2(120)",
          "nullable": true
        }
      },
      "fk_tables": [
        "FLEX_COMMODITY_PROFILE_D",
        "ITEM",
        "LANE_SUMMARY_STAT",
        "NMFC_ARTICLE_CLASS_MAP",
        "P_S_SHIP_UNIT",
        "P_S_SHIP_UNIT_LINE",
        "QUOTE_SHIP_UNIT"
      ]
    }
  }
};
