// RO_SPECIAL_SERVICE_ACCESSORIAL.js

window.RO_SPECIAL_SERVICE_ACCESSORIAL = {
  "tables": {
    "RO_SPECIAL_SERVICE_ACCESSORIAL": {
      "description": "Accessorials provided with the rate offerings.",
      "columns": {
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_COST",
          "info": "The GID for the accessorial cost."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RO_SPECIAL_SERVICE",
          "info": "The GID for the rate offering."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The GID for the accessorial code."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RO_SPECIAL_SERVICE",
          "info": "The GID for the special service. You can define a special services on a rate as either a special service that's available/provided with the rate defined or the special service may be provided for a charge which is defined by the related accessorial. When entering a free special service, you only need to enter a special service code GID. When entering a special service that has an accessorial, enter a Special Service code, as well as an Accessorial Code ID and an Accessorial Cost ID."
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