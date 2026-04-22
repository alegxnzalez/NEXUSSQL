// APP_MACHINE.js

window.APP_MACHINE = {
  "tables": {
    "APP_MACHINE": {
      "columns": {
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "APP_MACHINE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "MACHINE_URL": {
          "type": "VARCHAR2(512)",
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
},
        "SCHEDULED_SHUTDOWN_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Scheduled shutdown time. Null, if no shutdown has been scheduled."
},
        "STATE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "values": [
                    "S_DOWN",
                    "S_STARTING",
                    "S_STANDBY",
                    "S_HOT_CACHING",
                    "S_HOT_CACHED",
                    "S_UP",
                    "Q_USER_SESSION_DENY",
                    "Q_USER_LRT_WARN",
                    "Q_USER_WARN",
                    "Q_LRT_QUIESCING",
                    "Q_INTEGRATION_QUIESCING",
                    "Q_QUIESCING",
                    "Q_INTERRUPTING",
                    "Q_WAITING"
          ],
          "info": "Server state:  S_DOWN = server is down, S_STARTING = server is starting, S_STANDBY = server is in standby, S_HOT_CACHING = server is paused before cache loading, S_HOT_CACHED = server is paused after cache loading, S_UP = server is up, Q_USER_SESSION_DENY = quiescing: deny new user sessions, Q_USER_LRT_WARN = queiscing: warn user on any new long running tasks Q_USER_WARN = quiescing: warn user of imminent shutdown Q_LRT_QUIESCING = quiescing; stop polling any long running tasks, Q_INTEGRATION_QUIESCING = quiescing; refuse inbound integration, Q_QUIESCING = quiescing: stop new work Q_TERMINATING = quiescing: interrupt existing work, Q_WAITING = quiescing: waiting for server idle"
},
        "NEXT_STATE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "values": [
                    "S_DOWN",
                    "S_STARTING",
                    "S_STANDBY",
                    "S_HOT_CACHING",
                    "S_HOT_CACHED",
                    "S_UP",
                    "Q_USER_SESSION_DENY",
                    "Q_USER_LRT_WARN",
                    "Q_USER_WARN",
                    "Q_LRT_QUIESCING",
                    "Q_INTEGRATION_QUIESCING",
                    "Q_QUIESCING",
                    "Q_INTERRUPTING",
                    "Q_WAITING"
          ],
          "info": "During shutdown, this is the next expected server state"
},
        "NEXT_STATE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Estimated time of next server state change during shutdown"
}
      },
      "fk_tables": [
        "APP_MACHINE_FAILOVER",
        "APP_MACHINE_STATE",
        "APP_SERVER_MACHINE",
        "BULK_CM",
        "BULK_PLAN",
        "BULK_PLAN_PARTITION",
        "BULK_RATING",
        "BULK_REPORTING",
        "BULK_TRAILER_BUILD",
        "DIAG_PERFORMANCE_RESULT",
        "DRS_REQUEST",
        "EXPLANATION",
        "FLEET_BULK_PLAN",
        "I_TRANSMISSION",
        "LOGFILE_ACTION",
        "LONG_RUNNING_TASK",
        "NOTIFY_REQUEST",
        "OBJECT_LOCK",
        "PROCESS_CONTROL_HISTORY",
        "Q_INTEGRATION_IN",
        "Q_INTEGRATION_OUT",
        "Q_LIFETIME_EVENT",
        "Q_MESSAGE",
        "VISIBILITY_EVENT",
        "WORK_ASSIGNMENT_BULK_PLAN"
]
    }
  }
};