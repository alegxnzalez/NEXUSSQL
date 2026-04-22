// HTS.js

window.HTS = {
  "tables": {
    "HTS": {
      "columns": {
        "HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "HTS_GID contains the unique identifier for the Harmonized Tariff System (HTS). "
        },
        "HTS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "HTS_XID contains the unique external identifier for the Harmonized Tariff System (HTS). "
        },
        "HTS_NAME": {
          "type": "VARCHAR2(250)",
          "nullable": true
        },
        "CLASSIFICATION_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "SCHEDULE B",
            "HTS"
          ]
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "PRIMARY_RQ_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "PRIMARY_RQ_UOM_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "SECONDARY_RQ_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "SECONDARY_RQ_UOM_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "TERTIARY_RQ_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Tertiary UOM. "
        },
        "TERTIARY_RQ_UOM_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Tertiary UOM Type."
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
        "ITEM_INTL_CLASSIFICATION",
        "QUOTE_SHIP_UNIT"
      ]
    }
  }
};
