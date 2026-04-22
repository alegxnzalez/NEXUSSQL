// AUDIT_EVENT_TYPE.js

window.AUDIT_EVENT_TYPE = {
  "tables": {
    "AUDIT_EVENT_TYPE": {
      "description": "A type of auditable event.",
      "columns": {
        "AUDIT_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique ID for the auditable event type."
},
        "AUDIT_EVENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the auditable event type."
},
        "AUDIT_EVENT_ZONE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "SECURITY",
                    "PROPERTY",
                    "BUSINESS",
                    "AGENT",
                    "GTM"
          ],
          "info": "Defines the security zone for this type of auditable event. To view an event a user must be granted the ACL representing its security zone. This is also used to organize OPS logging by security zone and set the logging lifespan."
},
        "REVERTIBLE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "NONE",
                    "LATEST",
                    "ALL"
          ],
          "info": "A flag denoting whether the auditable event type is revertible: NONE = no; LATEST = only the latest event; ALL = all events."
},
        "IS_STRUCTURED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the auditable event supports structured comparison of any changed (e.g. agents)."
},
        "STRUCTURED_MIME_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "values": [
                    "text/plain",
                    "text/html",
                    "text/xml",
                    "application/json"
          ],
          "info": "A standard MIME type for structured details. If null, structured details are handled by an internal renderer."
},
        "LIFESPAN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum lifespan of this type of auditable event, in days."
},
        "LOGGING": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "NONE",
                    "TOP_LEVEL",
                    "REASON_SOURCE",
                    "ALL"
          ],
          "info": "The level of OPS logging: NONE = none; TOP-LEVEL = event type/date/object; REASON-SOURCE = reason/source/user; ALL = previous/current values."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the event type is actively auditing events."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "R",
                    "H"
          ]
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
        "AUDIT_EVENT"
]
    }
  }
};