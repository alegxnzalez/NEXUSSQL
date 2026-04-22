// RG_SPECIAL_SERVICE.js

window.RG_SPECIAL_SERVICE = {
  "tables": {
    "RG_SPECIAL_SERVICE": {
      "description": "RG_SPECIAL_SERVICE contains the special services or equipment required for a lane. For example, a lane that goes from California to Alaska might require that the carrier use an airplane that can land in water. The special services entered in this table are required by the shipment but can't necessarily be performed by all carriers. The GC3 engine will check the table before looking at the cost information to determine which carriers can potentially handle the shipment. It does this because the cheapest carrier who doesn't have the special equipment cannot do the job regardless of cost.",
      "columns": {
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the rate geo."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The GID for the special service."
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
        "RG_SPECIAL_SERVICE_ACCESSORIAL"
]
    }
  }
};