// ITINERARY_DETAIL.js

window.ITINERARY_DETAIL = {
  "tables": {
    "ITINERARY_DETAIL": {
      "description": "This table joins the Itinerary table to the Leg table. It is used to resolve the many-to-many relationship between Itinerary and Leg.",
      "columns": {
        "ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITINERARY",
          "info": "Contains the GID for the itinerary."
},
        "LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LEG",
          "info": "Contains the GID for a leg on the itinerary."
},
        "SEQUENCE_NO": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "Sequence number for the itinerary leg."
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