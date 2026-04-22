// PERF_METRIC_DATA_INDEX.js

window.PERF_METRIC_DATA_INDEX = {
  "tables": {
    "PERF_METRIC_DATA_INDEX": {
      "description": "Index table used to fill in missing data with zeroes",
      "columns": {
        "WINDOW_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "HOUR",
                    "DAY",
                    "WEEK"
          ],
          "info": "Window type"
},
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "Window start time"
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