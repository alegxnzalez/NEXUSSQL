// ADHOC_NOTIFY.js

window.ADHOC_NOTIFY = {
  "tables": {
    "ADHOC_NOTIFY": {
      "description": "Stores ad hoc notification interests for users with no user account.",
      "columns": {
        "ADHOC_NOTIFY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ADHOC_NOTIFY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_SUBJECT",
          "info": "Notify subject"
},
        "PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "info": "Notification parameters"
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "GC3 object type"
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 object id"
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COM_METHOD",
          "info": "Communication method id"
},
        "COM_ADDRESS": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "Communication address"
},
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TIME_ZONE",
          "info": "Time zone id used to calculate local time when time window is referenced"
},
        "ADHOC_NOTIFY_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "P_DATE_KEY": {
          "type": "NUMBER",
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
      "fk_tables": []
    }
  }
};