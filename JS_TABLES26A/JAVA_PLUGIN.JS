// JAVA_PLUGIN.js

window.JAVA_PLUGIN = {
  "tables": {
    "JAVA_PLUGIN": {
      "columns": {
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "JAVA_PLUGIN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": false
},
        "PLUGIN_USE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "ACTION CHECK",
                    "REASON CHECK",
                    "TRANSFORMER",
                    "DATA QUEUE POLLER",
                    "DATA QUEUE EXECUTOR",
                    "NOTIFY DATA GENERATOR",
                    "NOTIFY MESSAGE TRANSFORMER",
                    "CONFIGURATION CAPTURE",
                    "PERFORMANCE CAPTURE",
                    "AGENT IF",
                    "DERIVED DATA OPERATIONS",
                    "CONTENT SOURCE",
                    "TYPE ASSOCIATION",
                    "DEQUEUE SERVICE",
                    "PARAM GEN",
                    "JCR CONNECTION",
                    "JMS DEQUEUE SERVICE",
                    "LC2 DATA RULE",
                    "LNM DATA RULE"
          ]
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
        "APP_ACTION",
        "APP_ACTION_CHECK_ACCESS",
        "APP_ACTION_REASON_ACCESS",
        "CMS_PARAM_GENERATOR",
        "CONTENT_SOURCE",
        "DATA_QUEUE_EXECUTOR",
        "DATA_QUEUE_POLLER",
        "DATA_TYPE_ASSOCIATION",
        "DERIVED_DATA_OP_IMPL",
        "DIAG_PERFORMANCE_CAPTURE",
        "DIAG_STATIC_CAPTURE",
        "STYLESHEET_PROFILE",
        "WEB_SVC_OPERATION_PARAM"
]
    }
  }
};