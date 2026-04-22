// RESOURCE_SCHEDULE_PROFILE_D.js

window.RESOURCE_SCHEDULE_PROFILE_D = {
  "tables": {
    "RESOURCE_SCHEDULE_PROFILE_D": {
      "columns": {
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
        },
        "RESOURCE_SCHEDULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RESOURCE_SCHEDULE_PROFILE"
        },
        "RESOURCE_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RESOURCE_SCHEDULE"
        }
      },
      "fk_tables": []
    }
  }
};
