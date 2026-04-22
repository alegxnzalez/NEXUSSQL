// POWER_UNIT_EQUIPMENT.js

window.POWER_UNIT_EQUIPMENT = {
  "tables": {
    "POWER_UNIT_EQUIPMENT": {
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
        "POWER_UNIT_EQUIPMENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence (key) associated with the power unit and equipment (trailer) join."
},
        "POWER_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "POWER_UNIT",
          "info": "The GID for the power unit defined for the power unit and equipment (trailer) association."
},
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT",
          "info": "The GID for the equipment defined for the power unit and equipment (trailer) association."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date of this association with the power unit and equipment."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date of this association with the power unit and equipment."
}
      },
      "fk_tables": []
    }
  }
};