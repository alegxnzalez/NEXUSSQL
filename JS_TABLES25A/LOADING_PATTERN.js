// LOADING_PATTERN.js

window.LOADING_PATTERN = {
  "tables": {
    "LOADING_PATTERN": {
      "columns": {
        "LOADING_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOADING_PATTERN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LOADING_PATTERN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "LOADING_PATTERN_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Name of the image file. "
        },
        "IS_CYLINDRICAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The applicability of the loading pattern. To cylindrical unit or non-cylindrical unit."
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
        "LOAD_CONFIG",
        "S_EQUIPMENT_S_SHIP_UNIT_JOIN"
      ]
    }
  }
};
