// ORDER_SCHEDULE.js

window.ORDER_SCHEDULE = {
  "tables": {
    "ORDER_SCHEDULE": {
      "columns": {
        "ORDER_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The internal ID for the order schedule. "
        },
        "ORDER_SCHEDULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external ID for the order schedule. "
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE",
          "info": "The geography this order schedule covers. "
        },
        "ORDER_RELEASE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_TYPE",
          "info": "The type of order this schedule covers. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The description of this order schedule. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date this order schedule becomes effective. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date this order schedule becomes ineffective."
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
        "ORDER_SCHEDULE_D",
        "ORDER_SCHEDULE_OVERRIDE"
      ]
    }
  }
};
