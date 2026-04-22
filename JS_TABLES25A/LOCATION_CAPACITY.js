// LOCATION_CAPACITY.js

window.LOCATION_CAPACITY = {
  "tables": {
    "LOCATION_CAPACITY": {
      "columns": {
        "LOCATION_CAPACITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOCATION_CAPACITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CALENDAR",
          "info": "The calendar specifies the activities and times that a location capacity can be defined for. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This flag turns on/off the location capacity"
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
        "LOCATION_CAPACITY_D",
        "LOCATION_CAPACITY_GROUP_D"
      ]
    }
  }
};
