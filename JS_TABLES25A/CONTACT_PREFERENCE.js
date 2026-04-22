// CONTACT_PREFERENCE.js

window.CONTACT_PREFERENCE = {
  "tables": {
    "CONTACT_PREFERENCE": {
      "columns": {
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The contact GID. "
        },
        "PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PREFERENCE",
          "info": "The preference GID. "
        },
        "VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The value or Rank for the communication method.  The value (Rank) prioritizes the saved communication methods. The highest priority is 1. If the rank between two companies does not match, the method preferred by the source company (shipper) is used. "
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
