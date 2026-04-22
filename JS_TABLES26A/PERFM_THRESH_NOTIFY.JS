// PERFM_THRESH_NOTIFY.js

window.PERFM_THRESH_NOTIFY = {
  "tables": {
    "PERFM_THRESH_NOTIFY": {
      "description": "Profile for Metric Alert Notification. Defines recipients and actions to take on the alert.",
      "columns": {
        "PERFM_THRESH_NOTIFY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "PERFM_THRESH_NOTIFY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CONSOLIDATION": {
          "type": "NUMBER",
          "nullable": true
},
        "CONSOLIDATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Time for consolidation of disparate thresholds for this notification profile. I.e., send a single notification in this time period, containing a list of all thresholds exceeded."
},
        "CONSOLIDATION_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TRIGGER_QDLOGS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, a qdlogs request will be made along with the notification. The notification e-mail will include the qdlogs archive name."
},
        "TRIGGER_QDLOGS_JRA": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If 'Y', a JRA recording should be grabbed when qdlogs are triggered."
},
        "TRIGGER_QDLOGS_HEAP_DUMP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If 'Y', a heap dump should be grabbed when qdlogs are triggered."
},
        "TRIGGER_PERF_COLLECTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "A comma-delimited list of Performance collectors to retrieve and attach as a zip file to the notification. Also supports 'STANDARD' and 'ALL' collections."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If ''Y'', the record is reserved for use with OTM staged thresholds. It cannot be edited or removed by a user."
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
        "PERFM_THRESHOLD",
        "PERFM_THRESH_NOTIFY_CONTACT",
        "PERFM_THRESH_NOTIFY_EMAIL"
]
    }
  }
};