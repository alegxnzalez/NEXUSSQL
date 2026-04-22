// DATA_QUEUE_POLLER.js

window.DATA_QUEUE_POLLER = {
  "tables": {
    "DATA_QUEUE_POLLER": {
      "description": "Defines a poller for a data queue",
      "columns": {
        "DATA_QUEUE_POLLER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Globale ID for the data queue poller"
},
        "DATA_QUEUE_POLLER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Data Queue Poller ID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "A description of the function and logic of the poller"
},
        "WHERE_FILTER": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "A where clause to attach to queries. This is used to filter records by columns other than QUEUE_STATE."
},
        "ORDER_BY": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "An order by clause to attach to queries. Defaults to sequence ordering."
},
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JAVA_PLUGIN",
          "info": "A java plugin used to retrieve records with the poller. The plugin must have a PLUGIN_USE_TYPE of 'DATA QUEUE POLLER'."
},
        "IS_PREEMPTIVE_POLLER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the user can preempt events in the queue"
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "DATA_QUEUE_DEF",
        "DATA_QUEUE_POLLER_INDEX"
]
    }
  }
};