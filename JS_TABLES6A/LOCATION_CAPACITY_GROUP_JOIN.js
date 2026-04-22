// LOCATION_CAPACITY_GROUP_JOIN.js

window.LOCATION_CAPACITY_GROUP_JOIN = {
  "tables": {
    "LOCATION_CAPACITY_GROUP_JOIN": {
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the location. "
        },
        "LOC_CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_CAPACITY_GROUP",
          "info": "The GID for the location capacity group for this location. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Effective date for the location capacity group assigned to the location. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Expiration date for the location capacity group assigned to the location. "
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
