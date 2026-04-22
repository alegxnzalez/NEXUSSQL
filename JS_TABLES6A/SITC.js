// SITC.js

window.SITC = {
  "tables": {
    "SITC": {
      "columns": {
        "SITC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "SITC_GID contains the unique identifier for the Standard International Trade Classification (SITC) of the item being shipped. "
        },
        "SITC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "SITC_GID contains the unique external identifier for the Standard International Trade Classification (SITC) of the item being shipped. "
        },
        "SITC_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "SITC_GID contains the Standard International Trade Classification (SITC) name for the item being shipped."
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
        "FLEX_COMMODITY_PROFILE_D",
        "ITEM",
        "QUOTE_SHIP_UNIT"
      ]
    }
  }
};
