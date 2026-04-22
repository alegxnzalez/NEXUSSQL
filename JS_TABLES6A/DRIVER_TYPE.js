// DRIVER_TYPE.js

window.DRIVER_TYPE = {
  "tables": {
    "DRIVER_TYPE": {
      "columns": {
        "DRIVER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Define Driver types. "
        },
        "DRIVER_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
        },
        "PREF_CONSTRAINT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG"
        },
        "DED_ACCT_LOCN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE"
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "allows the user to provide the rate distance at Driver Type level"
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": [
        "DRIVER",
        "DRIVER_TYPE_CALENDAR",
        "DRIVER_TYPE_REMARK",
        "DRIVER_TYPE_SPECIAL_SERVICE",
        "RESOURCE_SCHEDULE",
        "RESOURCE_SCHEDULE_INSTANCE"
      ]
    }
  }
};
