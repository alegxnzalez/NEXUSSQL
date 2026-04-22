// OR_STOP_SPECIAL_SERVICE.js

window.OR_STOP_SPECIAL_SERVICE = {
  "tables": {
    "OR_STOP_SPECIAL_SERVICE": {
      "description": "Define special services required on this order stop.",
      "columns": {
        "OR_STOP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OR_STOP",
          "info": "The order release stop GID, for multi-stop order releases."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service code identifier defining the service required."
},
        "TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The duration required for the special service at the stop."
},
        "TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the time."
},
        "TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time in the base unit of measure."
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