// PERFM_THRESH_CUMULATIVE.js

window.PERFM_THRESH_CUMULATIVE = {
  "tables": {
    "PERFM_THRESH_CUMULATIVE": {
      "columns": {
        "PERFM_THRESH_CUMUL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Cumulative Metric Threshold ID. "
        },
        "PERFM_THRESH_CUMUL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "HIST_STATISTICS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PERFM_THRESH_HIST",
          "info": "Historical Statistic to collect recent activity. This will be compared to the comparison statistic (or a scalar value). "
        },
        "STATISTIC_MISSING_AS_ZEROS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If set to 'Y', any statistical averages should view missing values as zeros. Otherwise, averages will be skewed only to periods with activity. "
        },
        "STATISTIC_COUNT_PERIOD": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "HOUR",
            "DAY",
            "WEEK"
          ],
          "info": "If the collected statistic is a Count, this is the time period to use for count comparisons (e.g. log counts per hour). "
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
          "info": "Historical statistic to use as a basis for comparison. "
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
          "info": "When comparing the current metric to a percentage of a historical measure, this is the minimum value that the historical measure must exceed to trigger the threshold. This avoids sensitivity to initial buildup of historical data or quiet periods of no activity. "
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
