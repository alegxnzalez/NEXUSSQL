// PERFM_THRESHOLD.js

window.PERFM_THRESHOLD = {
  "tables": {
    "PERFM_THRESHOLD": {
      "description": "Metric Threshold Alert",
      "columns": {
        "PERFM_THRESHOLD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Metric Threshold Alert ID."
},
        "PERFM_THRESHOLD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "PERF_METRIC_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PERF_METRIC_TYPE",
          "info": "Metric Type."
},
        "PERF_METRIC_SUBCOMPONENT": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "info": "Metric Subcomponent."
},
        "PERFM_THRESH_CURRENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PERFM_THRESH_CURRENT",
          "info": "If not null, the Current Metric Alert Threshold for the alert."
},
        "PERFM_THRESH_CUMULATIVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PERFM_THRESH_CUMULATIVE",
          "info": "If not null, the Cumulative Metric Alert Threshold for the alert."
},
        "PERFM_THRESH_NOTIFY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PERFM_THRESH_NOTIFY",
          "info": "The notification profile for the alert. If null, the alert will only be logged."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If 'Y', the alert is active."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If ''Y'', the record is reserved for use with OTM staged thresholds. It cannot be edited or removed by a user."
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
        "PERFM_THRESH_RESULT_EVENT"
]
    }
  }
};