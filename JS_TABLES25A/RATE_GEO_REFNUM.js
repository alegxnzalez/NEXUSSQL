// RATE_GEO_REFNUM.js

window.RATE_GEO_REFNUM = {
  "tables": {
    "RATE_GEO_REFNUM": {
      "columns": {
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the rate geo. "
        },
        "RATE_GEO_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_REFNUM_QUAL",
          "info": "The GID for the rate geo reference number qualifier. "
        },
        "RATE_GEO_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The actual reference value for the rate geo reference number. "
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
