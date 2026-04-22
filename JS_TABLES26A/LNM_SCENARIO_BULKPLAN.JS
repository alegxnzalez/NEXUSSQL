// LNM_SCENARIO_BULKPLAN.js

window.LNM_SCENARIO_BULKPLAN = {
  "tables": {
    "LNM_SCENARIO_BULKPLAN": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LNM_SCENARIO"
},
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LNM_BULKPLAN_SPEC"
},
        "BULKPLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BULKPLAN_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "BULKPLAN_STATE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "NOT STARTED",
                    "STARTED",
                    "COMPLETED",
                    "FAILED"
          ]
},
        "ORDER_QUERY_START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Start time of the order query for the scenario plan"
},
        "ORDER_QUERY_END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "End time of the order query for the scenario plan."
},
        "GROUPBY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Groupby type for the scenario plan - Source loc/Dest loc/priority/bulk plan gid"
},
        "GROUPBY_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Groupby value used for the scenario plan."
},
        "NUM_OF_ORDERS_INSERTED": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": [
        "LNM_ORDER_STATE"
]
    }
  }
};