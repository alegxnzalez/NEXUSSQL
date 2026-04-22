// LEG_CAPACITY_OVERRIDE.js

window.LEG_CAPACITY_OVERRIDE = {
  "tables": {
    "LEG_CAPACITY_OVERRIDE": {
      "columns": {
        "LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LEG",
          "info": "The GID for the itinerary leg related to the capacity override."
},
        "CAPACITY_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CAPACITY_OVERRIDE",
          "info": "The GID for the capacity override details related to this itinerary leg. The capacity override allows you to model specific weight/volume restrictions by transport mode or equipment that can be assigned to any itinerary leg to control whether a shipment can be planned for that leg. For example, some countries or regions have specific capacity restrictions such as bridges that have maximum weight limits. By creating a capacity override and assigning it to a specific itinerary leg, Oracle Transportation Management will override the equipment capacity. For example, if an equipment has a capacity of 30000 pounds, but the capacity override says 27000 pounds, then the system will not plan more than 27000 pounds in the equipment."
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