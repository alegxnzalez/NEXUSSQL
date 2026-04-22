// GROUND_SCHED_GEN.js

window.GROUND_SCHED_GEN = {
  "tables": {
    "GROUND_SCHED_GEN": {
      "description": "Ground Schedule Generation Result Table",
      "columns": {
        "GROUND_SCHED_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Ground schedule shipment generation result GID"
},
        "GROUND_SCHED_GEN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Ground schedule shipment generation result XID"
},
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Query Name"
},
        "PROC_START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Generation process start time"
},
        "PROC_END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Generation process end time"
},
        "IS_CUTOFF_TIME_USED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Is the cut off time used.  If not Start Time is used"
},
        "NUM_OF_DAY_GEN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of days to generate shipments"
},
        "GEN_START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Shipments should be generated starting this date/time"
},
        "GEN_END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "If NUM_OF_DAY_GEN is null, this will the generation end date/time"
},
        "NUM_GROUND_SCHED_SELECTED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of ground schedules selected for shipment generation"
},
        "NUM_SHIPMENT_EXPECTED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of shipments expected to be generated"
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true
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
        "GROUND_SCHED_GEN_D"
]
    }
  }
};