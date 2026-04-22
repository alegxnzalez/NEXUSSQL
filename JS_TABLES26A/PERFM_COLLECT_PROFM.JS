// PERFM_COLLECT_PROFM.js

window.PERFM_COLLECT_PROFM = {
  "tables": {
    "PERFM_COLLECT_PROFM": {
      "description": "Specific Metric for Collection",
      "columns": {
        "PERFM_COLLECT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PERFM_COLLECT_PROFILE",
          "info": "Collection Profile ID"
},
        "PERF_METRIC_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PERF_METRIC",
          "info": "Metric ID"
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