// PERF_METRIC_DATA_DAY.js

window.PERF_METRIC_DATA_DAY = {
  "tables": {
    "PERF_METRIC_DATA_DAY": {
      "columns": {
        "PERF_METRIC_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Metric ID "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "Starting time of day "
        },
        "DATASET_COUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "# of measurements in the day "
        },
        "DATASET_TOTAL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total measurement in the day "
        },
        "DATASET_MEAN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Average measurement in the day "
        },
        "DATASET_MAX": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum measurement for the day "
        },
        "DATASET_MAX_CAUSE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "A string representing the event that caused the maximum value in this dataset."
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
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
      "fk_tables": []
    }
  }
};
