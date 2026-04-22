// S_EQUIPMENT_S_SHIP_UNIT_JOIN.js

window.S_EQUIPMENT_S_SHIP_UNIT_JOIN = {
  "tables": {
    "S_EQUIPMENT_S_SHIP_UNIT_JOIN": {
      "columns": {
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_EQUIPMENT",
          "info": "The GID for the shipment equipment. "
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "The GID for the shipment ship unit. "
        },
        "COMPARTMENT_NUM": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "The number associated with the compartment in a multi-compartment equipment. (View Only) "
        },
        "LOADING_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "The sequence that the shipment ship unit is loaded into the equipment. (View Only) "
        },
        "LOADING_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOADING_PATTERN",
          "info": "The loading pattern used to place ship unit into equipment if load configuration algorithm used is pattern based. (View Only) "
        },
        "NUM_STACKING_LAYERS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "The number associated with the layer stacked for ship unit. (View Only) "
        },
        "NUM_LOADING_ROWS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "The number associated with the row the ship unit is placed in. (View Only) "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
