// LOCATION_SERVPROV_PREF.js

window.LOCATION_SERVPROV_PREF = {
  "tables": {
    "LOCATION_SERVPROV_PREF": {
      "description": "The table is used to store time window preferences for appointment on a location for a service provider.",
      "columns": {
        "LOCATION_SERVPROV_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier of location service provider preference."
},
        "LOCATION_SERVPROV_PREF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of location service provider preference."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "The Location GID."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The Service Provider GID."
},
        "MAX_SLOTS_PER_DAY": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The maximum number of slots per day."
},
        "SERVICE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Unique key constraint will be created on (location_gid, servprov_gid, service_location_gid) in CU5."
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
      "fk_tables": [
        "LOCATION_SERVPROV_PREF_D"
]
    }
  }
};