// ORDER_SCHEDULE_OVERRIDE.js

window.ORDER_SCHEDULE_OVERRIDE = {
  "tables": {
    "ORDER_SCHEDULE_OVERRIDE": {
      "description": "Override table for order delivery schedules.",
      "columns": {
        "ORDER_SCHEDULE_OVERRIDE_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "System generated number for this schedule override."
},
        "ORDER_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_SCHEDULE",
          "info": "ID for the parent order schedule."
},
        "OVERRIDE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the override."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description of the override."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date the override becomes effective."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date the override becomes ineffective."
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
        "ORDER_SCHEDULE_OVERRIDE_D"
]
    }
  }
};