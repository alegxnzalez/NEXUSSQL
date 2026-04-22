// LOCATION_THU_PRU_CAPACITY.js

window.LOCATION_THU_PRU_CAPACITY = {
  "tables": {
    "LOCATION_THU_PRU_CAPACITY": {
      "columns": {
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
          "info": "Date and time of the most recent data update. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location. The Location Package Reference Unit Capacity capabilities are used to define the transport handling unit capacity for a location and location role combination. "
        },
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location role. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the transport handling unit. "
        },
        "PACKAGING_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGING_REFERENCE_UNIT",
          "info": "The GID for the package unit reference unit. "
        },
        "TOTAL_PRU_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Enter a Limit Packaging Reference Unit Count. This represents the number of package references units that can fill the usable space in the location. The area of a location may suggest more packaging reference units can fit, but due to the actual dimensions of the packaged reference units, a lower limit may be reached. "
        },
        "LIMIT_PRU_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Enter a Total Packaging Reference Unit Count. This total represents by volume the amount of packaging reference units that can fill the space. It does not take into account the actual shape and dimensions of the packaging reference unit, but rather how many packaging reference units can fit in the space based on the volume of each packaging reference unit."
        }
      },
      "fk_tables": []
    }
  }
};
