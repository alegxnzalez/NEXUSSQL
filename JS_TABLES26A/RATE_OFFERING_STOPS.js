// RATE_OFFERING_STOPS.js

window.RATE_OFFERING_STOPS = {
  "tables": {
    "RATE_OFFERING_STOPS": {
      "description": "Contains the range of number of stops that are included in the contract.  For example, a contract may include 5 stops, but if more are required for the shipment, the carrier might start charging extra.",
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the rate offering."
},
        "LOW_STOP": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "Stop off charges are typically defined for truckload rates. In most cases, the base rate includes the pickup stop and the first delivery stop. The rate may also support the option of performing addition stops, but at an additional per stop charge. The additional per stop charges are often specified in a ranges i.e., for stops 3 to 5 the per stop charge is X for stops 6 to 7 the per stop charge is Y per stop. The low stop fields defines the low end of the range for stop off charges."
},
        "HIGH_STOP": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "Stop off charges are typically defined for truckload rates. In most cases, the base rate includes the pickup stop and the first delivery stop. The rate may also support the option of performing addition stops, but at an additional per stop charge. The additional per stop charges are often specified in a ranges i.e., for stops 3 to 5 the per stop charge is X for stops 6 to 7 the per stop charge is Y per stop. The high stop field defines the high end of the range for stop off charges."
},
        "PER_STOP_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The per stop charge for the low high range being defined."
},
        "PER_STOP_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the per stop cost."
},
        "PER_STOP_COST_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The per stop cost in base units."
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