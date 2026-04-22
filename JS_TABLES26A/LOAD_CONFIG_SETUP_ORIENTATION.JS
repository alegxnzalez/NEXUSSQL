// LOAD_CONFIG_SETUP_ORIENTATION.js

window.LOAD_CONFIG_SETUP_ORIENTATION = {
  "tables": {
    "LOAD_CONFIG_SETUP_ORIENTATION": {
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
          "key_value": true,
          "foreign_key": "LOAD_CONFIG_SETUP"
},
        "ORIENTATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORIENTATION"
},
        "IS_PREFERRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_FLOOR_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "MAX_TOP_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum allowable weight can be loaded on top of this type of unit when loaded with the orientation. This is only checked for non-like units. It does not apply when stacking like units."
},
        "MAX_TOP_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_TOP_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_LENGTH_OVERHANG": {
          "type": "NUMBER",
          "nullable": true,
          "info": "When loaded in the given orientation, maximum unsupported overhang along the length of the unit itself."
},
        "MAX_LENGTH_OVERHANG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_LENGTH_OVERHANG_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_WIDTH_OVERHANG": {
          "type": "NUMBER",
          "nullable": true,
          "info": "When loaded in the given orientation, maximum unsupported overhang along the width of the unit itself."
},
        "MAX_WIDTH_OVERHANG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_WIDTH_OVERHANG_BASE": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};