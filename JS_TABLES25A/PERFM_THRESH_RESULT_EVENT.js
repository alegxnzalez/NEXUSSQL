// PERFM_THRESH_RESULT_EVENT.js

window.PERFM_THRESH_RESULT_EVENT = {
  "tables": {
    "PERFM_THRESH_RESULT_EVENT": {
      "columns": {
        "PERFM_THRESHOLD_RESULT_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PERFM_THRESHOLD_RESULT",
          "info": "Metric threshold result ID. "
        },
        "PERFM_EVENT_INDEX": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Event index for threshold result. "
        },
        "PERFM_THRESHOLD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PERFM_THRESHOLD",
          "info": "Metric threshold triggering the event. "
        },
        "THRESHOLD_MAX_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum metric value that triggered the event. "
        },
        "THRESHOLD_FROM": {
          "type": "DATE",
          "nullable": true,
          "info": "Starting time of the triggering event. "
        },
        "THRESHOLD_TO": {
          "type": "DATE",
          "nullable": true,
          "info": "Ending time of the triggering event. "
        },
        "THRESHOLD_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Data count for the threshold event. "
        },
        "THRESHOLD_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Type of threshold event."
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
