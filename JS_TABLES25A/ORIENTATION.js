// ORIENTATION.js

window.ORIENTATION = {
  "tables": {
    "ORIENTATION": {
      "columns": {
        "ORIENTATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ORIENTATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ORIENTATION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "ORIENTATION_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "VERTICAL_ORIENTATION": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Denotes the dimension of the loading unit that's upright in the container. If vertical dimension is length, then the unit's length is upright. "
        },
        "HORIZONTAL_ORIENTATION": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Denotes the dimension of the loading unit that's along the container. "
        },
        "IS_CYLINDRICAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "To indicate which type of units this orientation is applicable, cylindrical unit or non-cylindrical unit."
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true
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
        "LOAD_CNFG_3D_PATTERN_D",
        "LOAD_CONFIG_SETUP_ORIENTATION",
        "STACKING_COMPATIBILITY",
        "S_SHIP_UNIT_PIECE"
      ]
    }
  }
};
