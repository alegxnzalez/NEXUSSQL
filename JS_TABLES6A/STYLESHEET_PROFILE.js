// STYLESHEET_PROFILE.js

window.STYLESHEET_PROFILE = {
  "tables": {
    "STYLESHEET_PROFILE": {
      "columns": {
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "STYLESHEET_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "TEMPLATE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "RAW_XML": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "FORMAT": {
          "type": "VARCHAR2(20)",
          "nullable": false
        },
        "SUBJECT_PROPKEY": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "If exists, glog interface will be created when use this stylesheet for notification.  The value of this column is used to direct how the interface is created. "
        },
        "DATA_GENERATOR_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JAVA_PLUGIN",
          "info": "Java class of the data generator"
        },
        "NOTIFY_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_FUNCTION"
        },
        "DOCUMENT_ATTACH_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "EMBED",
            "DIRECT LINK",
            "GC3 LINK",
            "GC3 LOGIN"
          ]
        },
        "DIRECTION": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "values": [
            "INBOUND",
            "OUTBOUND",
            "BOTH"
          ]
        },
        "TYPE": {
          "type": "VARCHAR2(4)",
          "nullable": false,
          "values": [
            "TEXT",
            "XML",
            "XSL"
          ]
        },
        "IS_FOR_NOTIFICATION_XML": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_FOR_TRANSMISSION_XML": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_FOR_MESSAGE_XML": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "CONTENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_CONTENT"
        },
        "VIEW_CONTENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_CONTENT"
        },
        "EDIT_CONTENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_CONTENT"
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
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "CONSOLIDATION_PROFILE",
        "CONTENT_SOURCE_SUBSCRIPTION",
        "EXTERNAL_SYSTEM",
        "INT_EXT_SYS_TRANSLATION",
        "INVOICE_TR_EVENT_CONTACT",
        "I_MESSAGE",
        "JOB_TR_EVENT_CONTACT",
        "MESSAGE_PROFILE_IN",
        "MESSAGE_TYPE",
        "NOTIFY_REQUEST",
        "NOTIFY_SUBJECT_CONTACT",
        "NOTIFY_SUBJECT_DRIVER",
        "NOTIFY_SUBJECT_INVPARTY",
        "NOTIFY_SUBJECT_SERVPROV",
        "NOTIFY_SUBJECT_STYLESHEET",
        "OB_TR_EVENT_CONTACT",
        "ORDER_RELEASE_TR_EVENT_CONTACT",
        "QUOTE_TR_EVENT_CONTACT",
        "SHIPMENT_TR_EVENT_CONTACT",
        "SHIP_GROUP_TR_EVENT_CONTACT",
        "STYLESHEET_PROFILE_ARG",
        "STYLESHEET_PROFILE_LOCALE",
        "STYLESHEET_PROFILE_SET_FIELD",
        "TRANSACTIONAL_EVENT_CONTACT",
        "TRANSACTIONAL_EVENT_INVPARTY",
        "TRANSACTIONAL_EVENT_SERVPROV"
      ]
    }
  }
};
