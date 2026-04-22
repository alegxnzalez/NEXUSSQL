// GTM_LICENSE_DATE.js

window.GTM_LICENSE_DATE = {
  "tables": {
    "GTM_LICENSE_DATE": {
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
        "LICENSE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LICENSE",
          "info": "The GID for the GTM license. "
        },
        "DATE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DATE_QUALIFIER",
          "info": "The GID for the date qualifier. "
        },
        "LICENSE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The license date."
        }
      },
      "fk_tables": []
    }
  }
};
