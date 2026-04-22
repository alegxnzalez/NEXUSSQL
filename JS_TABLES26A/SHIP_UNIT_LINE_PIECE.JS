// SHIP_UNIT_LINE_PIECE.js

window.SHIP_UNIT_LINE_PIECE = {
  "tables": {
    "SHIP_UNIT_LINE_PIECE": {
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
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_LINE"
},
        "SHIP_UNIT_LINE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_LINE"
},
        "PIECE_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A unique number given to a piece of ship unit line having the same SHIP_UNIT_GID and SHIP_UNIT_LINE_NO with multiple counts."
},
        "LOADING_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The loading sequence of the ship unit line piece."
},
        "STACKING_LAYER": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Represents stacking layers of the unit. If there are multiple units underneath the currently placed unit, this number represents the maximum number of layers underneath the currently placed unit added by 1."
},
        "ORIENTATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORIENTATION",
          "info": "Orientation of the ship unit line piece."
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
}
      },
      "fk_tables": []
    }
  }
};