// PERFM_COLLECT_PROFILE.js

window.PERFM_COLLECT_PROFILE = {
  "tables": {
    "PERFM_COLLECT_PROFILE": {
      "description": "Metric Collection Profile. This specifies a set of metric types and/or a set of individual metrics to bundle up for data collection or comparison.",
      "columns": {
        "PERFM_COLLECT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Collection Profile ID"
},
        "PERFM_COLLECT_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "PERFM_COLLECT_PROFM",
        "PERFM_COLLECT_PROFT"
]
    }
  }
};