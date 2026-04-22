// RO_TIME_PERIOD_DEF.js

window.RO_TIME_PERIOD_DEF = {
  "tables": {
    "RO_TIME_PERIOD_DEF": {
      "columns": {
        "RO_TIME_PERIOD_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier"
},
        "RO_TIME_PERIOD_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Identifies first day of data collection and cycle.  If cycle_type is M or Y, rounds to beginning of the calendar entity, but data collection does not actually start until the specified date"
},
        "CYCLE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "D",
                    "W",
                    "M",
                    "Y",
                    "O",
                    "E"
          ],
          "info": "D = Daily, W = Weekly (7-day cycle), M = Monthly (calendar months), Y = Yearly (calendar years), O = Month to Month, E = Year to Year"
},
        "CYCLE_COUNT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Number of time-periods as defined in cycle_type per cycle.  2  = 2 Days, 2 Weeks, etc."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(250)",
          "nullable": true,
          "info": "Long form description of time period definition"
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
        "RATE_GEO",
        "RATE_OFFERING"
]
    }
  }
};