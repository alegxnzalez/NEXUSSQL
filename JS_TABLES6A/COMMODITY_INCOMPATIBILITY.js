// COMMODITY_INCOMPATIBILITY.js

window.COMMODITY_INCOMPATIBILITY = {
  "tables": {
    "COMMODITY_INCOMPATIBILITY": {
      "columns": {
        "COMMODITY_GID1": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMMODITY",
          "info": "Contains the GID for the commodity. "
        },
        "COMMODITY_GID2": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMMODITY",
          "info": "Contains the GID for the commodity that is incompatible with Commodity GID 1. "
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
