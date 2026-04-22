// CALENDAR_EVENT_TYPE.js

window.CALENDAR_EVENT_TYPE = {
  "tables": {
    "CALENDAR_EVENT_TYPE": {
      "description": "This table captures all the Calendar Event types in OTM that can be added to a Driver's calendar",
      "columns": {
        "CAL_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Calendar Event Type"
},
        "CAL_EVENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Description of the Calendar Event Type"
},
        "IS_WORKING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the Calendar event type refers to a working or non-working event. Values - 0  False, 1 True"
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
        "DRIVER_CALENDAR_EVENT"
]
    }
  }
};