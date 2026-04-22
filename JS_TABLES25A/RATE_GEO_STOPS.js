// RATE_GEO_STOPS.js

window.RATE_GEO_STOPS = {
  "tables": {
    "RATE_GEO_STOPS": {
      "columns": {
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the rate geo. "
        },
        "LOW_STOP": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "Stop off charges are typically defined for truckload rates. In most cases, the base rate includes the pickup stop and the first delivery stop. The rate may also support the option of performing addition stops, but at an additional per stop charge. The additional per stop charges are often specified in a ranges i.e., for stops 3 to 5 the per stop charge is X for stops 6 to 7 the per stop charge is Y per stop.\nThe low stop fields defines the low end of the range for stop off charges. "
        },
        "HIGH_STOP": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "Stop off charges are typically defined for truckload rates. In most cases, the base rate includes the pickup stop and the first delivery stop. The rate may also support the option of performing addition stops, but at an additional per stop charge. The additional per stop charges are often specified in a ranges i.e., for stops 3 to 5 the per stop charge is X for stops 6 to 7 the per stop charge is Y per stop.\nThe high stop field defines the high end of the range for stop off charges. "
        },
        "PER_STOP_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The per stop charge for the low high range being defined. "
        },
        "PER_STOP_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the per stop cost. "
        },
        "PER_STOP_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The per stop cost in base units. "
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
