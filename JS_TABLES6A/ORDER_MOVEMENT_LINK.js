// ORDER_MOVEMENT_LINK.js

window.ORDER_MOVEMENT_LINK = {
  "tables": {
    "ORDER_MOVEMENT_LINK": {
      "columns": {
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
          "info": "Date and time of the most recent data update. "
        },
        "ITINERARY_LEG_OM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_MOVEMENT",
          "info": "The itinerary leg used to generate the order movement. "
        },
        "NETWORK_LEG_OM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_MOVEMENT",
          "info": "The network leg used to generate the order movement if using the network planning option."
        }
      },
      "fk_tables": []
    }
  }
};
