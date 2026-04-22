// GTM_LICENSE_CONTROL_TYPE_CODE.js

window.GTM_LICENSE_CONTROL_TYPE_CODE = {
  "tables": {
    "GTM_LICENSE_CONTROL_TYPE_CODE": {
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
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the control type associated with the GTM license. "
        },
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The control code associated with the GTM license."
        }
      },
      "fk_tables": []
    }
  }
};
