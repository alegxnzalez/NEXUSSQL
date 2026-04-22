// PERFM_COLLECT_HISTORY.js

window.PERFM_COLLECT_HISTORY = {
  "tables": {
    "PERFM_COLLECT_HISTORY": {
      "columns": {
        "WINDOW_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "DAY",
            "WEEK"
          ],
          "key_value": true,
          "info": "Window awaiting collection (daily or weekly) "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "Window start time "
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Application server ID source for data "
        },
        "IS_PENDING_DATA": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the time period is waiting for hourly metrics persistence from the specific application server. "
        },
        "IS_PENDING_COLLECTION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, this time window is ready for a rollup request from the specific application server. Hourly persistence is complete."
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
