// WA_BULKPLAN_MILESTONE_ERR.js

window.WA_BULKPLAN_MILESTONE_ERR = {
  "tables": {
    "WA_BULKPLAN_MILESTONE_ERR": {
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
        "WA_BULKPLAN_MILESTONE_ERR_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A globally unique identifier for the work assignment bulk plan milestone error. "
        },
        "WA_BULKPLAN_MILESTONE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "foreign_key": "WA_BULKPLAN_MILESTONE",
          "info": "Work Assignment Bulk plan milestone ID. "
        },
        "TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of milestone error. "
        },
        "SEVERITY": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "WARNING",
            "ERROR",
            "EXCEPTION"
          ],
          "info": "Error severity. "
        },
        "MESSAGE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Error summary. "
        },
        "TRACE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Error stack trace."
        }
      },
      "fk_tables": []
    }
  }
};
