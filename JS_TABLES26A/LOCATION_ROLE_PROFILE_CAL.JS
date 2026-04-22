// LOCATION_ROLE_PROFILE_CAL.js

window.LOCATION_ROLE_PROFILE_CAL = {
  "tables": {
    "LOCATION_ROLE_PROFILE_CAL": {
      "description": "Defines a Location Role Profile Calendar on the Location Role. Enables defining a calendar on the Location Role based on commodity , inbound/outbound location , mode etc.",
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
        "LOCATION_ROLE_PROF_CAL_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The internal sequence number for the location role profile calendar combination."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location where the location role profile calendar is being defined. The location role profile calendar allow you to define different calendars for different commodity profiles (unload/load these products at these times), different inbound locations (receive shipments from these locations at these times) or outbound locations (ship product to these locations at these times."
},
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location role."
},
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "The GID for the flex commodity profile. Used to specify when commodity specific activities can occur at the location."
},
        "INBOUND_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "The GID for the inbound location profile. Used to specify when shipments from locations in the inbound location profile can be received at the location."
},
        "OUTBOUND_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "The GID for the outbound location profile. Used to specify when shipments to locations in the outbound location profile can be shipped to."
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CALENDAR",
          "info": "The GID for the calendar entry associated with each row of the location role profile calendar entry."
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The GID for the mode profile. Used to specify when shipments of a certain mode can be shipped or received from the location."
}
      },
      "fk_tables": []
    }
  }
};