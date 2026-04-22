// USER_DEFINED_COMMODITY.js

window.USER_DEFINED_COMMODITY = {
  "tables": {
    "USER_DEFINED_COMMODITY": {
      "columns": {
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "USER_DEFINED_COMMODITY_GID contains the unique identifier for the user-defined commodity that is being shipped. "
        },
        "USER_DEFINED_COMMODITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "USER_DEFINED_COMMODITY_XID  contains the unique external identifier for the user-defined commodity that is being shipped. "
        },
        "USER_DEFINED_COMMODITY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "USER_DEFINED_COMMODITY_NAME contains the name of the user-defined commodity that is being shipped."
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
        "USER_DEFINED_COMMODITY_DESC": {
          "type": "VARCHAR2(1000)",
          "nullable": true
        }
      },
      "fk_tables": [
        "DM_TRANSACTION",
        "FLEX_COMMODITY_PROFILE_D",
        "GTM_COMPLIANCE_RULE",
        "GTM_LICENSE_LINE",
        "GTM_REG_REL_USER_COMMODITY",
        "ITEM",
        "QUOTE_SHIP_UNIT",
        "S_SHIP_UNIT_LINE",
        "UDC_CLASSIFICATION_LIST_D"
      ]
    }
  }
};
