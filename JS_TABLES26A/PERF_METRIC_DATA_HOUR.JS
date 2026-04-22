// PERF_METRIC_DATA_HOUR.js

window.PERF_METRIC_DATA_HOUR = {
  "tables": {
    "PERF_METRIC_DATA_HOUR": {
      "description": "The collected value of a metric during an hour interval. This table is partitioned for weekly cleanup.",
      "columns": {
        "PERF_METRIC_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Metric ID"
},
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "Starting time of hour"
},
        "DATASET_COUNT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "# of measurements in the hour"
},
        "DATASET_TOTAL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total measurement in the hour"
},
        "DATASET_MEAN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average measurement in the hour"
},
        "DATASET_MAX": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum measurement in the hour"
},
        "DATASET_MAX_CAUSE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "A string representing the event that caused the maximum value in this dataset."
},
        "PARTITION_KEY": {
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
      "fk_tables": []
    }
  }
};