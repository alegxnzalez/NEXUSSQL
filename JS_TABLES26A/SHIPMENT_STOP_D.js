// SHIPMENT_STOP_D.js

window.SHIPMENT_STOP_D = {
  "tables": {
    "SHIPMENT_STOP_D": {
      "description": "Table contains shipment detail information?",
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The shipment GID."
},
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The stop number within the shipment. Stop number = 1 is the pickup stop, and the max (stop number) for a shipment is the delivery stop."
},
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "A GID to define the shipment ship unit."
},
        "ACTIVITY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "P",
                    "D",
                    "O"
          ],
          "info": "The activity performed at the stop. For example: pickup, delivery, etc."
},
        "ACTIVITY_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The time spent performing the activity at the shipment stop."
},
        "ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The activity time unit of measure."
},
        "ACTIVITY_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The activity time in base units."
},
        "IS_PERMANENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A Y/N indicator to define the stop as permanent. Any subsequent actions and modifications to the shipment will retain this record."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Date and time of data insert."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Date and time of the most recent data update."
},
        "SHIP_UNIT_DWELL_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The ship unit dwell time at the stop location as entered."
},
        "SHIP_UNIT_DWELL_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The ship unit dwell time at the stop location in base UOM."
},
        "SHIP_UNIT_DWELL_TIME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The ship unit dwell time unit of measure."
}
      },
      "fk_tables": [
        "SHIPMENT_STOP_SU_INV_PARTY"
]
    }
  }
};