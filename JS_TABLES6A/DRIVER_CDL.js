// DRIVER_CDL.js

window.DRIVER_CDL = {
  "tables": {
    "DRIVER_CDL": {
      "columns": {
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DRIVER",
          "info": "The driver GID. "
        },
        "CDL_NUM": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "key_value": true,
          "info": "The unique commercial driving license number. "
        },
        "CDL_CLASS": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The commercial driving license class type. "
        },
        "CDL_ISSUE_STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The state that issued the commercial driving license. "
        },
        "CDL_ISSUE_COUNTRY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The country which issued the commercial driving license. "
        },
        "CDL_EXP_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The expiration date of the commercial driving license. "
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
