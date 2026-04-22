// ORDER_MOVEMENT_D.js

window.ORDER_MOVEMENT_D = {
  "tables": {
    "ORDER_MOVEMENT_D": {
      "description": "It is the detail table of an order movement. It contains all the s ship units in an order movement.",
      "columns": {
        "ORDER_MOVEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_MOVEMENT",
          "info": "The GID for the ship unit associated with the order movement."
},
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "The ship unit identifier joining this ship unit to the order movement."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
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