// PERFM_THRESH_CURRENT.js

window.PERFM_THRESH_CURRENT = {
  "tables": {
    "PERFM_THRESH_CURRENT": {
      "columns": {
        "PERFM_THRESH_CURRENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Current Metric Threshold ID. "
        },
        "PERFM_THRESH_CURRENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "VALUE_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "CURRENT",
            "COUNT",
            "AVERAGE",
            "MAX"
          ],
          "info": "Type of current value:  CURRENT = most recent accumulated value COUNT = # of accumulated values in the last hour AVERAGE = average of accumulated values in the last hour MAX = maximum of accumulated values in the last hour. "
        },
        "THRESHOLD_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "If "
        },
        "HIST_COMPARISON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PERFM_THRESH_HIST",
          "info": "If the THRESHOLD_VALUE is a multiplier on historical data (e.g. 150% of the average over the last three weeks), this holds the definition of the historical data comparison. "
        },
        "COMPARISON_MISSING_AS_ZEROS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If set to 'Y', any historical averages should view missing values as zeros. Otherwise, averages will be skewed only to periods with activity. "
        },
        "COMPARISON_MIN_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When comparing the current metric to a percentage of a historical measure, this is the minimum value of the historical measure to trigger the threshold. This avoids sensitivity to initial buildup of historical data or quiet periods of no activity. "
        },
        "MIN_SEQUENTIAL_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum # of sequential alerts required to generate a notification. "
        },
        "MIN_HOUR_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum # of alerts per hour to generate a notification. "
        },
        "MIN_DURATION_BETWEEN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum duration, in seconds, between notifications. "
        },
        "QUEUE_INTERVAL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Current alerts are always queued and consolidated for notification in regular intervals to reduce overhead and avoid constant notifications. The queue interval is based on a reserved property and defaults to 5 minutes. Customers can use make the interval longer, if needed. "
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
        "PERFM_THRESHOLD"
      ]
    }
  }
};
