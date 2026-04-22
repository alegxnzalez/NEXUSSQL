// REP_SCHED_SERVICE.js

window.REP_SCHED_SERVICE = {
  "tables": {
    "REP_SCHED_SERVICE": {
      "columns": {
        "REP_SCHED_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Service type gid for a repetition schedule"
},
        "REP_SCHED_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
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
      "fk_tables": [
        "REPETITION_SCHEDULE",
        "REP_SCHED_SERVICE_MAP"
]
    }
  }
};