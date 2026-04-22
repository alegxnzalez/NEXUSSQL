// PERF_METRIC.js

window.PERF_METRIC = {
  "tables": {
    "PERF_METRIC": {
      "description": "A scalar metric. This represents the collection of a metric type for a specific subcomponent. E.g., the backlog of a particular event queue.",
      "columns": {
        "PERF_METRIC_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence number for the metric to simplify profile selection."
},
        "PERF_METRIC_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PERF_METRIC_TYPE",
          "info": "Metric Type ID"
},
        "PERF_METRIC_SUBCOMPONENT": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "info": "Metric Subcomponent. E.g., a specific event queue."
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
        "PERFM_COLLECT_PROFM"
]
    }
  }
};