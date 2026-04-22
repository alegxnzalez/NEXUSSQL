// ACTIVITY.js

window.ACTIVITY = {
  "tables": {
    "ACTIVITY": {
      "description": "This table specifies the activity that can occur at a location. It is used in conjunction with the Calendar table to define the date time profile for the activity. Some examples of the activity include: CLOSED DISPATCH LIVELOAD LOAD OFFICEHOURS PICKUP RECEIVE etc.",
      "columns": {
        "ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "ACTIVITY_GID contains the type of activity for which a calendar was created. Types include: 'FOO2' ACTIVATE CLOSED DISPATCH FOO LIVELOAD LOAD OFFICEHOURS PICKUP RECEIVE"
},
        "ACTIVITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "ACTIVITY_XID is the unique identifier of a pre-configured field (that is not updateable by the user) of a list of activities in G-Log. Types include: 'FOO2' ACTIVATE CLOSED DISPATCH FOO LIVELOAD LOAD OFFICEHOURS PICKUP RECEIVE"
},
        "ACTIVITY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "ACTIVITY_NAME is a pre-configured field (that is not updateable by the user) that stores the list of activities in G-Log. The ACTIVITY_NAME can be: DRIVER DISPATCHING FOO ITINERARY ACTIVATED LIVE TRAILER LOADING LOADING FREIGHT OFFICE HOURS RECEIVING FREIGHT WAREHOUSE CLOSED DOOR WAREHOUSE PICKING"
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
        "ACCESSORIAL_COST",
        "ACTIVITY_CALENDAR",
        "ACTIVITY_CALENDAR_OVERRIDE",
        "ACTIVITY_TIME",
        "APPT_SS_ACTIVITY_PROF_D",
        "DM_RULE_D",
        "LOCATION_CAPACITY_D",
        "RATE_GEO_COST",
        "RATE_SERVICE_ACCESSORIAL_TIME",
        "ROUTE_TMPLT_LEG_LOC_INCOMPAT",
        "SHIPMENT_STOP_ACTIVITY"
]
    }
  }
};