// NOTIFY_SUBJECT.js

window.NOTIFY_SUBJECT = {
  "tables": {
    "NOTIFY_SUBJECT": {
      "description": "List of valid entries for workflow events that a person might want to subscribe to.  Each subject (event) is mapped to a notify_function_gid, which ultimately identifies the email (fax, etc.) contents to send when that event occurs.   For example, an event (notify_subject_gid) might include 'SHIPMENT STATUS - DELAYED' or 'SHIPMENT STATUS - COMPLETED'.  Each of these subjects are associated with the notify_function_gid of 'SHIPMENT_STATUS'.  A person interested in knowing about these events would subscribe to the subject, and receive in an email (fax, etc.) that might include the shipment_gid, shipment status, date of shipment, etc. (content fields identified through out the notify_function_gid).",
      "columns": {
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "NOTIFY_SUBJECT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "NOTIFY_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_FUNCTION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "NOTIFY_SUBJECT_TEXT": {
          "type": "VARCHAR2(100)",
          "nullable": true
},
        "SUPPORTS_INVOLVED_PARTIES": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SUPPORTS_SERVICE_PROVIDER": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SUPPORTS_DOCUMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SUPPORTS_EXTERNAL_NOTIFICATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SUPPORTS_DRIVER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "HELP_DESCRIPTION": {
          "type": "CLOB",
          "nullable": true,
          "info": "Non-editable help for the notify subject that is delivered as part of GC3."
},
        "IS_MESSAGE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
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
          "foreign_key": "OTM_RELEASE",
          "info": "Release ID - full release string"
}
      },
      "fk_tables": [
        "ADHOC_NOTIFY",
        "AGENT_EVENT",
        "AUDIT_TRAIL",
        "BILLABLE_TRANSACTION",
        "MAIL_PGROUP_PROF_SUBJ",
        "MESSAGE_TYPE",
        "NOTIFY_REQUEST",
        "NOTIFY_SUBJECT_CONTACT",
        "NOTIFY_SUBJECT_CONTACT_POINT",
        "NOTIFY_SUBJECT_DRIVER",
        "NOTIFY_SUBJECT_INVPARTY",
        "NOTIFY_SUBJECT_SERVPROV",
        "NOTIFY_SUBJECT_STYLESHEET",
        "NS_CONTACT_POINT_OVERRIDE",
        "TRANSACTIONAL_EVENT_SUBJECT"
]
    }
  }
};