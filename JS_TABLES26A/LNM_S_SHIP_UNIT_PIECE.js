// LNM_S_SHIP_UNIT_PIECE.js

window.LNM_S_SHIP_UNIT_PIECE = {
  "tables": {
    "LNM_S_SHIP_UNIT_PIECE": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_S_SHIP_UNIT",
          "info": "Contains the scenario_gid for which this s_ship_unit_piece is created."
},
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_S_SHIP_UNIT",
          "info": "Contains the s_ship_unit_gid related to the scenario run."
},
        "PIECE_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A unique number given to a piece of SSU for the same S_SHIP_UNIT_GID with multiple counts."
},
        "LOADING_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The loading sequence of the SSU singleton."
},
        "STACKING_LAYER": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Stacking layers of the unit. If multiple units are underneath, this is the maximum number of layers underneath added by 1."
},
        "ORIENTATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Orientation of the ship unit piece."
},
        "X_COORDINATE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The x-coordinate of the unit using container's front lower left corner as the origin."
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
          "nullable": false,
          "info": "The y-coordinate of the unit using container's front lower left corner as the origin."
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
          "nullable": false,
          "info": "The z-coordinate of the unit using container's front lower left corner as the origin."
},
        "Z_COORDINATE_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "Z_COORDINATE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "TOTAL_TOP_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This is the summation of all weights on the top distributed according to the area touching the pieces"
},
        "TOTAL_TOP_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_TOP_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_SPLIT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Contains the length of the lnm_s_ship_unit_piece."
},
        "LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Contains the width of the lnm_s_ship_unit_piece."
},
        "WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Contains the height of the lnm_s_ship_unit_piece."
},
        "HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Contains the weight of the lnm_s_ship_unit_piece."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Contains the volume of the lnm_s_ship_unit_piece."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LOAD_CONFIG_3D_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Corresponding user defined 3d pattern. If the piece is placed using user defined 3d pattern, this indicates the pattern used."
},
        "PATTERN_INSTANCE_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Instance of the user pattern used."
},
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "BULKPLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};