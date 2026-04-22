// DATA_QUERY_TYPE.js

window.DATA_QUERY_TYPE = {
  "tables": {
    "DATA_QUERY_TYPE": {
      "description": "This table is used as general references of glog object type. It identifies the query object (java class) of a given DATA_QUERY_TYPE, its support of Integration (i.e., an Integration interface exists for the given data_query_type).  Agent and notification use DATA_QUERY_TYPE to identify glog object types.",
      "columns": {
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DATA_QUERY_TYPE_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(500)",
          "nullable": false
},
        "SUPPORT_INTEGRATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SUPPORT_TRANSACTIONAL_EVENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SUPPORT_AGENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow to create a data query type without creating all of supported life time events"
},
        "SUPPORT_TEXT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the data query type supports text templates."
},
        "IS_OBJECT_LOCK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If N, the business object should never be locked"
},
        "BUSINESS_OBJECT_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "TYPE OF BUSINESS OBJECT"
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
},
        "SUPPORTS_DOCUMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this data query type is supported as owner data query type for document records."
},
        "DEFAULT_LOG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOG_PROFILE",
          "info": "Default log profile when per-edit action logging is enabled."
}
      },
      "fk_tables": [
        "ADHOC_NOTIFY",
        "AGENT",
        "AGENT_ACTION",
        "AGENT_EVENT",
        "APPOINTMENT",
        "APP_ACTION",
        "AUDIT_OBJECT_CONTROL",
        "AUDIT_OBJECT_TYPE",
        "AUTO_ASSIGN_TYPE_DQ_MAP",
        "BS_EVENT_GROUP",
        "BS_STATUS_GROUP",
        "BUSINESS_OBJECT_TEMPLATE",
        "DATA_TYPE_ASSOCIATION",
        "DEPENDENCY_SERVICE_D",
        "DEVICE_OBJECT_JOIN",
        "DOCUMENT",
        "DOCUMENT_DEF",
        "DOCUMENT_DEF_CHECK",
        "DOCUMENT_DEF_OWNER_DETAILS",
        "DOCUMENT_SET",
        "ESG_ACTIVITY",
        "GTM_CRULE_ACTION_DEF",
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_REFERENCE",
        "INTEGRATION_INTERFACE_TYPE",
        "I_TRANSACTION",
        "LOGFILE_ACTION",
        "MESSAGE_TYPE",
        "MONITOR_OPERAND_D",
        "MONITOR_PROFILE",
        "MONITOR_PROFILE_DELETED",
        "NOTIFY_REQUEST",
        "NS_CONTACT_POINT_OVERRIDE",
        "OBJECT_DOCUMENT_SET",
        "REMARK_QUAL",
        "REPORT",
        "REPORT_PARAMETER",
        "TEXT_TEMPLATE",
        "THRESHOLD",
        "TRANSACTIONAL_EVENT",
        "WEB_SVC_OPERATION_PARAM",
        "YARD"
]
    }
  }
};