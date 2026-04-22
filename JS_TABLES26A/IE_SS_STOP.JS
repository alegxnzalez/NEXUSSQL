// IE_SS_STOP.js

window.IE_SS_STOP = {
  "tables": {
    "IE_SS_STOP": {
      "description": "The IE series of tables is a method to store the EDI information from a Blob into a more relational format. However these may change in ver 3.0.",
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The transaction identifier for the shipment data of the tracking event."
},
        "STOP_SEQUENCE": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The stop sequence associated with the stop if a shipment identifier is entered and stop tracking event is for an existing stop."
},
        "PORT_LOCATION_FUNCTION_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The port location function code for ocean tracking events."
},
        "LOCATION_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_REFNUM_QUAL",
          "info": "The location reference number quantifier associated with a location reference number if supplied on the tracking event."
},
        "LOCATION_ID_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The location reference value associated with the reference number qualifier."
},
        "LOCATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "A location name if supplied with the tracking event."
},
        "EVENT_CITY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The city associated with the tracking event."
},
        "EVENT_STATE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The state associated with the tracking event."
},
        "EVENT_COUNTRY": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The country associated with the tracking event."
},
        "SPLC_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "If the tracking stop is for a rail location the Standard Point Location Code (SPLC) can be used."
},
        "LATITUDE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "A latitude and longitude value for a stop level tracking event can be supplied instead of a location based event."
},
        "LONGITUDE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "A latitude and longitude value for a stop level tracking event can be supplied instead of a location based event."
},
        "TERMINAL_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The terminal name for port associated with the tracking event status."
},
        "GATE_PIER_DOOR_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The gate pier door number assigned to the shipment tracking status."
},
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE",
          "info": "The time zone identifier for the tracking event."
},
        "EVENTDATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The tracking event date."
},
        "AEI_INDICATOR": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The AEI indicator for the tracking event."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages."
},
        "REFERENCE_POSITION": {
          "type": "VARCHAR2(32)",
          "nullable": true,
          "values": [
                    "PREV",
                    "NEXT"
          ],
          "info": "The position of this stop relative to the yet-to-be-created new stop."
},
        "STOP_TYPE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The stop type for the new stop created with tracking event."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Typically a location GID is not supplied on a stop tracking event if you have entered the stop sequence number. If adding an additional stop to the shipment, this field together with the reference position is required."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "ERPC": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If the tracking stop is for a rail location the Eastern Railroad President's Conference (ERPC) can be used."
}
      },
      "fk_tables": []
    }
  }
};