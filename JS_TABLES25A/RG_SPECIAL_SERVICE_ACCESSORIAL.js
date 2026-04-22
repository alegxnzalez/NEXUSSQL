// RG_SPECIAL_SERVICE_ACCESSORIAL.js

window.RG_SPECIAL_SERVICE_ACCESSORIAL = {
  "tables": {
    "RG_SPECIAL_SERVICE_ACCESSORIAL": {
      "columns": {
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_COST",
          "info": "The GID for the special service related accessorial cost. The accessorial code and cost are provided in situations where the special service is provided for a charge -which is defined by the related accessorial code and cost. "
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RG_SPECIAL_SERVICE",
          "info": "The GID for the rate geo. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The GID for the accessorial code. "
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RG_SPECIAL_SERVICE",
          "info": "The GID for the special service. You can define a special services on a rate as either a special service that's available/provided with the rate defined or the special service may be provided for a charge -which is defined by the related accessorial. When entering a free special service, you only need to enter a special service code GID. When entering a special service that has an accessorial, enter a Special Service code, as well as an Accessorial Code ID and an Accessorial Cost ID. Click Save. "
        },
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
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
