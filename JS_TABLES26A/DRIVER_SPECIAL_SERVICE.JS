// DRIVER_SPECIAL_SERVICE.js

window.DRIVER_SPECIAL_SERVICE = {
  "tables": {
    "DRIVER_SPECIAL_SERVICE": {
      "description": "Defines driver's special services.",
      "columns": {
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DRIVER",
          "info": "The effective date of this special service for this driver."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The expiration date of this special service for this driver."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date of this special service for this driver."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date of this special service for this driver"
},
        "PAYABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYABLE_INDICATOR",
          "info": "Allows overriding the payable indicator for a special service for a particular driver."
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