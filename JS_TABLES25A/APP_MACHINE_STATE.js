// APP_MACHINE_STATE.js

window.APP_MACHINE_STATE = {
  "tables": {
    "APP_MACHINE_STATE": {
      "columns": {
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
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "APP_MACHINE"
        },
        "SCHEDULED_SHUTDOWN_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Scheduled shutdown time. Null, if no shutdown has been scheduled. "
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
          "info": "Server state:  S_DOWN = server is down, S_STARTING = server is starting, S_STANDBY = server is in standby, S_HOT_CACHING = server is paused before cache loading, S_HOT_CACHED = server is paused after cache loading, S_UP = server is up, Q_USER_SESSION_DENY = quiescing: deny new user sessions, Q_USER_LRT_WARN = queiscing: warn user on any new long running tasks Q_USER_WARN = quiescing: warn user of imminent shutdown Q_LRT_QUIESCING = quiescing; stop polling any long running tasks, Q_INTEGRATION_QUIESCING = quiescing; refuse any inbound integrations, Q_QUIESCING = quiescing: stop new work Q_TERMINATING = quiescing: interrupt existing work, Q_WAITING = quiescing: waiting for server idle "
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
          "info": "During shutdown, this is the next expected server state "
        },
        "NEXT_STATE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Estimated time of next server state change during shutdown "
        },
        "OTM_VERSION": {
          "type": "VARCHAR2(300)",
          "nullable": false,
          "info": "OTM Version for the server"
        }
      },
      "fk_tables": []
    }
  }
};
