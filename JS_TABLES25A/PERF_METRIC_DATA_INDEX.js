// PERF_METRIC_DATA_INDEX.js

window.PERF_METRIC_DATA_INDEX = {
  "tables": {
    "PERF_METRIC_DATA_INDEX": {
      "columns": {
        "WINDOW_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "HOUR",
            "DAY",
            "WEEK"
          ],
          "key_value": true,
          "info": "Window type "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "Window start time"
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
