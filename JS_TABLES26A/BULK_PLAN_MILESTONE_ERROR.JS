// BULK_PLAN_MILESTONE_ERROR.js

window.BULK_PLAN_MILESTONE_ERROR = {
  "tables": {
    "BULK_PLAN_MILESTONE_ERROR": {
      "columns": {
        "BULK_PLAN_MSTONE_ERR_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A globally unique identifier for the bulkplan milestone error"
},
        "BULK_PLAN_MILESTONE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "foreign_key": "BULK_PLAN_MILESTONE",
          "info": "Bulkplan milestone ID"
},
        "TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Time of milestone error"
},
        "SEVERITY": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "WARNING",
                    "ERROR",
                    "EXCEPTION",
                    "INFO"
          ],
          "info": "Error severity"
},
        "MESSAGE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Error summary"
},
        "TRACE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Error stack trace"
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
      "fk_tables": []
    }
  }
};