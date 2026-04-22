// HOLIDAY_PROFILE.js

window.HOLIDAY_PROFILE = {
  "tables": {
    "HOLIDAY_PROFILE": {
      "description": "This table is used with the Calendar related tables to store the holiday information.",
      "columns": {
        "HOLIDAY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HOLIDAY_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "HOLIDAY_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
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
        "CALENDAR",
        "HOLIDAY_PROFILE_DETAIL"
]
    }
  }
};