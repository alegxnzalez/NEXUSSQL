// LOAD_CONFIG_SETUP.js

window.LOAD_CONFIG_SETUP = {
  "tables": {
    "LOAD_CONFIG_SETUP": {
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
        "LOAD_CONFIG_SETUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOAD_CONFIG_SETUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "STACKING_INDEX": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Stacking index of the ship unit spec. Units with higher stacking index should not be loaded on top of units with lower stacking index. "
        },
        "MAX_STACKING_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Defines the height this unit cannot be stacked above since unloading would be difficult otherwise. "
        },
        "MAX_STACKING_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_STACKING_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_STACKING_LAYERS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of layers this unit can be stacked all by itself. "
        },
        "IS_STACKABLE_ABOVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "To indicate if anything can be stacked on top of it. "
        },
        "IS_STACKABLE_BELOW": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "To indicate if anything can be stacked below it. "
        },
        "MAX_UNSUPPORTED_AREA_PERCENT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PATTERN_CONFIG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOAD_CONFIG_PROFILE"
        },
        "STACKING_RULE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "SAME",
            "LIKE"
          ],
          "info": "This is an INCLUSIVE rule. SAME means SAME items can be stacked together. LIKE means SAME or LIKE items can be stacked together. Null means any items can be stacked together."
        }
      },
      "fk_tables": [
        "LOAD_CONFIG_RULE",
        "LOAD_CONFIG_SETUP_ORIENTATION",
        "OB_SHIP_UNIT",
        "SHIP_UNIT"
      ]
    }
  }
};
