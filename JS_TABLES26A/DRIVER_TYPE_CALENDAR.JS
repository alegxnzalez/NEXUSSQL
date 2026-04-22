// DRIVER_TYPE_CALENDAR.js

window.DRIVER_TYPE_CALENDAR = {
  "tables": {
    "DRIVER_TYPE_CALENDAR": {
      "description": "This table captures the Driver Type work profile definition, that includes the Activity calendar and the Home location",
      "columns": {
        "DRIVER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DRIVER_TYPE",
          "info": "The Driver Type GID in OTM"
},
        "HOME_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "The Home location of defined for  this work profile"
},
        "ACTIVITY_CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CALENDAR",
          "info": "The Activity Calendar of the Driver defined for this work profile"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The effective date for this work profile"
},
        "EXPIRY_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The expiry date for this work profile"
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
},
        "IS_SHIFT_BASED": {
          "type": "VARCHAR2(1)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};