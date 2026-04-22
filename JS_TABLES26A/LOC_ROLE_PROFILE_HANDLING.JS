// LOC_ROLE_PROFILE_HANDLING.js

window.LOC_ROLE_PROFILE_HANDLING = {
  "tables": {
    "LOC_ROLE_PROFILE_HANDLING": {
      "columns": {
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
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location where the location role profile handling time is being defined. At cross docks and other throughpoints (e.g., pools, ports, etc.), goods arrive on incoming shipments, and then depart on outgoing shipments. For an order at a throughpoint, time is usually required between the end of the incoming shipment and the start of the outgoing shipment. This time might include, for example, how long it takes to move the order from one dock door to another, or how long it takes to prepare documents required for the outgoing shipment. Handling times for this through-point location can be based on the order source and destination. (For example, an order going to a foreign destination will need a longer time at the cross dock for the completion of import/export documentation.) For an order going through this throughpoint, the most specific matching entry in the grid will be used to determine the handling time. For example, if one entry has 5 hours for an order source region representing France, and another entry has 10 hours for an order source region representing Paris, only the 10 hour entry will apply for an order release from a source location in Paris. An order source/destination region of null (blank) is allowed and will match to any source /destination location but is less specific than a non null entry. The handling times are used to adjust the order movement operational pickup/delivery dates."
},
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location role."
},
        "LOCATION_ROLE_PROF_HAND_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Internal key for the 1 to n location role profile handling time entries."
},
        "SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The GID for the source region. Used to match an order to an entry."
},
        "DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The GID for the destination region. Used to match an order to an entry."
},
        "FIXED_HANDLING_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Amount fixed handling time to add. Days, hours, and minutes."
},
        "FIXED_HANDLING_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measture for fixed handling time in days, hours, and minutes."
},
        "FIXED_HANDLING_TIME_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Fixed handling time in base unit of measure."
}
      },
      "fk_tables": []
    }
  }
};