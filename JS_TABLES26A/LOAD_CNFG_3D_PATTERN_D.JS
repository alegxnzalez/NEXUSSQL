// LOAD_CNFG_3D_PATTERN_D.js

window.LOAD_CNFG_3D_PATTERN_D = {
  "tables": {
    "LOAD_CNFG_3D_PATTERN_D": {
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
        "LOAD_CONFIG_3D_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOAD_CONFIG_3D_PATTERN"
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM"
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
},
        "ORIENTATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORIENTATION"
},
        "X_COORDINATE": {
          "type": "NUMBER",
          "nullable": false
},
        "X_COORDINATE_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "X_COORDINATE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "Y_COORDINATE": {
          "type": "NUMBER",
          "nullable": false
},
        "Y_COORDINATE_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "Y_COORDINATE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "Z_COORDINATE": {
          "type": "NUMBER",
          "nullable": false
},
        "Z_COORDINATE_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "Z_COORDINATE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "SEQ_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "LENGTH": {
          "type": "NUMBER",
          "nullable": true
},
        "LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "WIDTH": {
          "type": "NUMBER",
          "nullable": true
},
        "WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "HEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "DIAMETER": {
          "type": "NUMBER",
          "nullable": true
},
        "DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "IS_CYLINDRICAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicate if the pattern item is cylindrial or non-cylindrical."
},
        "IS_DUNNAGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "specifies if the item represents a dunnage"
}
      },
      "fk_tables": []
    }
  }
};